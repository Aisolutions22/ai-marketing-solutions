import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, MousePointerClick, UserCheck, ShoppingCart, Heart, TrendingUp } from "lucide-react";

const stages = [
  {
    name: "Traffic",
    icon: Users,
    details: [
      "Multi-channel source analysis",
      "Attribution modeling",
      "Quality score detection",
      "Bot traffic filtering",
      "Cost-per-visit optimization",
    ],
  },
  {
    name: "Engagement",
    icon: MousePointerClick,
    details: [
      "Behavior heatmap analysis",
      "Session recording insights",
      "Scroll depth tracking",
      "Click pattern analysis",
      "Content engagement scoring",
    ],
  },
  {
    name: "Lead",
    icon: UserCheck,
    details: [
      "Lead scoring AI",
      "Intent signal detection",
      "Drop-off prevention triggers",
      "Form optimization",
      "Micro-conversion tracking",
    ],
  },
  {
    name: "Purchase",
    icon: ShoppingCart,
    details: [
      "Cart abandonment recovery",
      "Checkout friction analysis",
      "Payment optimization",
      "Upsell trigger points",
      "Decision trigger mapping",
    ],
  },
  {
    name: "Retention",
    icon: Heart,
    details: [
      "Post-purchase sentiment analysis",
      "Churn risk prediction",
      "Loyalty program automation",
      "Re-engagement sequences",
      "NPS score tracking",
    ],
  },
  {
    name: "Upsell",
    icon: TrendingUp,
    details: [
      "Cross-sell recommendation AI",
      "Purchase pattern analysis",
      "VIP segment detection",
      "Bundle optimization",
      "Revenue expansion tracking",
    ],
  },
];

const CustomerJourney = () => {
  const [activeStage, setActiveStage] = useState<number | null>(null);

  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/3 to-background" />
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Customer Journey Intelligence</h2>
          <p className="section-subtitle">Click each stage to explore AI-powered insights</p>
        </motion.div>

        {/* Funnel */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-0 mb-12">
          {stages.map((stage, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setActiveStage(activeStage === i ? null : i)}
              className={`relative flex flex-col items-center gap-2 px-6 py-5 transition-all duration-300 ${
                activeStage === i
                  ? "glass neon-glow-blue border-primary/50 scale-105"
                  : "glass hover:border-primary/30"
              } ${i === 0 ? "rounded-l-2xl" : ""} ${i === stages.length - 1 ? "rounded-r-2xl" : ""}`}
              style={{ clipPath: i > 0 && i < stages.length - 1 ? undefined : undefined }}
            >
              <stage.icon className={`w-6 h-6 ${activeStage === i ? "text-primary" : "text-muted-foreground"}`} />
              <span className={`text-xs font-display font-medium ${activeStage === i ? "text-primary" : "text-muted-foreground"}`}>
                {stage.name}
              </span>
              {i < stages.length - 1 && (
                <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 text-muted-foreground z-10">→</div>
              )}
            </motion.button>
          ))}
        </div>

        {/* Stage Details */}
        <AnimatePresence mode="wait">
          {activeStage !== null && (
            <motion.div
              key={activeStage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="glass-strong p-8 rounded-2xl neon-glow-blue max-w-2xl mx-auto"
            >
              <h3 className="font-display text-xl text-primary mb-4">{stages[activeStage].name} Analysis</h3>
              <ul className="space-y-3">
                {stages[activeStage].details.map((detail, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {detail}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Conversion Impact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass p-8 rounded-2xl text-center neon-glow-purple"
        >
          <p className="font-display text-lg text-accent mb-2">The Conversion Rate Effect</p>
          <p className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            2% → 4% = <span className="text-primary neon-text-blue">2x Revenue</span>
          </p>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Doubling your conversion rate doubles your revenue without increasing ad spend by a single dollar.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomerJourney;
