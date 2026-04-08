import { useState, useEffect, lazy } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LazySection from "@/components/LazySection";
import { Menu, X, Facebook } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import logoImg from "@/assets/logo.png";

const KPIDashboard = lazy(() => import("@/components/sections/KPIDashboard"));
const CustomerJourney = lazy(() => import("@/components/sections/CustomerJourney"));
const AIAgentsSystem = lazy(() => import("@/components/sections/AIAgentsSystem"));
const N8NAutomation = lazy(() => import("@/components/sections/N8NAutomation"));
const ClientOnboarding = lazy(() => import("@/components/sections/ClientOnboarding"));
const FinancialImpact = lazy(() => import("@/components/sections/FinancialImpact"));
const FinalCTA = lazy(() => import("@/components/sections/FinalCTA"));

const PORTFOLIO_URL = "https://aisolutions-portfolio.lovable.app/";
const FACEBOOK_URL = "https://www.facebook.com/share/1Cd3zk5ZU7/";
const WHATSAPP_URL = "https://wa.me/201007292223";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#kpi" },
  { label: "Portfolio", href: PORTFOLIO_URL, external: true },
  { label: "Contact", href: "#contact" },
];

const scrollTo = (href: string) => {
  if (href === "#home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-3 group shrink-0"
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
            {navLinks.map((link) =>
              (link as any).external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-lg hover:bg-muted/50"
                >
                  {link.label}
                </a>
              ) : (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-lg hover:bg-muted/50"
                >
                  {link.label}
                </button>
              )
            )}
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-lg hover:bg-muted/50"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href={PORTFOLIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-5 py-2 text-sm font-display font-semibold rounded-lg bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-all duration-200"
            >
              View Our Work
            </a>
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
                {navLinks.map((link) =>
                  (link as any).external ? (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50 block"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        setMobileMenuOpen(false);
                        setTimeout(() => scrollTo(link.href), 300);
                      }}
                      className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50 block"
                    >
                      {link.label}
                    </a>
                  )
                )}
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50 flex items-center gap-2"
                >
                  <Facebook className="w-4 h-4" /> Facebook
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-16" id="home" />

      <HeroSection />
      <LazySection id="kpi" minHeight="400px"><KPIDashboard /></LazySection>
      <LazySection minHeight="300px"><CustomerJourney /></LazySection>
      <LazySection id="agents" minHeight="300px"><AIAgentsSystem /></LazySection>
      <LazySection id="automation" minHeight="300px"><N8NAutomation /></LazySection>
      <LazySection minHeight="300px"><ClientOnboarding /></LazySection>
      <LazySection minHeight="300px"><FinancialImpact /></LazySection>
      <LazySection id="contact" minHeight="300px"><FinalCTA /></LazySection>

      {/* Footer */}
      <footer className="glass-strong border-t border-glass-border">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {/* Column 1: Logo & Bio */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={logoImg} alt="AI Solutions logo" className="h-10 w-auto" width="46" height="40" />
                <p className="font-display text-base font-bold gradient-text">Ai Solutions</p>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We transform e-commerce businesses with AI-driven marketing automation, replacing traditional media buying with intelligent n8n workflows and autonomous AI agents.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="font-display text-sm font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href={PORTFOLIO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href={FACEBOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground text-sm hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <Facebook className="w-4 h-4" /> Facebook
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo("#kpi")}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    Features
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo("#contact")}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div>
              <h4 className="font-display text-sm font-semibold text-foreground mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    WhatsApp: +20 100 729 2223
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:sales@aisolutions22.cloud"
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    Email: sales@aisolutions22.cloud
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-glass-border mt-10 pt-8 text-center">
            <p className="text-muted-foreground text-sm">
              © 2026 <span className="font-display text-primary">Ai Solutions</span> — AI Marketing & Automation
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
