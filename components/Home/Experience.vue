<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const experiences = ref([
  {
    id: 1,
    company: 'InterConnecta',
    logo: '/images/companies/interconnecta.png',
    role: 'Web Developer',
    type: 'Full-time · Remote',
    period: 'Feb 2023 - Aug 2025',
    duration: '2 yrs 7 mos',
    description: [
      'Enhanced CRM systems for multiple clients by implementing advanced automations and custom code to streamline workflows, improve efficiency, and meet diverse business needs.',
      'Developed custom apps and microservices across various tech stacks (JavaScript, PHP, Python, and more) to adapt to each client\'s unique requirements.',
      'Analyzed and improved business logic for different clients, proposing targeted solutions to drive growth and operational efficiency.',
      'Integrated AI-powered assistants and automation tools to enhance knowledge retrieval, workflow efficiency, and decision-making processes.'
    ],
    skills: ['JavaScript', 'PHP', 'Python', 'CRM', 'AI Integration', 'Automation']
  },
  {
    id: 2,
    company: 'Manzana verde',
    logo: '/images/companies/mv.png',
    role: 'Full-stack Developer',
    type: 'Full-time · Remote',
    period: 'Jan 2022 - Oct 2022',
    duration: '10 mos',
    description: [
      'Contributed to the development of high-quality web applications using JavaScript and TypeScript, adapting quickly to the fast-paced startup environment.',
      'Assisted in backend development, creating modules in Laravel and building microservices with Node.js and Nest.js.',
      'Collaborated across the stack, ensuring smooth integration between frontend interfaces and backend services.',
      'Applied strong web development principles to deliver efficient, maintainable, and scalable solutions.'
    ],
    skills: ['JavaScript', 'TypeScript', 'Vue.js', 'Laravel', 'Node.js', 'Nest.js']
  },
  {
    id: 3,
    company: 'Agencia Watson',
    logo: '/images/companies/nave.png',
    role: 'Full Stack Developer',
    type: 'Full-time · Remote',
    period: 'Jan 2021 - Dec 2021',
    duration: '1 yr',
    description: [
      'Maintained and developed web systems, ensuring reliability, performance, and scalability.',
      'Implemented backend functionality to support dynamic and interactive web pages.',
      'Built dynamic front-end interfaces using modern frameworks (React, Angular, Vue), adapting to project requirements.',
      'Developed e-blast campaigns leveraging web frameworks and automation tools.',
      'Optimized site speed and improved accessibility, enhancing user experience and engagement.'
    ],
    skills: ['JavaScript', 'Nuxt.js', 'Vue.js', 'React', 'Angular', 'Node.js']
  },
  {
    id: 4,
    company: 'Espanglish Marketing',
    logo: '/images/companies/espanglish.png',
    role: 'Full Stack Developer',
    type: 'Full-time · Remote',
    period: 'Jul 2019 - Dec 2020',
    duration: '1 yr 6 mos',
    description: [
      'Web maintenance and support, including server management (AWS, custom VPS)',
      'UI/UX design using Adobe XD and Figma',
      'E-commerce development and configuration (WooCommerce, Laravel)',
      'Web layout and development (WordPress, custom code)',
      'Workflow automation with Airtable and Slack',
      'Creation of reports using Google Analytics, Google Ads, and Google Data Studio',
      'Google Tag Manager setup and administration',
      'App development (Java, Flutter)',
      'Implementation and analysis of heatmaps'
    ],
    skills: ['JavaScript', 'WordPress', 'WooCommerce', 'Laravel', 'AWS', 'Flutter', 'UI/UX']
  }
])

const activeIndex = ref(null)
const visibleCards = ref(new Set())

function toggleAccordion(index) {
  if (activeIndex.value === index) {
    activeIndex.value = null
  } else {
    activeIndex.value = index
    visibleCards.value.add(index)
  }
}

onMounted(() => {
  // Intersection Observer for scroll-based animations and auto-expand
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.dataset.index)
          // Add to visible cards
          const newVisibleCards = new Set(visibleCards.value)
          newVisibleCards.add(index)
          visibleCards.value = newVisibleCards
          
          // Auto-expand the card when it enters viewport
          // Only if no card is currently active, or if scrolling down
          if (activeIndex.value === null || index > activeIndex.value) {
            setTimeout(() => {
              activeIndex.value = index
            }, 300) // Small delay for smooth animation
          }
        }
      })
    },
    { threshold: 0.3, rootMargin: '-10% 0px -10% 0px' }
  )

  const cards = document.querySelectorAll('[data-experience-card]')
  cards.forEach((card) => observer.observe(card))

  onBeforeUnmount(() => {
    cards.forEach((card) => observer.unobserve(card))
  })
})
</script>

