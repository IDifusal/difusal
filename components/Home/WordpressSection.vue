<script setup>
const props = defineProps({
  projects: {
    type: Array,
    required: true
  },
  title: {
    type: String,
    default: 'A Few Favorite WordPress Sites (Selected from Many I\'ve Worked On)'
  },
  subtitle: {
    type: String,
    default: 'Real client projects with measurable outcomes. This projects are made with WordPress and WooCommerce.'
  }
})

const active = ref(null)
const isOpen = computed(() => !!active.value)

function openModal(p) {
  active.value = p
  document.documentElement.style.overflow = 'hidden'
}

function closeModal() {
  active.value = null
  document.documentElement.style.overflow = ''
}

onMounted(() => {
  const onKey = (e) => {
    if (e.key === 'Escape' && isOpen.value) closeModal()
  }
  window.addEventListener('keydown', onKey)
  onBeforeUnmount(() => window.removeEventListener('keydown', onKey))
})
</script>

<template>
  <section class="py-12 sm:py-16 lg:py-20" id="wordpress">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="mb-8 sm:mb-12">
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
          {{ title }}
        </h2>
        <p class="mt-2 text-sm sm:text-base text-muted-foreground">
          {{ subtitle }}
        </p>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <article
          v-for="(p, idx) in projects"
          :key="idx"
          class="group relative overflow-hidden rounded-2xl border border-green bg-white shadow-sm hover:shadow-md transition-shadow"
        >
          <button
            class="block w-full text-left focus:outline-none"
            @click="openModal(p)"
          >
            <div class="aspect-[16/10] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
              <img
                :src="p.thumbnail"
                alt=""
                class="h-full w-full object-cover transition scale-100 group-hover:scale-[1.03]"
                loading="lazy"
                decoding="async"
              />
            </div>
          </button>

          <div class="p-5">
            <div class="flex items-start justify-between gap-3">
              <h3 class="text-lg font-medium leading-tight">
                {{ p.title }}
              </h3>

              <div v-if="p.url" class="shrink-0">
                <a
                  :href="p.url"
                  target="_blank"
                  rel="noopener"
                  class="inline-flex items-center text-sm underline-offset-4 hover:underline"
                >
                  Visit
                  <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z"/><path d="M5 5h5V3H3v7h2V5z"/><path d="M19 19H5V9H3v12h16v-2z"/>
                  </svg>
                </a>
              </div>
            </div>

            <p v-if="p.role" class="mt-1 text-sm text-muted-foreground">
              {{ p.role }}
            </p>

            <p v-if="p.description" class="mt-3 text-sm leading-relaxed">
              {{ p.description }}
            </p>

            <div v-if="p.tags?.length" class="mt-4 flex flex-wrap gap-2">
              <span
                v-for="t in p.tags"
                :key="t"
                class="rounded-full border border-green px-2.5 py-1 text-xs"
              >
                {{ t }}
              </span>
            </div>

            <div v-if="p.cta?.length" class="mt-5 flex flex-wrap gap-2">
              <a
                v-for="c in p.cta"
                :key="c.label + c.href"
                :href="c.href"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center rounded-full border border-green px-3 py-1.5 text-sm "
              >
                {{ c.label }}
              </a>
            </div>
          </div>

          <button
            class="absolute inset-0"
            @click="openModal(p)"
            tabindex="-1"
          />
        </article>
      </div>
    </div>

    <!-- Modal -->
    <transition
      enter-active-class="transition duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        @click.self="closeModal"
      >
        <div
          class="bg-white mx-auto mt-10 mb-10 max-w-5xl rounded-2xl shadow-2xl ring-1 ring-black/5"
        >
          <div class="flex items-start justify-between gap-4 p-5 border-b border-zinc-200/70 dark:border-zinc-800/70">
            <div>
              <h3 class="text-xl font-semibold leading-tight">
                {{ active?.title }}
              </h3>
              <p v-if="active?.role" class="mt-1 text-sm text-muted-foreground">
                {{ active?.role }}
              </p>
            </div>
            <button
              @click="closeModal"
              class="rounded-full p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.3 5.71 12 12l6.3 6.29-1.41 1.42L10.59 13.4l-6.3 6.31-1.41-1.42L9.17 12 2.88 5.71 4.29 4.3 10.59 10.6l6.3-6.3z"/>
              </svg>
            </button>
          </div>

          <div class="p-5">
            <div v-if="active?.iframeUrl" class="aspect-[16/9] w-full overflow-hidden rounded-xl border border-green">
              <iframe
                :src="active?.iframeUrl"
                class="h-full w-full"
                loading="lazy"
                referrerpolicy="no-referrer"
                allowfullscreen
              />
            </div>

            <div v-else class="aspect-[16/9] w-full overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800">
              <img
                :src="active?.thumbnail"
                alt=""
                class="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            <div v-if="active?.gallery?.length" class="mt-4 flex gap-3 overflow-x-auto pb-1">
              <img
                v-for="(g, gi) in active?.gallery"
                :key="`g-${gi}`"
                :src="g"
                class="h-28 w-auto rounded-lg border border-green object-cover"
                loading="lazy"
                alt=""
              />
            </div>

            <div class="mt-5 grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div class="lg:col-span-2">
                <p v-if="active?.description" class="text-sm sm:text-base leading-relaxed">
                  {{ active?.description }}
                </p>
              </div>
              <div class="lg:col-span-1">
                <div class="rounded-xl border border-green p-4">
                  <div class="space-y-3">
                    <a
                      v-if="active?.url"
                      :href="active?.url"
                      target="_blank"
                      rel="noopener"
                      class="inline-flex w-full items-center justify-center rounded-lg border border-green px-4 py-2.5 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition"
                    >
                      Visit site
                    </a>
                    <div v-if="active?.cta?.length" class="grid grid-cols-1 gap-2">
                      <a
                        v-for="c in active?.cta"
                        :key="c.label + c.href"
                        :href="c.href"
                        target="_blank"
                        rel="noopener"
                        class="inline-flex items-center justify-center rounded-lg border border-green px-4 py-2.5 text-sm hover:bg-zinc-50 dark:hover:bg-zinc-800 transition"
                      >
                        {{ c.label }}
                      </a>
                    </div>
                    <div v-if="active?.tags?.length" class="pt-2">
                      <h4 class="text-xs font-semibold tracking-wide text-muted-foreground uppercase mb-2">Stack</h4>
                      <div class="flex flex-wrap gap-2">
                        <span
                          v-for="t in active?.tags"
                          :key="t"
                          class="rounded-full border border-green px-2.5 py-1 text-xs"
                        >
                          {{ t }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<style scoped>
.text-muted-foreground {
  /* @apply text-zinc-600 dark:text-zinc-400; */
}
</style>
