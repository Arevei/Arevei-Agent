import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does implementation take?",
    answer:
      "Implementation timelines vary based on complexity. A single agent setup typically takes 1-2 weeks. Multi-agent workflows take 3-4 weeks. Enterprise implementations are scoped individually and may take 4-8 weeks depending on requirements.",
  },
  {
    question: "Where are the AI agents hosted?",
    answer:
      "AI agents are deployed within your selected tools and infrastructure. We help you set up the agents on platforms you control, whether that's your existing systems, cloud hosting, or third-party automation platforms. RV Agents does not host your agents.",
  },
  {
    question: "Can we use our existing tools?",
    answer:
      "Yes. We design solutions that integrate with your existing tools and systems. Whether you use specific CRMs, communication platforms, or internal applications, we build workflows that connect with what you already have.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes. After implementation, we offer optional maintenance plans for ongoing updates, optimizations, and support. Professional packages include 14 days of post-launch support, and longer-term maintenance can be arranged separately.",
  },
  {
    question: "How is data handled during implementation?",
    answer:
      "We take data handling seriously. Any information shared during implementation is treated responsibly. RV Agents does not store or resell client data. Agents are deployed within your infrastructure, and data security depends on the platforms you choose to use.",
  },
  {
    question: "What if we need changes after deployment?",
    answer:
      "Post-deployment changes are common. Minor adjustments within the initial scope are typically covered during the support period. Larger changes or new features can be scoped as additional work or included in a maintenance plan.",
  },
  {
    question: "How do you determine which AI tools to use?",
    answer:
      "Tool selection depends on your specific requirements, data sensitivity, existing systems, and budget. We recommend solutions based on your needs and help you understand the tradeoffs of different options during the discovery phase.",
  },
  {
    question: "Can AI agents handle complex decision-making?",
    answer:
      "AI agents can handle structured decision-making based on defined rules and patterns. For complex scenarios, we design workflows with human oversight or approval steps. The level of autonomy is configured based on your comfort level and use case requirements.",
  },
];

export function FAQ() {
  return (
    <section
      id="faq"
      className="py-20 lg:py-32"
      data-testid="section-faq"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about working with RV Agents
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="bg-card border border-card-border rounded-lg px-6 data-[state=open]:bg-accent/30"
              data-testid={`faq-item-${index}`}
            >
              <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