<template>
  <section class="py-12 sm:py-16 lg:py-20" id="experience">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="mb-8 sm:mb-12">
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
          My Journey Through Tech
        </h2>
        
        <p class="mt-2 text-sm sm:text-base text-white">
          From frontend to full-stack, here's the story of my professional growth and the amazing teams I've worked with.
        </p>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Timeline Line -->
        <div 
          class="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green via-green/50 to-transparent"
          aria-hidden="true"
        />

        <!-- Experience Items -->
        <div class="space-y-8">
          <article
            v-for="(exp, index) in experiences"
            :key="exp.id"
            :data-index="index"
            data-experience-card
            class="relative pl-12 sm:pl-20 transition-all duration-500"
            :class="{
              'opacity-100 translate-x-0': visibleCards.has(index),
              'opacity-0 translate-x-8': !visibleCards.has(index)
            }"
          >
            <!-- Timeline Dot -->
            <div 
              class="absolute left-2.5 sm:left-5.5 top-6 w-3 h-3 rounded-full border-2 border-green bg-white transition-transform duration-300"
              :class="{
                'scale-150 bg-green': activeIndex === index
              }"
              aria-hidden="true"
            />

            <!-- Card -->
            <div 
              class="group relative overflow-hidden rounded-2xl border border-green bg-white shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
              :class="{
                'ring-2 ring-green ring-offset-2': activeIndex === index
              }"
              @click="toggleAccordion(index)"
            >
              <!-- Card Header (Always Visible) -->
              <div class="p-5 sm:p-6">
                <div class="flex items-start gap-4">
                  <!-- Company Logo -->
                  <div class="shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-xl border border-green bg-white flex items-center justify-center overflow-hidden">
                    <img
                      :src="exp.logo"
                      :alt="`${exp.company} logo`"
                      class="w-full h-full object-contain p-2"
                      loading="lazy"
                    />
                  </div>

                  <!-- Company Info -->
                  <div class="flex-1 min-w-0">
                    <div class="flex items-start justify-between gap-3">
                      <div>
                        <h3 class="text-lg sm:text-xl font-semibold leading-tight">
                          {{ exp.role }}
                        </h3>
                        <p class="mt-1 text-sm sm:text-base text-muted-foreground">
                          {{ exp.company }} · {{ exp.type }}
                        </p>
                      </div>

                      <!-- Toggle Icon -->
                      <button
                        class="shrink-0 p-2 hover:bg-zinc-100 rounded-full transition-colors"
                        @click.stop="toggleAccordion(index)"
                        :aria-expanded="activeIndex === index"
                        :aria-label="`${activeIndex === index ? 'Collapse' : 'Expand'} ${exp.company} details`"
                      >
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          class="w-5 h-5 transition-transform duration-300"
                          :class="{ 'rotate-180': activeIndex === index }"
                          viewBox="0 0 24 24" 
                          fill="currentColor"
                        >
                          <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                        </svg>
                      </button>
                    </div>

                    <div class="mt-2 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                      <span class="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
                        </svg>
                        {{ exp.period }}
                      </span>
                      <span class="text-muted-foreground/60">·</span>
                      <span>{{ exp.duration }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Expandable Content -->
              <transition
                enter-active-class="transition-all duration-300 ease-out"
                enter-from-class="opacity-0 max-h-0"
                enter-to-class="opacity-100 max-h-[2000px]"
                leave-active-class="transition-all duration-300 ease-in"
                leave-from-class="opacity-100 max-h-[2000px]"
                leave-to-class="opacity-0 max-h-0"
              >
                <div 
                  v-show="activeIndex === index"
                  class="border-t border-zinc-200/70 overflow-hidden"
                >
                  <div class="p-5 sm:p-6 space-y-4">
                    <!-- Description -->
                    <div class="space-y-2">
                      <div
                        v-for="(item, idx) in exp.description"
                        :key="idx"
                        class="flex items-start gap-2 text-sm leading-relaxed"
                      >
                        <span class="text-green mt-1 shrink-0">●</span>
                        <span>{{ item }}</span>
                      </div>
                    </div>

                    <!-- Skills -->
                    <div v-if="exp.skills?.length" class="pt-2">
                      <h4 class="text-xs font-semibold tracking-wide text-muted-foreground uppercase mb-2">
                        Technologies & Skills
                      </h4>
                      <div class="flex flex-wrap gap-2">
                        <span
                          v-for="skill in exp.skills"
                          :key="skill"
                          class="rounded-full border border-green px-2.5 py-1 text-xs"
                        >
                          {{ skill }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.text-muted-foreground {
  color: rgb(82 82 91);
}

/* Smooth max-height transitions */
[enter-active-class*="transition-all"],
[leave-active-class*="transition-all"] {
  transition-property: opacity, max-height;
}

/* Timeline dot glow effect */
@keyframes pulse-green {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(34, 197, 94, 0);
  }
}

.scale-150 {
  animation: pulse-green 2s infinite;
}
</style>

