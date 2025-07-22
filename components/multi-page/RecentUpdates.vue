<template>
  <section class="py-20 bg-[var(--color-beige-50)]">
    <div class="container mx-auto px-6">
      <div class="flex justify-between items-center mb-12">
        <div>
          <h2 class="text-3xl lg:text-4xl font-bold text-[var(--color-text-dark)] mb-4 font-[var(--font-heading)]">
            Latest Legal Updates
          </h2>
          <p class="text-[var(--color-text-muted)]">Stay informed about recent developments and insights.</p>
        </div>
        <NuxtLink 
          to="/multi/updates" 
          class="hidden md:inline-flex items-center text-[var(--color-accent-500)] hover:text-[var(--color-accent-600)] font-medium"
        >
          View All Updates
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </NuxtLink>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Featured Update -->
        <NuxtLink 
          to="/multi/updates/securities-regulations-2025" 
          class="md:col-span-2 lg:col-span-1 group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[var(--color-accent-500)]"
        >
          <div class="flex items-center justify-between mb-4">
            <span class="bg-[var(--color-accent-100)] text-[var(--color-accent-700)] px-3 py-1 rounded-full text-sm font-medium">Featured</span>
            <span class="text-[var(--color-text-muted)] text-sm">January 15, 2025</span>
          </div>
          <h3 class="text-xl font-semibold text-[var(--color-text-dark)] mb-3 font-[var(--font-heading)] group-hover:text-[var(--color-accent-600)]">
            New Securities Regulations Impact Analysis
          </h3>
          <p class="text-[var(--color-text-muted)] mb-4 leading-relaxed">
            Comprehensive analysis of recent SEBI amendments and their impact on corporate compliance requirements for listed entities.
          </p>
          <div class="flex items-center text-[var(--color-accent-500)] text-sm font-medium group-hover:text-[var(--color-accent-600)]">
            Read Analysis
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </div>
        </NuxtLink>

        <!-- Regular Updates -->
        <NuxtLink 
          to="/multi/updates/tax-litigation-precedent" 
          class="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div class="flex items-center justify-between mb-4">
            <span class="bg-[var(--color-beige-100)] text-[var(--color-text-dark)] px-3 py-1 rounded-full text-sm font-medium">Tax Law</span>
            <span class="text-[var(--color-text-muted)] text-sm">January 10, 2025</span>
          </div>
          <h3 class="text-lg font-semibold text-[var(--color-text-dark)] mb-3 font-[var(--font-heading)] group-hover:text-[var(--color-accent-600)]">
            Supreme Court Tax Assessment Ruling
          </h3>
          <p class="text-[var(--color-text-muted)] mb-4 text-sm leading-relaxed">
            New precedent set for tax assessment procedures affecting corporate entities.
          </p>
          <div class="flex items-center text-[var(--color-accent-500)] text-sm font-medium group-hover:text-[var(--color-accent-600)]">
            Read More →
          </div>
        </NuxtLink>

        <NuxtLink 
          to="/multi/updates/ip-protection-guidelines" 
          class="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div class="flex items-center justify-between mb-4">
            <span class="bg-[var(--color-beige-100)] text-[var(--color-text-dark)] px-3 py-1 rounded-full text-sm font-medium">IP Law</span>
            <span class="text-[var(--color-text-muted)] text-sm">January 5, 2025</span>
          </div>
          <h3 class="text-lg font-semibold text-[var(--color-text-dark)] mb-3 font-[var(--font-heading)] group-hover:text-[var(--color-accent-600)]">
            Digital Age Patent Protection
          </h3>
          <p class="text-[var(--color-text-muted)] mb-4 text-sm leading-relaxed">
            New guidelines for intellectual property protection in emerging technologies.
          </p>
          <div class="flex items-center text-[var(--color-accent-500)] text-sm font-medium group-hover:text-[var(--color-accent-600)]">
            Read More →
          </div>
        </NuxtLink>
      </div>

      <!-- Mobile View All Button -->
      <div class="md:hidden mt-8 text-center">
        <NuxtLink 
          to="/multi/updates" 
          class="inline-flex items-center bg-[var(--color-accent-500)] text-white px-6 py-3 rounded-lg hover:bg-[var(--color-accent-600)] transition-colors font-medium"
        >
          View All Updates
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </NuxtLink>
      </div>

      <!-- Newsletter Signup -->
      <div class="mt-16 bg-gradient-to-r from-[var(--color-accent-500)] to-[var(--color-accent-600)] p-8 rounded-2xl text-white">
        <div class="max-w-2xl mx-auto text-center">
          <h3 class="text-2xl font-bold mb-4 font-[var(--font-heading)]">Stay Updated</h3>
          <p class="mb-6 opacity-90">Subscribe to our newsletter for the latest legal insights and updates delivered to your inbox.</p>
          <form class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              class="flex-1 px-4 py-3 rounded-lg text-[var(--color-text-dark)] placeholder-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-white"
            >
            <button 
              type="submit"
              class="bg-white text-[var(--color-accent-600)] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
[data-theme="minimalistic"] .rounded-2xl,
[data-theme="minimalistic"] .rounded-lg,
[data-theme="minimalistic"] .rounded-full {
  border-radius: 0 !important;
}

[data-theme="corporate"] .bg-white {
  background: linear-gradient(135deg, var(--color-beige-100), var(--color-beige-200)) !important;
}

[data-theme="classic"] h2,
[data-theme="classic"] h3 {
  font-style: italic;
}
</style>