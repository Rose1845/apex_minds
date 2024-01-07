interface MarketingPlan {
  name: string;
  features: string[];
  desc: string;
  price: string;
}

export const basicMarketing: MarketingPlan = {
  name: "Basic",
  desc: "              Best option for personal use & for your next project.",
  features: [
    "Digital Marketing Strategy",
    "Social Media Management",
    "Monthly Analytics Report",
    "Bookkeeping Services",
    "Expense Tracking",
    "Year-End Financial Review",
  ],
  price: "$499",
};

export const proMarketing: MarketingPlan = {
  name: "Pro",
  desc: "Relevant for multiple users, extended & premium support.",

  features: [
    "Advanced Digital Marketing Strategy",
    "Social Media Management (3 platforms)",
    "Online Advertising",
    "Monthly Analytics Report",
    "Accounting Essentials Inclusions",
    "Financial Planning Services",
  ],
  price: "$899",
};

export const premiumMarketing: MarketingPlan = {
  name: "Premium ",
  desc: "Best for large scale uses and extended redistribution rights.",
  features: [
    "Tailored Marketing Strategies",
    "Multi-Platform Management",
    "Branding Consultation",
    "Dedicated Account Manager",
    "Detailed Monthly Analytics Report",
    "Full Accounting Services",
    "Advanced Financial Planning",
  ],
  price: "$1299",
};

// Custom Solutions
const customSolutions =
  "For businesses with unique needs, we offer custom-tailored solutions. Contact us for a personalized quote based on your specific requirements.";

// Exporting all plans
export const marketingPlans: MarketingPlan[] = [
  basicMarketing,
  proMarketing,
  premiumMarketing,
];

export const customSolution: string = customSolutions;
