import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Operations Director",
    company: "TechServe Solutions",
    content:
      "RV Agents helped us automate our customer onboarding workflow. The team understood our requirements quickly and delivered exactly what we needed within the timeline.",
    initials: "RS",
  },
  {
    name: "Priya Patel",
    role: "CEO",
    company: "GrowthPoint Consulting",
    content:
      "We were skeptical about AI agents at first, but the implementation was smooth and the results speak for themselves. Our lead qualification process is now much more efficient.",
    initials: "PP",
  },
  {
    name: "Amit Kumar",
    role: "Head of HR",
    company: "BuildRight Construction",
    content:
      "The HR support agent handles most of our routine queries now. The handover documentation was thorough and our team picked it up easily.",
    initials: "AK",
  },
  {
    name: "Sarah Mitchell",
    role: "Finance Manager",
    company: "CloudFirst Technologies",
    content:
      "Invoice tracking and follow-ups used to take hours of manual work. Now it runs automatically and we get notified only when action is needed.",
    initials: "SM",
  },
  {
    name: "Vikram Rao",
    role: "Business Owner",
    company: "Digital Marketing Hub",
    content:
      "The sales qualification agent integrated well with our existing CRM. The team was responsive and made adjustments based on our feedback throughout the process.",
    initials: "VR",
  },
  {
    name: "Neha Gupta",
    role: "Operations Manager",
    company: "FastTrack Logistics",
    content:
      "We had complex requirements involving multiple systems. RV Agents took the time to understand everything and built a solution that actually works for us.",
    initials: "NG",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 lg:py-32 bg-card/50"
      data-testid="section-testimonials"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from businesses that have implemented AI agents with our help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 hover-elevate transition-all duration-300"
              data-testid={`testimonial-card-${index}`}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarFallback className="bg-primary/10 text-primary font-medium">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
