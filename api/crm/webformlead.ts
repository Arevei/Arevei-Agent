import type { VercelRequest, VercelResponse } from "@vercel/node";
import { TwentyCRMService } from "../../server/services/twentyCRM";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // CORS preflight
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      error: "Method not allowed. Use POST.",
    });
  }

  try {
    const apiKey = process.env.TWENTY_CRM_API_KEY;
    if (!apiKey) {
      console.error("[Vercel API] TWENTY_CRM_API_KEY is not set");
      return res.status(500).json({
        success: false,
        error: "Server configuration error: CRM API key not configured",
      });
    }

    const { name, email, phone, additionalDetails } = req.body || {};

    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return res.status(400).json({
        success: false,
        error: "Name is required and must be a non-empty string",
      });
    }

    const crmService = new TwentyCRMService(apiKey);
    const result = await crmService.createWebFormLead({
      name: name.trim(),
      email: email || {},
      phone: phone || {},
      websiteSource: ["AREVEIAGENTS_COM"],
      additionalDetails: additionalDetails || {},
    });

    if (result.success) {
      return res.status(201).json(result);
    }

    const statusCode = result.statusCode || 400;
    return res.status(statusCode).json(result);
  } catch (error: any) {
    console.error("[Vercel API] Error creating web form lead:", error);
    return res.status(500).json({
      success: false,
      error: "Internal server error",
      message: error?.message,
    });
  }
}
