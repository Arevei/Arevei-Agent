import { Clock, AlertTriangle, TrendingDown, Users, Puzzle, DollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";

const problems = [
  {
    icon: Clock,
    title: "Manual Processes Reduce Speed",
    description:
      "Manual and semi-automated workflows limit operational efficiency and slow down your ability to respond to business demands.",
  },
  {
    icon: AlertTriangle,
    title: "Repetitive Tasks Need Automation",
    description:
      "AI agents can streamline repetitive tasks and standard workflows, freeing your team to focus on higher-value work.",
  },
  {
    icon: TrendingDown,
    title: "Data Visibility Challenges",
    description:
      "Business communication and operational data need structured systems for better visibility and informed decision-making.",
  },
  {
    icon: Users,
    title: "Skilled Talent on Repetitive Work",
    description:
      "Your best people spend time on repetitive tasks instead of high-impact initiatives that drive business growth.",
  },
  {
    icon: Puzzle,
    title: "Disconnected Tools",
    description:
      "Disconnected tools and systems make it difficult to manage workflows end to end and create unnecessary friction.",
  },
  {
    icon: DollarSign,
    title: "Rising Operational Costs",
    description:
      "Increasing operational costs create pressure on margins while manual processes limit your ability to scale efficiently.",
  },
];

export function Problems() {
  return (
    <section
      id="problems"
      className="py-20 lg:py-32 bg-card/50"
      data-testid="section-problems"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            The Challenge
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Manual Processes Are Slowing Business Growth
          </h2>
          <p className="text-lg text-muted-foreground">
            Businesses today are increasingly adopting AI agents to improve efficiency, 
            structure internal communication, and manage operational data more effectively. 
            However, many organizations still rely on manual or semi-automated workflows 
            that limit their growth potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <Card
              key={index}
              className="p-6 hover-elevate transition-all duration-300"
              data-testid={`problem-card-${index}`}
            >
              <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-5">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
