import {ProjectDetailedInterface} from '../types/projects.interface';

export const PROJECTS: ProjectDetailedInterface[] = [
  {
    id: 1,
    title: 'PROJECT.PORTFOLIO.TITLE',
    slug: 'portfolio',
    type: 'PROJECT.PORTFOLIO.TYPE',
    typeDescription: 'PROJECT.PORTFOLIO.TYPE_DESCRIPTION',
    description: 'PROJECTS.PORTFOLIO.DESCRIPTION',
    descriptionShort: 'PROJECT.PORTFOLIO.DESCRIPTION_SHORT',
    techStack: [
      'HTML5',
      'Tailwind CSS',
      'Angular 18+',
      'RxJS',
      'Signals API',
      'TypeScript',
      'Responsive Design',
      'Animations',
      'ngx-translate',
      'Local Storage',
      'Firebase',
      'Firestore',
      'Angular Animations'
    ],
    tools: ['WebStorm', 'GitHub', 'GIMP'],
    images: {
      thumbnail: '/img/projects/portfolio_thumbnail.webp',
      large: '/img/projects/portfolio_large.webp',
    },
    url: 'https://portfolio-abe24.web.app',
    details: {
      what: 'PROJECT.PORTFOLIO.DETAILS.ABOUT_PROJECT',
      overview: 'PROJECT.PORTFOLIO.DETAILS.OVERVIEW_PROJECT',
      special: 'PROJECT.PORTFOLIO.DETAILS.SPECIAL',
      challenges: 'PROJECT.PORTFOLIO.DETAILS.CHALLENGES'
    },
    status: 'PROJECT.PORTFOLIO.DETAILS.STATUS'
  },
  {
    id: 2,
    title: 'PROJECT.WEATHER_FORECAST.TITLE',
    slug: 'weather-forecast',
    type: 'PROJECT.WEATHER_FORECAST.TYPE',
    typeDescription: 'PROJECT.WEATHER_FORECAST.TYPE_DESCRIPTION',
    description: 'PROJECTS.WEATHER_FORECAST.DESCRIPTION',
    descriptionShort: 'PROJECT.WEATHER_FORECAST.DESCRIPTION_SHORT',
    techStack: [
      'HTML5',
      'SCSS',
      'SPA',
      'Angular 18+',
      'Signals API',
      'RxJS',
      'TypeScript',
      'REST API',
      'Responsive Design',
      'OpenWeatherMap',
    ],
    tools: ['WebStorm', 'Tailwind CSS', 'GitHub', 'OpenWeatherMap API'],
    images: {
      thumbnail: '/img/projects/weather_forecast_thumbnail.webp',
      large: '/img/projects/weather_forecast_large.webp'
    },
    url: 'https://weather-application-e4426.web.app',
    repositoryUrl: 'https://github.com/Pistalierro/app-weather',
    details: {
      what: 'PROJECT.WEATHER_FORECAST.DETAILS.ABOUT_PROJECT',
      overview: 'PROJECT.WEATHER_FORECAST.DETAILS.OVERVIEW_PROJECT',
      special: 'PROJECT.WEATHER_FORECAST.DETAILS.SPECIAL',
      challenges: 'PROJECT.WEATHER_FORECAST.DETAILS.CHALLENGES'
    },
    status: 'PROJECT.WEATHER_FORECAST.DETAILS.STATUS'
  },
  {
    id: 3,
    title: 'PROJECT.WOT_BLITZ_STATISTICS.TITLE',
    slug: 'wot-blitz-statistics',
    type: 'PROJECT.WOT_BLITZ_STATISTICS.TYPE',
    typeDescription: 'PROJECT.WOT_BLITZ_STATISTICS.TYPE_DESCRIPTION',
    description: 'PROJECTS.WOT_BLITZ_STATISTICS.DESCRIPTION',
    descriptionShort: 'PROJECT.WOT_BLITZ_STATISTICS.DESCRIPTION_SHORT',
    techStack: [
      'HTML5',
      'SCSS',
      'SPA',
      'Angular 18+',
      'RxJS',
      'Signals API',
      'TypeScript',
      'REST API',
      'IndexedDB',
      'Local Storage',
      'Angular Material',
      'Responsive Design',
      'Firebase',
      'Cloud Functions',
      'Animations',
      'ngx-translate'
    ],
    tools: ['WebStorm', 'Angular Material', 'GitHub'],
    images: {
      thumbnail: '/img/projects/wot_blitz_statistics_thumbnail.webp',
      large: '/img/projects/wot_blitz_statistics_large.webp',
    },
    url: 'https://wot-blitz-statistics.web.app/home',
    details: {
      what: 'PROJECT.WOT_BLITZ_STATISTICS.DETAILS.ABOUT_PROJECT',
      overview: 'PROJECT.WOT_BLITZ_STATISTICS.DETAILS.OVERVIEW_PROJECT',
      special: 'PROJECT.WOT_BLITZ_STATISTICS.DETAILS.SPECIAL',
      challenges: 'PROJECT.WOT_BLITZ_STATISTICS.DETAILS.SPECIAL',
    },
    status: 'PROJECT.WOT_BLITZ_STATISTICS.DETAILS.STATUS'
  },
  {
    id: 4,
    title: 'PROJECT.JS_SLIDER.TITLE',
    slug: 'js-slider',
    type: 'PROJECT.JS_SLIDER.TYPE',
    typeDescription: 'PROJECT.JS_SLIDER.TYPE_DESCRIPTION',
    description: 'PROJECTS.JS_SLIDER.DESCRIPTION',
    descriptionShort: 'PROJECT.JS_SLIDER.DESCRIPTION_SHORT',
    techStack: [
      'HTML5',
      'SCSS',
      'JavaScript',
      'Responsive Design',
    ],
    tools: ['WebStorm', 'GitHub'],
    images: {
      thumbnail: '/img/projects/js_slider_thumbnail.webp',
      large: '/img/projects/js_slider_large.webp',
    },
    url: 'https://pistalierro.github.io/js-native-slider',
    details: {
      what: 'PROJECT.JS_SLIDER.DETAILS.ABOUT_PROJECT',
      overview: 'PROJECT.JS_SLIDER.DETAILS.OVERVIEW_PROJECT',
      special: 'PROJECT.JS_SLIDER.DETAILS.SPECIAL',
      challenges: 'PROJECT.JS_SLIDER.DETAILS.CHALLENGES'
    },
    status: 'PROJECT.JS_SLIDER.DETAILS.STATUS'
  },
  {
    id: 5,
    title: 'PROJECT.GRID_TEMPLATE.TITLE',
    slug: 'grid-template',
    type: 'PROJECT.GRID_TEMPLATE.TYPE',
    typeDescription: 'PROJECT.GRID_TEMPLATE.TYPE_DESCRIPTION',
    description: 'PROJECTS.GRID_TEMPLATE.DESCRIPTION',
    descriptionShort: 'PROJECT.GRID_TEMPLATE.DESCRIPTION_SHORT',
    techStack: [
      'HTML5',
      'SCSS',
      'JavaScript',
      'jQuery',
      'CSS Grid',
      'Responsive Design'
    ],
    tools: ['WebStorm', 'GitHub', 'Gulp'],
    images: {
      thumbnail: '/img/projects/grid_template_thumbnail.webp',
      large: '/img/projects/grid_template_large.webp'
    },
    url: 'https://pistalierro.github.io/grid-template-project',
    repositoryUrl: 'https://github.com/Pistalierro/grid-template-project',
    details: {
      what: 'PROJECT.GRID_TEMPLATE.DETAILS.ABOUT_PROJECT',
      overview: 'PROJECT.GRID_TEMPLATE.DETAILS.OVERVIEW_PROJECT',
      special: 'PROJECT.GRID_TEMPLATE.DETAILS.SPECIAL',
      challenges: 'PROJECT.GRID_TEMPLATE.DETAILS.CHALLENGES'
    },
    status: 'PROJECT.GRID_TEMPLATE.DETAILS.STATUS'
  },
  {
    id: 6,
    title: 'PROJECT.CRUD_MATERIAL.TITLE',
    slug: 'crud-with-material-ui',
    type: 'PROJECT.CRUD_MATERIAL.TYPE',
    typeDescription: 'PROJECT.CRUD_MATERIAL.TYPE_DESCRIPTION',
    description: 'PROJECTS.CRUD_MATERIAL.DESCRIPTION',
    descriptionShort: 'PROJECT.CRUD_MATERIAL.DESCRIPTION_SHORT',
    techStack: [
      'Angular 20+',
      'TypeScript 5',
      'Standalone Components',
      'Signals API',
      'RxJS',
      'Angular Material',
      'Reactive Forms',
      'Firebase Auth',
      'Firestore',
      'SCSS',
      'Responsive Design',
    ],
    tools: ['WebStorm', 'GitHub', 'Firebase Console', 'Firebase CLI'],
    images: {
      thumbnail: '/img/projects/crud_material_thumbnail.webp',
      large: '/img/projects/crud_material_large.webp'
    },
    url: 'https://crud-material-d7289.web.app/',
    repositoryUrl: 'https://github.com/Pistalierro/crud-material',
    details: {
      what: 'PROJECT.CRUD_MATERIAL.DETAILS.ABOUT_PROJECT',
      overview: 'PROJECT.CRUD_MATERIAL.DETAILS.OVERVIEW_PROJECT',
      special: 'PROJECT.CRUD_MATERIAL.DETAILS.SPECIAL',
      challenges: 'PROJECT.CRUD_MATERIAL.DETAILS.CHALLENGES'
    },
    status: 'PROJECT.CRUD_MATERIAL.DETAILS.STATUS'
  },
  {
    id: 7,
    title: 'PROJECT.KINOZAL.TITLE',
    slug: 'kinozal',
    type: 'PROJECT.KINOZAL.TYPE',
    typeDescription: 'PROJECT.KINOZAL.TYPE_DESCRIPTION',
    description: 'PROJECTS.KINOZAL.DESCRIPTION',
    descriptionShort: 'PROJECT.KINOZAL.DESCRIPTION_SHORT',
    techStack: [
      'HTML5',
      'SCSS',
      'Bootstrap 5',
      'Flexbox',
      'Responsive Design'
    ],
    tools: ['WebStorm', 'GitHub'],
    images: {
      thumbnail: '/img/projects/kinozal_thumbnail.webp',
      large: '/img/projects/kinozal_large.webp'
    },
    url: 'https://pistalierro.github.io/kinozal_template_bootstrap5.3',
    repositoryUrl: 'https://github.com/Pistalierro/kinozal_template_bootstrap5.3',
    details: {
      what: 'PROJECT.KINOZAL.DETAILS.ABOUT_PROJECT',
      overview: 'PROJECT.KINOZAL.DETAILS.OVERVIEW_PROJECT',
      special: 'PROJECT.KINOZAL.DETAILS.SPECIAL',
      challenges: 'PROJECT.KINOZAL.DETAILS.CHALLENGES'
    },
    status: 'PROJECT.KINOZAL.DETAILS.STATUS'
  },
  {
    id: 8,
    title: 'PROJECT.MOVIE_SEARCH.TITLE',
    slug: 'movie-search',
    type: 'PROJECT.MOVIE_SEARCH.TYPE',
    typeDescription: 'PROJECT.MOVIE_SEARCH.TYPE_DESCRIPTION',
    description: 'PROJECTS.MOVIE_SEARCH.DESCRIPTION',
    descriptionShort: 'PROJECT.MOVIE_SEARCH.DESCRIPTION_SHORT',
    techStack: [
      'HTML5',
      'SCSS',
      'SPA',
      'JavaScript',
      'REST API',
      'Responsive Design',
      'OMDb API'
    ],
    tools: ['WebStorm', 'Gulp', 'GitHub'],
    images: {
      thumbnail: '/img/projects/movie_search_thumbnail.webp',
      large: '/img/projects/movie_search_large.webp'
    },
    url: 'https://pistalierro.github.io/app_movies_to_search',
    repositoryUrl: 'https://github.com/Pistalierro/app_movies_to_search',
    details: {
      what: 'PROJECT.MOVIE_SEARCH.DETAILS.ABOUT_PROJECT',
      overview: 'PROJECT.MOVIE_SEARCH.DETAILS.OVERVIEW_PROJECT',
      special: 'PROJECT.MOVIE_SEARCH.DETAILS.SPECIAL',
      challenges: 'PROJECT.MOVIE_SEARCH.DETAILS.CHALLENGES'
    },
    status: 'PROJECT.MOVIE_SEARCH.DETAILS.STATUS'
  },
  {
    id: 9,
    title: 'PROJECT.CRUD_BOOTSTRAP.TITLE',
    slug: 'crud-with-bootstrap',
    type: 'PROJECT.CRUD_BOOTSTRAP.TYPE',
    typeDescription: 'PROJECT.CRUD_BOOTSTRAP.TYPE_DESCRIPTION',
    description: 'PROJECTS.CRUD_BOOTSTRAP.DESCRIPTION',
    descriptionShort: 'PROJECT.CRUD_BOOTSTRAP.DESCRIPTION_SHORT',
    techStack: [
      'HTML5',
      'SCSS',
      'SPA',
      'Angular 18+',
      'Signals API',
      'RxJS',
      'TypeScript',
      'Bootstrap 5',
      'Firebase',
      'Responsive Design',
      'Reactive Forms'
    ],
    tools: ['WebStorm', 'GitHub'],
    images: {
      thumbnail: '/img/projects/crud_bootstrap_thumbnail.webp',
      large: '/img/projects/crud_bootstrap_large.webp'
    },
    url: 'https://crud-with-bootstrap-21290.web.app',
    repositoryUrl: 'https://github.com/Pistalierro/CRUD-with-bootstrap',
    details: {
      what: 'PROJECT.CRUD_BOOTSTRAP.DETAILS.ABOUT_PROJECT',
      overview: 'PROJECT.CRUD_BOOTSTRAP.DETAILS.OVERVIEW_PROJECT',
      special: 'PROJECT.CRUD_BOOTSTRAP.DETAILS.SPECIAL',
      challenges: 'PROJECT.CRUD_BOOTSTRAP.DETAILS.CHALLENGES'
    },
    status: 'PROJECT.CRUD_BOOTSTRAP.DETAILS.STATUS'
  },
  {
    id: 10,
    title: 'PROJECT.CURRENCY_CONVERTER.TITLE',
    slug: 'currency-converter',
    type: 'PROJECT.CURRENCY_CONVERTER.TYPE',
    typeDescription: 'PROJECT.CURRENCY_CONVERTER.TYPE_DESCRIPTION',
    description: 'PROJECTS.CURRENCY_CONVERTER.DESCRIPTION',
    descriptionShort: 'PROJECT.CURRENCY_CONVERTER.DESCRIPTION_SHORT',
    techStack: [
      'HTML5',
      'SCSS',
      'SPA',
      'Angular 18+',
      'RxJS',
      'TypeScript',
      'Signals API',
      'Tailwind CSS',
      'REST API',
      'Responsive Design',
    ],
    tools: ['WebStorm', 'GitHub'],
    images: {
      thumbnail: '/img/projects/currancy_converter_thumbnail.webp',
      large: '/img/projects/currancy_converter_large.webp'
    },
    url: 'https://currancy-calculator.web.app/',
    repositoryUrl: 'https://github.com/Pistalierro/currency-calculator',
    details: {
      what: 'PROJECT.CURRENCY_CONVERTER.DETAILS.ABOUT_PROJECT',
      overview: 'PROJECT.CURRENCY_CONVERTER.DETAILS.OVERVIEW_PROJECT',
      special: 'PROJECT.CURRENCY_CONVERTER.DETAILS.SPECIAL',
      challenges: 'PROJECT.CURRENCY_CONVERTER.DETAILS.CHALLENGES'
    },
    status: 'PROJECT.CURRENCY_CONVERTER.DETAILS.STATUS'
  }
];
