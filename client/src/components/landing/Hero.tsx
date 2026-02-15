import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Settings, Building2 } from "lucide-react";

interface HeroProps {
  onBookDemo: () => void;
}

export function Hero({ onBookDemo }: HeroProps) {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-0"
      data-testid="section-hero"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary font-medium mb-8">
            <Bot className="w-4 h-4" />
            <span>AI Agents & Automation Services</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight tracking-tight mb-6">
            Custom AI Agents Built
            <span className="block text-primary">for Your Business</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            We help businesses design, build, and deploy AI agents and automation workflows 
            to improve efficiency, streamline operations, and enable smarter decision-making 
            using modern AI tools and automation platforms.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              size="lg"
              onClick={onBookDemo}
              className="w-full sm:w-auto px-8 py-6 text-base font-semibold"
              data-testid="button-book-demo-hero"
            >
              Book a Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.querySelector("#solutions")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full sm:w-auto px-8 py-6 text-base font-semibold"
              data-testid="button-learn-more"
            >
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Bot, label: "Built for Your Workflows", desc: "AI agents designed for real business processes" },
              { icon: Building2, label: "Your Infrastructure", desc: "Deployed within your systems and tools" },
              { icon: Settings, label: "Flexible & Scalable", desc: "Aligned with your operations" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-card border border-card-border rounded-lg"
                data-testid={`stat-card-${index}`}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{item.label}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
