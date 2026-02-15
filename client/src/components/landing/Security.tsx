import { Shield, Lock, Server, FileCheck, Building2, Settings } from "lucide-react";

const securityFeatures = [
  {
    icon: Shield,
    title: "No Data Storage",
    description:
      "RV Agents does not store or resell client data. Your information stays within your chosen systems.",
  },
  {
    icon: Server,
    title: "Your Infrastructure",
    description:
      "AI agents are deployed within your selected tools and infrastructure, giving you full control.",
  },
  {
    icon: Lock,
    title: "Platform Security",
    description:
      "Data security and compliance depend on the third-party platforms and hosting you choose.",
  },
  {
    icon: FileCheck,
    title: "Model Compliance",
    description:
      "Each AI model or automation platform follows its own security and compliance standards.",
  },
  {
    icon: Settings,
    title: "Aligned with Your Policies",
    description:
      "We help you design workflows that align with your internal security policies and requirements.",
  },
  {
    icon: Building2,
    title: "Enterprise Ready",
    description:
      "Our implementation approach is designed to meet enterprise security and compliance needs.",
  },
];

export function Security() {
  return (
    <section
      id="security"
      className="py-20 lg:py-32 bg-card/50"
      data-testid="section-security"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Security & Data Handling
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Security and Data Handling Considerations
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We take data handling seriously and ensure that any information 
              shared with us during implementation is treated responsibly. 
              Your data remains under your control.
            </p>

            <div className="space-y-4">
              {[
                "We do not store or resell your data",
                "Agents deployed on your infrastructure",
                "Workflows aligned with your security policies",
                "Implementation follows best practices",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className="p-5 bg-background rounded-lg border border-border hover-elevate transition-all"
                data-testid={`security-feature-${index}`}
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
