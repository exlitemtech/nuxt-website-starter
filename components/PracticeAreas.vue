<template>
  <section class="py-16 bg-[var(--color-beige-50)]">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-serif mb-12 text-center text-[var(--color-text-dark)]">
        Our <span class="text-[var(--color-accent-500)]">Practice Areas</span>
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(area, index) in practiceAreas" :key="index" 
          class="p-6 rounded-lg border border-[var(--color-beige-200)] bg-white shadow-sm hover:shadow-md transition-shadow">
          <h3 class="text-xl font-semibold mb-3 text-[var(--color-text-dark)]">{{ area.title }}</h3>
          <p class="mb-4 text-[var(--color-text-muted)]">{{ area.description }}</p>
          <a href="#" class="inline-flex items-center text-[var(--color-accent-500)] hover:text-[var(--color-accent-600)] font-medium">
            Learn More
            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const practiceAreas = [
  {
    title: "Economic Offences",
    description: "Comprehensive defense and representation in cases involving financial fraud, securities violations, and other economic crimes."
  },
  {
    title: "Direct Taxes",
    description: "Expert representation in tax disputes, appeals, and advisory services for individuals and businesses facing complex tax issues."
  },
  {
    title: "Securities Law",
    description: "Comprehensive litigation and advisory services for securities law compliance, violations, and regulatory matters."
  },
  {
    title: "Corporate Advisory",
    description: "Strategic legal guidance on business formation, corporate governance, compliance, and regulatory matters for businesses of all sizes."
  },
  {
    title: "Intellectual Property",
    description: "Protection and litigation services for patents, trademarks, copyrights, and resolution of complex IP disputes."
  },
  {
    title: "Banking and Finance",
    description: "Legal services for banking regulations, financial transactions, loan agreements, and regulatory compliance matters."
  },
  {
    title: "Administrative Law",
    description: "Representation before administrative tribunals, government agencies, and in regulatory compliance matters across various sectors."
  },
  {
    title: "Media and Entertainment",
    description: "Legal services for content creation, distribution, licensing, and regulatory matters in the media and entertainment industry."
  },
  {
    title: "White Collar Crimes",
    description: "Expert defense and representation in cases involving corporate fraud, embezzlement, insider trading, and other white collar criminal matters."
  }
];
</script> 