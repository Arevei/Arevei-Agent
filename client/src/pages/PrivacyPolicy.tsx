import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Shield, Lock, Eye, Users } from "lucide-react";

export default function PrivacyPolicy() {
  const sections = [
    {
      id: 1,
      title: "Introduction",
      icon: Eye,
      content:
        "At Arevei, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.",
      subsections: [
        "Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.",
      ],
    },
    {
      id: 2,
      title: "Information We Collect",
      icon: Shield,
      content:
        "We may collect information about you in a variety of ways. The information we may collect on the Site includes:",
      items: [
        {
          label: "Personal Data",
          description:
            "Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site.",
        },
        {
          label: "Derivative Data",
          description:
            "Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.",
        },
      ],
    },
    {
      id: 3,
      title: "How We Use Your Information",
      icon: Users,
      content:
        "Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:",
      items: [
        { label: "Create and manage your account" },
        { label: "Process your payments and refunds" },
        { label: "Send you a newsletter" },
        { label: "Email you regarding your account or order" },
        { label: "Fulfill and manage purchases, orders, payments, and other transactions" },
        { label: "Monitor and analyze usage and trends to improve your experience" },
      ],
    },
    {
      id: 4,
      title: "Disclosure of Your Information",
      icon: Lock,
      content:
        "We may share information we have collected about you in certain situations. Your information may be disclosed as follows:",
      items: [
        {
          label: "By Law or to Protect Rights",
          description:
            "If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others.",
        },
        {
          label: "Third-Party Service Providers",
          description:
            "We may share your information with third parties that perform services for us, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.",
        },
      ],
    },
    {
      id: 5,
      title: "Security of Your Information",
      icon: Shield,
      content:
        "We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.",
      subsections: [
        "No method of data transmission can be guaranteed against any interception or other type of misuse. We encourage you to use caution when sharing personal information online.",
      ],
    },
    {
      id: 6,
      title: "Contact Us",
      icon: Users,
      content:
        "If you have questions or comments about this Privacy Policy, please contact us at:",
      subsections: [
        "Email: marketing@arevei.com",
        "Company: Arevei Agents Shakyawar Mediatech LLP",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-card/50 to-background border-b border-border py-12 sm:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-8 bg-primary rounded-full"></div>
              <span className="text-sm font-semibold text-primary">Legal</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              We're committed to protecting your data with transparency and
              industry-leading security practices.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="bg-card border border-border rounded-lg p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-foreground mb-6">
              Table of Contents
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#section-${section.id}`}
                  className="flex items-center gap-3 p-3 rounded-md hover:bg-accent transition-colors group"
                >
                  <section.icon className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {section.id}. {section.title}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
          {sections.map((section) => {
            const IconComponent = section.icon;
            return (
              <div
                key={section.id}
                id={`section-${section.id}`}
                className="scroll-mt-20"
              >
                <div className="bg-card border border-border rounded-lg p-6 sm:p-8 hover:border-primary/30 transition-colors">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">
                        {section.id}. {section.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {section.content}
                  </p>

                  {section.items && (
                    <div className="space-y-4 mb-6">
                      {section.items.map((item, idx) => (
                        <div
                          key={idx}
                          className="bg-background/50 border border-border/50 rounded-md p-4"
                        >
                          <h3 className="font-semibold text-foreground mb-2">
                            {item.label}
                          </h3>
                          {item.description && (
                            <p className="text-sm text-muted-foreground">
                              {item.description}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {section.subsections && (
                    <div className="space-y-3">
                      {section.subsections.map((subsection, idx) => (
                        <p
                          key={idx}
                          className="text-muted-foreground leading-relaxed"
                        >
                          {subsection}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 sm:p-12 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Questions About Our Privacy Policy?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're here to help. If you have any concerns or need clarification
              on how we handle your data, please reach out to our team.
            </p>
            <a
              href="mailto:marketing@arevei.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
