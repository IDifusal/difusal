
<template>
    <div>
        <HomeHero class="section"/>
        <HomeTitle title='My favorite technologies'></HomeTitle>
        <HomeLanguaje title="Vue 💚" :list="vueList" :inverse="false"/>
        <HomeLanguaje title='Angular' :inverse="true" :list="angularList"/>
        <HomeLanguaje title='Nodejs' :inverse="false" :list="nodeList"/>
        <HomeLanguaje title='Laravel' :inverse="true" :list="laravelList"/>
        <HomeLanguaje title='Flutter' :list="flutterList" :inverse="false"/>
        <HomeIndependentProjects/>
        <HomeWordpressSection :projects="wordpressProjects"/>
        <HomeAiSection/>
        <HomeExperience/>
        <HomeTitle title='Other Technologies that i have used'></HomeTitle>
        <HomeTech/>
        <HomeTitle title='Companies that i have collaborated with'></HomeTitle>
        <HomeCompanies/>
        <HomeTitle title='Contact Info'></HomeTitle>
        <HomeContact/>
    </div>
  </template>
  <script setup>
    const wordpressProjects = ref([
  {
    title: "Knomad Yarn",
    url: "https://www.knomadyarn.com/",
    thumbnail: "/images/portfolio/knomad.png",
    role: "WooCommerce Setup & Performance Optimization",
    description:
      "Enhanced the WooCommerce experience by configuring advanced shipping, tax, and coupon settings. Added new product collections and connected Google Analytics for better sales tracking. Performed SEO optimization, caching improvements, and media compression to increase loading speed and improve overall store performance.",
    tags: ["WooCommerce", "SEO", "Analytics", "Performance"],
  },
  {
    title: "Coltur Peru",
    url: "https://colturperu.com/en/",
    thumbnail: "/images/portfolio/coltur.png",
    role: "Custom Front-End & Plugin Development",
    description:
      "Built custom templates directly from Figma designs, implementing dynamic logic and smooth transitions. Developed a lightweight WordPress plugin for animations and content effects, and added custom post types (CPTs) for handling travel content and form submissions efficiently.",
    tags: ["Custom Plugin", "Animations", "ACF", "CPT"],
  },
  {
    title: "Rivera Immigration Law",
    url: "https://riveraimmigrationlaw.org/",
    thumbnail: "/images/portfolio/rivera-law.png",
    role: "Website Development & SEO Strategy",
    description:
      "Created mobile-friendly page layouts based on client design, integrated submission forms, and added custom animations to improve user interaction. Enhanced on-site SEO and metadata structure to strengthen visibility in search results for immigration-related services.",
    tags: ["SEO", "CPT", "Accessibility", "Performance"],
  },
  {
    title: "Natur Skin",
    url: "https://naturskinbeauty.com/",
    thumbnail: "/images/portfolio/natur-skin.png",
    role: "Website Migration & On-Page Optimization",
    description:
      "Migrated the full site from Wix to WordPress, keeping design consistency while improving load time and content structure. Reorganized product pages with custom fields, optimized metadata and internal linking, and implemented new blog sections to support ongoing content marketing.",
    tags: ["Migration", "SEO", "ACF", "Performance"],
  },
  {
    title: "El Paso Restaurant",
    url: "https://elpasorestaurant.com/",
    thumbnail: "/images/portfolio/elpaso.jpg",
    role: "Full WordPress Build with WooCommerce",
    description:
      "Developed a modern bilingual restaurant website from the ground up. Added WooCommerce for online ordering and integrated SEO-friendly menu sections. Focused on a fast, mobile-first layout and incorporated subtle motion effects to highlight the brand’s warm, authentic identity.",
    tags: ["WooCommerce", "Bilingual", "Local SEO", "Custom Theme"],
  },
])

    const vueList = ref(['Vue2, Vue3','Nuxt2, Nuxt3','Vuex, Pinia','Testing'])
    const angularList = ref(['Typescript','Directives','JWT','Dependency Injection','Testing'])
    const flutterList = ref(['Dart','Provider','Shared Prefences','Api Integration'])
    const laravelList = ref(['Migrations', 'Seeder', 'MVC', 'S3','Eloquent ORM','Api Rest'])
    const nodeList = ref(['Migrations', 'Seeder',' Sequelize','Api Rest','Sockets'])
  </script>
  <style>
  </style>