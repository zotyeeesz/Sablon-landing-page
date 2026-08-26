export type LinkTarget = "_self" | "_blank";

export interface LinkItem {
  label: string;
  href: string;
  target?: LinkTarget;
  rel?: string;
}

export interface ActionLink extends LinkItem {
  ariaLabel?: string;
}

export interface BrandConfig {
  name: string;
  role: string;
  initials: string;
  logo?: string;
  description?: string;
}

export interface ImageAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface SeoConfig {
  title: string;
  description: string;
  siteUrl?: string;
  canonical?: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  twitterCard?: "summary" | "summary_large_image";
  noindex?: boolean;
}

export interface ThemeConfig {
  colorScheme: "light" | "dark";
  variables: Record<`--${string}`, string>;
}

export interface SiteAssetsConfig {
  faviconSvg?: string;
  faviconIco?: string;
  preloadImages?: string[];
}

export interface HeaderConfig {
  cta?: ActionLink;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface HeroConfig {
  eyebrow: string;
  title: string;
  lead: string;
  image: ImageAsset;
  primaryAction: ActionLink;
  secondaryAction?: ActionLink;
  stats?: HeroStat[];
}

export interface SectionIntro {
  eyebrow: string;
  title: string;
  lead?: string;
}

export interface ServiceItem {
  title: string;
  text: string;
}

export interface AboutConfig extends SectionIntro {
  steps: string[];
}

export interface TrustItem {
  value: string;
  label: string;
}

export interface TrustConfig {
  eyebrow: string;
  title: string;
  items: TrustItem[];
}

export interface CtaConfig {
  eyebrow: string;
  title: string;
  text: string;
  primaryAction: ActionLink;
  secondaryAction?: ActionLink;
}

export type ContactField =
  | {
      id: string;
      name: string;
      label: string;
      type?: "text" | "email" | "tel" | "url";
      autocomplete?: string;
      placeholder?: string;
      required?: boolean;
    }
  | {
      id: string;
      name: string;
      label: string;
      type: "textarea";
      rows?: number;
      placeholder?: string;
      required?: boolean;
    };

export interface ContactFormConfig {
  action: string;
  method: "get" | "post";
  enctype?: "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain";
  submitLabel: string;
  fields: ContactField[];
}

export interface ContactConfig extends SectionIntro {
  email: string;
  phone?: string;
  city?: string;
  form: ContactFormConfig;
}

export interface LegalConfig {
  title: string;
  description: string;
  lead: string;
  operatorName: string;
  brandName: string;
  address: string;
  email: string;
  phone?: string;
  taxNumber?: string;
  registrationAuthority?: string;
  registrationNumber?: string;
  hostingProvider?: string;
  hostingProviderAddress?: string;
  hostingProviderEmail?: string;
  activity: string;
  updatedAt: string;
}

export interface FooterConfig {
  copyright?: string;
  links: LinkItem[];
}

export type LandingSectionId = "hero" | "services" | "aboutTrust" | "cta" | "contact";

export interface LandingSectionConfig {
  id: LandingSectionId;
  enabled?: boolean;
}

export interface LandingConfig {
  sections: LandingSectionConfig[];
}

export interface SiteConfig {
  lang: string;
  seo: SeoConfig;
  brand: BrandConfig;
  theme: ThemeConfig;
  assets: SiteAssetsConfig;
  header: HeaderConfig;
  navigation: LinkItem[];
  landing: LandingConfig;
  hero: HeroConfig;
  servicesIntro: SectionIntro;
  services: ServiceItem[];
  about: AboutConfig;
  trust: TrustConfig;
  cta: CtaConfig;
  contact: ContactConfig;
  legal: LegalConfig;
  footer: FooterConfig;
}
