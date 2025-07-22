<template>
  <header class="bg-[var(--color-accent-300)] shadow-lg sticky top-0 z-50">
    <div class="container mx-auto px-6 py-4">
      <div class="flex justify-between items-center">
        <NuxtLink to="/multi" class="flex items-center space-x-4">
          <div class="w-12 h-12">
            <img 
              src="/img/nora-logo.png" 
              alt="Nora Chambers Logo" 
              class="w-full h-full object-contain"
            />
          </div>
          <div>
            <h1 class="text-2xl font-[var(--font-heading)] text-white font-bold tracking-wide">Nora Chambers</h1>
            <p class="text-white/80 text-sm">Legal Excellence Since 2020</p>
          </div>
        </NuxtLink>
        
        <nav class="hidden lg:flex space-x-8">
          <NuxtLink 
            to="/multi" 
            :class="[
              'nav-link',
              { 'active': $route.path === '/multi' }
            ]"
          >
            🏠 Home
          </NuxtLink>
          <NuxtLink 
            to="/multi/practice-areas" 
            :class="[
              'nav-link',
              { 'active': $route.path.includes('practice-areas') }
            ]"
          >
            ⚖️ Practice Areas
          </NuxtLink>
          <NuxtLink 
            to="/multi/team" 
            :class="[
              'nav-link',
              { 'active': $route.path.includes('team') }
            ]"
          >
            👥 Our Team
          </NuxtLink>
          <NuxtLink 
            to="/multi/awards" 
            :class="[
              'nav-link',
              { 'active': $route.path.includes('awards') }
            ]"
          >
            🏆 Awards
          </NuxtLink>
          <NuxtLink 
            to="/multi/updates" 
            :class="[
              'nav-link',
              { 'active': $route.path.includes('updates') }
            ]"
          >
            📰 Updates
          </NuxtLink>
          <NuxtLink 
            to="/multi/contact" 
            :class="[
              'nav-link contact-link',
              { 'active': $route.path.includes('contact') }
            ]"
          >
            📞 Contact
          </NuxtLink>
        </nav>

        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMobileMenu"
          class="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <svg v-if="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div 
      v-if="mobileMenuOpen" 
      class="lg:hidden bg-[var(--color-accent-400)] border-t border-[var(--color-accent-500)]"
    >
      <nav class="container mx-auto px-6 py-4 space-y-4">
        <NuxtLink 
          to="/multi" 
          @click="closeMobileMenu"
          :class="[
            'mobile-nav-link',
            { 'active': $route.path === '/multi' }
          ]"
        >
          🏠 Home
        </NuxtLink>
        <NuxtLink 
          to="/multi/practice-areas" 
          @click="closeMobileMenu"
          :class="[
            'mobile-nav-link',
            { 'active': $route.path.includes('practice-areas') }
          ]"
        >
          ⚖️ Practice Areas
        </NuxtLink>
        <NuxtLink 
          to="/multi/team" 
          @click="closeMobileMenu"
          :class="[
            'mobile-nav-link',
            { 'active': $route.path.includes('team') }
          ]"
        >
          👥 Our Team
        </NuxtLink>
        <NuxtLink 
          to="/multi/awards" 
          @click="closeMobileMenu"
          :class="[
            'mobile-nav-link',
            { 'active': $route.path.includes('awards') }
          ]"
        >
          🏆 Awards
        </NuxtLink>
        <NuxtLink 
          to="/multi/updates" 
          @click="closeMobileMenu"
          :class="[
            'mobile-nav-link',
            { 'active': $route.path.includes('updates') }
          ]"
        >
          📰 Updates
        </NuxtLink>
        <NuxtLink 
          to="/multi/contact" 
          @click="closeMobileMenu"
          :class="[
            'mobile-nav-link contact-link',
            { 'active': $route.path.includes('contact') }
          ]"
        >
          📞 Contact
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

// Close mobile menu on route change
watch(() => useRoute().path, () => {
  closeMobileMenu()
})
</script>

<style scoped>
.nav-link {
  @apply text-white/90 hover:text-white transition-colors duration-200 font-medium px-3 py-2 rounded-md text-sm;
  font-family: var(--font-sans);
}

.nav-link.active {
  @apply text-white bg-white/20;
}

.nav-link.contact-link {
  @apply bg-white text-[var(--color-accent-500)] hover:bg-white/90 hover:text-[var(--color-accent-600)];
  font-weight: 600;
}

.mobile-nav-link {
  @apply block text-white/90 hover:text-white transition-colors duration-200 font-medium py-2 text-base;
  font-family: var(--font-sans);
}

.mobile-nav-link.active {
  @apply text-white font-semibold;
}

.mobile-nav-link.contact-link {
  @apply text-white font-semibold;
}

[data-theme="minimalistic"] .nav-link,
[data-theme="minimalistic"] .mobile-nav-link {
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
}

[data-theme="classic"] .nav-link,
[data-theme="classic"] .mobile-nav-link {
  font-family: var(--font-heading);
}
</style>