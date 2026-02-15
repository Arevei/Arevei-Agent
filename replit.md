# RV Agents Landing Page

## Overview
A modern, responsive landing page for RV Agents - an agency that provides custom AI agents and automation services. The landing page showcases services, use cases, implementation approach, pricing, and allows visitors to request a demo.

**Important:** RV Agents is NOT a SaaS platform. We provide custom AI agents and automation services that are built and deployed on the client's systems.

## Recent Changes
- **Feb 2026**: Complete landing page implementation with agency-focused messaging

## Tech Stack
- **Frontend**: React 18 with TypeScript, Vite
- **Styling**: Tailwind CSS with Shadcn UI components
- **Routing**: Wouter
- **Forms**: React Hook Form with Zod validation
- **State Management**: TanStack Query

## Project Structure
```
client/
├── src/
│   ├── components/
│   │   ├── landing/          # Landing page sections
│   │   │   ├── Header.tsx    # Navigation header with mobile menu
│   │   │   ├── Hero.tsx      # Main hero section
│   │   │   ├── Problems.tsx  # Pain points section
│   │   │   ├── Solutions.tsx # What we build section
│   │   │   ├── Tools.tsx     # Tools & technologies section
│   │   │   ├── HowItWorks.tsx # Implementation approach
│   │   │   ├── Security.tsx  # Security & data handling
│   │   │   ├── Pricing.tsx   # Implementation-based pricing
│   │   │   ├── DemoSection.tsx # CTA section for booking demo
│   │   │   ├── Testimonials.tsx # Client testimonials
│   │   │   ├── FAQ.tsx       # Frequently asked questions
│   │   │   ├── Footer.tsx    # Footer with links
│   │   │   └── DemoFormModal.tsx # Demo request form modal
│   │   └── ui/               # Shadcn UI components
│   ├── hooks/
│   │   └── use-geo-pricing.ts # Geo-based currency detection
│   ├── pages/
│   │   └── landing.tsx       # Main landing page
│   └── App.tsx               # Root component with routing
server/
├── routes.ts                 # API routes (prepared for CRM integration)
└── storage.ts                # In-memory storage (prepared for persistence)
```

## Key Features

### Geo-Based Pricing
- Detects user's country via browser locale and IP API (ipapi.co)
- Shows INR pricing for India, USD for all other countries
- Currency can be manually toggled via UI button
- Implementation-based pricing (one-time setup fees, not subscription)

### Demo Form
- Modal form triggered by "Book a Demo" CTAs
- Fields: Name, Email, Company, Role (dropdown), Brief Use Case Description
- Zod validation with user-friendly error messages
- Currently logs to console (ready for CRM/backend integration)

### SEO
- Optimized meta title: "RV Agents – Custom AI Agents Built for Your Business"
- Meta description and Open Graph tags included
- Semantic HTML structure

## Sections
1. **Header** - Fixed navigation with mobile hamburger menu
2. **Hero** - Main value proposition (Custom AI agents on your infrastructure)
3. **Problems** - 6 pain points that RV Agents addresses
4. **Solutions (What We Build)** - 6 service offerings with icons
5. **Tools** - Technologies and platforms used
6. **How It Works** - 6-step implementation approach
7. **Security** - Data handling and security considerations
8. **Pricing** - 3 implementation-based pricing tiers
9. **Demo** - Strong CTA section to book a demo
10. **Testimonials** - Client quotes with avatars
11. **FAQ** - Expandable accordion items
12. **Footer** - Links and social media

## Design System
- Primary color: Blue (hsl 217 91% 60%)
- Font: Inter
- Border radius: Small (0.375rem)
- Clean, minimal enterprise aesthetic
- Dark mode ready (class-based toggle)

## Pricing Model (Implementation-Based)
### India (INR)
- **Starter**: ₹25,000 – ₹40,000 (One-Time Setup)
- **Professional**: ₹75,000 – ₹1,50,000 (One-Time Setup)
- **Enterprise**: Custom Pricing

### US/Global (USD)
- **Starter**: $800 – $1,500 (One-Time Setup)
- **Professional**: $2,500 – $5,000 (One-Time Setup)
- **Enterprise**: Custom Pricing

Maintenance & Updates offered separately as monthly service.

## Future Integration Points
- **CRM**: DemoFormModal.tsx `onSubmit` ready for API call
- **Calendar Scheduling**: Can integrate Calendly/Cal.com in demo flow
- **Analytics**: Add tracking events to CTAs
- **Backend Persistence**: Storage interface prepared for database

## Running the Project
```bash
npm run dev
```
The application runs on port 5000.
