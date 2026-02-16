import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { FileText, AlertCircle, Ban, Scale, RotateCw, Mail } from "lucide-react";

export default function TermsOfService() {
  const sections = [
    {
      id: 1,
      title: "Agreement to Terms",
      icon: FileText,
      content:
        "These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Arevei ("we," "us," or "our"), concerning your access to and use of our website and services.",
      subsections: [
        "By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the service.",
      ],
    },
    {
      id: 2,
      title: "Intellectual Property Rights",
      icon: FileText,
      content:
        "Unless otherwise indicated, the Site and services are our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.",
      subsections: [
        "No Content or Marks may be copied, modified, or distributed without our prior written consent.",
      ],
    },
    {
      id: 3,
      title: "User Representations",
      icon: AlertCircle,
      content: "By using the Site, you represent and warrant that:",
      items: [
        {
          label: "All registration information you submit will be true, accurate, current, and complete.",
        },
        {
          label: "You will maintain the accuracy of such information and promptly update it as necessary.",
        },
        {
          label: "You have the legal capacity and agree to comply with these Terms of Service.",
        },
        {
          label: "You are not a minor in the jurisdiction in which you reside.",
        },
        {
          label: "You will not access the Site through automated or non-human means.",
        },
        {
          label: "You will not use the Site for any illegal or unauthorized purpose.",
        },
      ],
    },
    {
      id: 4,
      title: "Prohibited Activities",
      icon: Ban,
      content:
        "You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.",
      items: [
        {
          label: "Systematically retrieve data",
          description:
            "Do not create or compile any collection, compilation, database, or directory from the Site without written permission.",
        },
        {
          label: "Unauthorized email collection",
          description:
            "Do not collect usernames and/or email addresses of users for the purpose of sending unsolicited email.",
        },
        {
          label: "Circumvent security features",
          description:
            "Do not circumvent, disable, or otherwise interfere with security-related features of the Site.",
        },
        {
          label: "Unauthorized linking",
          description: "Do not engage in unauthorized framing of or linking to the Site.",
        },
      ],
    },
    {
      id: 5,
      title: "Limitation of Liability",
      icon: Scale,
      content:
        "In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site.",
      subsections: [
        "This limitation applies even if we have been advised of the possibility of such damages.",
      ],
    },
    {
      id: 6,
      title: "Governing Law",
      icon: Scale,
      content:
        "These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which Arevei is registered, without regard to its conflict of law provisions.",
      subsections: [
        "Any legal action or proceeding related to these Terms shall be brought exclusively in the courts located in the jurisdiction where Arevei is registered.",
      ],
    },
    {
      id: 7,
      title: "Changes to Terms",
      icon: RotateCw,
      content:
        "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.",
      subsections: [
        "What constitutes a material change will be determined at our sole discretion. Your continued use of the Site following the posting of revised Terms means that you accept and agree to the changes.",
      ],
    },
    {
      id: 8,
      title: "Contact Information",
      icon: Mail,
      content:
        "To resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:",
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
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Please read these terms carefully before using our services. By
              accessing Arevei, you agree to be bound by these terms.
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
                    <div className="flex-1">
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
              Questions About Our Terms?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're here to clarify any questions about our Terms of Service.
              Feel free to reach out if you need more information.
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
