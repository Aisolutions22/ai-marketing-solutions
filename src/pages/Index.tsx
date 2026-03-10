import { useState, useEffect, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import logoImg from "@/assets/logo.png";

const KPIDashboard = lazy(() => import("@/components/sections/KPIDashboard"));
const CustomerJourney = lazy(() => import("@/components/sections/CustomerJourney"));
const AIAgentsSystem = lazy(() => import("@/components/sections/AIAgentsSystem"));
const N8NAutomation = lazy(() => import("@/components/sections/N8NAutomation"));
const ClientOnboarding = lazy(() => import("@/components/sections/ClientOnboarding"));
const FinancialImpact = lazy(() => import("@/components/sections/FinancialImpact"));
const FinalCTA = lazy(() => import("@/components/sections/FinalCTA"));

const navLinks = [
  { label: "Features", href: "#kpi" },
  { label: "System", href: "#agents" },
  { label: "Automation", href: "#automation" },
  { label: "Contact", href: "#contact" },
];

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-strong border-b border-glass-border shadow-lg shadow-background/50"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-3 group"
          >
            <img src={logoImg} alt="AI Solutions logo" className="h-10 w-auto" width="46" height="40" />
            <div>
              <p className="font-display text-sm sm:text-base font-bold gradient-text leading-tight">
                Ai Solutions
              </p>
              <p className="text-muted-foreground text-[9px] sm:text-[10px] tracking-widest uppercase leading-tight">
                Smart AI Agents
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-lg hover:bg-muted/50"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contact")}
              className="ml-2 px-5 py-2 text-sm font-display font-semibold rounded-lg bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-all duration-200"
            >
              Get Started
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass-strong border-t border-glass-border overflow-hidden"
            >
              <div className="px-4 py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => { scrollTo(link.href); setMobileMenuOpen(false); }}
                    className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50 text-left"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-16" />

      <HeroSection />
      <Suspense fallback={<div className="min-h-[200px]" />}>
        <div id="kpi"><KPIDashboard /></div>
        <CustomerJourney />
        <div id="agents"><AIAgentsSystem /></div>
        <div id="automation"><N8NAutomation /></div>
        <ClientOnboarding />
        <FinancialImpact />
        <div id="contact"><FinalCTA /></div>
      </Suspense>

      {/* Footer */}
      <footer className="glass-strong border-t border-glass-border py-10 text-center">
        <p className="text-muted-foreground text-sm">
          © 2026 <span className="font-display text-primary">Ai Solutions</span> — AI Marketing & Automation
        </p>
      </footer>
    </div>
  );
};

export default Index;
