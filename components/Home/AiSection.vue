<template>
  <section id="ai" class="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
    <div class="container mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          AI tools and Frameworks i used to build my projects
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Increasing my productivity and efficiency by using AI tools and frameworks.
        </p>
      </div>

      <!-- AI Skills Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="feature in aiFeatures" 
          :key="feature.id"
          class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border custom-border-gradient"
        >
          <div 
            class="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
            :class="feature.iconBg"
          >
            <svg 
              class="w-7 h-7" 
              :class="feature.iconColor"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                :d="feature.icon"
              />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            {{ feature.title }}
          </h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ feature.description }}
          </p>
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="(tag, index) in feature.tags" 
              :key="index"
              class="px-3 py-1 text-sm rounded-full"
              :class="feature.tagStyle"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>

      <!-- Additional Info -->
      <div class="mt-16 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border custom-border-gradient">
        <div class="flex flex-col lg:flex-row items-center gap-8">
          <div class="flex-1">
            <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Why AI Integration Matters
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              In today's rapidly evolving tech landscape, staying current with AI technologies 
              is crucial for building innovative solutions. My expertise in AI integration 
              allows me to create applications that are not just functional, but intelligent 
              and adaptive to user needs.
            </p>
            <ul class="text-gray-600 dark:text-gray-300 space-y-2">
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                Enhanced user experiences through intelligent interactions
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                Automated workflows that save time and reduce errors
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                Data-driven insights and personalized content
              </li>
            </ul>
          </div>
          <div class="lg:w-1/3 flex justify-center">
            <div class="relative">
              <div class="w-48 h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <svg class="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <div class="absolute -bottom-4 -right-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-semibold text-sm">
                AI Ready
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const aiFeatures = [
  {
    id: 1,
    title: 'Workflow Automation with n8n',
    description: 'Building sophisticated automation workflows that connect multiple services, APIs, and systems to streamline business processes and increase efficiency.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    iconBg: 'bg-blue-100 dark:bg-blue-900',
    iconColor: 'text-blue-600 dark:text-blue-400',
    tagStyle: 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300',
    tags: ['n8n', 'API Integration', 'Automation']
  },
  {
    id: 2,
    title: 'OpenAI SDK + Custom Backend',
    description: 'Integrating advanced language models like GPT into web applications with custom backend solutions tailored to specific use cases and requirements.',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    iconBg: 'bg-green-100 dark:bg-green-900',
    iconColor: 'text-green-600 dark:text-green-400',
    tagStyle: 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300',
    tags: ['OpenAI SDK', 'GPT Models', 'Custom Backend']
  },
  {
    id: 3,
    title: 'LangChain Framework',
    description: 'Developing sophisticated AI applications using LangChain for context-aware language model interactions, memory management, and agent-based systems.',
    icon: 'M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z',
    iconBg: 'bg-purple-100 dark:bg-purple-900',
    iconColor: 'text-purple-600 dark:text-purple-400',
    tagStyle: 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300',
    tags: ['LangChain', 'AI Agents', 'Context Management']
  }
];
</script>

<style scoped>
.custom-border-gradient{
    border-radius: 20px;
    border-width: 1px;
    border-image-source: linear-gradient(45deg, #36e4da, #00dc82);
    border-image-slice: 1;
    border-image-repeat: round;
    border-image-width: 1px;
    border-image-outset: 1px;
    border-image-repeat: round;
    border-image-width: 1px;
    border-image-outset: 1px;
    border-image-repeat: round;
    border-image-width: 1px;
}
</style>