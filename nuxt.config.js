import { I18N } from './config'


export default {
  router: {
    linkActiveClass: 'header-nav__item-active',
  },
  // Target (https://go.nuxtjs.dev/config-target)
  ssr: false, 
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'doroga',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~assets/main.styl',
    '~assets/normalize.css',

  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/vue-lazy-hydration.js',
    '~/plugins/vue-lazysizes.client.js',
    '~/plugins/vue-lazyload.js',
    '~/plugins/vue-social-sharing.js',
    '~/plugins/animateOnScroll.client.js',
    '~/plugins/vue-scrollto.client.js',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
     // Simple usage
    '@nuxtjs/date-fns',
    '@aceforth/nuxt-optimized-images',
  ],
  dateFns: {
    locales: 'ru'
  },
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',

    'nuxt-svg-loader',
    'cookie-universal-nuxt',
    'nuxt-webfontloader',
    '@nuxtjs/apollo',
    ['nuxt-i18n', I18N]
  ],
  apollo: { clientConfigs: { default: { httpEndpoint: 'http://doroga.local/graphql' } } },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  optimizedImages: {
    inlineImageLimit: -1,
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
    optimizeImages: true,
    optimizeImagesInDev: true,
    defaultImageLoader: 'img-loader',
    mozjpeg: {
      quality: 85
    },
    optipng: false,
    pngquant: {
      speed: 7,
      quality: [0.65, 0.8]
    },
    webp: {
      quality: 85
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend (config, { isDev, isClient, loaders: { vue } }) {
      {
        vue.transformAssetUrls.img = ['data-src', 'src']
        vue.transformAssetUrls.source = ['data-srcset', 'srcset']
      }
    },
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true
    },
    extractCSS: {
      ignoreOrder: true
    },
    transpile: [
      'lodash-es/uniqueId'
    ],
  },
}
