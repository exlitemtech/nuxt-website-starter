<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-4xl font-bold text-[var(--color-text-dark)] mb-6 font-[var(--font-heading)]">
          Why Choose Nora Chambers?
        </h2>
        <p class="text-lg text-[var(--color-text-muted)] max-w-3xl mx-auto">
          Comprising seasoned partners and accomplished associates, we serve as trusted legal counsel to prominent corporations and individuals alike.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Features List -->
        <div class="space-y-8">
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-[var(--color-accent-500)] rounded-full flex items-center justify-center flex-shrink-0">
              <span class="text-white font-bold text-lg">🎯</span>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-[var(--color-text-dark)] mb-2 font-[var(--font-heading)]">Multi-Sectoral Expertise</h3>
              <p class="text-[var(--color-text-muted)]">Comprehensive legal representation across dispute resolution, corporate advisory, IP, securities law, and more.</p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-[var(--color-accent-500)] rounded-full flex items-center justify-center flex-shrink-0">
              <span class="text-white font-bold text-lg">⚡</span>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-[var(--color-text-dark)] mb-2 font-[var(--font-heading)]">Innovative Solutions</h3>
              <p class="text-[var(--color-text-muted)]">Recognized for delivering clear, actionable legal guidance through innovative problem-solving approaches.</p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-[var(--color-accent-500)] rounded-full flex items-center justify-center flex-shrink-0">
              <span class="text-white font-bold text-lg">🏆</span>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-[var(--color-text-dark)] mb-2 font-[var(--font-heading)]">Award-Winning Team</h3>
              <p class="text-[var(--color-text-muted)]">Industry recognition from leading publications and legal institutions for excellence in practice.</p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-[var(--color-accent-500)] rounded-full flex items-center justify-center flex-shrink-0">
              <span class="text-white font-bold text-lg">🤝</span>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-[var(--color-text-dark)] mb-2 font-[var(--font-heading)]">Client-Focused Service</h3>
              <p class="text-[var(--color-text-muted)]">Equal proficiency in handling both high-stakes business disputes and day-to-day legal requirements.</p>
            </div>
          </div>
        </div>

        <!-- Visual Element -->
        <div class="relative">
          <div class="bg-gradient-to-br from-[var(--color-beige-50)] to-[var(--color-beige-100)] p-8 rounded-2xl shadow-xl">
            <div class="text-center mb-8">
              <h3 class="text-2xl font-bold text-[var(--color-text-dark)] mb-4 font-[var(--font-heading)]">Our Commitment</h3>
              <div class="w-16 h-1 bg-[var(--color-accent-500)] mx-auto mb-6"></div>
            </div>
            
            <div class="space-y-6">
              <div class="text-center p-4 bg-white rounded-xl shadow-sm border border-[var(--color-beige-200)]">
                <div class="text-2xl font-bold text-[var(--color-accent-500)] mb-2">Excellence</div>
                <div class="text-sm text-[var(--color-text-muted)]">in Legal Practice</div>
              </div>
              
              <div class="text-center p-4 bg-white rounded-xl shadow-sm border border-[var(--color-beige-200)]">
                <div class="text-2xl font-bold text-[var(--color-accent-500)] mb-2">Clear</div>
                <div class="text-sm text-[var(--color-text-muted)]">Actionable Guidance</div>
              </div>
              
              <div class="text-center p-4 bg-white rounded-xl shadow-sm border border-[var(--color-beige-200)]">
                <div class="text-2xl font-bold text-[var(--color-accent-500)] mb-2">Trusted</div>
                <div class="text-sm text-[var(--color-text-muted)]">Legal Counsel</div>
              </div>
            </div>

            <div class="mt-8 text-center">
              <NuxtLink 
                to="/multi/practice-areas" 
                class="inline-flex items-center bg-[var(--color-accent-500)] text-white px-6 py-3 rounded-lg hover:bg-[var(--color-accent-600)] transition-colors font-medium"
              >
                Explore Our Services
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </NuxtLink>
            </div>
          </div>

          <!-- Decorative element -->
          <div class="absolute -top-4 -right-4 w-24 h-24 bg-[var(--color-accent-300)]/20 rounded-full blur-xl"></div>
          <div class="absolute -bottom-4 -left-4 w-16 h-16 bg-[var(--color-accent-500)]/20 rounded-full blur-lg"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
[data-theme="minimalistic"] .rounded-2xl,
[data-theme="minimalistic"] .rounded-xl,
[data-theme="minimalistic"] .rounded-lg,
[data-theme="minimalistic"] .rounded-full {
  border-radius: 0 !important;
}

[data-theme="minimalistic"] .blur-xl,
[data-theme="minimalistic"] .blur-lg {
  display: none;
}

[data-theme="corporate"] .bg-white {
  background: linear-gradient(135deg, var(--color-beige-100), var(--color-beige-200)) !important;
}

[data-theme="classic"] h2,
[data-theme="classic"] h3 {
  font-style: italic;
}
</style>