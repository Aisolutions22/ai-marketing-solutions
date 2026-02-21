import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Store, Globe, Layout, Facebook, Search, Ghost, Bell, Workflow, Linkedin, Twitter, Mail, MessageSquare, MapPin, Clock, DollarSign, Zap, Brain } from "lucide-react";

const workflowSteps = [
  { name: "Shopify", icon: ShoppingCart, kpi: "Orders Synced" },
  { name: "WooCommerce", icon: Store, kpi: "Products Managed" },
  { name: "WordPress", icon: Globe, kpi: "Content Published" },
  { name: "Website & LP", icon: Layout, kpi: "Pages Optimized" },
  { name: "Meta Ads", icon: Facebook, kpi: "ROAS Tracked" },
  { name: "Google Ads", icon: Search, kpi: "CPC Optimized" },
  { name: "Snapchat Ads", icon: Ghost, kpi: "Reach Scaled" },
  { name: "Slack", icon: Bell, kpi: "Alerts Sent" },
  { name: "n8n", icon: Workflow, kpi: "Flows Active" },
  { name: "LinkedIn Ads", icon: Linkedin, kpi: "B2B Leads" },
  { name: "X Ads", icon: Twitter, kpi: "Impressions" },
  { name: "Email", icon: Mail, kpi: "Open Rate" },
  { name: "WhatsApp", icon: MessageSquare, kpi: "Messages Sent" },
  { name: "Geo", icon: MapPin, kpi: "Zones Targeted" },
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
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  const radius = 280;
  const mobileRadius = 160;
  const centerSize = 100;

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

        {/* Circular Radial Layout - Desktop */}
        <div className="relative mx-auto mb-16 hidden md:block" style={{ height: 700, maxWidth: 700 }}>
          {/* SVG Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 700 700">
            {workflowSteps.map((_, i) => {
              const angle = (i / workflowSteps.length) * 2 * Math.PI - Math.PI / 2;
              const x = 350 + radius * Math.cos(angle);
              const y = 350 + radius * Math.sin(angle);
              return (
                <motion.line
                  key={i}
                  x1={350} y1={350}
                  x2={x} y2={y}
                  stroke={hoveredNode === i ? "hsl(217 91% 60%)" : "hsl(217 91% 60% / 0.2)"}
                  strokeWidth={hoveredNode === i ? 2 : 1}
                  strokeDasharray={hoveredNode === i ? "0" : "6 4"}
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                />
              );
            })}
            {/* Outer ring */}
            <circle cx={350} cy={350} r={radius} fill="none" stroke="hsl(217 91% 60% / 0.08)" strokeWidth={1} />
          </svg>

          {/* Central Hub */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
            className="absolute z-20 flex flex-col items-center justify-center rounded-full glass-strong neon-glow-purple"
            style={{
              width: centerSize,
              height: centerSize,
              left: 350 - centerSize / 2,
              top: 350 - centerSize / 2,
            }}
          >
            <Brain className="w-10 h-10 text-accent mb-1" />
            <span className="font-display text-[8px] text-foreground leading-tight text-center">AI Marketing<br />Agent</span>
          </motion.div>

          {/* Tool Nodes in Circle */}
          {workflowSteps.map((step, i) => {
            const angle = (i / workflowSteps.length) * 2 * Math.PI - Math.PI / 2;
            const x = 350 + radius * Math.cos(angle);
            const y = 350 + radius * Math.sin(angle);
            const isHovered = hoveredNode === i;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, type: "spring", stiffness: 200 }}
                className="absolute z-10 flex flex-col items-center"
                style={{
                  left: x - 40,
                  top: y - 40,
                  width: 80,
                }}
                onMouseEnter={() => setHoveredNode(i)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer border-2 ${
                    isHovered
                      ? "bg-primary/20 border-primary neon-glow-blue scale-110"
                      : "bg-primary/10 border-primary/30"
                  }`}
                >
                  <step.icon className={`w-6 h-6 transition-colors duration-300 ${isHovered ? "text-primary" : "text-primary/70"}`} />
                </div>
                <span className={`font-display text-[9px] mt-1.5 text-center leading-tight transition-colors duration-300 ${isHovered ? "text-foreground" : "text-muted-foreground"}`}>
                  {step.name}
                </span>
                {isHovered && (
                  <motion.span
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-[8px] text-primary font-display mt-0.5"
                  >
                    {step.kpi}
                  </motion.span>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Mobile fallback: simple grid */}
        <div className="md:hidden flex flex-wrap justify-center gap-3 mb-16">
          {workflowSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex flex-col items-center gap-1"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                <step.icon className="w-5 h-5 text-primary/70" />
              </div>
              <span className="text-[8px] font-display text-muted-foreground text-center">{step.name}</span>
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
