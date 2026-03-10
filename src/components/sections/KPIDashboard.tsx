import { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Target, Users, Info } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, Tooltip as RechartsTooltip, ResponsiveContainer } from "recharts";

const revenueData = [
  { month: "Jan", before: 12000, after: 14000 },
  { month: "Feb", before: 13000, after: 18000 },
  { month: "Mar", before: 12500, after: 24000 },
  { month: "Apr", before: 14000, after: 32000 },
  { month: "May", before: 13500, after: 41000 },
  { month: "Jun", before: 15000, after: 52000 },
];

const metrics = [
  {
    label: "ROAS",
    value: "5.4x",
    icon: TrendingUp,
    color: "text-primary",
    tooltip: "Return on Ad Spend — for every $1 spent, $5.40 is generated in revenue.",
  },
  {
    label: "CAC",
    value: "$1.20",
    icon: DollarSign,
    color: "text-neon-cyan",
    tooltip: "Customer Acquisition Cost — the average cost to acquire one new customer. Lower is better.",
  },
  {
    label: "Conversion Rate",
    value: "4.8%",
    icon: Target,
    color: "text-accent",
    tooltip: "Percentage of visitors who complete a purchase. Increasing CR reduces CAC proportionally.",
  },
  {
    label: "LTV",
    value: "$186",
    icon: Users,
    color: "text-primary",
    tooltip: "Lifetime Value — total revenue expected from a single customer. Higher LTV means more profit per acquisition.",
  },
];

const KPIDashboard = () => {
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);

  return (
    <section id="kpi" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background" />
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Live KPI Dashboard</h2>
          <p className="section-subtitle">Real-time metrics from our AI-powered campaigns</p>
        </motion.div>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="metric-card relative group"
            >
              <div className="flex items-center justify-between mb-4">
                <metric.icon className={`w-8 h-8 ${metric.color}`} />
                <button
                  onClick={() => setActiveTooltip(activeTooltip === i ? null : i)}
                  aria-label={`More info about ${metric.label}`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Info className="w-4 h-4" />
                </button>
              </div>
              <p className="text-muted-foreground text-sm font-medium mb-1">{metric.label}</p>
              <p className={`text-4xl font-display font-bold ${metric.color} neon-text-blue`}>{metric.value}</p>

              {activeTooltip === i && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-0 right-0 mt-2 p-4 glass-strong rounded-xl z-20 text-sm text-muted-foreground"
                >
                  {metric.tooltip}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* ROI Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-strong p-6 rounded-2xl neon-glow-purple text-center mb-16"
        >
          <p className="text-muted-foreground text-sm mb-2 font-display">NET ROI EXAMPLE</p>
          <p className="text-2xl font-body">
            <span className="text-muted-foreground">Ad Spend $10K →</span>{" "}
            <span className="text-primary font-bold">Revenue $54K →</span>{" "}
            <span className="text-accent font-bold">Net Profit $44K (440% ROI)</span>
          </p>
        </motion.div>

        {/* Revenue Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-6 rounded-2xl"
        >
          <h3 className="font-display text-lg text-foreground mb-6">Revenue Growth: Before vs After Automation</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="gradBefore" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(215 20% 55%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(215 20% 55%)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="gradAfter" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(217 91% 60%)" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="hsl(217 91% 60%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" stroke="hsl(215 20% 35%)" fontSize={12} />
              <YAxis stroke="hsl(215 20% 35%)" fontSize={12} tickFormatter={(v) => `$${v / 1000}k`} />
              <RechartsTooltip
                contentStyle={{
                  background: "hsl(222 40% 8% / 0.9)",
                  border: "1px solid hsl(217 30% 22%)",
                  borderRadius: "12px",
                  color: "hsl(210 40% 96%)",
                }}
                formatter={(value: number) => [`$${value.toLocaleString()}`, ""]}
              />
              <Area type="monotone" dataKey="before" stroke="hsl(215 20% 55%)" fill="url(#gradBefore)" strokeWidth={2} name="Before AI" />
              <Area type="monotone" dataKey="after" stroke="hsl(217 91% 60%)" fill="url(#gradAfter)" strokeWidth={2} name="After AI" />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </section>
  );
};

export default KPIDashboard;
