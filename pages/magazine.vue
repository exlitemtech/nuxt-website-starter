<template>
  <div class="min-h-screen bg-[var(--color-beige-50)] flex" data-layout="magazine">
    <!-- Sidebar Navigation -->
    <aside class="w-80 bg-white shadow-2xl flex flex-col sticky top-0 h-screen overflow-y-auto">
      <!-- Logo Header -->
      <div class="p-8 border-b border-[var(--color-beige-200)]">
        <div class="flex items-center space-x-4 mb-4">
          <div class="w-12 h-12">
            <img 
              src="/img/nora-logo.png" 
              alt="Nora Chambers Logo" 
              class="w-full h-full object-contain"
            />
          </div>
          <div>
            <h1 class="text-xl font-[var(--font-heading)] text-[var(--color-text-dark)] font-bold tracking-wide">Nora Chambers</h1>
            <p class="text-[var(--color-text-muted)] text-sm">Legal Excellence</p>
          </div>
        </div>
        
        <!-- Current Date & Status -->
        <div class="text-center">
          <div class="bg-[var(--color-accent-500)] text-white text-sm px-3 py-2 rounded-full inline-flex items-center">
            <span class="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            Available Now
          </div>
        </div>
      </div>

      <!-- Navigation Menu -->
      <nav class="flex-1 p-6">
        <div class="space-y-2">
          <h3 class="text-xs font-bold text-[var(--color-text-muted)] uppercase tracking-wider mb-4">Navigation</h3>
          
          <a href="#hero" class="nav-item active">
            <span class="nav-icon">🏠</span>
            <span>Overview</span>
          </a>
          <a href="#about" class="nav-item">
            <span class="nav-icon">📋</span>
            <span>About</span>
          </a>
          <a href="#services" class="nav-item">
            <span class="nav-icon">⚖️</span>
            <span>Services</span>
          </a>
          <a href="#team" class="nav-item">
            <span class="nav-icon">👥</span>
            <span>Team</span>
          </a>
          <a href="#awards" class="nav-item">
            <span class="nav-icon">🏆</span>
            <span>Awards</span>
          </a>
          <a href="#updates" class="nav-item">
            <span class="nav-icon">📰</span>
            <span>Updates</span>
          </a>
        </div>

        <!-- Quick Stats -->
        <div class="mt-8 p-4 bg-gradient-to-br from-[var(--color-accent-50)] to-[var(--color-accent-100)] rounded-xl">
          <h4 class="text-sm font-semibold text-[var(--color-text-dark)] mb-3">Quick Stats</h4>
          <div class="space-y-2">
            <div class="flex justify-between text-sm">
              <span class="text-[var(--color-text-muted)]">Cases Won</span>
              <span class="font-semibold text-[var(--color-accent-600)]">500+</span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="text-[var(--color-text-muted)]">Experience</span>
              <span class="font-semibold text-[var(--color-accent-600)]">20+ Years</span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="text-[var(--color-text-muted)]">Success Rate</span>
              <span class="font-semibold text-[var(--color-accent-600)]">95%</span>
            </div>
          </div>
        </div>

        <!-- Contact Info -->
        <div class="mt-6 p-4 bg-[var(--color-beige-50)] rounded-xl border border-[var(--color-beige-200)]">
          <h4 class="text-sm font-semibold text-[var(--color-text-dark)] mb-3">Contact</h4>
          <div class="space-y-2 text-sm text-[var(--color-text-muted)]">
            <div class="flex items-center">
              <span class="mr-2">📧</span>
              <span>info@norachambers.com</span>
            </div>
            <div class="flex items-center">
              <span class="mr-2">📞</span>
              <span>+91 120 4516 000</span>
            </div>
            <div class="flex items-center">
              <span class="mr-2">📍</span>
              <span>Noida, India</span>
            </div>
          </div>
        </div>
      </nav>

      <!-- Bottom CTA -->
      <div class="p-6 border-t border-[var(--color-beige-200)]">
        <button class="w-full bg-[var(--color-accent-500)] text-white py-3 px-4 rounded-lg font-semibold hover:bg-[var(--color-accent-600)] transition-colors">
          Schedule Consultation
        </button>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 overflow-y-auto">
      <!-- Hero Section -->
      <section id="hero" class="relative min-h-screen flex items-center bg-gradient-to-br from-[var(--color-beige-100)] to-[var(--color-beige-200)] px-12 py-20">
        <!-- Background Pattern -->
        <div class="absolute inset-0 opacity-5">
          <div class="absolute inset-0" style="background-image: radial-gradient(circle at 25% 25%, var(--color-accent-500) 1px, transparent 1px); background-size: 30px 30px;"></div>
        </div>

        <div class="max-w-4xl">
          <!-- Issue Number Badge -->
          <div class="inline-flex items-center bg-[var(--color-accent-500)] text-white px-6 py-3 rounded-full text-sm font-semibold mb-8">
            <span class="mr-2">📖</span>
            Legal Review • Issue #12 • January 2025
          </div>

          <h1 class="text-5xl lg:text-7xl font-bold text-[var(--color-text-dark)] mb-8 font-[var(--font-heading)] leading-tight">
            Excellence in 
            <span class="text-[var(--color-accent-500)] relative">
              Legal Practice
              <svg class="absolute -bottom-2 left-0 w-full h-4 text-[var(--color-accent-300)]" viewBox="0 0 300 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 14C100 6 200 6 298 14" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
              </svg>
            </span>
          </h1>

          <div class="text-xl text-[var(--color-text-muted)] mb-12 leading-relaxed max-w-3xl">
            <p class="mb-4">
              <strong class="text-[var(--color-text-dark)]">Nora Chambers</strong> combines multi-sectoral legal expertise with innovative problem-solving to deliver exceptional client outcomes across dispute resolution, corporate advisory, and specialized practice areas.
            </p>
            <p>
              Our commitment to clear, actionable legal guidance has earned recognition from leading industry publications and the trust of prominent corporations and individuals alike.
            </p>
          </div>

          <!-- Feature Cards -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-[var(--color-beige-200)]">
              <div class="text-3xl mb-4">⚖️</div>
              <h3 class="font-bold text-[var(--color-text-dark)] mb-2 font-[var(--font-heading)]">Multi-Sectoral</h3>
              <p class="text-[var(--color-text-muted)] text-sm">Expertise across 8 specialized practice areas</p>
            </div>
            <div class="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-[var(--color-beige-200)]">
              <div class="text-3xl mb-4">🏆</div>
              <h3 class="font-bold text-[var(--color-text-dark)] mb-2 font-[var(--font-heading)]">Award-Winning</h3>
              <p class="text-[var(--color-text-muted)] text-sm">Recognized by leading legal publications</p>
            </div>
            <div class="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-[var(--color-beige-200)]">
              <div class="text-3xl mb-4">⚡</div>
              <h3 class="font-bold text-[var(--color-text-dark)] mb-2 font-[var(--font-heading)]">Innovative</h3>
              <p class="text-[var(--color-text-muted)] text-sm">Clear, actionable legal solutions</p>
            </div>
          </div>
        </div>

        <!-- Side Image Placeholder -->
        <div class="hidden xl:block absolute right-12 top-1/2 transform -translate-y-1/2 w-80 h-96 bg-white/30 backdrop-blur-sm border border-white/40 rounded-2xl shadow-2xl">
          <div class="h-full flex flex-col items-center justify-center text-[var(--color-text-muted)]">
            <div class="text-6xl mb-4">🏛️</div>
            <div class="text-lg font-semibold">Law Office</div>
            <div class="text-sm opacity-75">Photo Placeholder</div>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="px-12 py-20 bg-white">
        <div class="max-w-6xl">
          <div class="flex items-center mb-12">
            <div class="w-1 h-16 bg-[var(--color-accent-500)] mr-8"></div>
            <div>
              <h2 class="text-4xl font-bold text-[var(--color-text-dark)] font-[var(--font-heading)]">About Nora Chambers</h2>
              <p class="text-[var(--color-text-muted)] mt-2">Established 2020 • Legal Excellence Since Day One</p>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div class="space-y-6">
              <p class="text-lg text-[var(--color-text-muted)] leading-relaxed">
                Founded with a vision to deliver exceptional legal services through innovative approaches, <strong class="text-[var(--color-text-dark)]">Nora Chambers</strong> has quickly established itself as a trusted legal counsel for prominent corporations and individuals.
              </p>
              <p class="text-[var(--color-text-muted)] leading-relaxed">
                Our seasoned partners and accomplished associates bring decades of combined experience across diverse legal domains, ensuring comprehensive representation for every client engagement.
              </p>
              
              <!-- Achievement Timeline -->
              <div class="mt-8 space-y-4">
                <div class="flex items-center">
                  <div class="w-3 h-3 bg-[var(--color-accent-500)] rounded-full mr-4"></div>
                  <span class="text-[var(--color-text-dark)] font-medium">2024: Legal 500 Tier 1 Ranking</span>
                </div>
                <div class="flex items-center">
                  <div class="w-3 h-3 bg-[var(--color-accent-400)] rounded-full mr-4"></div>
                  <span class="text-[var(--color-text-dark)] font-medium">2023: Chambers Leading Law Firm</span>
                </div>
                <div class="flex items-center">
                  <div class="w-3 h-3 bg-[var(--color-accent-300)] rounded-full mr-4"></div>
                  <span class="text-[var(--color-text-dark)] font-medium">2022: Boutique Law Firm of the Year</span>
                </div>
              </div>
            </div>

            <div class="relative">
              <div class="bg-gradient-to-br from-[var(--color-accent-50)] to-[var(--color-accent-100)] p-12 rounded-2xl shadow-xl">
                <h3 class="text-2xl font-bold text-[var(--color-text-dark)] mb-8 font-[var(--font-heading)] text-center">Our Mission</h3>
                <div class="space-y-6 text-center">
                  <div class="p-4 bg-white rounded-xl shadow-sm">
                    <div class="text-2xl font-bold text-[var(--color-accent-500)] mb-2">Excellence</div>
                    <div class="text-sm text-[var(--color-text-muted)]">Unwavering commitment to legal excellence</div>
                  </div>
                  <div class="p-4 bg-white rounded-xl shadow-sm">
                    <div class="text-2xl font-bold text-[var(--color-accent-500)] mb-2">Innovation</div>
                    <div class="text-sm text-[var(--color-text-muted)]">Innovative problem-solving approaches</div>
                  </div>
                  <div class="p-4 bg-white rounded-xl shadow-sm">
                    <div class="text-2xl font-bold text-[var(--color-accent-500)] mb-2">Trust</div>
                    <div class="text-sm text-[var(--color-text-muted)]">Building lasting client relationships</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Services Section -->
      <MagazineServices />

      <!-- Team Section -->
      <MagazineTeam />

      <!-- Awards Section -->
      <MagazineAwards />

      <!-- Updates Section -->
      <MagazineUpdates />

      <!-- Footer -->
      <Footer />
    </main>
    
    <ThemeSwitcher />
    <NoticeDialog />
  </div>
