export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  plugins:[
  '@/plugins/ga.js'
  ],
  app: {
    head: {
      title: 'Difusal | Full Stack Developer',
      charset: 'utf-8',
      htmlAttrs: {
        lang: 'en'
      },
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'description', content: 'Difusal is a freelance Vue.js developer. My expertise in Vue.js allows me to deliver personalized and professional service for your next project.' },
        {property:'og:title',content:'Difusal'},
        {property:'og:description',content:'Difusal is a freelance Vue.js developer. My expertise in Vue.js allows me to deliver personalized and professional service for your next project.'},
        {property:'og:url',content:'https://www.difusal.com/'},
        {property:'og:image',content:'https://www.difusal.com/difusal.png'},
        {property:'og:site_name',content:'Difusal'},
        {property:'og:locale',content:'en_US'},
        {property:'og:type',content:'article'},
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.ico' },{rel:'canonical',href:'https://www.difusal.com/'}],
    }
  },
  css: ['@/assets/global.css']

})
