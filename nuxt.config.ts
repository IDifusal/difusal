export default defineNuxtConfig({
  // Compatibility date for future-proofing
  compatibilityDate: '2024-11-01',

  // Modules
  modules: [
    '@nuxtjs/tailwindcss',
  ],

  // Plugins
  plugins: [
    '@/plugins/ga.js',
  ],

  // App configuration
  app: {
    head: {
      title: 'Difusal | Full Stack Developer',
      charset: 'utf-8',
      htmlAttrs: {
        lang: 'en',
      },
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'description', content: 'Difusal is a freelance Vue.js developer. My expertise in Vue.js allows me to deliver personalized and professional service for your next project.' },
        // Open Graph
        { property: 'og:title', content: 'Difusal | Full Stack Developer' },
        { property: 'og:description', content: 'Difusal is a freelance Vue.js developer. My expertise in Vue.js allows me to deliver personalized and professional service for your next project.' },
        { property: 'og:url', content: 'https://www.difusal.com/' },
        { property: 'og:image', content: 'https://www.difusal.com/difusal.png' },
        { property: 'og:site_name', content: 'Difusal' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:type', content: 'website' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Difusal | Full Stack Developer' },
        { name: 'twitter:description', content: 'Difusal is a freelance Vue.js developer. My expertise in Vue.js allows me to deliver personalized and professional service for your next project.' },
        { name: 'twitter:image', content: 'https://www.difusal.com/difusal.png' },
        // Additional SEO
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'Difusal' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://www.difusal.com/' },
      ],
    },
  },

  // Global CSS
  css: ['@/assets/global.css'],

  // TypeScript configuration
  typescript: {
    strict: true,
    typeCheck: false,
  },

  // Runtime configuration (for environment variables)
  runtimeConfig: {
    // Private keys (server-only)
    // apiSecret: process.env.API_SECRET,

    // Public keys (exposed to client)
    public: {
      siteUrl: process.env.SITE_URL || 'https://www.difusal.com',
      // gaId: process.env.GA_ID, // Uncomment if using environment variable for GA
    },
  },

  // Experimental features (optional)
  experimental: {
    // typedPages: true,
    // viewTransition: true,
  },
})