</template>

<script setup>
import MagazineServices from '~/components/magazine/MagazineServices.vue'
import MagazineTeam from '~/components/magazine/MagazineTeam.vue'
import MagazineAwards from '~/components/magazine/MagazineAwards.vue'
import MagazineUpdates from '~/components/magazine/MagazineUpdates.vue'
import Footer from '~/components/Footer.vue'
import ThemeSwitcher from '~/components/ThemeSwitcher.vue'
import NoticeDialog from '~/components/NoticeDialog.vue'
</script>

<style scoped>
.nav-item {
  @apply flex items-center px-4 py-3 rounded-lg text-[var(--color-text-muted)] hover:text-[var(--color-text-dark)] hover:bg-[var(--color-beige-50)] transition-all duration-200 cursor-pointer text-sm font-medium;
}

.nav-item.active {
  @apply bg-[var(--color-accent-100)] text-[var(--color-accent-700)] font-semibold;
}

.nav-icon {
  @apply text-lg mr-3 opacity-75;
}

.nav-item.active .nav-icon {
  @apply opacity-100;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Magazine-specific theme adaptations */
[data-theme="minimalistic"] .rounded-2xl,
[data-theme="minimalistic"] .rounded-xl,
[data-theme="minimalistic"] .rounded-lg,
[data-theme="minimalistic"] .rounded-full {
  border-radius: 0 !important;
}

[data-theme="corporate"] .bg-white {
  background: linear-gradient(135deg, var(--color-beige-100), var(--color-beige-200)) !important;
}

[data-theme="classic"] h1,
[data-theme="classic"] h2,
[data-theme="classic"] h3 {
  font-style: italic;
}

/* Mobile responsive sidebar (will be hidden on mobile) */
@media (max-width: 1024px) {
  aside {
    display: none;
  }
  
  main {
    width: 100%;
  }
}
</style>