import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator } from "lucide-react";
import { Bond } from "@/data/bonds";
import { Button } from "@/components/ui/button";

interface YieldCalculatorProps {
  bond: Bond;
}

const YieldCalculator = ({ bond }: YieldCalculatorProps) => {
  const [amount, setAmount] = useState(bond.minInvestment);
  const tenureYears = parseInt(bond.tenure);

  const annualInterest = (amount * bond.couponRate) / 100;
  const totalInterest = annualInterest * (isNaN(tenureYears) ? 3 : tenureYears);
  const maturityAmount = amount + totalInterest;

  const presets = [10000, 50000, 100000, 500000];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-gradient-card border border-border rounded-xl p-6"
    >
      <h2 className="text-xl font-display text-foreground mb-6 flex items-center gap-2">
        <Calculator size={20} className="text-primary" /> Returns Calculator
      </h2>

      <div className="space-y-6">
        <div>
          <label className="text-sm text-muted-foreground mb-2 block">Investment Amount</label>
          <input
            type="range"
            min={bond.minInvestment}
            max={1000000}
            step={5000}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full accent-primary h-2 bg-border rounded-full appearance-none cursor-pointer"
          />
          <div className="flex justify-between mt-2">
            <span className="text-2xl font-display text-foreground">₹{amount.toLocaleString()}</span>
          </div>
          <div className="flex gap-2 mt-3">
            {presets.map((p) => (
              <button
                key={p}
                onClick={() => setAmount(p)}
                className={`text-xs px-3 py-1.5 rounded-lg border transition-colors ${
                  amount === p
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-muted-foreground hover:border-primary/30"
                }`}
              >
                ₹{p >= 100000 ? `${p / 100000}L` : `${p / 1000}K`}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
          <div className="text-center">
            <p className="text-xs text-muted-foreground mb-1">Annual Interest</p>
            <p className="text-lg font-display text-foreground">₹{annualInterest.toLocaleString()}</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-muted-foreground mb-1">Total Interest</p>
            <p className="text-lg font-display text-primary">₹{totalInterest.toLocaleString()}</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-muted-foreground mb-1">Maturity Value</p>
            <p className="text-lg font-display text-gradient-gold">₹{maturityAmount.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default YieldCalculator;
