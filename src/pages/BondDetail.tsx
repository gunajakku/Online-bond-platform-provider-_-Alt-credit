import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Shield, TrendingUp, Calendar, IndianRupee, FileText, Download, Calculator, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { bonds } from "@/data/bonds";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BondCard from "@/components/BondCard";
import YieldCalculator from "@/components/YieldCalculator";

const BondDetail = () => {
  const { id } = useParams();
  const bond = bonds.find((b) => b.id === id);

  if (!bond) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-display text-foreground mb-4">Bond not found</h1>
          <Link to="/" className="text-primary hover:underline">Go back home</Link>
        </div>
      </div>
    );
  }

  const similarBonds = bonds.filter((b) => b.id !== bond.id && b.category === bond.category).slice(0, 3);
  if (similarBonds.length < 3) {
    const others = bonds.filter((b) => b.id !== bond.id && b.category !== bond.category).slice(0, 3 - similarBonds.length);
    similarBonds.push(...others);
  }

  const ratingColor = bond.rating.startsWith("AAA")
    ? "text-success"
    : bond.rating.startsWith("AA")
    ? "text-primary"
    : "text-info";

  const keyMetrics = [
    { label: "Yield to Maturity", value: `${bond.yield}%`, icon: TrendingUp },
    { label: "Coupon Rate", value: `${bond.couponRate}%`, icon: TrendingUp },
    { label: "Face Value", value: `₹${bond.faceValue.toLocaleString()}`, icon: IndianRupee },
    { label: "Min. Investment", value: `₹${bond.minInvestment.toLocaleString()}`, icon: IndianRupee },
    { label: "Maturity Date", value: new Date(bond.maturityDate).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" }), icon: Calendar },
    { label: "Interest Payment", value: bond.interestPayment, icon: Calendar },
  ];

  const documents = [
    { name: "Information Memorandum", type: "PDF" },
    { name: "Rating Rationale", type: "PDF" },
    { name: "Financial Statements", type: "PDF" },
    { name: "Debenture Trust Deed", type: "PDF" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Breadcrumb & Header */}
      <section className="pt-28 pb-10">
        <div className="container mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft size={16} /> Back to Bonds
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col lg:flex-row justify-between gap-6"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <h1 className="text-3xl md:text-4xl font-display text-foreground">{bond.name}</h1>
                <span className={`text-lg font-bold ${ratingColor} bg-surface-elevated px-3 py-1 rounded-lg`}>
                  {bond.rating}
                </span>
              </div>
              <p className="text-muted-foreground">{bond.issuer} · {bond.type}</p>
              <div className="flex items-center gap-3">
                {bond.secured && (
                  <span className="inline-flex items-center gap-1 text-sm text-success bg-success/10 px-3 py-1 rounded-full">
                    <Shield size={14} /> Secured
                  </span>
                )}
                {bond.listed && (
                  <span className="inline-flex items-center gap-1 text-sm text-info bg-info/10 px-3 py-1 rounded-full">
                    <TrendingUp size={14} /> Exchange Listed
                  </span>
                )}
                <span className="text-sm text-muted-foreground">ISIN: {bond.isin}</span>
              </div>
            </div>

            <div className="flex flex-col items-end gap-3">
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Yield to Maturity</p>
                <p className="text-4xl font-display text-gradient-gold">{bond.yield}%</p>
              </div>
              <Button size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 gap-2 px-10">
                Invest Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-card border border-border rounded-xl p-6"
              >
                <h2 className="text-xl font-display text-foreground mb-4">About this Bond</h2>
                <p className="text-muted-foreground leading-relaxed">{bond.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {bond.highlights.map((h, i) => (
                    <span key={i} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">{h}</span>
                  ))}
                </div>
              </motion.div>

              {/* Key Metrics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-card border border-border rounded-xl p-6"
              >
                <h2 className="text-xl font-display text-foreground mb-6">Key Metrics</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {keyMetrics.map((metric, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex items-center gap-1.5 text-muted-foreground text-xs">
                        <metric.icon size={12} /> {metric.label}
                      </div>
                      <p className="text-lg font-semibold text-foreground">{metric.value}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Yield Calculator */}
              <YieldCalculator bond={bond} />

              {/* Documents */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-card border border-border rounded-xl p-6"
              >
                <h2 className="text-xl font-display text-foreground mb-4 flex items-center gap-2">
                  <FileText size={20} /> Documents & Disclosures
                </h2>
                <div className="space-y-3">
                  {documents.map((doc, i) => (
                    <div key={i} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                      <div className="flex items-center gap-3">
                        <FileText size={16} className="text-muted-foreground" />
                        <span className="text-sm text-foreground">{doc.name}</span>
                        <span className="text-xs text-muted-foreground bg-surface-elevated px-2 py-0.5 rounded">{doc.type}</span>
                      </div>
                      <button className="text-primary hover:text-gold-light transition-colors">
                        <Download size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Sticky Invest Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-gradient-card border border-primary/20 rounded-xl p-6 space-y-5"
                >
                  <h3 className="font-display text-lg text-foreground">Investment Summary</h3>

                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Yield</span>
                      <span className="text-foreground font-semibold">{bond.yield}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Coupon</span>
                      <span className="text-foreground font-semibold">{bond.couponRate}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Tenure</span>
                      <span className="text-foreground font-semibold">{bond.tenure}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Rating</span>
                      <span className={`font-semibold ${ratingColor}`}>{bond.rating} ({bond.ratingAgency})</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Security</span>
                      <span className="text-foreground font-semibold">{bond.secured ? "Secured" : "Unsecured"}</span>
                    </div>
                  </div>

                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Minimum Investment</span>
                      <span className="text-foreground font-bold">₹{bond.minInvestment.toLocaleString()}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-gold text-primary-foreground hover:opacity-90 text-base py-5">
                    Invest Now
                  </Button>

                  <p className="text-xs text-muted-foreground text-center flex items-center justify-center gap-1">
                    <Info size={12} /> Investment subject to market risks
                  </p>
                </motion.div>

                {/* Rating Card */}
                <div className="bg-gradient-card border border-border rounded-xl p-5">
                  <h4 className="font-display text-sm text-foreground mb-3">Credit Rating</h4>
                  <div className="flex items-center gap-3">
                    <div className={`text-3xl font-display ${ratingColor}`}>{bond.rating}</div>
                    <div>
                      <p className="text-xs text-muted-foreground">Rated by</p>
                      <p className="text-sm text-foreground font-medium">{bond.ratingAgency}</p>
                    </div>
                  </div>
                  <div className="mt-3 w-full bg-border rounded-full h-2">
                    <div
                      className="h-2 rounded-full bg-gradient-gold"
                      style={{ width: bond.rating === "AAA" ? "100%" : bond.rating === "AA+" ? "85%" : "70%" }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    {bond.rating === "AAA" ? "Highest degree of safety" : "Very high degree of safety"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Similar Bonds */}
          {similarBonds.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-display text-foreground mb-8">Similar Bonds</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {similarBonds.map((b, i) => (
                  <BondCard key={b.id} bond={b} index={i} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BondDetail;
