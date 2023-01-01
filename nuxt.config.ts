export default defineNuxtConfig({
    modules: [
      '@nuxt/ui',
      '@nuxtjs/tailwindcss',
      '@fullpage/nuxt-fullpage'
    ],
    app: {
      head: {
        title: 'Difusal | Full Stack Developer',
        charset: 'utf-8',
        viewport: 'width=500, initial-scale=1',
        meta: [
          { name: 'description', content: 'Cristhian Sanchez Medina | Diusal | Full Stack Developer, Vue, Angular, Laravel, Node, Flutter' }
        ],
        link: [{ rel: 'icon', type: 'image/png', href: '/favicon.ico' }],
      }
    },
    css:['@/assets/global.css']
  
  })
  