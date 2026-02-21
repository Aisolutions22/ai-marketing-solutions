import { motion } from "framer-motion";
import { ShoppingCart, Store, Globe, Layout, Facebook, Search, Ghost, Bell, Workflow, Linkedin, Twitter, Mail, MessageSquare, MapPin, Clock, DollarSign, Zap } from "lucide-react";

const workflowSteps = [
  { name: "Shopify", icon: ShoppingCart },
  { name: "WooCommerce", icon: Store },
  { name: "WordPress", icon: Globe },
  { name: "Website & Landing Page", icon: Layout },
  { name: "Meta Ads", icon: Facebook },
  { name: "Google Ads", icon: Search },
  { name: "Snapchat Ads", icon: Ghost },
  { name: "Slack", icon: Bell },
  { name: "n8n", icon: Workflow },
  { name: "LinkedIn Ads", icon: Linkedin },
  { name: "X Ads", icon: Twitter },
  { name: "Email", icon: Mail },
  { name: "WhatsApp", icon: MessageSquare },
  { name: "Geo", icon: MapPin },
];

const triggers = [
  "Sync orders across all platforms",
  "Launch targeted ad campaigns instantly",
  "Trigger personalized email & WhatsApp flows",
  "Update audiences across Meta, Google & Snapchat",
  "Notify your team on Slack in real time",
  "Optimize geo-targeted campaigns automatically",
  "Generate unified performance reports",
];

const highlights = [
  { value: "60+", label: "Hours Saved Monthly", icon: Clock },
  { value: "40%", label: "Reduced Operational Costs", icon: DollarSign },
  { value: "3x", label: "Faster Scaling Speed", icon: Zap },
];

const N8NAutomation = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/3 to-background" />
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">N8N Automation Engine</h2>
          <p className="section-subtitle">Every channel, every platform — seamlessly connected through intelligent AI automation that runs your entire business on autopilot</p>
        </motion.div>

        {/* Workflow Pipeline */}
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-0 mb-16">
          {workflowSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center"
            >
              <div className="glass p-4 rounded-xl flex flex-col items-center gap-2 min-w-[80px] hover:neon-glow-blue transition-all duration-300">
                <step.icon className="w-6 h-6 text-primary" />
                <span className="text-xs font-display text-muted-foreground">{step.name}</span>
              </div>
              {i < workflowSteps.length - 1 && (
                <div className="hidden md:flex items-center px-2">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-accent animate-pulse-neon" />
                  <div className="w-0 h-0 border-t-4 border-b-4 border-l-6 border-transparent border-l-primary" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Purchase Trigger Example */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong p-8 rounded-2xl max-w-2xl mx-auto mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse-neon" />
            <h3 className="font-display text-lg text-foreground">When a Customer Engages →</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {triggers.map((trigger, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 p-3 glass rounded-lg"
              >
                <Zap className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{trigger}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="metric-card text-center"
            >
              <h.icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <p className="text-4xl font-display font-bold text-primary neon-text-blue mb-2">{h.value}</p>
              <p className="text-muted-foreground text-sm">{h.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default N8NAutomation;
