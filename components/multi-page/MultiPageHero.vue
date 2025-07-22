<template>
  <section class="relative bg-gradient-to-br from-[var(--color-beige-50)] to-[var(--color-beige-100)] py-20 lg:py-32 overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 25% 25%, var(--color-accent-500) 1px, transparent 1px); background-size: 50px 50px;"></div>
    </div>
    
    <!-- Office Conference Room Photo Placeholder -->
    <div class="absolute top-8 right-8 w-80 h-48 bg-white/30 backdrop-blur-sm border border-white/40 rounded-lg shadow-xl hidden xl:flex items-center justify-center">
      <div class="text-center text-[var(--color-text-muted)]">
        <div class="text-5xl mb-3">🏢</div>
        <div class="text-lg font-semibold">Conference Room</div>
        <div class="text-sm opacity-75">Photo Placeholder</div>
      </div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="max-w-4xl">
        <!-- Breadcrumb -->
        <nav class="mb-8">
          <ol class="flex items-center space-x-2 text-sm text-[var(--color-text-muted)]">
            <li><NuxtLink to="/multi" class="hover:text-[var(--color-accent-500)]">Home</NuxtLink></li>
            <li class="text-[var(--color-beige-400)]">→</li>
            <li class="text-[var(--color-text-dark)]">Welcome</li>
          </ol>
        </nav>

        <div class="mb-8">
          <div class="inline-flex items-center bg-[var(--color-accent-500)] text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span class="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            Available 24/7 for Legal Consultations
          </div>
          
          <h1 class="text-4xl lg:text-6xl xl:text-7xl font-bold text-[var(--color-text-dark)] mb-6 font-[var(--font-heading)] leading-tight">
            Committed to 
            <span class="text-[var(--color-accent-500)] relative">
              Excellence
              <svg class="absolute -bottom-2 left-0 w-full h-3 text-[var(--color-accent-300)]" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10C100 4 200 4 298 10" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
              </svg>
            </span>
            <br>in Legal Practice
          </h1>
          
          <div class="max-w-3xl text-lg lg:text-xl text-[var(--color-text-muted)] mb-8 leading-relaxed space-y-4">
            <p>
              Leveraging multi-sectoral legal expertise, <strong class="text-[var(--color-text-dark)]">Nora Chambers</strong> delivers comprehensive legal representation and tailored counsel across dispute resolution, corporate advisory, insolvency, intellectual property, securities law, direct tax, and related practice areas.
            </p>
            <p>
              The firm has earned client recognition for its commitment to delivering clear, actionable legal guidance and its attorneys' innovative problem-solving approach to complex legal challenges.
            </p>
          </div>
        </div>

        <!-- Quick Action Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <NuxtLink 
            to="/multi/practice-areas" 
            class="group bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[var(--color-beige-200)] hover:border-[var(--color-accent-400)]"
          >
            <div class="text-3xl mb-4 group-hover:scale-110 transition-transform">⚖️</div>
            <h3 class="text-xl font-semibold text-[var(--color-text-dark)] mb-2 font-[var(--font-heading)]">Practice Areas</h3>
            <p class="text-[var(--color-text-muted)] text-sm">Explore our comprehensive legal services across 8 specialized practice areas.</p>
            <div class="mt-4 text-[var(--color-accent-500)] text-sm font-medium group-hover:text-[var(--color-accent-600)]">
              Learn More →
            </div>
          </NuxtLink>

          <NuxtLink 
            to="/multi/team" 
            class="group bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[var(--color-beige-200)] hover:border-[var(--color-accent-400)]"
          >
            <div class="text-3xl mb-4 group-hover:scale-110 transition-transform">👥</div>
            <h3 class="text-xl font-semibold text-[var(--color-text-dark)] mb-2 font-[var(--font-heading)]">Expert Team</h3>
            <p class="text-[var(--color-text-muted)] text-sm">Meet our seasoned partners and accomplished associates with decades of experience.</p>
            <div class="mt-4 text-[var(--color-accent-500)] text-sm font-medium group-hover:text-[var(--color-accent-600)]">
              Meet the Team →
            </div>
          </NuxtLink>

          <NuxtLink 
            to="/multi/contact" 
            class="group bg-[var(--color-accent-500)] p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-white hover:bg-[var(--color-accent-600)]"
          >
            <div class="text-3xl mb-4 group-hover:scale-110 transition-transform">📞</div>
            <h3 class="text-xl font-semibold mb-2 font-[var(--font-heading)]">Get in Touch</h3>
            <p class="text-white/90 text-sm">Schedule a consultation or discuss your legal requirements with our team.</p>
            <div class="mt-4 text-white text-sm font-medium">
              Contact Us →
            </div>
          </NuxtLink>
        </div>

        <!-- Key Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="text-center">
            <div class="text-2xl lg:text-3xl font-bold text-[var(--color-accent-500)] mb-2">20+</div>
            <div class="text-sm text-[var(--color-text-muted)] font-medium">Years Experience</div>
          </div>
          <div class="text-center">
            <div class="text-2xl lg:text-3xl font-bold text-[var(--color-accent-500)] mb-2">500+</div>
            <div class="text-sm text-[var(--color-text-muted)] font-medium">Cases Handled</div>
          </div>
          <div class="text-center">
            <div class="text-2xl lg:text-3xl font-bold text-[var(--color-accent-500)] mb-2">8</div>
            <div class="text-sm text-[var(--color-text-muted)] font-medium">Practice Areas</div>
          </div>
          <div class="text-center">
            <div class="text-2xl lg:text-3xl font-bold text-[var(--color-accent-500)] mb-2">95%</div>
            <div class="text-sm text-[var(--color-text-muted)] font-medium">Success Rate</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Decorative Elements -->
    <div class="absolute bottom-0 right-0 w-64 h-64 bg-[var(--color-accent-300)]/10 rounded-full blur-3xl"></div>
    <div class="absolute top-20 left-0 w-32 h-32 bg-[var(--color-accent-500)]/10 rounded-full blur-2xl"></div>
  </section>
</template>

<script setup>
</script>

<style scoped>
[data-theme="minimalistic"] .rounded-xl,
[data-theme="minimalistic"] .rounded-full {
  border-radius: 0 !important;
}

[data-theme="minimalistic"] .blur-3xl,
[data-theme="minimalistic"] .blur-2xl {
  display: none;
}

[data-theme="corporate"] .bg-white\/80 {
  background: linear-gradient(135deg, var(--color-beige-100), var(--color-beige-200)) !important;
}

[data-theme="classic"] h1 {
  font-style: italic;
}
</style>