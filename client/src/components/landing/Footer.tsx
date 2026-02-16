import { SiLinkedin, SiX } from "react-icons/si";
import { Mail } from "lucide-react";

const footerLinks = {
  services: [
    { label: "AI Agents", href: "#solutions" },
    { label: "Workflow Automation", href: "#solutions" },
    { label: "Voice AI", href: "#solutions" },
    { label: "Implementation", href: "#services" },
  ],
  useCases: [
    { label: "Sales & Leads", href: "#solutions" },
    { label: "HR Support", href: "#solutions" },
    { label: "Finance", href: "#solutions" },
    { label: "Operations", href: "#solutions" },
  ],
  company: [
    { label: "Security", href: "#security" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#demo" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith("#") && href.length > 1) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-card border-t border-border" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <a
              href="/"
              className="flex items-center gap-2 text-xl font-semibold text-foreground mb-4"
              data-testid="footer-logo"
            >
              <span>Arevei Agents</span>
            </a>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              RV Agents helps businesses implement AI agents and automation 
              workflows to improve efficiency and operational clarity.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/areveiofficial"
                className="w-9 h-9 flex items-center justify-center rounded-md bg-accent text-muted-foreground hover:text-foreground transition-colors hover-elevate"
                data-testid="social-linkedin"
              >
                <SiLinkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/areveiofficial"
                className="w-9 h-9 flex items-center justify-center rounded-md bg-accent text-muted-foreground hover:text-foreground transition-colors hover-elevate"
                data-testid="social-x"
              >
                <SiX className="w-4 h-4" />
              </a>
              <a
                href="mailto:marketing@arevei.com"
                className="w-9 h-9 flex items-center justify-center rounded-md bg-accent text-muted-foreground hover:text-foreground transition-colors hover-elevate"
                data-testid="social-email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Use Cases</h4>
            <ul className="space-y-3">
              {footerLinks.useCases.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
            
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Arevei Agents Shakyawar Mediatech LLP. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            AI agents built for your business, on your infrastructure.
          </p>
        </div>
      </div>
    </footer>
  );
}
