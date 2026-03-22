import { motion } from "framer-motion";
import { Shield, Award, Users, Lock, CheckCircle, TrendingUp, Building2, Scale, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const milestones = [
  { year: "2021", event: "Founded with a vision to democratize bond investing" },
  { year: "2022", event: "SEBI registration obtained. Launched platform beta." },
  { year: "2023", event: "Crossed ₹500Cr in bonds facilitated. 10K+ investors." },
  { year: "2024", event: "Expanded to 500+ bond offerings. Series A funded." },
  { year: "2025", event: "50K+ investors. Partnerships with top institutional players." },
];

const team = [
  { name: "Raghav Mehta", role: "CEO & Co-Founder", desc: "Ex-Goldman Sachs, 15+ years in fixed income markets" },
  { name: "Priya Sharma", role: "CTO", desc: "Ex-Flipkart, Built trading systems for NSE" },
  { name: "Anil Kumar", role: "Head of Compliance", desc: "Ex-SEBI, 20+ years in financial regulation" },
  { name: "Neha Agarwal", role: "Head of Research", desc: "CFA, Ex-ICRA credit ratings analyst" },
];

const credibility = [
  { icon: Shield, label: "SEBI Registered", desc: "Fully compliant with SEBI's Online Bond Platform Provider regulations" },
  { icon: Lock, label: "Bank-Grade Security", desc: "256-bit SSL encryption. Data stored in ISO 27001 certified facilities" },
  { icon: Scale, label: "Transparent Pricing", desc: "No hidden charges. All yields displayed net of platform fees" },
  { icon: Handshake, label: "RBI Regulated Custodian", desc: "Securities held with CDSL/NSDL depository. Fully segregated." },
];

const partners = [
  "CRISIL", "ICRA", "CARE Ratings", "CDSL", "NSDL", "BSE", "NSE", "RBI"
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm">
              <Award size={14} /> Trusted by 50,000+ Investors
            </div>
            <h1 className="text-4xl md:text-5xl font-display text-foreground leading-tight">
              Making Bond Investing <span className="text-gradient-gold">Simple, Transparent & Accessible</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Alt Credit is India's SEBI-registered Online Bond Platform Provider, built to bring the 
              ₹100 lakh crore bond market to every Indian investor.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-border bg-card/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "₹2,000Cr+", label: "Bonds Facilitated" },
              { value: "50,000+", label: "Investors" },
              { value: "500+", label: "Bonds Listed" },
              { value: "4.8/5", label: "User Rating" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <p className="text-3xl font-display text-gradient-gold">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-primary text-sm font-medium tracking-wider uppercase">Our Story</p>
              <h2 className="text-3xl font-display text-foreground">
                Born from the belief that every investor deserves access to fixed income
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                India's bond market is worth over ₹100 lakh crore — yet most retail investors 
                have never invested in a single bond. The market has traditionally been dominated 
                by institutional players, with complex processes and high minimum investments 
                shutting out everyday investors.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Alt Credit was founded to change that. As a SEBI-registered Online Bond Platform 
                Provider (OBPP), we provide a transparent, secure, and easy-to-use marketplace 
                where anyone can invest in bonds starting from ₹5,000. We curate bonds from 
                India's top issuers, provide detailed research and ratings, and handle the 
                entire settlement process.
              </p>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-0"
            >
              {milestones.map((m, i) => (
                <div key={i} className="flex gap-4 pb-8 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-primary flex-shrink-0" />
                    {i < milestones.length - 1 && <div className="w-px h-full bg-border" />}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary">{m.year}</p>
                    <p className="text-sm text-muted-foreground mt-1">{m.event}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credibility & Regulatory */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">Trust & Security</p>
            <h2 className="text-3xl font-display text-foreground">Why investors trust Alt Credit</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {credibility.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-card border border-border rounded-xl p-6 flex gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="text-primary" size={22} />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground">{item.label}</h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">Leadership</p>
            <h2 className="text-3xl font-display text-foreground">Built by experts, for everyone</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-card border border-border rounded-xl p-6 text-center bond-card-hover"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="text-primary" size={24} />
                </div>
                <h3 className="font-display text-lg text-foreground">{member.name}</h3>
                <p className="text-sm text-primary mt-1">{member.role}</p>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{member.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 border-y border-border bg-card/30">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-muted-foreground mb-8 tracking-wider uppercase">Regulated & Partnered With</p>
          <div className="flex flex-wrap justify-center gap-8">
            {partners.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="text-lg font-display text-muted-foreground/60 hover:text-foreground transition-colors"
              >
                {p}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OBPP Compliance */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-10">
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">Regulatory Framework</p>
            <h2 className="text-3xl font-display text-foreground">SEBI OBPP Compliance</h2>
          </div>
          <div className="bg-gradient-card border border-border rounded-xl p-8 space-y-4">
            {[
              "Registered as Online Bond Platform Provider (OBPP) under SEBI regulations",
              "All bonds listed undergo thorough due diligence and credit assessment",
              "Complete transparency in pricing — no hidden markups or commissions",
              "Investor grievance redressal mechanism as mandated by SEBI",
              "Regular audits and compliance reporting to SEBI",
              "KYC and AML compliance for all investors on the platform",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">{item}</p>
              </div>
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
                Ready to invest in bonds?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Open your free account in minutes. No paperwork, no minimum balance.
              </p>
              <Button size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 gap-2 text-base px-10">
                Start Investing <TrendingUp size={18} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
