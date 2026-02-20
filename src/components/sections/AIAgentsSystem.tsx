import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, PenTool, Search, Globe, Shield, BarChart3, Mail, Heart } from "lucide-react";

const agents = [
  {
    name: "Content Agent",
    icon: PenTool,
    features: ["AI Posts & Captions", "Newsletters & Ad Copy", "Brand Voice Consistency", "Image & Video AI Generation", "A/B Copy Variations"],
  },
  {
    name: "SEO Research Agent",
    icon: Search,
    features: ["Keyword Discovery", "Topic Clustering", "Gap Analysis", "SEO Content Briefs", "Competitive Intelligence"],
  },
  {
    name: "Website & CRO Agent",
    icon: Globe,
    features: ["Speed Audit", "SEO Technical Audit", "CRO Optimization", "Funnel Diagnostics", "UX Heatmap Analysis"],
  },
  {
    name: "Social Moderation Agent",
    icon: Shield,
    features: ["Spam Filtering", "Sentiment Analysis", "Auto Draft Replies", "Hot Lead Detection", "Community Management"],
  },
  {
    name: "Media Buying Agent",
    icon: BarChart3,
    features: ["Ad Creative Scoring", "Budget Logic Automation", "CAC Monitoring & ROAS Tracking", "Scaling Decision Engine", "Kill Ads Above CPA Threshold"],
  },
  {
    name: "Reporting Agent",
    icon: Mail,
    features: ["GA4 Integration", "Ads Platform Sync", "Shopify/WooCommerce Revenue Sync", "Real Profit Calculation", "Automated Alerts & Reports"],
  },
  {
    name: "Retention Agent",
    icon: Heart,
    features: ["Post-Purchase Automation", "Cross-sell & Upsell Flows", "Replenishment Reminders", "VIP Customer Sequences", "Zero Ad Spend Revenue"],
  },
];

const AIAgentsSystem = () => {
  const [activeAgent, setActiveAgent] = useState<number | null>(null);

  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background" />
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">AI Marketing Agents</h2>
          <p className="section-subtitle">Master Brain — Your AI Marketing Department</p>
        </motion.div>

        {/* Central Brain */}
        <div className="relative flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-strong p-8 rounded-full neon-glow-purple animate-glow-pulse mb-12 relative z-10"
          >
            <Brain className="w-16 h-16 text-accent" />
          </motion.div>

          {/* Agent Nodes Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-4xl">
            {agents.map((agent, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setActiveAgent(activeAgent === i ? null : i)}
                className={`agent-node flex flex-col items-center gap-3 text-center ${
                  activeAgent === i ? "neon-glow-purple border-accent/50" : ""
                }`}
              >
                <agent.icon className={`w-8 h-8 ${activeAgent === i ? "text-accent" : "text-primary"}`} />
                <span className="font-display text-xs font-medium text-foreground">{agent.name}</span>
              </motion.button>
            ))}
          </div>

          {/* Agent Details Panel */}
          <AnimatePresence mode="wait">
            {activeAgent !== null && (
              <motion.div
                key={activeAgent}
                initial={{ opacity: 0, y: 20, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -20, height: 0 }}
                className="w-full max-w-2xl mt-8"
              >
                <div className="glass-strong p-8 rounded-2xl neon-glow-blue">
                  <div className="flex items-center gap-3 mb-6">
                    {(() => {
                      const Icon = agents[activeAgent].icon;
                      return <Icon className="w-8 h-8 text-primary" />;
                    })()}
                    <h3 className="font-display text-xl text-foreground">{agents[activeAgent].name}</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {agents[activeAgent].features.map((feature, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: j * 0.05 }}
                        className="flex items-center gap-3 p-3 glass rounded-lg"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse-neon" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default AIAgentsSystem;
