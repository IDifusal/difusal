
<template>
    <div>
        <HomeHero class="section"/>
        <HomeTitle title='My favorite technologies'></HomeTitle>
        <HomeLanguaje title="Vue 💚" :list="vueList" :inverse="false"/>
        <HomeLanguaje title='Angular' :inverse="true" :list="angularList"/>
        <HomeLanguaje title='Nodejs' :inverse="false" :list="nodeList"/>
        <HomeLanguaje title='Laravel' :inverse="true" :list="laravelList"/>
        <HomeLanguaje title='Flutter' :list="flutterList" :inverse="false"/>
        <HomeWordpressSection :projects="wordpressProjects"/>
        <HomeAiSection/>
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
        role: "WordPress & WooCommerce Optimization",
        description: "Implemented SEO improvements, configured WooCommerce (shipping, tax, coupons), added new product lines, integrated Google Analytics + WooCommerce reports, and performed key performance upgrades for faster load times.",
      },
      {
        title: "Coltur Peru",
        url: "https://colturperu.com/en/",
        thumbnail: "/images/portfolio/coltur.png",
        role: "Front-end Development & Plugin Creation",
        description: "Developed multiple views based on Figma designs, added front-end logic, built a custom plugin for animations and effects, and created custom post types (CPT) for managing content and form submissions.",
      },
    {
      title: "Rivera Immigration Law",
      url: "https://riveraimmigrationlaw.org/",
      thumbnail: "/images/portfolio/rivera-law.png",
      role: "Web Development & SEO",
      description: "Created new views following Figma layouts, implemented front-end logic, built a custom plugin for animations and user interactions, configured CPT for dynamic content, improved SEO and page performance.",
    },
    {
      title: "Natur Skin",
      url: "https://naturskin.com/",
      thumbnail: "/images/portfolio/natur-skin.png",
      role: "Web Development & SEO",
      description: "Created new views following Figma layouts, implemented front-end logic, built a custom plugin for animations and user interactions, configured CPT for dynamic content, improved SEO and page performance.",
    },
    {
      title:"El Paso Restaurant",
      url: "https://elpasorestaurant.com/",
      thumbnail: "/images/portfolio/elpaso.jpg",
      role: "Web Development & SEO",
      description: "Created new views following Figma layouts, implemented front-end logic, built a custom plugin for animations and user interactions, configured CPT for dynamic content, improved SEO and page performance.",
    }
    ]);
    const vueList = ref(['Vue2, Vue3','Nuxt2, Nuxt3','Vuex, Pinia','Testing'])
    const angularList = ref(['Typescript','Directives','JWT','Dependency Injection','Testing'])
    const flutterList = ref(['Dart','Provider','Shared Prefences','Api Integration'])
    const laravelList = ref(['Migrations', 'Seeder', 'MVC', 'S3','Eloquent ORM','Api Rest'])
    const nodeList = ref(['Migrations', 'Seeder',' Sequelize','Api Rest','Sockets'])
  </script>
  <style>
  </style>