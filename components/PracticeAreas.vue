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
    title: 'Civil Litigation',
    description: 'Expert handling of civil disputes, property matters, and contractual issues with a focus on efficient resolution.'
  },
  {
    title: 'Criminal Defense',
    description: 'Strong defense representation in criminal cases with a track record of successful outcomes in complex matters.'
  },
  {
    title: 'Family Law',
    description: 'Compassionate handling of divorce, custody, and family disputes with a focus on protecting client interests.'
  },
  {
    title: 'Property Law',
    description: 'Specialized expertise in property disputes, land acquisition matters, and real estate transactions.'
  },
  {
    title: 'Constitutional Law',
    description: 'Experience in handling constitutional matters and public interest litigation before the High Court.'
  },
  {
    title: 'Corporate Law',
    description: 'Advising businesses on legal compliance, contracts, and corporate governance matters.'
  }
];
</script> 