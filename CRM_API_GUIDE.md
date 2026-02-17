# Twenty CRM Integration Guide

This guide explains how to integrate your forms with Twenty CRM using the provided API endpoints and client utilities.

## Environment Setup

First, add your Twenty CRM API key to your environment variables:

```bash
TWENTY_CRM_API_KEY=your_api_key_here
```

You can find your API key in your Twenty CRM workspace settings.

## API Endpoints

### 1. Create a Single Web Form Lead

**Endpoint:** `POST /api/crm/webformlead`

Create a single web form lead in Twenty CRM.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": {
    "primaryEmail": "john@example.com",
    "additionalEmails": ["alternative@example.com"]
  },
  "phone": {
    "primaryPhoneNumber": "123-456-7890",
    "primaryPhoneCallingCode": "+1",
    "primaryPhoneCountryCode": "US",
    "additionalPhones": []
  },
  "websiteSource": ["AREVEIAGENTS_COM"],
  "additionalDetails": {
    "company": "Acme Corp",
    "role": "Manager"
  }
}
```

**Response (Success):**
```json
{
  "success": true,
  "data": {
    "id": "lead_123",
    "name": "John Doe",
    "email": { "primaryEmail": "john@example.com" },
    "phone": { "primaryPhoneNumber": "123-456-7890" },
    "websiteSource": ["AREVEIAGENTS_COM"],
    "createdAt": "2024-01-15T10:30:00Z"
  },
  "message": "Web form lead created successfully"
}
```

**Required Fields:**
- `name` (string): The name of the lead

**Optional Fields:**
- `email` (object): Email information
- `phone` (object): Phone information
- `websiteSource` (array): Where the lead came from (e.g., "AREVEIAGENTS_COM", "JOINCLOUD_IN")
- `additionalDetails` (object): Any additional information about the lead

---

### 2. Create Multiple Web Form Leads (Batch)

**Endpoint:** `POST /api/crm/webformlead/batch`

Create multiple web form leads at once.

**Request Body:**
```json
{
  "leads": [
    {
      "name": "John Doe",
      "email": { "primaryEmail": "john@example.com" },
      "websiteSource": ["AREVEIAGENTS_COM"]
    },
    {
      "name": "Jane Smith",
      "email": { "primaryEmail": "jane@example.com" },
      "phone": { "primaryPhoneNumber": "987-654-3210" },
      "websiteSource": ["JOINCLOUD_IN"]
    }
  ]
}
```

**Response (Success):**
```json
{
  "success": true,
  "totalRequests": 2,
  "successCount": 2,
  "failureCount": 0,
  "results": [
    {
      "success": true,
      "data": { "id": "lead_123", "name": "John Doe" },
      "message": "Web form lead created successfully"
    },
    {
      "success": true,
      "data": { "id": "lead_124", "name": "Jane Smith" },
      "message": "Web form lead created successfully"
    }
  ]
}
```

---

### 3. Fetch Web Form Leads

**Endpoint:** `GET /api/crm/webformleads`

Retrieve web form leads from Twenty CRM with optional filters.

**Query Parameters:**
- Any filter parameters supported by Twenty CRM API

**Response (Success):**
```json
{
  "success": true,
  "data": [
    {
      "id": "lead_123",
      "name": "John Doe",
      "email": { "primaryEmail": "john@example.com" },
      "createdAt": "2024-01-15T10:30:00Z"
    }
  ]
}
```

---

### 4. Update a Web Form Lead

**Endpoint:** `PATCH /api/crm/webformlead/:leadId`

Update an existing web form lead.

**URL Parameters:**
- `leadId` (string): The ID of the lead to update

**Request Body:**
```json
{
  "name": "John Doe Updated",
  "email": { "primaryEmail": "newemail@example.com" }
}
```

**Response (Success):**
```json
{
  "success": true,
  "data": {
    "id": "lead_123",
    "name": "John Doe Updated",
    "email": { "primaryEmail": "newemail@example.com" }
  },
  "message": "Web form lead updated successfully"
}
```

---

## Client-Side Usage

### Using the CRM Client Directly

```typescript
import { crmClient } from "@/lib/crm-client";

// Create a single lead
const result = await crmClient.createWebFormLead({
  name: "John Doe",
  email: { primaryEmail: "john@example.com" },
  websiteSource: ["AREVEIAGENTS_COM"],
});

// Create multiple leads
const batchResult = await crmClient.createWebFormLeadsBatch([
  { name: "Lead 1", email: { primaryEmail: "lead1@example.com" } },
  { name: "Lead 2", email: { primaryEmail: "lead2@example.com" } },
]);

// Fetch leads
const leads = await crmClient.getWebFormLeads();

