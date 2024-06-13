const config = {
  locales: ['en'],
  theme: {
    light: {
      colors: {
        primary100: '#b5f5d2',  // Lightened version of #3ecf62
        primary200: '#75e49d',  // Lightened version of #3ecf62
        primary500: '#3ecf62',
        buttonPrimary500: '#f7b7b2',  // A contrasting color
        primary600: '#32a74f',  // Darkened version of #3ecf62
        buttonPrimary600: '#ea4335',  // A contrasting color
        primary700: '#25753b'   // Darkened version of #3ecf62

      },
    },

    // overwrite dark theme properties
    dark: {
      primary100: '#32a74f',     // Darkened version of #3ecf62
      primary200: '#289245',     // Slightly less darkened
      primary500: '#20803b',     // Base color slightly darkened
      buttonPrimary500: '#e5786f',
      primary600: '#196533',     // More darkened version
      buttonPrimary600: '#d23e32', // Slightly darker yellow, updated
      primary700: '#104c28'      // Significantly darkened
    },
  },
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "Big Wave Development",
      'app.components.LeftMenu.navbrand.workplace': 'Admin Dashboard',
      "Auth.form.welcome.title": "Welcome to BWD",
      "Auth.form.welcome.subtitle": "Log in to your Admin account",
      "app.components.HomePage.welcome.again": "Welcome to Big Wave Development👋",
      "app.components.HomePage.welcomeBlock.content.again": "Big Wave Development has been providing skilled performance through its highly crafted professionals. Our clients speak volumes of the services we have provided since our inception. Customized and tailor-made support from our end has made its way out of complex situations. We're a team of problem solvers, specialists, strategists, and makers on a mission to assist each other and our clients discover their best selves. The urge to deliver high and quality work is our prime objective and we strive to outperform our competitors.",
      "HomePage.helmet.title": "Big Wave Development | Dashboard",

    },
  },
  tutorials: false,
  notifications: { releases: false },
};

const bootstrap = (app) => {
  const styleTag = document.createElement("style");
  styleTag.innerText = `
    aside[aria-labelledby="join-the-community"],
    .home-page #main-content>div:first-child>img,
    .sc-bdvvtL.jvoRhY,
    .sc-bdvvtL.fFZSIZ.sc-fbyfCU.czKgBP{
      display: none !important;
    }
  `;
  document.head.appendChild(styleTag);
};




export default {
  config,
  bootstrap,
};
