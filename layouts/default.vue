<template>
  <div :style="{ backgroundColor: currentBgColor }" class="layout-wrapper">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const currentBgColor = ref('#1a1a1a') // Color por defecto
let observer: IntersectionObserver | null = null

onMounted(() => {
  // Seleccionar todos los elementos que tienen el atributo data-bg-color
  const sections = document.querySelectorAll('[data-bg-color]')
  
  if (sections.length === 0) return

  // Configurar IntersectionObserver para detectar qué sección está visible
  observer = new IntersectionObserver(
    (entries) => {
      // Encontrar la sección más visible
      let maxRatio = 0
      let mostVisibleSection: Element | null = null

      entries.forEach((entry) => {
        if (entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio
          mostVisibleSection = entry.target
        }
      })

      // Cambiar el color de fondo al de la sección más visible
      if (mostVisibleSection && maxRatio > 0.2) {
        const bgColor = mostVisibleSection.getAttribute('data-bg-color')
        if (bgColor) {
          currentBgColor.value = bgColor
        }
      }
    },
    {
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      rootMargin: '-20% 0px -20% 0px' // Zona de detección en el centro del viewport
    }
  )

  // Observar todas las secciones
  sections.forEach((section) => {
    observer?.observe(section)
  })
})

onUnmounted(() => {
  // Limpiar el observer cuando se desmonte el componente
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style>
.layout-wrapper {
  transition: background-color 400ms ease;
  min-height: 100vh;
}
</style>