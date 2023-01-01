<template>
  <div :class="bgClass" class="layout-wrapper">
    <slot />
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
const scrollPosition = ref(0)
const bgClass = ref('bg-primary')
onMounted(() => {
  let content = document.querySelectorAll('h1,h2,h3,a,li')
  window.addEventListener('scroll', () => {
    scrollPosition.value = window.scrollY;
    console.log(scrollPosition.value)
if (scrollPosition.value > 2900 && scrollPosition.value < 3300) {
      content.forEach((x) => {
        x.classList.remove('dark')
      })
      bgClass.value = 'bg-flutter'
    }
    else if (scrollPosition.value > 1000 && scrollPosition.value < 1700) {
      content.forEach((x) => {
        x.classList.remove('dark')
      })
      bgClass.value = 'bg-angular'
    }    
    else if (scrollPosition.value > 1800 && scrollPosition.value < 2200) {
      content.forEach((x) => {
        x.classList.remove('dark')
      })
      bgClass.value = 'bg-node'
    }
    else {
      content.forEach((x) => {
        x.classList.remove('dark')
      })
      bgClass.value = 'bg-primary'
    }
  });
})
</script>
<style>
.bg-angular{
  background-color: #0d47a1;
    position: relative;
}
.bg-node{
  background-color: #333;
}
.bg-flutter {
  background: #0468d7;
}

.layout-wrapper {
  transition: background 200ms ease;
}
</style>