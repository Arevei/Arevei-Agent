import { Bot, Workflow, Users, Briefcase, Calculator, Mic } from "lucide-react";
import { Card } from "@/components/ui/card";

const solutions = [
  {
    icon: Bot,
    title: "AI Agents for Business Operations",
    description:
      "Agents designed for specific functions such as HR, sales, finance, and internal support with context-aware responses based on your data and tools.",
    features: ["Department-specific agents", "Context-aware responses", "Integrated with your tools"],
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Step-by-step automation logic with trigger-based and conditional workflows, built using industry-standard automation platforms.",
    features: ["Trigger-based workflows", "Conditional logic", "Industry-standard platforms"],
  },
  {
    icon: Users,
    title: "Sales and Lead Qualification Agents",
    description:
      "Lead interaction via chat or messaging platforms with qualification logic, CRM updates, and structured handoff to sales teams.",
    features: ["Lead qualification logic", "CRM integration", "Structured sales handoff"],
  },
  {
    icon: Briefcase,
    title: "HR and Internal Support Agents",
    description:
      "Handle policy, leave, and internal queries with centralized interaction records for teams and automated response systems.",
    features: ["Policy & leave handling", "Internal query support", "Centralized records"],
  },
  {
    icon: Calculator,
    title: "Finance and Accounts Support Agents",
    description:
      "Support for invoice tracking and operational finance workflows, deployed on client-controlled infrastructure.",
    features: ["Invoice tracking", "Finance workflows", "Your infrastructure"],
  },
  {
    icon: Mic,
    title: "Voice AI Agents",
    description:
      "Voice-based assistants and calling agents integrated into existing business workflows for customer support and outreach.",
    features: ["Voice assistants", "Calling agents", "Business integration"],
  },
];

export function Solutions() {
  return (
    <section
      id="solutions"
      className="py-20 lg:py-32"
      data-testid="section-solutions"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            What We Build
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            AI Agents and Automation That Support Your Business
          </h2>
          <p className="text-lg text-muted-foreground">
            We help you identify where AI agents can add value and implement solutions 
            that fit your workflows. Depending on your needs, we may use pre-built agent 
            patterns or design custom workflows tailored to your business processes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className="p-8 hover-elevate transition-all duration-300 group"
              data-testid={`solution-card-${index}`}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <solution.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {solution.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {solution.description}
              </p>
              <ul className="space-y-2">
                {solution.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
