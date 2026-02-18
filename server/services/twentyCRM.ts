import axios, { AxiosInstance } from "axios";

interface EmailData {
  primaryEmail?: string;
  additionalEmails?: string[];
}

interface PhoneData {
  primaryPhoneNumber?: string;
  primaryPhoneCallingCode?: string;
  primaryPhoneCountryCode?: string;
  additionalPhones?: string[];
}

export interface WebFormLeadData {
  name: string;
  email?: EmailData;
  phone?: PhoneData;
  websiteSource?: string[];
  additionalDetails?: Record<string, any>;
}

export class TwentyCRMService {
  private client: AxiosInstance;
  private readonly baseURL = "https://twenty.joincloud.in/rest";
  private readonly apiKey: string;

  constructor(apiKey: string) {
    if (!apiKey) {
      throw new Error("Twenty CRM API key is required");
    }

    this.apiKey = apiKey;

    this.client = axios.create({
      baseURL: this.baseURL,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.apiKey}`,
      },
    });
  }

  /**
   * Create a web form lead in Twenty CRM
   * @param leadData The form data to create as a lead
   * @returns The created lead data from Twenty CRM
   */
  async createWebFormLead(leadData: WebFormLeadData): Promise<any> {
    try {
      const payload = {
        name: leadData.name,
        email: leadData.email || {},
        phone: leadData.phone || {},
        websiteSource: leadData.websiteSource || [],
        ...(leadData.additionalDetails && {
          additionalDetails: leadData.additionalDetails,
        }),
      };

      const response = await this.client.post("/webformleads", payload);

      return {
        success: true,
        data: response.data,
        message: "Web form lead created successfully",
      };
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Failed to create web form lead";
      const statusCode = error.response?.status || 500;

      console.error("[TwentyCRM] Error creating web form lead:", errorMessage);

      return {
        success: false,
        error: errorMessage,
        statusCode,
        details: error.response?.data,
      };
    }
  }

  /**
   * Create multiple web form leads in batch
   * @param leadsData Array of form data to create as leads
   * @returns Array of results for each lead
   */
  async createWebFormLeadsBatch(leadsData: WebFormLeadData[]): Promise<any[]> {
    const results = await Promise.all(
      leadsData.map((leadData) => this.createWebFormLead(leadData))
    );

    return results;
  }

  /**
   * Fetch web form leads from Twenty CRM
   * @param filters Optional filters for fetching leads
   * @returns Array of web form leads
   */
  async getWebFormLeads(filters?: Record<string, any>): Promise<any> {
    try {
      const response = await this.client.get("/webformleads", {
        params: filters || {},
      });

      return {
        success: true,
        data: response.data,
      };
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Failed to fetch web form leads";

      console.error("[TwentyCRM] Error fetching web form leads:", errorMessage);

      return {
        success: false,
        error: errorMessage,
        statusCode: error.response?.status || 500,
      };
    }
  }

  /**
   * Update a web form lead
   * @param leadId The ID of the lead to update
   * @param updateData The data to update
   * @returns The updated lead data
   */
  async updateWebFormLead(leadId: string, updateData: Partial<WebFormLeadData>): Promise<any> {
    try {
      const response = await this.client.patch(`/webformleads/${leadId}`, updateData);

      return {
        success: true,
        data: response.data,
        message: "Web form lead updated successfully",
      };
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Failed to update web form lead";

      console.error("[TwentyCRM] Error updating web form lead:", errorMessage);

      return {
        success: false,
        error: errorMessage,
        statusCode: error.response?.status || 500,
      };
    }
  }
}


