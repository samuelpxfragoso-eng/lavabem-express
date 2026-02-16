
export interface NavItem {
  label: string;
  href: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
  avatar: string;
}

export interface Plan {
  id: string;
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export interface FabricCareInfo {
  id: string;
  title: string;
  content: string;
  icon: string;
}

export interface Differential {
  id: number;
  title: string;
  description: string;
  icon: string;
}
