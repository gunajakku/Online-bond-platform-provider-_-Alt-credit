import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-gold flex items-center justify-center">
                <span className="font-display text-primary-foreground text-sm font-bold">A</span>
              </div>
              <span className="font-display text-lg text-foreground">Alt Credit</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              India's trusted online bond platform. SEBI registered, secure, and transparent.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground font-body">Products</h4>
            <div className="space-y-2">
              {["Corporate Bonds", "Government Bonds", "Tax-Free Bonds", "PSU Bonds"].map((item) => (
                <Link key={item} to="/" className="block text-sm text-muted-foreground hover:text-primary transition-colors">{item}</Link>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground font-body">Company</h4>
            <div className="space-y-2">
              {["About Us", "Careers", "Blog", "Contact"].map((item) => (
                <Link key={item} to={item === "About Us" ? "/about" : "/"} className="block text-sm text-muted-foreground hover:text-primary transition-colors">{item}</Link>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground font-body">Legal</h4>
            <div className="space-y-2">
              {["Privacy Policy", "Terms of Service", "Disclosures", "Grievance Redressal"].map((item) => (
                <Link key={item} to="/" className="block text-sm text-muted-foreground hover:text-primary transition-colors">{item}</Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 Alt Credit. All rights reserved. SEBI Registered.
          </p>
          <p className="text-xs text-muted-foreground text-center md:text-right max-w-lg">
            Investments in bonds are subject to market risks. Please read all related documents carefully before investing.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
