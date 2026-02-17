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

class CRMClient {
  private apiBase: string = "/api/crm";

  /**
   * Create a web form lead
   */
  async createWebFormLead(leadData: WebFormLeadData) {
    try {
      const response = await fetch(`${this.apiBase}/webformlead`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(leadData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || `HTTP ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("[CRM Client] Error creating web form lead:", error);
      throw error;
    }
  }

  /**
   * Create multiple web form leads in batch
   */
  async createWebFormLeadsBatch(leads: WebFormLeadData[]) {
    try {
      const response = await fetch(`${this.apiBase}/webformlead/batch`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ leads }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || `HTTP ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error(
        "[CRM Client] Error creating web form leads batch:",
        error
      );
      throw error;
    }
  }

  /**
   * Fetch web form leads
   */
  async getWebFormLeads(filters?: Record<string, any>) {
    try {
      const params = new URLSearchParams();
      if (filters) {
        Object.entries(filters).forEach(([key, value]) => {
          if (value !== undefined && value !== null) {
            params.append(key, String(value));
          }
        });
      }

      const url =
        `${this.apiBase}/webformleads` +
        (params.toString() ? `?${params.toString()}` : "");

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || `HTTP ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("[CRM Client] Error fetching web form leads:", error);
      throw error;
    }
  }

  /**
   * Update a web form lead
   */
  async updateWebFormLead(
    leadId: string,
    updateData: Partial<WebFormLeadData>
  ) {
    try {
      const response = await fetch(`${this.apiBase}/webformlead/${leadId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || `HTTP ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("[CRM Client] Error updating web form lead:", error);
      throw error;
    }
  }
}

export const crmClient = new CRMClient();
