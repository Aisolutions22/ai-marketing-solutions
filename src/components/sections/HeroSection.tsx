import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Bot, User, Zap, Clock, BarChart3, Target, RefreshCw } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";

const comparisons = [
  { traditional: "Manual optimization", ai: "AI decision loops", iconT: User, iconA: Bot },
  { traditional: "Weekly reports", ai: "Live dashboards", iconT: Clock, iconA: BarChart3 },
  { traditional: "Human delay", ai: "24/7 AI agents", iconT: Clock, iconA: Zap },
  { traditional: "Traffic focus", ai: "Full customer journey control", iconT: Target, iconA: Target },
  { traditional: "Paid retargeting", ai: "Automated retention", iconT: RefreshCw, iconA: RefreshCw },
];

const HeroSection = () => {
  const [isAI, setIsAI] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Animated particle background */}
      <ParticleBackground />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/8 via-background/80 to-background pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="section-title text-4xl md:text-6xl lg:text-7xl mb-6"
        >
          From Traditional Media Buying
          <br />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="neon-text-blue"
          >
            to AI Growth Engine
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-muted-foreground text-xl md:text-2xl mb-14 font-body max-w-2xl mx-auto"
        >
          We don't manage ads. We engineer revenue systems.
        </motion.p>

        {/* Toggle Switch */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center justify-center gap-4 mb-14"
        >
          <span className={`font-display text-sm transition-colors duration-300 ${!isAI ? "text-foreground" : "text-muted-foreground"}`}>
            Traditional
          </span>
          <button
            onClick={() => setIsAI(!isAI)}
            aria-label={isAI ? "Switch to Traditional view" : "Switch to AI Growth Engine view"}
            className={`relative w-20 h-10 rounded-full transition-all duration-500 ${
              isAI ? "bg-primary neon-glow-blue" : "bg-muted"
            }`}
          >
            <div
              className={`absolute top-1 w-8 h-8 rounded-full bg-foreground transition-all duration-500 ${
                isAI ? "left-11" : "left-1"
              }`}
            />
          </button>
          <span className={`font-display text-sm transition-colors duration-300 ${isAI ? "text-primary neon-text-blue" : "text-muted-foreground"}`}>
            AI Growth Engine
          </span>
        </motion.div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {comparisons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`glass p-5 rounded-2xl transition-all duration-500 ${
                isAI ? "neon-glow-blue border-primary/30" : "border-muted"
              }`}
            >
              <div className="flex flex-col items-center gap-3">
                {isAI ? (
                  <item.iconA className="w-8 h-8 text-primary" />
                ) : (
                  <item.iconT className="w-8 h-8 text-muted-foreground" />
                )}
                <p className={`text-sm font-medium text-center transition-colors duration-500 ${
                  isAI ? "text-foreground" : "text-muted-foreground"
                }`}>
                  {isAI ? item.ai : item.traditional}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-16"
        >
          <a href="#kpi" className="cta-button inline-flex items-center gap-2">
            See the Results <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
