import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { TwentyCRMService, type WebFormLeadData } from "./services/twentyCRM";
import dotenv from "dotenv"
dotenv.config();
let crmServiceInstance: TwentyCRMService | null = null;
function getTwentyCRMService(): TwentyCRMService {
  if (!crmServiceInstance) {
    const apiKey = process.env.TWENTY_CRM_API_KEY;
    if (!apiKey) {
      throw new Error(
        "TWENTY_CRM_API_KEY environment variable is not set"
      );
    }
    crmServiceInstance = new TwentyCRMService(apiKey);
  }

  return crmServiceInstance;
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  /**
   * POST /api/crm/webformlead
   * Create a web form lead in Twenty CRM
   * Body: {
   *   name: string,
   *   email?: { primaryEmail: string, additionalEmails?: string[] },
   *   phone?: { primaryPhoneNumber: string, primaryPhoneCallingCode?: string, primaryPhoneCountryCode?: string, additionalPhones?: string[] },
   *   websiteSource?: string[],
   *   additionalDetails?: Record<string, any>
   * }
   */
  app.post("/api/crm/webformlead", async (req: Request, res: Response) => {
    try {
      const { name, email, phone, additionalDetails } =
        req.body;

      // Validate required fields
      if (!name || typeof name !== "string" || name.trim().length === 0) {
        return res.status(400).json({
          success: false,
          error: "Name is required and must be a non-empty string",
        });
      }

      // Prepare lead data
      const leadData: WebFormLeadData = {
        name: name.trim(),
        email: email || {},
        phone: phone || {},
        websiteSource: ['AREVEIAGENTS_COM'],
        additionalDetails: additionalDetails || {},
      };

      // Create lead in Twenty CRM
      const crmService = getTwentyCRMService();
      const result = await crmService.createWebFormLead(leadData);

      if (result.success) {
        return res.status(201).json(result);
      } else {
        const statusCode = result.statusCode || 400;
        return res.status(statusCode).json(result);
      }
    } catch (error: any) {
      console.error("[API] Error creating web form lead:", error);
      return res.status(500).json({
        success: false,
        error: "Internal server error",
        message: error.message,
      });
    }
  });

  /**
   * POST /api/crm/webformlead/batch
   * Create multiple web form leads in batch
   * Body: {
   *   leads: WebFormLeadData[]
   * }
   */
  app.post("/api/crm/webformlead/batch", async (req: Request, res: Response) => {
    try {
      const { leads } = req.body;

      // Validate leads array
      if (!Array.isArray(leads) || leads.length === 0) {
        return res.status(400).json({
          success: false,
          error: "Leads must be a non-empty array",
        });
      }

      // Validate each lead has a name
      for (let i = 0; i < leads.length; i++) {
        if (!leads[i].name || typeof leads[i].name !== "string") {
          return res.status(400).json({
            success: false,
            error: `Lead at index ${i} must have a valid name`,
          });
        }
      }

      // Create leads in Twenty CRM
      const crmService = getTwentyCRMService();
      const results = await crmService.createWebFormLeadsBatch(leads);

      const successCount = results.filter((r) => r.success).length;
      const failureCount = results.filter((r) => !r.success).length;

      return res.status(200).json({
        success: failureCount === 0,
        totalRequests: results.length,
        successCount,
        failureCount,
        results,
      });
    } catch (error: any) {
      console.error("[API] Error creating web form leads batch:", error);
      return res.status(500).json({
        success: false,
        error: "Internal server error",
        message: error.message,
      });
    }
  });

  /**
   * GET /api/crm/webformleads
   * Fetch web form leads from Twenty CRM
   * Query params: any filters
   */
  app.get("/api/crm/webformleads", async (req: Request, res: Response) => {
    try {
      const crmService = getTwentyCRMService();
      const result = await crmService.getWebFormLeads(req.query);

      if (result.success) {
        return res.status(200).json(result);
      } else {
        return res.status(result.statusCode || 400).json(result);
      }
    } catch (error: any) {
      console.error("[API] Error fetching web form leads:", error);
      return res.status(500).json({
        success: false,
        error: "Internal server error",
        message: error.message,
      });
    }
  });

  /**
   * PATCH /api/crm/webformlead/:leadId
   * Update a web form lead in Twenty CRM
   * Params: leadId
   * Body: Partial WebFormLeadData
   */
  app.patch("/api/crm/webformlead/:leadId", async (req: Request, res: Response) => {
    try {
      const { leadId } = req.params;

      if (!leadId) {
        return res.status(400).json({
          success: false,
          error: "Lead ID is required",
        });
      }

      const crmService = getTwentyCRMService();
      const result = await crmService.updateWebFormLead(leadId, req.body);

      if (result.success) {
        return res.status(200).json(result);
      } else {
        return res.status(result.statusCode || 400).json(result);
      }
    } catch (error: any) {
      console.error("[API] Error updating web form lead:", error);
      return res.status(500).json({
        success: false,
        error: "Internal server error",
        message: error.message,
      });
    }
  });

  return httpServer;
}
