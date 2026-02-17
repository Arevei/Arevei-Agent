import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { crmClient } from "@/lib/crm-client";

const demoFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  role: z.string().min(1, "Please select your role"),
  useCase: z.string().min(10, "Please describe your use case (at least 10 characters)"),
  phone: z.string().optional(),
  industry: z.string().optional(),
  companySize: z.string().optional(),
});

type DemoFormData = z.infer<typeof demoFormSchema>;

interface DemoFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const roles = [
  "C-Level Executive",
  "VP / Director",
  "Manager",
  "Individual Contributor",
  "Consultant",
  "Other",
];

const industries = [
  "Technology",
  "Finance",
  "Healthcare",
  "Retail",
  "Manufacturing",
  "Real Estate",
  "Consulting",
  "Other",
];

const companySizes = [
  "1-50",
  "51-200",
  "201-500",
  "501-1000",
  "1000+",
];

export function DemoFormModal({ open, onOpenChange }: DemoFormModalProps) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<DemoFormData>({
    resolver: zodResolver(demoFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      role: "",
      useCase: "",
      phone: "",
      industry: "",
      companySize: "",
    },
  });

  const onSubmit = async (data: DemoFormData) => {
    setIsLoading(true);
    console.log("[v0] Demo form submitted:", data);

    try {
      // Map form fields to CRM API
      const crmPayload = {
        name: data.name,
        email: {
          primaryEmail: data.email,
        },
        phone: data.phone
          ? {
              primaryPhoneNumber: data.phone,
            }
          : {},
        websiteSource: ["demo_form"],
        // All remaining fields go into additionalDetails
        additionalDetails: {
          company: data.company,
          role: data.role,
          useCase: data.useCase,
          industry: data.industry,
          companySize: data.companySize,
          submittedAt: new Date().toISOString(),
          source: "demo_form",
        },
      };

      console.log("[v0] Sending to CRM:", crmPayload);

      // Create lead in Twenty CRM
      const result = await crmClient.createWebFormLead(crmPayload);

      console.log("[v0] CRM Response:", result);

      if (result.success) {
        // Also backup to SheetDB if available
        if (import.meta.env.VITE_SHEET_DB) {
          try {
            await fetch(import.meta.env.VITE_SHEET_DB, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                data: [
                  {
                    ...data,
                    timestamp: new Date().toLocaleString(),
                    crm_id: result.crm_id,
                  },
                ],
                sheet: "sheet1",
              }),
            });
            console.log("[v0] Backed up to SheetDB");
          } catch (sheetError) {
            console.warn("[v0] SheetDB backup failed:", sheetError);
            // Don't fail if SheetDB backup fails
          }
        }

        toast({
          title: "Demo Request Received",
          description:
            "Thank you! Our team will contact you within 24 hours to schedule your demo.",
        });

        form.reset();
        onOpenChange(false);
      } else {
        throw new Error(result.error || "Failed to create lead");
      }
    } catch (error: any) {
      console.error("[v0] Form submission error:", error);
      toast({
        title: "Error",
        description:
          error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]" data-testid="demo-form-modal">
        <DialogHeader>
          <DialogTitle className="text-2xl">Book a Demo</DialogTitle>
          <DialogDescription>
            Fill out the form below and our team will reach out to schedule a
            personalized demo of Arevei Agents.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5 mt-4"
            data-testid="demo-form"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="John Smith"
                      {...field}
                      data-testid="input-name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Work Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="john@company.com"
                      {...field}
                      data-testid="input-email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Acme Inc"
                      {...field}
                      data-testid="input-company"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger data-testid="select-role">
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {roles.map((role) => (
                        <SelectItem
                          key={role}
                          value={role}
                          data-testid={`role-option-${role.toLowerCase().replace(/\s+/g, "-")}`}
                        >
                          {role}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="useCase"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Use Case</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about the processes you'd like to automate..."
                      className="resize-none min-h-[100px]"
                      {...field}
                      data-testid="input-usecase"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number (Optional)</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      {...field}
                      data-testid="input-phone"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="industry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Industry (Optional)</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger data-testid="select-industry">
                        <SelectValue placeholder="Select your industry" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {industries.map((industry) => (
                        <SelectItem
                          key={industry}
                          value={industry}
                          data-testid={`industry-option-${industry.toLowerCase().replace(/\s+/g, "-")}`}
                        >
                          {industry}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="companySize"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Size (Optional)</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger data-testid="select-company-size">
                        <SelectValue placeholder="Select company size" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {companySizes.map((size) => (
                        <SelectItem
                          key={size}
                          value={size}
                          data-testid={`company-size-option-${size.replace(/\+/g, "plus").replace(/\s+/g, "-")}`}
                        >
                          {size} employees
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full"
              data-testid="button-submit-demo"
            >
              {isLoading ? "Submitting..." : "Request Demo"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
