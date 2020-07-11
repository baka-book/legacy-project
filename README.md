BakaBook is a the new concept of social network that allows you to search a book from a big data-base with specifiying the title , the author , the subject or the ISBN of the book .
you can also create a user profile containing several informations about the user that can be edited .

## Installation-instructions

Here are the steps to get started with BakaBook :
*download the repo from this github link : https://github.com/baka-book/legacy-project.
*run the command line in your terminal : npm install.
\*run you code with the command line in the terminal : ng serve --open or npm start.
Enjoy your journey in our site

**Demo**
you can see the demo video on this link : https://youtu.be/Sn2FRCdHyRU

## Table of Contents

- [Versions](#versions)
- [Demo](#demo)
- [Installation](#Installation-instructions)
- [File Structure](#file-structure)
- [Resources](#resources)
- [Reporting Issues](#reporting-issues)
- [Licensing](#licensing)
- [Useful Links](#useful-links)

## Versions

| HTML5 | Angular 9 version "9.0.5" | CSS3 |

## Tools

| Buttons                                                                                                                                                                                          | Inputs                                                                                                                                                                                         | Navbars                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [![Buttons](https://github.com/creativetimofficial/public-assets/blob/master/argon-design-system-angular/buttons.png?raw=true)](https://demos.creative-tim.com/argon-design-system-angular/home) | [![Inputs](https://github.com/creativetimofficial/public-assets/blob/master/argon-design-system-angular/inputs.png?raw=true)](https://demos.creative-tim.com/argon-design-system-angular/home) | [![Navbar](https://github.com/creativetimofficial/public-assets/blob/master/argon-design-system-angular/navbars.png?raw=true)](https://demos.creative-tim.com/argon-design-system-angular/home) |

| Login Page                                                                                                                                                                                          |     | Profile Page                                                                                                                                                                                                  | Register Page                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [![Login Page](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-design-system-angular/login.png)](https://demos.creative-tim.com/argon-design-system-angular/login) |     | [![Profile Page](https://github.com/creativetimofficial/public-assets/blob/master/argon-design-system-angular/profile.png?raw=true)](https://demos.creative-tim.com/argon-design-system-angular/user-profile) | [![Register Page](https://github.com/creativetimofficial/public-assets/blob/master/argon-design-system-angular/register.png?raw=true)](https://demos.creative-tim.com/argon-design-system-angular/register) |

## File Structure

Within the download you'll find the following directories and files:

```

LegacyProject
├── ISSUES_TEMPLATE.md
├── angular.json
├── e2e
├── package-lock.json
├── package.json
├── src
│   ├── app
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── app.routing.ts
│   │   ├── home
│   │   │   ├── home.component.html
│   │   │   ├── home.component.scss
│   │   │   ├── home.component.spec.ts
│   │   │   ├── home.component.ts
│   │   │   └── home.module.ts
│   │   ├── profile
│   │   │   ├── profile.component.html
│   │   │   ├── profile.component.scss
│   │   │   ├── profile.component.spec.ts
│   │   │   └── profile.component.ts
|   |   |
│   │   ├── login
│   │   │   ├── login.component.css
│   │   │   ├── login.component.html
│   │   │   ├── login.component.spec.ts
│   │   │   └── login.component.ts
│   │   ├── profile
│   │   │   ├── profile.component.html
│   │   │   ├── profile.component.scss
│   │   │   ├── profile.component.spec.ts
│   │   │   └── profile.component.ts
│   │   ├── sections
│   │   │   ├── alerts-section
│   │   │   │   ├── alerts-section.component.css
│   │   │   │   ├── alerts-section.component.html
│   │   │   │   ├── alerts-section.component.spec.ts
│   │   │   │   └── alerts-section.component.ts
│   │   │   ├── angular-section
│   │   │   │   ├── angular-section.component.css
│   │   │   │   ├── angular-section.component.html
│   │   │   │   ├── angular-section.component.spec.ts
│   │   │   │   └── angular-section.component.ts
│   │   │   ├── buttons-section
│   │   │   │   ├── buttons-section.component.css
│   │   │   │   ├── buttons-section.component.html
│   │   │   │   ├── buttons-section.component.spec.ts
│   │   │   │   └── buttons-section.component.ts
│   │   │   ├── crs-section
│   │   │   │   ├── crs-section.component.css
│   │   │   │   ├── crs-section.component.html
│   │   │   │   ├── crs-section.component.spec.ts
│   │   │   │   └── crs-section.component.ts
│   │   │   ├── inputs-section
│   │   │   │   ├── inputs-section.component.css
│   │   │   │   ├── inputs-section.component.html
│   │   │   │   ├── inputs-section.component.spec.ts
│   │   │   │   └── inputs-section.component.ts
│   │   │   ├── modal
│   │   │   │   ├── modal.component.html
│   │   │   │   ├── modal.component.scss
│   │   │   │   ├── modal.component.spec.ts
│   │   │   │   └── modal.component.ts
│   │   │   ├── navigation-section
│   │   │   │   ├── navigation-section.component.css
│   │   │   │   ├── navigation-section.component.html
│   │   │   │   ├── navigation-section.component.spec.ts
│   │   │   │   └── navigation-section.component.ts
│   │   │   ├
│   │   │   │  
│   │   │   │  
│   │   │   │  
│   │   │   │  
│   │   │   ├── sections.component.css
│   │   │   ├── sections.component.html
│   │   │   ├── sections.component.spec.ts
│   │   │   ├── sections.component.ts
│   │   │   ├── sections.module.ts
│   │   │   ├
│   │   │   │  
│   │   │   │  
│   │   │   │  
│   │   │   │  
│   │   │   |
│   │   │   │  
│   │   │   │  
│   │   │   │  
│   │   │   │  
│   │   │   └── versions-section
│   │   │       ├── versions-section.component.css
│   │   │       ├── versions-section.component.html
│   │   │       ├── versions-section.component.spec.ts
│   │   │       └── versions-section.component.ts
│   │   ├── shared
│   │   │   ├── footer
│   │   │   │   ├── footer.component.html
│   │   │   │   ├── footer.component.scss
│   │   │   │   ├── footer.component.spec.ts
│   │   │   │   └── footer.component.ts
│   │   │   └── navbar
│   │   │       ├── navbar.component.html
│   │   │       ├── navbar.component.scss
│   │   │       ├── navbar.component.spec.ts
│   │   │       └── navbar.component.ts
│   │   └── signup
│   │       ├── signup.component.html
│   │       ├── signup.component.scss
│   │       ├── signup.component.spec.ts
│   │       └── signup.component.ts
│   ├── assets
│   │   ├── css
│   │   ├── img
│   │   ├── js
│   │   ├── scss
│   │   │   ├── angular
│   │   │   ├── argon.scss
│   │   │   ├── bootstrap
│   │   │   └── custom
│   │   └── vendor
│   ├── browserslist
│   ├── environments
│   ├── favicon.ico
│   ├── index.html
│   ├── karma.conf.js
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.css
│   ├── test.ts
│   ├── tsconfig.app.json
│   ├── tsconfig.spec.json
│   └── tslint.json
├── tsconfig.json
└── tslint.json

```

## Reporting Issues

We use GitHub Issues as the official bug tracker for our site.

## Licensing

- Copyright 2020 BakaBook Corporation Limited (https://github.com/baka-book/legacy-project)

- Licensed under MIT (https://github.com/baka-book/legacy-project/LICENSE.md)

## Useful Links

- [Angular documentation](https://angular.io/guide/architecture)
- [bootstrap documentation](https://getbootstrap.com/)
- [Premium Products](https://www.creative-tim.com/bootstrap-themes/premium?ref=adsa-github-readme) from Creative Tim

### Social Media

Twitter: <https://twitter.com>

Facebook: <https://www.facebook.com/BakaBook>

Dribbble: <https://dribbble.com/BakaBook>

Instagram: <https://www.instagram.com/Bakabook>