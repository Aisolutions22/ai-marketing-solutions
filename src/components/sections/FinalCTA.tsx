import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-accent/8 rounded-full blur-3xl" />

      <div className="section-container relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold gradient-text mb-8"
        >
          The Future Is Automated.
          <br />
          <span className="neon-text-blue">The Question Is — Are You?</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-xl mx-auto mb-12"
        >
          <p className="text-xl text-muted-foreground mb-4">
            You can hire a media buyer.
          </p>
          <p className="text-xl text-foreground font-medium">
            Or you can build a <span className="text-primary neon-text-blue">self-operating revenue system.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <button className="cta-button text-xl inline-flex items-center gap-3">
            <Rocket className="w-6 h-6" />
            Build My AI Growth Engine
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
