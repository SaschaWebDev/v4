module.exports = {
  siteTitle: 'Sascha Majewsky | Softwareentwickler',
  siteDescription:
    'Ich bin Sascha Majewsky und arbeite als passionierter Softwareentwickler aus Hamburg für Projekte im Web. Dabei entwickle ich hochwertige Webanwendungen und Websites mit einem lösungsorientierten Fokus, sowie hohem Anspruch an die Qualität des Codes und UI/UX.',
  siteKeywords:
    'Sascha Majewsky, Sascha, Majewsky, saschamajewsky, softwareentwickler, front-end engineer, web developer, javascript, northeastern, webentwickler',
  siteUrl: 'https://saschamajewsky.de',
  siteLanguage: 'de_DE',
  googleAnalyticsID: 'xxxxxx',
  googleVerification: 'xxxx',
  name: 'Sascha Majewsky',
  location: 'Hamburg, Deutschland',
  email: 'sascha.majewsky@pm.me',
  github: 'https://github.com/SaschaWebDev',
  twitterHandle: '@SaschaWebDev',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/SaschaWebDev',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/saschamajewsky/',
    },
    {
      name: 'Xing',
      url: 'https://www.xing.com/profile/Sascha_Majewsky5/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/dashboard/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/SaschaWebDev',
    },
  ],

  navLinks: [
    {
      name: 'Über mich',
      url: '/#about',
    },
    {
      name: 'Erfahrung',
      url: '/#jobs',
    },
    {
      name: 'Projekte',
      url: '/#projects',
    },
    {
      name: 'Kontakt',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
