import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Shield, Clock, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { bonds, bondCategories } from "@/data/bonds";
import BondCard from "@/components/BondCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const stats = [
  { label: "Bonds Available", value: "500+", icon: TrendingUp },
  { label: "Investors Trust Us", value: "50K+", icon: BadgeCheck },
  { label: "Assets Facilitated", value: "₹2,000Cr+", icon: Shield },
  { label: "Avg. Returns", value: "9.2%", icon: Clock },
];

const faqs = [
  {
    q: "What are bonds?",
    a: "Bonds are fixed-income securities where you lend money to an issuer (government or corporation) in exchange for regular interest payments and return of principal at maturity.",
  },
  {
    q: "How are bonds different from FDs?",
    a: "Bonds typically offer higher returns than FDs, can be traded on exchanges for liquidity, and some categories like tax-free bonds offer tax advantages not available with FDs.",
  },
  {
    q: "What is the minimum investment?",
    a: "Most bonds on Alt Credit start from ₹5,000 - ₹10,000, making them accessible to retail investors.",
  },
  {
    q: "Are my investments safe?",
    a: "All bonds listed are SEBI-regulated, rated by agencies like CRISIL, ICRA & CARE. Secured bonds are backed by tangible collateral for additional safety.",
  },
  {
    q: "How do I receive interest payments?",
    a: "Interest is credited directly to your registered bank account as per the bond's payment schedule — monthly, quarterly, semi-annually, or annually.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-10 w-72 h-72 rounded-full bg-primary/3 blur-2xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm">
                <Shield size={14} />
                SEBI Registered Platform
              </div>
              <h1 className="text-4xl md:text-6xl font-display leading-tight text-foreground">
                Invest in Bonds.{" "}
                <span className="text-gradient-gold">Earn up to 12% returns.</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Discover curated bonds from India's top issuers. Transparent pricing, 
                real-time tracking, and seamless investing — all in one platform.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 gap-2 text-base px-8">
                  Explore Bonds <ArrowRight size={18} />
                </Button>
                <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary gap-2 text-base">
                  How It Works
                </Button>
              </div>
            </motion.div>

            {/* Hero Visual - Floating Bond Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:block relative"
            >
              <div className="relative w-full h-[420px]">
                {/* Central circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 rounded-full border-2 border-primary/20 flex items-center justify-center">
                  <div className="w-36 h-36 rounded-full bg-gradient-gold flex items-center justify-center">
                    <span className="font-display text-primary-foreground text-2xl">BONDS</span>
                  </div>
                </div>

                {/* Orbiting bubbles */}
                {[
                  { label: "Steady Income", top: "5%", left: "15%", color: "bg-primary/20 text-primary" },
                  { label: "Better than FDs", top: "8%", right: "5%", color: "bg-surface-elevated text-foreground" },
                  { label: "Less Risk", bottom: "15%", left: "5%", color: "bg-success/15 text-success" },
                  { label: "Secured", bottom: "10%", right: "10%", color: "bg-info/15 text-info" },
                ].map((bubble, i) => (
                  <motion.div
                    key={i}
                    className={`absolute px-5 py-3 rounded-full ${bubble.color} text-sm font-medium animate-float`}
                    style={{ top: bubble.top, left: bubble.left, right: bubble.right, bottom: bubble.bottom, animationDelay: `${i * 0.8}s` }}
                  >
                    {bubble.label}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, i) => (
              <div key={i} className="bg-gradient-card rounded-xl p-5 border border-border text-center">
                <stat.icon className="mx-auto mb-2 text-primary" size={22} />
                <div className="text-2xl font-display text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bond Categories */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">Collections</p>
            <h2 className="text-3xl md:text-4xl font-display text-foreground">Types of Bonds</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {bondCategories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-card border border-border rounded-xl p-6 bond-card-hover cursor-pointer group"
              >
                <span className="text-3xl">{cat.icon}</span>
                <h3 className="text-lg font-display text-foreground mt-3">{cat.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{cat.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-primary text-sm font-semibold">{cat.returnRange} returns</span>
                  <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Bonds */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
            <div>
              <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">Opportunities</p>
              <h2 className="text-3xl md:text-4xl font-display text-foreground">Featured Bonds</h2>
            </div>
            <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 gap-2">
              View All <ArrowRight size={16} />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bonds.map((bond, i) => (
              <BondCard key={bond.id} bond={bond} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">Why Bonds</p>
            <h2 className="text-3xl md:text-4xl font-display text-foreground">Why should you invest in bonds?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Predictable Returns",
                desc: "Unlike stocks, bonds offer fixed interest payments, giving you a predictable income stream you can plan around.",
                icon: TrendingUp,
              },
              {
                title: "Lower Risk",
                desc: "Bonds are less volatile than equities. Secured bonds are backed by collateral, offering additional protection.",
                icon: Shield,
              },
              {
                title: "Portfolio Diversification",
                desc: "Adding bonds to an equity-heavy portfolio reduces overall risk while maintaining healthy returns.",
                icon: BadgeCheck,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center space-y-4"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                  <item.icon className="text-primary" size={26} />
                </div>
                <h3 className="text-xl font-display text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Bar */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-display text-foreground text-center mb-10">
            Higher returns than traditional investments
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { label: "Savings A/C", rate: "3%", w: "25%" },
              { label: "Fixed Deposits", rate: "6.5%", w: "50%" },
              { label: "Govt Bonds", rate: "7.8%", w: "65%" },
              { label: "Corporate Bonds", rate: "12%", w: "100%", highlight: true },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center space-y-3"
              >
                <div className={`text-3xl font-display ${item.highlight ? "text-gradient-gold" : "text-foreground"}`}>
                  {item.rate}
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-1000 ${
                      item.highlight ? "bg-gradient-gold" : "bg-muted-foreground/40"
                    }`}
                    style={{ width: item.w }}
                  />
                </div>
                <p className="text-xs text-muted-foreground">{item.label}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground text-center mt-6">*Indicative rates. Actual returns vary by instrument.</p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">FAQs</p>
            <h2 className="text-3xl font-display text-foreground">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-gradient-card border border-border rounded-xl overflow-hidden">
                <summary className="cursor-pointer px-6 py-4 text-foreground font-medium flex items-center justify-between list-none">
                  {faq.q}
                  <span className="text-primary transition-transform group-open:rotate-45 text-xl">+</span>
                </summary>
                <div className="px-6 pb-4 text-sm text-muted-foreground leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-card border border-primary/20 rounded-2xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-hero opacity-50" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-display text-foreground mb-4">
                Start your bond investment journey
              </h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Join 50,000+ investors earning stable, predictable returns with Alt Credit's curated bond marketplace.
              </p>
              <Button size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 gap-2 text-base px-10">
                Create Free Account <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