// Update a lead
const updated = await crmClient.updateWebFormLead("lead_123", {
  name: "Updated Name",
});
```

### Using the React Hook (Recommended)

```typescript
import { useCRMForm } from "@/hooks/use-crm-form";

function MyForm() {
  const { isLoading, error, success, submitForm, reset } = useCRMForm({
    onSuccess: (data) => {
      console.log("Form submitted successfully:", data);
      alert("Your information has been submitted!");
    },
    onError: (error) => {
      console.error("Form submission failed:", error);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await submitForm({
        name: "John Doe",
        email: {
          primaryEmail: "john@example.com",
        },
        phone: {
          primaryPhoneNumber: "123-456-7890",
          primaryPhoneCallingCode: "+1",
          primaryPhoneCountryCode: "US",
        },
        websiteSource: ["AREVEIAGENTS_COM"],
      });
    } catch (err) {
      console.error("Submission error:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" required />
      <input type="email" placeholder="Email" required />
      <input type="tel" placeholder="Phone" />

      {error && <div className="text-red-500">{error}</div>}
      {success && <div className="text-green-500">Successfully submitted!</div>}

      <button type="submit" disabled={isLoading}>
        {isLoading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
```

### Example: Contact Form with React Hook

```typescript
import { useState } from "react";
import { useCRMForm } from "@/hooks/use-crm-form";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const { isLoading, error, success, submitForm, reset } = useCRMForm();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await submitForm({
        name: formData.name,
        email: { primaryEmail: formData.email },
        phone: { primaryPhoneNumber: formData.phone },
        websiteSource: ["AREVEIAGENTS_COM"],
      });

      // Reset form on success
      setFormData({ name: "", email: "", phone: "" });
      setTimeout(() => reset(), 3000);
    } catch (err) {
      console.error("Form submission failed:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
      />

      {error && <p className="error">{error}</p>}
      {success && <p className="success">Form submitted successfully!</p>}

      <button type="submit" disabled={isLoading}>
        {isLoading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
```

---

## Error Handling

The API returns appropriate HTTP status codes:

- **201**: Lead created successfully
- **200**: Request successful
- **400**: Bad request (missing required fields or validation error)
- **401**: Unauthorized (invalid API key)
- **500**: Server error

Error responses have the following structure:
```json
{
  "success": false,
  "error": "Error message describing what went wrong",
  "statusCode": 400
}
```

---

## WebsiteSource Values

The `websiteSource` field can contain one or both of these values:
- `AREVEIAGENTS_COM` - From areveiagents.com
- `JOINCLOUD_IN` - From joincloud.in

---

## Best Practices

1. **Always validate required fields** before submitting to the API
2. **Use the React hook** for better state management and error handling
3. **Handle errors gracefully** and provide user feedback
4. **Include websiteSource** to track where leads came from
5. **Use batch endpoint** when submitting multiple leads for better performance
6. **Store API responses** for audit trails and debugging

---

## Troubleshooting

### "TWENTY_CRM_API_KEY environment variable is not set"
- Add the `TWENTY_CRM_API_KEY` to your `.env.local` file
- Restart your development server

### "Unauthorized" error
- Verify your API key is correct
- Check that the API key has the necessary permissions in Twenty CRM

### "Name is required" error
- Ensure the `name` field is provided and is not empty
- Check that it's a string, not a number or object

### Form submission is slow
- This is likely due to network latency
- Consider using the batch endpoint if submitting multiple forms
- Implement optimistic UI updates to improve perceived performance

---

## API Response Examples

### Success Response (Single Lead)
```json
{
  "success": true,
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "name": "John Doe",
    "email": {
      "primaryEmail": "john@example.com"
    },
    "phone": {
      "primaryPhoneNumber": "123-456-7890",
      "primaryPhoneCallingCode": "+1",
      "primaryPhoneCountryCode": "US"
    },
    "websiteSource": ["AREVEIAGENTS_COM"],
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
  },
  "message": "Web form lead created successfully"
}
```

### Error Response
```json
{
  "success": false,
  "error": "Name is required and must be a non-empty string",
  "statusCode": 400
}
```

### Batch Response (Partial Success)
```json
{
  "success": false,
  "totalRequests": 3,
  "successCount": 2,
  "failureCount": 1,
  "results": [
    {
      "success": true,
      "data": { "id": "lead_1", "name": "Lead 1" },
      "message": "Web form lead created successfully"
    },
    {
      "success": true,
      "data": { "id": "lead_2", "name": "Lead 2" },
      "message": "Web form lead created successfully"
    },
    {
      "success": false,
      "error": "Lead name is required",
      "statusCode": 400
    }
  ]
}
```

---

For more information about Twenty CRM, visit: https://twenty.joincloud.in
