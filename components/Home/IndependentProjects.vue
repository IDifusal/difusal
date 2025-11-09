<template>
    <div>
    <section class="py-12 sm:py-16 lg:py-20" id="independent-projects">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <div class="mb-8 sm:mb-12">
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
            Independent Projects
          </h2>
        </div>
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
                  :src="`/images/projects/${p.image}`"
                  alt=""
                  class="h-full w-full object-cover transition scale-100 group-hover:scale-[1.03]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </button>
            <button
              class="absolute inset-0"
              @click="openModal(p)"
              tabindex="-1"
            />
            <!-- Project Info Card -->
            <div class="p-5">
              <h3 class="text-lg font-medium leading-tight">
                {{ p.title }}
              </h3>
              <p v-if="p.description" class="mt-2 text-muted-foreground text-sm line-clamp-3">
                {{ p.description }}
              </p>
              <div v-if="p.stack?.length" class="flex flex-wrap gap-2 mt-3">
                <span
                  v-for="tech in p.stack"
                  :key="tech"
                  class="bg-green/10 text-green-900 dark:text-green-300 text-xs px-2 py-1 rounded-lg"
                >{{ tech }}</span>
              </div>
              <div class="mt-3 flex items-center gap-3">
                <a
                  v-if="p.github"
                  :href="p.github"
                  target="_blank"
                  rel="noopener"
                  class="inline-flex items-center rounded px-2 py-1 text-xs text-blue-600 underline hover:text-blue-800"
                >
                  <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 16 16">
                    <path
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.5-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.13 0 0 .67-.22 2.2.82a7.51 7.51 0 012-.27c.68 0 1.37.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.11.16 1.93.08 2.13.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.64 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.012 8.012 0 0016 8c0-4.42-3.58-8-8-8z"
                    />
                  </svg>
                  Github
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
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
            <!-- Modal header, fill as necessary -->
            <h3 v-if="activeProject" class="text-xl font-semibold">
              {{ activeProject.title }}
            </h3>
            <button @click="closeModal" class="ml-auto text-gray-400 hover:text-black text-2xl">&times;</button>
          </div>
          <div v-if="activeProject" class="p-6 flex flex-col md:flex-row gap-6">
            <div class="w-full md:w-1/2 flex justify-center items-center">
              <img
                v-if="activeProject.image !== null"
                :src="`/images/projects/${activeProject.image}`"
                alt=""
                class="max-h-72 rounded-xl border"
              />
              <video
                v-else
                :src="activeProject.image"
                controls
                class="max-h-72 rounded-xl border bg-black"
              />
            </div>
            <div class="w-full md:w-1/2">
              <div class="mb-4">
                <h4 class="text-lg font-semibold mb-2">Description</h4>
                <p class="text-sm text-zinc-800 whitespace-pre-line">{{ activeProject.description }}</p>
              </div>
              <div v-if="activeProject.stack?.length" class="mb-4">
                <h5 class="font-medium text-sm text-zinc-600 mb-1">Stack</h5>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in activeProject.stack"
                    :key="tech"
                    class="bg-green/10 text-green-900 dark:text-green-300 text-xs px-2 py-1 rounded-lg"
                  >{{ tech }}</span>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <a
                  v-if="activeProject.github && activeProject.github !== null"
                  :href="activeProject.github !== null ? activeProject.github : ''"
                  target="_blank"
                  rel="noopener"
                  class="inline-flex items-center rounded px-2 py-1 text-xs text-blue-600 underline hover:text-blue-800"
                >Github</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

 <script setup>
    const projects = ref([
        {
            title: 'Candidates Portal - Supabase + Next.js + MCP + OpenAI + NextAuth',
            description: 'Candidates Portal efficiently connects top talent with recruiters.',
            image: 'candidate-portal.png',
            stack:['Next.js','Supabase','Tailwind CSS','MCP','Shadcn UI',"OpenAI","NextAuth"],
            github: 'https://github.com/IDifusal/candidates-portal'
        },
        {
            title:"Backend for a inventory management system + cron actions",
            description: 'Backend for a inventory management system is a platform that allows users to manage their inventory.',
            image: 'inventory-managment.png',
            stack:['Nest.js','PostgreSQL','TypeScript','JWT','Docker','CI/CD'],
            github: 'https://github.com/IDifusal/apply-digital-test'
        },
        {
            title: "Booking App - Google Calendar Integration",
            description: `
Small full-stack app made for a technical assessment.

The goal is to handle bookings while preventing conflicts locally (system) and externally (Google Calendar).
    `,
    image: "calendar-google.png",
    stack: [
      'Next.js (App Router)',
      'NextAuth (Google Auth)',
      'Shadcn UI',
      'Tailwind CSS',
      'NestJS',
      'Prisma ORM',
      'PostgreSQL',
      'Google Calendar API (freebusy.query)'
    ],
    github: 'https://github.com/IDifusal/Designli-assesment',
  },
  {
    title: "Job Application | Mobile development (Soon)",
    description: 'Job Application is a platform that allows users to apply for jobs and find jobs.',
    image: 'dev-mobile.jpg',
    stack: ['Flutter', 'Dart', 'Provider', 'Shared Prefences', 'Api Integration'],
    github: null,
  }
])

const active = ref(null)
const isOpen = computed(() => !!active.value)
const activeProject = computed(() => active.value)

function openModal(p) {
  active.value = p
  document.documentElement.style.overflow = 'hidden'
}

function closeModal() {
  active.value = null
  document.documentElement.style.overflow = ''
}

</script>

<style>
/* You can add minimal card/modal-specific styles here */
</style>