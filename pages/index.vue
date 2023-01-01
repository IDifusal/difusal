
<template>
    <div>
        <HomeHero class="section"/>
        <HomeTitle title='My favorite technologies'></HomeTitle>
        <HomeLanguaje title="Vue 💚" :list="vueList" :inverse="false"/>
        <HomeLanguaje title='Angular' :inverse="true" :list="angularList"/>
        <HomeLanguaje title='Nodejs' :inverse="false" :list="nodeList"/>
        <HomeLanguaje title='Laravel' :inverse="true" :list="laravelList"/>
        <HomeLanguaje title='Flutter' :list="flutterList" :inverse="false"/>
        <HomeTitle title='Other Technologies that i have used'></HomeTitle>
        <HomeTech/>
        <HomeTitle title='Companies that i have collaborated with'></HomeTitle>
        <HomeCompanies/>
        <HomeTitle title='Contact Info'></HomeTitle>
        <HomeContact/>
    </div>
  </template>
  <script setup>
    const vueList = ref(['Vue2, Vue3','Nuxt2, Nuxt3','Vuex, Pinia','Testing'])
    const angularList = ref(['Typescript','Directives','JWT','Dependency Injection','Testing'])
    const flutterList = ref(['Dart','Provider','Shared Prefences','Api Integration'])
    const laravelList = ref(['Migrations', 'Seeder', 'MVC', 'S3','Eloquent ORM','Api Rest'])
    const nodeList = ref(['Migrations', 'Seeder',' Sequelize','Api Rest','Sockets'])
  </script>
  <style>
  </style>