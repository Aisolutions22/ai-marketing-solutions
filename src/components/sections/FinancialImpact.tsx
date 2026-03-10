import { useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { Calculator, Send } from "lucide-react";

const MAX_CHALLENGE_LENGTH = 500;
const ALLOWED_CHARS_REGEX = /[^a-zA-Z0-9\s.,!?;:'\-()%$@#&+=/\n]/g;

const sanitizeInput = (input: string): string => {
  return input
    .replace(ALLOWED_CHARS_REGEX, '')
    .slice(0, MAX_CHALLENGE_LENGTH)
    .trim();
};

const buildWhatsAppUrl = (params: {
  adSpend: number; conversionRate: number; cac: number;
  retentionRate: number; aov: number; challenge: string;
  traditionalRoi: number; aiRoi: number; additionalProfit: number;
}): string | null => {
  const sanitized = sanitizeInput(params.challenge);
  const lines = [
    "New AI Growth Assessment:",
    "",
    `Monthly Ad Spend: $${params.adSpend.toLocaleString()}`,
    `Conversion Rate: ${params.conversionRate}%`,
    `CAC: $${params.cac}`,
    `Retention Rate: ${params.retentionRate}%`,
    `AOV: $${params.aov}`,
    `Biggest Challenge: ${sanitized || "Not specified"}`,
    "",
    `Traditional ROI: ${Math.round(params.traditionalRoi)}%`,
    `AI Model ROI: ${Math.round(params.aiRoi)}%`,
    `Additional Profit with AI: +$${Math.round(params.additionalProfit).toLocaleString()}/mo`,
  ];
  const text = encodeURIComponent(lines.join("\n"));
  const url = `https://wa.me/201007292223?text=${text}`;
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== "https:" || parsed.hostname !== "wa.me") return null;
    return url;
  } catch {
    return null;
  }
};

const FinancialImpact = () => {
  const [adSpend, setAdSpend] = useState(10000);
  const [conversionRate, setConversionRate] = useState(2);
  const [cac, setCac] = useState(5);
  const [retentionRate, setRetentionRate] = useState(20);
  const [aov, setAov] = useState(50);
  const [biggestChallenge, setBiggestChallenge] = useState("");

  const results = useMemo(() => {
    const customers = (adSpend / cac);
    const traditionalRevenue = customers * aov;
    const traditionalProfit = traditionalRevenue - adSpend;
    const traditionalROI = ((traditionalProfit / adSpend) * 100);

    const aiCac = cac * 0.4;
    const aiCR = conversionRate * 2;
    const aiCustomers = (adSpend / aiCac);
    const aiLTV = aov * (1 + (retentionRate * 3) / 100);
    const aiRevenue = aiCustomers * aiLTV;
    const aiProfit = aiRevenue - adSpend;
    const aiROI = ((aiProfit / adSpend) * 100);

    return {
      traditional: { revenue: traditionalRevenue, profit: traditionalProfit, roi: traditionalROI },
      ai: { revenue: aiRevenue, profit: aiProfit, roi: aiROI },
    };
  }, [adSpend, conversionRate, cac, retentionRate, aov]);

  const fmt = (n: number) => `$${Math.round(n).toLocaleString()}`;

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
          <h2 className="section-title">Financial Impact Calculator</h2>
          <p className="section-subtitle">See the profit difference between traditional and AI-powered marketing</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Inputs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-strong p-8 rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <Calculator className="w-6 h-6 text-primary" />
              <h3 className="font-display text-lg text-foreground">Your Numbers</h3>
            </div>

            <div className="space-y-6">
              {[
                { label: "Monthly Ad Spend", value: adSpend, set: setAdSpend, min: 1000, max: 100000, step: 1000, format: (v: number) => `$${v.toLocaleString()}` },
                { label: "Current Conversion Rate", value: conversionRate, set: setConversionRate, min: 0.5, max: 10, step: 0.5, format: (v: number) => `${v}%` },
                { label: "Current CAC", value: cac, set: setCac, min: 1, max: 50, step: 1, format: (v: number) => `$${v}` },
                { label: "Retention Rate", value: retentionRate, set: setRetentionRate, min: 5, max: 80, step: 5, format: (v: number) => `${v}%` },
                { label: "Average Order Value (AOV)", value: aov, set: setAov, min: 10, max: 500, step: 5, format: (v: number) => `$${v}` },
              ].map((input, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm text-muted-foreground">{input.label}</label>
                    <span className="text-sm font-mono text-primary">{input.format(input.value)}</span>
                  </div>
                  <input
                    type="range"
                    min={input.min}
                    max={input.max}
                    step={input.step}
                    value={input.value}
                    onChange={(e) => input.set(Number(e.target.value))}
                    aria-label={input.label}
                    className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>
              ))}

              <div>
                <label className="text-sm text-muted-foreground block mb-2">Biggest Challenge</label>
                <textarea
                  value={biggestChallenge}
                  onChange={(e) => setBiggestChallenge(e.target.value.replace(ALLOWED_CHARS_REGEX, '').slice(0, MAX_CHALLENGE_LENGTH))}
                  placeholder="e.g. High CAC, low retention, scaling issues..."
                  className="w-full h-20 rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
              </div>

              <button
                onClick={() => {
                  const url = buildWhatsAppUrl({
                    adSpend, conversionRate, cac, retentionRate, aov,
                    challenge: biggestChallenge,
                    traditionalRoi: results.traditional.roi,
                    aiRoi: results.ai.roi,
                    additionalProfit: results.ai.profit - results.traditional.profit,
                  });
                  if (url) window.open(url, "_blank", "noopener,noreferrer");
                }}
                className="cta-button w-full inline-flex items-center justify-center gap-2 text-base"
              >
                <Send className="w-5 h-5" />
                Submit Growth Assessment
              </button>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Traditional */}
            <div className="glass p-6 rounded-2xl">
              <h4 className="font-display text-sm text-muted-foreground mb-4">Traditional Model</h4>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground">Revenue</p>
                  <p className="text-lg font-display text-foreground">{fmt(results.traditional.revenue)}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Profit</p>
                  <p className={`text-lg font-display ${results.traditional.profit >= 0 ? "text-foreground" : "text-destructive"}`}>
                    {fmt(results.traditional.profit)}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">ROI</p>
                  <p className="text-lg font-display text-muted-foreground">{Math.round(results.traditional.roi)}%</p>
                </div>
              </div>
            </div>

            {/* AI Model */}
            <div className="glass-strong p-6 rounded-2xl neon-glow-blue border-primary/30">
              <h4 className="font-display text-sm text-primary mb-4">AI Automation Model</h4>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground">Revenue</p>
                  <p className="text-lg font-display text-primary neon-text-blue">{fmt(results.ai.revenue)}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Profit</p>
                  <p className="text-lg font-display text-primary neon-text-blue">{fmt(results.ai.profit)}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">ROI</p>
                  <p className="text-lg font-display text-accent neon-text-purple">{Math.round(results.ai.roi)}%</p>
                </div>
              </div>
            </div>

            {/* Difference */}
            <div className="glass-strong p-6 rounded-2xl neon-glow-purple text-center">
              <p className="text-sm text-muted-foreground mb-2">Additional Profit with AI</p>
              <p className="text-4xl font-display font-bold text-accent neon-text-purple">
                +{fmt(results.ai.profit - results.traditional.profit)}
              </p>
              <p className="text-xs text-muted-foreground mt-2">per month</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinancialImpact;
