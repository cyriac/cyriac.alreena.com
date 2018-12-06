module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Alreena and Cyriac',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Alreena and Cyriac' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', 'href': 'https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css'},
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' }
    ],
    script: [
      { src: 'https://code.jquery.com/jquery-3.2.1.slim.min.js'},
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js'},
      { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#9013FE' },
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    baseURL: process.env.GENERATE_MODE === 'production' ? 'https://cyriac.alreena.com': 'http://localhost:3000',
    browserBaseURL: process.env.GENERATE_MODE === 'production' ? 'https://cyriac.alreena.com': 'http://localhost:3000',
    credentials: true
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  generate: {
    routes () {
      return ['/rsvp/190119', '/rsvp/192619', '/rsvp/260119']
    }
  }
}
