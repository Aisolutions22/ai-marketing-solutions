import { useState, useMemo } from "react";
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

/** Small flowing particle along a connection line */
const FlowParticle = ({ index, total, cx, cy, tx, ty }: { index: number; total: number; cx: number; cy: number; tx: number; ty: number }) => {
  const delay = (index / total) * 4;
  return (
    <motion.circle
      r={2}
      fill="hsl(217 91% 60% / 0.45)"
      initial={{ offsetDistance: "100%", opacity: 0 }}
      animate={{
        cx: [tx, cx],
        cy: [ty, cy],
        opacity: [0, 0.5, 0.4, 0],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};

const N8NAutomation = () => {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  const radius = 280;
  const mobileRadius = 140;
  const centerSize = 100;

  const nodePositions = useMemo(() =>
    workflowSteps.map((_, i) => {
      const angle = (i / workflowSteps.length) * 2 * Math.PI - Math.PI / 2;
      return {
        x: 350 + radius * Math.cos(angle),
        y: 350 + radius * Math.sin(angle),
      };
    }), []
  );

  const mobilePositions = useMemo(() =>
    workflowSteps.map((_, i) => {
      const angle = (i / workflowSteps.length) * 2 * Math.PI - Math.PI / 2;
      return {
        x: 175 + mobileRadius * Math.cos(angle),
        y: 175 + mobileRadius * Math.sin(angle),
      };
    }), []
  );

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
          {/* Soft radial gradient behind circle */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: 500,
              height: 500,
              left: 100,
              top: 100,
              borderRadius: "50%",
              background: "radial-gradient(circle, hsl(217 91% 60% / 0.04) 0%, transparent 70%)",
            }}
          />

          {/* SVG Connection Lines + Flow Particles */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 700 700">
            <defs>
              <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="hsl(263 70% 55% / 0.15)" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>

            {/* Subtle center glow disc */}
            <motion.circle
              cx={350} cy={350} r={70}
              fill="url(#centerGlow)"
              animate={{ r: [65, 75, 65], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {workflowSteps.map((_, i) => {
              const { x, y } = nodePositions[i];
              const isHovered = hoveredNode === i;
              const anyHovered = hoveredNode !== null;
              return (
                <g key={i}>
                  <motion.line
                    x1={350} y1={350}
                    x2={x} y2={y}
                    stroke={isHovered ? "hsl(217 91% 60% / 0.7)" : "hsl(217 91% 60% / 0.15)"}
                    strokeWidth={isHovered ? 1.5 : 0.8}
                    strokeDasharray={isHovered ? "0" : "6 4"}
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    style={{ transition: "stroke 0.3s, stroke-width 0.3s" }}
                  />
                  {/* Data flow particles — 2 per line */}
                  <FlowParticle index={i * 2} total={workflowSteps.length * 2} cx={350} cy={350} tx={x} ty={y} />
                  <FlowParticle index={i * 2 + 1} total={workflowSteps.length * 2} cx={350} cy={350} tx={x} ty={y} />
                </g>
              );
            })}
            {/* Outer ring */}
            <circle cx={350} cy={350} r={radius} fill="none" stroke="hsl(217 91% 60% / 0.06)" strokeWidth={1} />
          </svg>

          {/* Central Hub with animated glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
            className="absolute z-20 flex flex-col items-center justify-center rounded-full glass-strong"
            style={{
              width: centerSize,
              height: centerSize,
              left: 350 - centerSize / 2,
              top: 350 - centerSize / 2,
              willChange: "transform, box-shadow",
            }}
          >
            {/* Soft animated glow ring */}
            <motion.div
              className="absolute inset-[-12px] rounded-full pointer-events-none"
              animate={{
                boxShadow: hoveredNode !== null
                  ? [
                      "0 0 25px hsl(263 70% 55% / 0.25), 0 0 60px hsl(263 70% 55% / 0.1)",
                      "0 0 35px hsl(263 70% 55% / 0.35), 0 0 80px hsl(263 70% 55% / 0.15)",
                      "0 0 25px hsl(263 70% 55% / 0.25), 0 0 60px hsl(263 70% 55% / 0.1)",
                    ]
                  : [
                      "0 0 15px hsl(263 70% 55% / 0.15), 0 0 40px hsl(263 70% 55% / 0.06)",
                      "0 0 22px hsl(263 70% 55% / 0.22), 0 0 55px hsl(263 70% 55% / 0.09)",
                      "0 0 15px hsl(263 70% 55% / 0.15), 0 0 40px hsl(263 70% 55% / 0.06)",
                    ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <Brain className="w-10 h-10 text-accent mb-1" />
            <span className="font-display text-[8px] text-foreground leading-tight text-center">AI Marketing<br />Agent</span>
          </motion.div>

          {/* Tool Nodes in Circle */}
          {workflowSteps.map((step, i) => {
            const { x, y } = nodePositions[i];
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
                  willChange: "transform",
                }}
                onMouseEnter={() => setHoveredNode(i)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <motion.div
                  animate={{ scale: isHovered ? 1.05 : 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className={`w-16 h-16 rounded-full flex items-center justify-center cursor-pointer border-2 transition-colors duration-300 ${
                    isHovered
                      ? "bg-primary/20 border-primary"
                      : "bg-primary/10 border-primary/30"
                  }`}
                  style={{
                    boxShadow: isHovered
                      ? "0 0 16px hsl(217 91% 60% / 0.25)"
                      : "none",
                  }}
                >
                  <step.icon className={`w-6 h-6 transition-colors duration-300 ${isHovered ? "text-primary" : "text-primary/70"}`} />
                </motion.div>
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

        {/* Mobile: full circular layout */}
        <div className="md:hidden relative mx-auto mb-16" style={{ height: 350, maxWidth: 350 }}>
          {/* Soft radial bg */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: 250,
              height: 250,
              left: 50,
              top: 50,
              borderRadius: "50%",
              background: "radial-gradient(circle, hsl(217 91% 60% / 0.04) 0%, transparent 70%)",
            }}
          />

          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 350 350">
            <defs>
              <radialGradient id="centerGlowMobile" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="hsl(263 70% 55% / 0.12)" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
            <motion.circle
              cx={175} cy={175} r={35}
              fill="url(#centerGlowMobile)"
              animate={{ r: [32, 38, 32], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            {workflowSteps.map((_, i) => {
              const { x, y } = mobilePositions[i];
              return (
                <motion.line
                  key={i}
                  x1={175} y1={175}
                  x2={x} y2={y}
                  stroke="hsl(217 91% 60% / 0.15)"
                  strokeWidth={0.6}
                  strokeDasharray="4 3"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                />
              );
            })}
            <circle cx={175} cy={175} r={mobileRadius} fill="none" stroke="hsl(217 91% 60% / 0.06)" strokeWidth={0.5} />
          </svg>

          {/* Mobile Central Hub */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="absolute z-20 flex flex-col items-center justify-center rounded-full glass-strong"
            style={{
              width: 56,
              height: 56,
              left: 175 - 28,
              top: 175 - 28,
            }}
          >
            <motion.div
              className="absolute inset-[-6px] rounded-full pointer-events-none"
              animate={{
                boxShadow: [
                  "0 0 10px hsl(263 70% 55% / 0.12), 0 0 25px hsl(263 70% 55% / 0.05)",
                  "0 0 16px hsl(263 70% 55% / 0.18), 0 0 35px hsl(263 70% 55% / 0.08)",
                  "0 0 10px hsl(263 70% 55% / 0.12), 0 0 25px hsl(263 70% 55% / 0.05)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <Brain className="w-6 h-6 text-accent" />
            <span className="font-display text-[5px] text-foreground leading-tight text-center">AI Agent</span>
          </motion.div>

          {/* Mobile Tool Nodes */}
          {workflowSteps.map((step, i) => {
            const { x, y } = mobilePositions[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, type: "spring", stiffness: 200 }}
                className="absolute z-10 flex flex-col items-center"
                style={{
                  left: x - 20,
                  top: y - 20,
                  width: 40,
                  willChange: "transform",
                }}
              >
                <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <step.icon className="w-4 h-4 text-primary/70" />
                </div>
                <span className="text-[5px] font-display text-muted-foreground text-center mt-0.5 leading-tight">{step.name}</span>
              </motion.div>
            );
          })}
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
