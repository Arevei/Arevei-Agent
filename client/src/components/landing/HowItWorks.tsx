import { Search, Map, Wrench, Rocket, FileText, Headphones } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discovery",
    description: "Understand your business goals and identify suitable AI agent use cases that can drive the most impact.",
  },
  {
    icon: Map,
    step: "02",
    title: "Solution Mapping",
    description: "Propose agent patterns or workflow structures based on your needs, existing tools, and technical requirements.",
  },
  {
    icon: Wrench,
    step: "03",
    title: "Build",
    description: "Configure and integrate AI agents using selected tools and your data, ensuring everything works together seamlessly.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Deploy",
    description: "Implement agents within your systems, run thorough testing, and ensure workflows function as expected.",
  },
  {
    icon: FileText,
    step: "05",
    title: "Handover",
    description: "Share access, usage guidance, and documentation so your team can manage and use the agents effectively.",
  },
  {
    icon: Headphones,
    step: "06",
    title: "Optional Support",
    description: "Ongoing updates and improvements via maintenance plans to keep your agents optimized and up to date.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="services"
      className="py-20 lg:py-32"
      data-testid="section-how-it-works"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Implementation Approach
          </h2>
          <p className="text-lg text-muted-foreground">
            We follow a structured approach to ensure your AI agents are built right 
            and deliver real value to your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-8 bg-card border border-card-border rounded-lg hover-elevate transition-all group"
              data-testid={`step-card-${index}`}
            >
              <div className="absolute top-6 right-6 text-5xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                {step.step}
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
