export type Service = {
  title: string;
  description: string;
  icon: "landing" | "profile" | "dashboard" | "catalog" | "web3" | "support";
  price: string;
};

export type PortfolioCategory = "WEB3 / AI" | "BRAND / KATALOG" | "DASHBOARD" | "KOMUNITAS";

export type PortfolioItem = {
  fig: string;
  title: string;
  description: string;
  category: PortfolioCategory;
  stack: string[];
  url: string;
  image: string;
};