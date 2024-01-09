export interface Content {
  home_image: HomeImage;
  social: Social;
}

export interface HomeImage {
  url: string;
  alt_en: string;
  alt_pt: string;
}

export interface Social {
  links: SocialLink[]
  email: string;
}

export interface SocialLink {
  id: string
  name: string
  url: string
}
