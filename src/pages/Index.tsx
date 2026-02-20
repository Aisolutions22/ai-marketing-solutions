import HeroSection from "@/components/sections/HeroSection";
import KPIDashboard from "@/components/sections/KPIDashboard";
import CustomerJourney from "@/components/sections/CustomerJourney";
import AIAgentsSystem from "@/components/sections/AIAgentsSystem";
import N8NAutomation from "@/components/sections/N8NAutomation";
import ClientOnboarding from "@/components/sections/ClientOnboarding";
import FinancialImpact from "@/components/sections/FinancialImpact";
import FinalCTA from "@/components/sections/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-glass-border">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center">
          <h1 className="font-display text-2xl md:text-3xl font-bold gradient-text">
            Ai Solutions
          </h1>
          <p className="text-muted-foreground text-xs md:text-sm tracking-widest uppercase">
            Ai marketing N8N automation project
          </p>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-24" />

      <HeroSection />
      <KPIDashboard />
      <CustomerJourney />
      <AIAgentsSystem />
      <N8NAutomation />
      <ClientOnboarding />
      <FinancialImpact />
      <FinalCTA />

      {/* Footer */}
      <footer className="glass-strong border-t border-glass-border py-8 text-center">
        <p className="text-muted-foreground text-sm">
          © 2026 <span className="font-display text-primary">Ai Solutions</span> — AI Marketing & Automation
        </p>
      </footer>
    </div>
  );
};

export default Index;
