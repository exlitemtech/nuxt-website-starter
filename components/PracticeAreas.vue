<template>
  <section id="practice-areas" class="py-20 bg-[var(--color-beige-50)]">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-[var(--color-text-dark)] mb-4 font-[var(--font-heading)]">Practice Areas</h2>
        <p class="text-[var(--color-text-muted)] max-w-3xl mx-auto">We provide comprehensive legal services across diverse practice areas, delivering expert counsel and representation.</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <div v-for="(area, index) in practiceAreas" :key="index" 
          class="p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-[var(--color-accent-500)]">
          <h3 class="text-lg font-semibold mb-3 text-[var(--color-text-dark)] font-[var(--font-heading)]">{{ area.title }}</h3>
          <p class="text-[var(--color-text-muted)] text-sm leading-relaxed">{{ area.description }}</p>
        </div>
      </div>
      
      <!-- Sectoral Focus -->
      <div class="bg-white p-8 shadow-lg">
        <h3 class="text-2xl font-semibold text-[var(--color-text-dark)] mb-6 text-center font-[var(--font-heading)]">Sectoral Focus</h3>
        <div class="flex flex-wrap justify-center gap-4">
          <div v-for="(sector, index) in sectorialFocus" :key="index" 
            class="bg-[var(--color-beige-50)] px-4 py-2 text-[var(--color-text-dark)] font-medium border border-[var(--color-beige-200)] hover:bg-[var(--color-accent-500)] hover:text-white transition-colors duration-300 cursor-default">
            {{ sector }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const practiceAreas = [
  {
    title: "Arbitration & Commercial Dispute Resolution",
    description: "Expert representation in arbitration proceedings and commercial disputes."
  },
  {
    title: "General Corporate Advisory",
    description: "Comprehensive corporate legal counsel and strategic guidance."
  },
  {
    title: "Intellectual Property",
    description: "Protection and enforcement of intellectual property rights."
  },
  {
    title: "Economic Offences",
    description: "Defense in economic crime cases and financial investigations."
  },
  {
    title: "Securities Law",
    description: "Securities regulations compliance and enforcement matters."
  },
  {
    title: "Data Privacy",
    description: "Privacy law compliance and data protection strategies."
  },
  {
    title: "Direct Tax",
    description: "Tax planning, compliance, and dispute resolution services."
  },
  {
    title: "Insolvency",
    description: "Insolvency proceedings and restructuring solutions."
  }
];

const sectorialFocus = [
  "Aviation",
  "Finance", 
  "Pharma & Health Care",
  "Construction & Heavy Engineering",
  "SaaS & IT"
];
</script> 