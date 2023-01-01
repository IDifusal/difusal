<template>
    <div class="md:flex items-center ts container m-auto text-center md:text-left py-20 md:py-30" :class="[props.inverse ==true ? 'ts-inverse' :'']">
        <div class="md:w-1/2 ts__title">
            <h2 class="text-4xl font-medium">
                {{ props.title }}
            </h2>
            <ul class="ts__list">
                <li v-for="item in props.list">
                    {{ item }}
                </li>
            </ul>
        </div>
        <div class="md:w-1/2">
            <img v-if="props.title =='Angular'" src="https://angular.io/assets/images/logos/angular/angular.svg" alt="Difusal has experience with Angular" class="ts__img">
            <img v-else-if="props.title =='Flutter'" src="https://cdn.svgporn.com/logos/flutter.svg" alt="Difusal has experience with Angular" class="ts__img">
            <img v-else-if="props.title =='Laravel'" src="https://cdn.svgporn.com/logos/laravel.svg" alt="Difusal has experience with Angular" class="ts__img">
            <img v-else-if="props.title =='Nodejs'" src="https://cdn.svgporn.com/logos/nodejs-icon.svg" alt="Difusal has experience with Angular" class="ts__img">
            <img v-else src="https://cdn.svgporn.com/logos/vue.svg" alt="Difusal is an expert with Vue" class="ts__img">
        </div>
    </div>
</template>

<script lang="ts" setup>
    interface Props{
        title:string,
        inverse:boolean,
        list:string[]
    }
    const props = defineProps<Props>()
</script>

<style lang="scss" scoped>
.ts{
    &-inverse{
        flex-direction: row-reverse;
    }
    &__img{
        width: 200px;
        margin: auto;
        @media(min-width:700px){
            width: 350px;
        }
    }
}
@media(max-width:700px){
    .ts__img{
        margin-top: 30px;
    }
}
@media(min-wdith:700px){
    .ts__title{
    text-align: right;
}
.ts-inverse .ts__title{
    text-align: left    ;
}
}
</style>