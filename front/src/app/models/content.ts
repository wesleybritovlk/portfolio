export interface Content {
  home_image: HomeImage;
  social: Social;
  about: About;
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

export interface About {
  desc_en: string
  desc_pt: string
  skills: Skill[]
}

export interface Skill {
  id: string
  tech_name: string
  alt_en: string
  alt_pt: string
}
