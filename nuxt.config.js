export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: '수민과 보희의 결혼식에 초대합니다.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '19/12/14 토요일 오후 1시 고려대 교우회관'
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://sumin-bohee.wemarry.in'
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: '수민과 보희의 결혼식에 초대합니다.'
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: 'https://sumin-bohee.wemarry.in/img/introduction.jpg'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: '19/12/14 토요일 오후 1시 고려대 교우회관'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: '/fullpage.parallax.min.js'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/fullpage', ssr: false }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    standalone: true,
    extend(config, ctx) {}
  }
}
