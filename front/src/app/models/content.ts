export interface Content {
  home_image: HomeImage;
  social: Social;
  about: About;
  projects: Project[];
  certificates: Certificate[];
  contact: Contact;
}

export interface HomeImage {
  url: string;
  alt_en: string;
  alt_pt: string;
}

export interface Social {
  links: SocialLink[];
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

export interface Project {
  id: string
  title: string
  repo_url: string
  web_url: string
  api_url: string
  image_url: string
  desc_en: string
  desc_pt: string
}

export interface Certificate {
  id: string
  title: string
  web_url: string
  image_url: string
  desc_en: string
  desc_pt: string
}

export interface Contact {
  mobile: string
  wa_en: string
  wa_pt: string
  resume_url: string
  github: GitHub
}

export interface GitHub {
  username: string
  repo_name: string
  url: string
}
