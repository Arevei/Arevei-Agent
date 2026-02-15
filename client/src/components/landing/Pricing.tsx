import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useGeoPricing } from "@/hooks/use-geo-pricing";

interface PricingProps {
  onBookDemo: () => void;
}

const plansInr = [
  {
    name: "Starter",
    priceRange: "₹25,000 – ₹40,000",
    priceType: "One-Time Setup",
    description: "Perfect for businesses starting with a single AI agent",
    features: [
      "1 AI agent",
      "Basic chat or system integration",
      "Limited workflow steps",
      "Deployment and testing",
      "Usage guidance and documentation",
    ],
    popular: false,
  },
  {
    name: "Professional",
    priceRange: "₹75,000 – ₹1,50,000",
    priceType: "One-Time Setup",
    description: "For businesses that need multiple connected agents",
    features: [
      "3 to 5 AI agents",
      "Connected workflows and data flow",
      "Integration with internal tools",
      "Deployment, testing, and optimization",
      "14 days post-launch support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    priceRange: "Custom Pricing",
    priceType: "Contact for Quote",
    description: "Full automation stack for complex business needs",
    features: [
      "Department-wide automation",
      "Complex multi-agent workflows",
      "Advanced integrations",
      "Dedicated implementation and support",
      "Custom maintenance plans",
    ],
    popular: false,
  },
];

const plansUsd = [
  {
    name: "Starter",
    priceRange: "$800 – $1,500",
    priceType: "One-Time Setup",
    description: "Perfect for businesses starting with a single AI agent",
    features: [
      "1 AI agent",
      "Basic chat or system integration",
      "Limited workflow steps",
      "Deployment and testing",
      "Usage guidance and documentation",
    ],
    popular: false,
  },
  {
    name: "Professional",
    priceRange: "$2,500 – $5,000",
    priceType: "One-Time Setup",
    description: "For businesses that need multiple connected agents",
    features: [
      "3 to 5 AI agents",
      "Connected workflows and data flow",
      "Integration with internal tools",
      "Deployment, testing, and optimization",
      "14 days post-launch support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    priceRange: "Custom Pricing",
    priceType: "Contact for Quote",
    description: "Full automation stack for complex business needs",
    features: [
      "Department-wide automation",
      "Complex multi-agent workflows",
      "Advanced integrations",
      "Dedicated implementation and support",
      "Custom maintenance plans",
    ],
    popular: false,
  },
];

export function Pricing({ onBookDemo }: PricingProps) {
  const { currency, toggleCurrency, isLoading } = useGeoPricing();
  const plans = currency === "INR" ? plansInr : plansUsd;

  return (
    <section
      id="pricing"
      className="py-20 lg:py-32"
      data-testid="section-pricing"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Implementation-Based Pricing
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our pricing is based on the scope of implementation, not usage. 
            Maintenance and updates are offered separately as monthly services.
          </p>

          <button
            onClick={toggleCurrency}
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full text-sm font-medium text-foreground hover-elevate transition-all"
            data-testid="button-toggle-currency"
          >
            <span className={currency === "USD" ? "font-semibold" : "opacity-60"}>USD</span>
            <span className="text-muted-foreground">/</span>
            <span className={currency === "INR" ? "font-semibold" : "opacity-60"}>INR</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative p-8 flex flex-col ${
                plan.popular
                  ? "border-2 border-primary shadow-lg scale-105 lg:scale-[1.02]"
                  : ""
              }`}
              data-testid={`pricing-card-${plan.name.toLowerCase()}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <div
                  className={`text-2xl sm:text-3xl font-bold text-foreground transition-opacity ${
                    isLoading ? "opacity-50" : ""
                  }`}
                >
                  {plan.priceRange}
                </div>
                <span className="text-sm text-muted-foreground">{plan.priceType}</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={onBookDemo}
                variant={plan.popular ? "default" : "outline"}
                className="w-full"
                data-testid={`button-get-started-${plan.name.toLowerCase()}`}
              >
                {plan.priceRange === "Custom Pricing" ? "Contact Us" : "Get Started"}
              </Button>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-12">
          Maintenance and updates are offered separately as a monthly service.
          All prices exclude applicable taxes.
        </p>
      </div>
    </section>
  );
}
