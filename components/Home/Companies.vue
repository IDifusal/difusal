<template>
<div>
    <div class="spacer-50"></div>

  <div class="container m-auto overflow-hidden">
    <article>
      <div>
        <ul>
          <li class="" v-for="slide in listImages" :key="slide"><img :src="`/images/companies/${slide}.png`" :alt="slide" /></li>
        </ul>
      </div>
      <div>
        <ul>
          <li class="" v-for="slide in listImages" :key="slide"><img :src="`/images/companies/${slide}.png`" :alt="slide"/></li>
        </ul>
      </div>
    </article>
  </div>
  <div class="spacer-50"></div>
</div>
</template>

<script setup>
const listImages = ref(['interconnecta', 'harper','espanglish', 'ilustra', 'tci', 'vivavilla', 'knomad', 'kuna', 'mv', 'nave'])

</script>

<style lang="scss" scoped>
article {
  display: flex;
  width: 200%;
  animation: bannermove 60s linear infinite;
}

div {
  width: 100%;
}

ul {
  display: flex;
  list-style-type: none;
  padding-left: 0;
  margin: 0;
}

li {
  margin: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

ul img {
  width: 450px;
  object-fit: contain;
  margin: 0 20px;
}

@keyframes bannermove {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}
</style>