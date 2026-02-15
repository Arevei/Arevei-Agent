import { SiOpenai, SiGoogle, SiSlack, SiNotion, SiTelegram, SiWhatsapp } from "react-icons/si";
import { Bot, Zap, Code, Server, Cloud, MessageSquare } from "lucide-react";

const toolCategories = [
  {
    name: "AI Models",
    tools: ["ChatGPT", "Gemini", "Claude", "Perplexity"],
  },
  {
    name: "Automation",
    tools: ["n8n", "Make (Integromat)", "Lindy.ai"],
  },
  {
    name: "Communication",
    tools: ["WhatsApp", "Slack", "Telegram", "Microsoft Teams"],
  },
  {
    name: "Development",
    tools: ["Next.js", "Node.js", "REST APIs", "Webhooks"],
  },
  {
    name: "Hosting",
    tools: ["Contabo", "Hostinger", "Replit", "Coolify"],
  },
  {
    name: "Productivity",
    tools: ["Notion", "Google Workspace", "Zoho", "Bitrix24"],
  },
];

const allTools = [
  "ChatGPT", "Gemini", "Perplexity", "ElevenLabs", "Claude", "WhatsApp",
  "n8n", "Lindy.ai", "Make", "REST APIs", "Webhooks", "JavaScript",
  "Next.js", "Node.js", "Contabo", "Hostinger", "Replit", "Cursor",
  "Emergent", "Notion", "Slack", "Telegram", "Microsoft Teams",
  "Bitrix24", "Google Workspace", "Zoho", "Coolify", "Listmonk"
];

export function Tools() {
  return (
    <section
      id="tools"
      className="py-20 lg:py-32 bg-card/50"
      data-testid="section-tools"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Our Stack
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Tools and Platforms We Work With
          </h2>
          <p className="text-lg text-muted-foreground">
            We design and deploy AI agents using a combination of trusted AI models, 
            automation tools, and modern development frameworks.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {[
            { icon: SiOpenai, label: "ChatGPT" },
            { icon: SiGoogle, label: "Gemini" },
            { icon: Bot, label: "Claude" },
            { icon: Zap, label: "n8n" },
            { icon: SiSlack, label: "Slack" },
            { icon: SiNotion, label: "Notion" },
            { icon: SiWhatsapp, label: "WhatsApp" },
            { icon: SiTelegram, label: "Telegram" },
            { icon: MessageSquare, label: "Teams" },
            { icon: Code, label: "Next.js" },
            { icon: Server, label: "Node.js" },
            { icon: Cloud, label: "Hosting" },
          ].map((tool, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-5 bg-background rounded-lg border border-border hover-elevate transition-all"
              data-testid={`tool-icon-${index}`}
            >
              <tool.icon className="w-8 h-8 text-primary mb-3" />
              <span className="text-sm font-medium text-foreground">{tool.label}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground/60 max-w-4xl mx-auto leading-relaxed">
            {allTools.join(" · ")}
          </p>
          <p className="text-sm text-muted-foreground mt-6">
            Tool selection depends on your requirements, data sensitivity, and existing systems.
          </p>
        </div>
      </div>
    </section>
  );
}
