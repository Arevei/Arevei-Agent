import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Cookie, Settings, BarChart3, Lock, Info, AlertTriangle, Clock } from "lucide-react";

export default function CookiePolicy() {
  const sections = [
    {
      id: 1,
      title: "What Are Cookies?",
      icon: Cookie,
      content:
        "Cookies are small text files that are stored on your browser or device when you visit our website. They help us recognize you, remember your preferences, and improve your experience on our site.",
      subsections: [
        "Cookies can be 'persistent' (they stay on your device until you delete them) or 'session' (they are deleted when you close your browser).",
        "They are essential for many website functions and help us understand how you use our services.",
      ],
    },
    {
      id: 2,
      title: "Types of Cookies We Use",
      icon: Settings,
      content:
        "Arevei uses several categories of cookies to provide you with the best possible experience:",
      items: [
        {
          label: "Essential Cookies",
          description:
            "These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas. Without these cookies, our services may not work as intended.",
        },
        {
          label: "Analytical Cookies",
          description:
            "We use analytical cookies to understand how visitors use our website. These cookies collect information about the pages you visit, how long you spend on pages, and where you navigate. This helps us improve our services and user experience.",
        },
        {
          label: "Preference Cookies",
          description:
            "These cookies remember your preferences and settings, such as language selection, theme preferences (light/dark mode), and other customizations you make during your visit.",
        },
        {
          label: "Marketing Cookies",
          description:
            "We use marketing cookies to track your activity across our website and partner websites. This helps us deliver targeted advertisements and measure the effectiveness of our marketing campaigns.",
        },
      ],
    },
    {
      id: 3,
      title: "How We Use Cookies",
      icon: BarChart3,
      content:
        "We use cookies for various purposes to enhance your experience and improve our services:",
      items: [
        { label: "Authentication and Security" },
        { label: "Remembering your preferences and settings" },
        { label: "Analytics and performance monitoring" },
        { label: "Personalization and content delivery" },
        { label: "Marketing and advertising optimization" },
        { label: "Understanding user behavior and trends" },
      ],
    },
    {
      id: 4,
      title: "Third-Party Cookies",
      icon: Info,
      content:
        "In addition to our own cookies, we may use cookies from trusted third-party service providers for analytics, advertising, and other purposes.",
      items: [
        {
          label: "Google Analytics",
          description:
            "We use Google Analytics to track website traffic and user behavior. Google may set cookies on your device to help us analyze how users interact with our site.",
        },
        {
          label: "Advertising Partners",
          description:
            "We work with advertising partners who may set cookies to deliver targeted ads based on your browsing history and interests.",
        },
        {
          label: "Social Media Platforms",
          description:
            "If you interact with social media content on our site, the respective social media platforms may set cookies.",
        },
      ],
    },
    {
      id: 5,
      title: "Cookie Duration",
      icon: Clock,
      content:
        "Cookies have different lifespans depending on their type and purpose:",
      subsections: [
        "Session cookies are automatically deleted when you close your browser.",
        "Persistent cookies remain on your device for a specified period, ranging from a few days to several months or years.",
        "You can view the specific duration of cookies in your browser settings.",
      ],
    },
    {
      id: 6,
      title: "Your Cookie Choices",
      icon: Settings,
      content:
        "You have full control over cookies. You can choose to accept, reject, or delete them at any time through your browser settings.",
      subsections: [
        "Most browsers allow you to refuse cookies or alert you when a cookie is being sent. Please note that refusing cookies may affect the functionality and user experience of our website.",
        "You can also manage your cookie preferences by visiting your browser settings or using the cookie consent banner on our site.",
        "For information on how to control cookies in your specific browser, please visit the browser's help documentation.",
      ],
    },
    {
      id: 7,
      title: "Disabling Cookies",
      icon: AlertTriangle,
      content:
        "If you choose to disable cookies, some features of our website may not function properly.",
      subsections: [
        "Disabling essential cookies may prevent you from logging in or accessing certain secure areas.",
        "Disabling analytical cookies will not affect your ability to use the site, but it will limit our ability to improve your experience.",
        "You can disable cookies through your browser preferences, but we recommend keeping essential cookies enabled for the best experience.",
      ],
    },
    {
      id: 8,
      title: "Data Security",
      icon: Lock,
      content:
        "We take the security of your data very seriously. Any information collected through cookies is protected by appropriate security measures.",
      subsections: [
        "We use encryption and other security protocols to protect your personal information.",
        "We do not sell your personal data to third parties. We only share information with service providers necessary for website functionality.",
        "Your cookie data is stored securely and is subject to our Privacy Policy.",
      ],
    },
    {
      id: 9,
      title: "Updates to Cookie Policy",
      icon: Info,
      content:
        "We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.",
      subsections: [
        "We will notify you of any material changes by updating the 'Last Updated' date of this policy.",
        "Your continued use of our website after any changes constitutes your acceptance of the updated policy.",
      ],
    },
    {
      id: 10,
      title: "Contact Us",
      icon: Cookie,
      content:
        "If you have questions about our Cookie Policy or how we use cookies, please contact us:",
      subsections: [
        "Email: marketing@arevei.com",
        "Company: Arevei Agents Shakyawar Mediatech LLP",
        "We're available to answer any concerns or requests regarding cookies and your privacy.",
      ],
    },
  ];

  // Use a different icon for item 5 to avoid Clock import
  const items = sections.map((section) => {
    if (section.id === 5) {
      return { ...section, icon: BarChart3 };
    }
    return section;
  });

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
              Cookie Policy
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Learn how Arevei uses cookies and how you can control your cookie
              preferences to personalize your experience.
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
              {items.map((section) => (
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
          {items.map((section) => {
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
              Manage Your Cookie Preferences
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              You can adjust your cookie preferences at any time. If you have
              questions about how we use cookies or your privacy, please don't
              hesitate to reach out.
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
