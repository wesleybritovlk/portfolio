<h1 align="center">Portfolio</h1>

### Description

<p align="center justify">
This is the repository of my personal Portfolio, with the aim of making something that is not just a static portfolio,
but that can however be changed via the API.
</p>

## FRONTEND

<p align="center justify">
A SPA front-end made with the Angular framework version 16, chosen by best compatibility with the NGX-Translate translation library, following a small pre-defined component structure and Styled Components technique.
</p>

#### Tech Stack:

    Angular@16

#### Libraries:

    NGX-Translate, Swiper@8, AOS, Remix Icon, Flag-Icons, DEVICON, Github-Buttons

#### Color Reference:

- --primary-color-light: ![#b421ce](https://via.placeholder.com/10/b421ce?text=+) #b421ce;
- --primary-color: ![#8e24aa](https://via.placeholder.com/10/8e24aa?text=+) #8e24aa;
- --primary-color-dark: ![#6a1b9a](https://via.placeholder.com/10/6a1b9a?text=+) #6a1b9a;
- --bkg-color: ![#f5f5f5](https://via.placeholder.com/10/f5f5f5?text=+)
  #f5f5f5 | ![#212121](https://via.placeholder.com/10/212121?text=+) #212121;
- --text-color: ![#000](https://via.placeholder.com/10/000?text=+)
  #000 | ![#fff](https://via.placeholder.com/10/fff?text=+) #fff;
- --btn-color: ![#8e24aa](https://via.placeholder.com/10/8e24aa?text=+) --primary-color;
- --btn-text-color: ![#fff](https://via.placeholder.com/10/fff?text=+) #fff; 
- --modal-color: ![#FFFFFFBF](https://via.placeholder.com/10/FFFFFFBF?text=+) #FFFFFFBF | ![#000000BF](https://via.placeholder.com/10/000000BF?text=+) #000000BF;

#### Components:

- [ ] AppComponent:
    - [ ] HeaderComponent:
        - [X] Logo:
            - [X] TipewriterComponent
        - [ ] Nav:
            - [X] CheckButtonComponent
            - [ ] GlowButtonComponent
    - [X] HomeComponent:
        - [X] HeroText
        - [X] HeroImage:
            - [X] ProfileImageComponent
    - [X] SocialComponent:
        - [X] SocialLinks
        - [X] SocialEmail
    - [X] AboutComponent:
        - [X] AboutDesc
        - [X] SkillsIcons
    - [X] ProjectsComponent:
        - [X] SwipeContainer:
            - [X] CardComponent
    - [X] ContactComponent:
        - [X] ContactInfo
        - [X] FormComponent
    - [X] ReturnButtonComponent
    - [X] FooterComponent
        - [X] Copyuser
        - [X] GithubStarComponent

#### Images:

<p align="center">
<img src="./docs/plan/web-desktop-plan.svg" alt="web desktop plan" height="500"/>
<img src="./docs/plan/web-mobile-plan.svg" alt="drawing" height="500"/>
</p>

## BACKEND

<p align="center justify">
This is an API developed in NestJS with two main endpoints: 'Page Content' (GET method only), 'Email Form' (POST method only) to feed the frontend and some other endpoints developed to populate the 'Page Content' main endpoint, in addition, 'Page Content' uses MongoDB as the main database and a memory cache. The 'Email Form' does not use a bank, it just sends the POST directly to the application's email via SMTP.
</p>

#### Tech Stack:

    NestJS@10, MongoDB Cloud

#### Libraries:

    Swagger, NodeMailer, TypeORM, Cache-Manager

#### Tables:

```mermaid
classDiagram
    Content --> HomeImage
    Content --> Social
    Content --> About
    Content *-- Project
    Content *-- Certificate
    Content --> Contact
    Social *-- SocialLink
    About *-- Skill
    Contact --> Github
    class Content {
        HomeImage homeImage
        Social social
        About about
        List~Project~ projects
        List~Certificate~ certificates
        Contact contact
    }
    class HomeImage {
        String url
        String altEn
        String altPt
    }
    class Social {
        List~SocialLink~ links
        String email
    }
    class SocialLink {
        uuid id
        String name
        String url
    }
    class About {
        String descEn
        String descPt
        List~Skill~ skills
    }
    class Skill {
        uuid id
        String techName
        String altEn
        String altPt
    }
    class Project {
        uuid id
        String title
        String repoUrl
        String webUrl
        String apiUrl
        String imageUrl
        String descEn
        String descPt
    }
    class Certificate {
        uuid id
        String title
        String webUrl
        String imageUrl
        String descEn
        String descPt
    }
    class Contact {
        String mobile
        String waEN
        String waPT
        String resumeURL
        Github github
    }
    class Github {
        String username
        String repoName
        String url
    }

    note for Form "POST method only"
    class Form {
        String firstName
        String lastName
        String email
        String message
    }
```

#### JSON:

```JSON
{
  "content": {
    "home_image": {
      "url": "",
      "alt_en": "",
      "alt_pt": ""
    },
    "social": {
      "links": [
        {
          "id": "uuid",
          "name": "",
          "url": ""
        }
      ],
      "email": ""
    },
    "about": {
      "desc_en": "",
      "desc_pt": "",
      "skills": [
        {
          "id": "uuid",
          "tech_name": "",
          "alt_en": "",
          "alt_pt": ""
        }
      ]
    },
    "projects": [
      {
        "id": "uuid",
        "title": "",
        "repo_url": "",
        "web_url": "",
        "api_url": "",
        "image_url": "",
        "desc_en": "",
        "desc_pt": ""
      }
    ],
    "certificates": [
      {
        "id": "uuid",
        "title": "",
        "web_url": "",
        "image_url": "",
        "desc_en": "",
        "desc_pt": ""
      }
    ],
    "contact": {
      "mobile": "",
      "wa_en": "",
      "wa_pt": "",
      "resume_url": "",
      "github": {
        "username": "",
        "repo_name": "",
        "url": ""
      }
    }
  },
  "form": {
    "first_name": "",
    "last_name": "",
    "email": "",
    "message": ""
  }
}
```

## License

This project is [MIT](https://choosealicense.com/licenses/mit/) licensed.
