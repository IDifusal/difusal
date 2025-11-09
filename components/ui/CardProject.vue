<template>
  <div class="card-project">
    <div class="card-project__header">
      <h3 class="card-project__title">{{ title }}</h3>
    </div>
    <div class="card-project__body">
      <p class="card-project__description">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false
  },
  stack: {
    type: Array,
    required: true
  }
})
</script>