export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
  badge?: string;
}

export interface NavbarProps {
  items?: NavItem[];
  brandName?: string;
  ctaText?: string;
  ctaHref?: string;
}
