const dynamicRoutes = async () => {
  const fm = require('front-matter')
  const md = require('markdown-it')({
    html: true,
    typographer: true
  })
  const axios = require('axios') 
  const dynamicBlogRoutes =  await axios.get('https://api.github.com/repos/stacsnssce/webdata/contents/posts')
    .then(async (data) => {
      return await Promise.all(data.data.map(async (dat) => {
        return {
          route: '/blog/' + dat.sha + '/',
          payload: await axios.get(dat.download_url)
            .then((res) => {
              const mdf = fm(res.data)
              return {
                title: mdf.attributes,
                body:md.render(mdf.body)
              }
            })
        }
      }))
    })

  const dynamicActivitiesRoutes = await axios.get('https://api.github.com/repos/stacsnssce/webdata/contents/activities')
    .then(async (data) => {
      return await Promise.all(data.data.map(async (dat) => {
        return {
          route: '/activities/' + dat.sha + '/',
          payload: await axios.get(dat.download_url)
            .then((res) => {
              const mdf = fm(res.data)
              return {
                title: mdf.attributes,
                body:md.render(mdf.body)
              }
            })
        }
      }))
    })
  
  const dynamicNewsletterRoutes = await axios.get('https://api.github.com/repos/stacsnssce/webdata/contents/newsletter')
  .then(async (data) => {
    return await Promise.all(data.data.map(async (dat) => {
      return {
        route: '/newsletter/' + dat.sha + '/',
        payload: await axios.get(dat.download_url)
          .then((res) => {
            const mdf = fm(res.data)
            return {
              title: mdf.attributes,
              body:md.render(mdf.body)
            }
          })
      }
    }))
  })

  const dynamicAwardsRoutes = await axios.get('https://api.github.com/repos/stacsnssce/webdata/contents/awards')
  .then(async (data) => {
    return await Promise.all(data.data.map(async (dat) => {
      return {
        route: '/awards/' + dat.sha + '/',
        payload: await axios.get(dat.download_url)
          .then((res) => {
            const mdf = fm(res.data)
            return {
              title: mdf.attributes,
              body:md.render(mdf.body)
            }
          })
      }
    }))
  })
//   
//   
//     Unable to execute
// 
//     const dynamicContributorsRoutes = await axios.get('https://api.github.com/repos/stacsnssce/official-website/stats/contributors')
//     .then(async (data) => {
//       return await Promise.all(data.data.map(async (dat) => {
//         return {
//           route: '/contributors/' + dat.author.login + '/',
//           payload: await axios.get(dat.author.url)
//             .then((res) => {
//               return {
//                 title: res.data
//               }
//             })
//         }
//       }))
//     })
  
  const route = [...dynamicNewsletterRoutes,...dynamicAwardsRoutes, ...dynamicBlogRoutes, ...dynamicActivitiesRoutes]
  return route
}

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'STACS NSSCE',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      {name: 'theme-color', content: '#13a59b'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/main.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@/plugins/materialize.js', ssr: false },
    { src: '@/plugins/vue-progessive-image.js', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },

  styleResources: {
    scss: [
      'assets/scss/_variable.scss'
    ]
  },
  generate: {
    routes: dynamicRoutes,
    
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
