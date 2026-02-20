import { motion } from "framer-motion";
import { FileSignature, FolderPlus, LayoutDashboard, MessageSquare, Workflow, Bot, Activity } from "lucide-react";

const steps = [
  { name: "Contract Signed", icon: FileSignature },
  { name: "Folders Created", icon: FolderPlus },
  { name: "Dashboards Built", icon: LayoutDashboard },
  { name: "Slack Channels Opened", icon: MessageSquare },
  { name: "Workflows Activated", icon: Workflow },
  { name: "Agents Deployed", icon: Bot },
  { name: "Tracking Enabled", icon: Activity },
];

const ClientOnboarding = () => {
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
          <h2 className="section-title">Client Onboarding</h2>
          <p className="section-subtitle">Automated setup — your AI department goes live on day one</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex items-center mb-8 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Node */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center neon-glow-blue">
                  <step.icon className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className={`ml-20 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <div className="glass p-4 rounded-xl inline-block">
                  <p className="font-display text-sm font-medium text-foreground">{step.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-strong p-8 rounded-2xl neon-glow-purple inline-block">
            <p className="font-display text-xl text-accent neon-text-purple">
              From day one, your AI marketing department is live.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientOnboarding;
