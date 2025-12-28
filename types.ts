export interface NavItem {
  label: string;
  path: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Review {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface ImageAsset {
  name: string;
  url: string;
  description: string;
}