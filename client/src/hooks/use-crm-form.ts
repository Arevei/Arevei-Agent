import { useState } from "react";
import { crmClient, type WebFormLeadData } from "@/lib/crm-client";

interface UseCRMFormState {
  isLoading: boolean;
  error: string | null;
  success: boolean;
  data: any;
}

interface UseCRMFormOptions {
  onSuccess?: (data: any) => void;
  onError?: (error: Error) => void;
}

/**
 * Hook to handle form submission to Twenty CRM
 * Example usage:
 *
 * const { isLoading, error, success, submitForm } = useCRMForm();
 * const handleSubmit = async (e) => {
 *   e.preventDefault();
 *   await submitForm({
 *     name: "John Doe",
 *     email: { primaryEmail: "john@example.com" },
 *     phone: { primaryPhoneNumber: "1234567890" },
 *     websiteSource: ["AREVEIAGENTS_COM"]
 *   });
 * }
 */
export function useCRMForm(options?: UseCRMFormOptions) {
  const [state, setState] = useState<UseCRMFormState>({
    isLoading: false,
    error: null,
    success: false,
    data: null,
  });

  const submitForm = async (leadData: WebFormLeadData) => {
    setState({
      isLoading: true,
      error: null,
      success: false,
      data: null,
    });

    try {
      const result = await crmClient.createWebFormLead(leadData);

      if (result.success) {
        setState({
          isLoading: false,
          error: null,
          success: true,
          data: result.data,
        });

        if (options?.onSuccess) {
          options.onSuccess(result.data);
        }

        return result;
      } else {
        const error = new Error(result.error || "Failed to submit form");
        setState({
          isLoading: false,
          error: error.message,
          success: false,
          data: null,
        });

        if (options?.onError) {
          options.onError(error);
        }

        throw error;
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An error occurred";

      setState({
        isLoading: false,
        error: errorMessage,
        success: false,
        data: null,
      });

      if (options?.onError) {
        options.onError(
          error instanceof Error ? error : new Error(errorMessage)
        );
      }

      throw error;
    }
  };

  const submitBatch = async (leads: WebFormLeadData[]) => {
    setState({
      isLoading: true,
      error: null,
      success: false,
      data: null,
    });

    try {
      const result = await crmClient.createWebFormLeadsBatch(leads);

      if (result.success) {
        setState({
          isLoading: false,
          error: null,
          success: true,
          data: result,
        });

        if (options?.onSuccess) {
          options.onSuccess(result);
        }

        return result;
      } else {
        const error = new Error(
          result.error || "Failed to submit batch form"
        );
        setState({
          isLoading: false,
          error: error.message,
          success: false,
          data: null,
        });

        if (options?.onError) {
          options.onError(error);
        }

        throw error;
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An error occurred";

      setState({
        isLoading: false,
        error: errorMessage,
        success: false,
        data: null,
      });

      if (options?.onError) {
        options.onError(
          error instanceof Error ? error : new Error(errorMessage)
        );
      }

      throw error;
    }
  };

  const reset = () => {
    setState({
      isLoading: false,
      error: null,
      success: false,
      data: null,
    });
  };

  return {
    ...state,
    submitForm,
    submitBatch,
    reset,
  };
}
