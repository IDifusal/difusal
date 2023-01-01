<template>
    <div class="spacer-50"></div>
    <div class="ts-list text-center list-none">
        <li v-for="item in techsBack">{{ item }}</li>
        <li v-for="item in techsFront">{{ item }}</li>
        <li v-for="item in techsEtc">{{ item }}</li>
    </div>
    <div class="spacer-50"></div>
    <div class="spacer-50"></div>
</template>

<script setup lang="ts">
const techsBack = ref(['Firebase','SQL','MongoDB','Fastify'])
const techsFront = ref(['.Net','C++','Blazor','Wordpress'])
const techsEtc = ref(['Python','Google Ads','Google Analytics','Graphic Design'])
</script>

<style scoped>
        @media(min-width:700px){
            .ts-list{
                display: grid;
                grid-template-columns: 33% 33% 33%;
    }
        }

</style>