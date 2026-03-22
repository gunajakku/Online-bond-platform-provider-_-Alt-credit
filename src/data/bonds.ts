export interface Bond {
  id: string;
  name: string;
  issuer: string;
  type: string;
  rating: string;
  ratingAgency: string;
  yield: number;
  couponRate: number;
  faceValue: number;
  minInvestment: number;
  maturityDate: string;
  tenure: string;
  interestPayment: string;
  secured: boolean;
  listed: boolean;
  isin: string;
  category: string;
  description: string;
  highlights: string[];
}

export const bonds: Bond[] = [
  {
    id: "muthoot-finance-ncd",
    name: "Muthoot Finance NCD",
    issuer: "Muthoot Finance Ltd",
    type: "Non-Convertible Debenture",
    rating: "AA+",
    ratingAgency: "CRISIL",
    yield: 9.25,
    couponRate: 9.0,
    faceValue: 1000,
    minInvestment: 10000,
    maturityDate: "2029-03-15",
    tenure: "3 Years",
    interestPayment: "Quarterly",
    secured: true,
    listed: true,
    isin: "INE414G07FT8",
    category: "Corporate Bonds",
    description: "Muthoot Finance, India's largest gold loan NBFC, offers secured NCDs backed by gold loan receivables with consistent quarterly payouts.",
    highlights: ["Gold loan backed", "Largest gold NBFC", "25+ years track record", "Quarterly income"],
  },
  {
    id: "bajaj-finance-bond",
    name: "Bajaj Finance Bond",
    issuer: "Bajaj Finance Ltd",
    type: "Non-Convertible Debenture",
    rating: "AAA",
    ratingAgency: "CRISIL",
    yield: 8.15,
    couponRate: 8.0,
    faceValue: 1000,
    minInvestment: 10000,
    maturityDate: "2028-06-30",
    tenure: "2 Years",
    interestPayment: "Annual",
    secured: true,
    listed: true,
    isin: "INE296A07RQ5",
    category: "Corporate Bonds",
    description: "India's most trusted NBFC offering highest safety AAA-rated secured bonds with strong fundamentals and consistent growth.",
    highlights: ["AAA Rated - Highest Safety", "India's largest NBFC", "Strong balance sheet", "Annual interest"],
  },
  {
    id: "nhai-tax-free",
    name: "NHAI Tax-Free Bond",
    issuer: "National Highways Authority of India",
    type: "Tax-Free Bond",
    rating: "AAA",
    ratingAgency: "ICRA",
    yield: 5.65,
    couponRate: 5.65,
    faceValue: 1000,
    minInvestment: 5000,
    maturityDate: "2033-01-15",
    tenure: "10 Years",
    interestPayment: "Annual",
    secured: false,
    listed: true,
    isin: "INE906B07HN6",
    category: "Tax-Free Bonds",
    description: "Government-backed tax-free bonds from NHAI offering guaranteed income exempt from income tax, ideal for high tax bracket investors.",
    highlights: ["0% tax on interest", "Government backed", "AAA rated", "Long term wealth creation"],
  },
  {
    id: "pfc-psu-bond",
    name: "PFC PSU Bond",
    issuer: "Power Finance Corporation Ltd",
    type: "PSU Bond",
    rating: "AAA",
    ratingAgency: "CARE",
    yield: 7.85,
    couponRate: 7.75,
    faceValue: 1000,
    minInvestment: 10000,
    maturityDate: "2030-09-20",
    tenure: "5 Years",
    interestPayment: "Semi-Annual",
    secured: false,
    listed: true,
    isin: "INE134E08KR0",
    category: "PSU Bonds",
    description: "Power Finance Corporation, a Maharatna PSU under Ministry of Power, offering sovereign-grade credit quality bonds.",
    highlights: ["Maharatna PSU", "Government ownership", "Semi-annual income", "Power sector exposure"],
  },
  {
    id: "tata-capital-ncd",
    name: "Tata Capital NCD",
    issuer: "Tata Capital Financial Services",
    type: "Non-Convertible Debenture",
    rating: "AAA",
    ratingAgency: "CRISIL",
    yield: 8.40,
    couponRate: 8.25,
    faceValue: 1000,
    minInvestment: 10000,
    maturityDate: "2029-12-15",
    tenure: "4 Years",
    interestPayment: "Annual",
    secured: true,
    listed: true,
    isin: "INE306N07FH2",
    category: "Corporate Bonds",
    description: "Tata Group's financial services arm offering AAA-rated secured NCDs with the trust and legacy of India's most respected conglomerate.",
    highlights: ["Tata Group legacy", "AAA rated", "Secured assets", "Strong governance"],
  },
  {
    id: "irfc-bond",
    name: "IRFC PSU Bond",
    issuer: "Indian Railway Finance Corp",
    type: "PSU Bond",
    rating: "AAA",
    ratingAgency: "CRISIL",
    yield: 7.45,
    couponRate: 7.35,
    faceValue: 1000,
    minInvestment: 10000,
    maturityDate: "2031-03-31",
    tenure: "6 Years",
    interestPayment: "Semi-Annual",
    secured: false,
    listed: true,
    isin: "INE053F07BE7",
    category: "PSU Bonds",
    description: "IRFC, the dedicated financing arm of Indian Railways, offering bonds backed by India's railway infrastructure expansion.",
    highlights: ["Railway sector", "Government backed", "Infrastructure growth", "Semi-annual payout"],
  },
];

export const bondCategories = [
  {
    name: "Corporate Bonds",
    description: "High-yield bonds from India's top companies",
    icon: "🏢",
    returnRange: "8-12%",
  },
  {
    name: "Tax-Free Bonds",
    description: "Pay 0% tax on interest. Issued by PSUs.",
    icon: "🛡️",
    returnRange: "5-7%",
  },
  {
    name: "PSU Bonds",
    description: "Government-owned enterprise bonds",
    icon: "🏛️",
    returnRange: "7-9%",
  },
  {
    name: "Secured Bonds",
    description: "Backed by tangible assets as collateral",
    icon: "🔒",
    returnRange: "8-10%",
  },
];
