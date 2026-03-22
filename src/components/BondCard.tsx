import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Shield } from "lucide-react";
import { Bond } from "@/data/bonds";

interface BondCardProps {
  bond: Bond;
  index: number;
}

const BondCard = ({ bond, index }: BondCardProps) => {
  const ratingColor = bond.rating.startsWith("AAA")
    ? "text-success"
    : bond.rating.startsWith("AA")
    ? "text-primary"
    : "text-info";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
    >
      <Link
        to={`/bond/${bond.id}`}
        className="block bg-gradient-card border border-border rounded-xl p-6 bond-card-hover group"
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors">
              {bond.name}
            </h3>
            <p className="text-xs text-muted-foreground mt-1">{bond.issuer}</p>
          </div>
          <span className={`text-sm font-bold ${ratingColor} bg-surface-elevated px-2.5 py-1 rounded-md`}>
            {bond.rating}
          </span>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4">
          <div>
            <p className="text-xs text-muted-foreground">Yield</p>
            <p className="text-lg font-display text-gradient-gold">{bond.yield}%</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Tenure</p>
            <p className="text-sm font-medium text-foreground">{bond.tenure}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Min. Invest</p>
            <p className="text-sm font-medium text-foreground">₹{bond.minInvestment.toLocaleString()}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-4">
          {bond.secured && (
            <span className="inline-flex items-center gap-1 text-xs text-success bg-success/10 px-2 py-0.5 rounded-full">
              <Shield size={10} /> Secured
            </span>
          )}
          {bond.listed && (
            <span className="inline-flex items-center gap-1 text-xs text-info bg-info/10 px-2 py-0.5 rounded-full">
              <TrendingUp size={10} /> Listed
            </span>
          )}
          <span className="text-xs text-muted-foreground">{bond.interestPayment}</span>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-border">
          <span className="text-xs text-muted-foreground">{bond.ratingAgency} Rated</span>
          <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
            View Details <ArrowRight size={14} />
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default BondCard;
