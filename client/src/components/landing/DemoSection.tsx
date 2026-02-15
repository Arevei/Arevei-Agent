import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MessageSquare, FileText } from "lucide-react";

interface DemoSectionProps {
  onBookDemo: () => void;
}

export function DemoSection({ onBookDemo }: DemoSectionProps) {
  return (
    <section
      id="demo"
      className="py-20 lg:py-32 bg-primary relative overflow-hidden"
      data-testid="section-demo"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-sm font-semibold text-primary-foreground/80 uppercase tracking-wider mb-4">
          Get Started
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
          See AI Agents in Action
        </h2>
        <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed">
          Book a live demo where we understand your use case, showcase example AI agents 
          and workflows, explain deployment and data handling, and share timelines, 
          scope, and next steps.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
          {[
            { icon: MessageSquare, label: "Understand Your Needs", desc: "We listen to your requirements" },
            { icon: Calendar, label: "Showcase Examples", desc: "See relevant agent demos" },
            { icon: FileText, label: "Clear Next Steps", desc: "Timelines and scope defined" },
          ].map((item, index) => (
            <div
              key={index}
              className="p-5 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
              data-testid={`demo-feature-${index}`}
            >
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-3 mx-auto">
                <item.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-primary-foreground mb-1">
                {item.label}
              </h3>
              <p className="text-sm text-primary-foreground/70">{item.desc}</p>
            </div>
          ))}
        </div>

        <Button
          size="lg"
          onClick={onBookDemo}
          className="bg-white text-primary hover:bg-white/90 px-10 py-6 text-base font-semibold"
          data-testid="button-book-demo-cta"
        >
          Book a Demo
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </section>
  );
}
