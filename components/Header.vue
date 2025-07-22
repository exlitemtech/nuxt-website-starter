<template>
  <header class="fixed top-0 left-0 right-0 w-full z-50 bg-[var(--color-accent-300)] shadow-md transition-all duration-300">
    <div class="container mx-auto px-4 py-4 border-b border-[var(--color-beige-200)]">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <div class="w-12 h-12 mr-4">
              <img 
                src="/img/nora-logo.png" 
                alt="Nora Chambers Logo" 
                class="w-full h-full object-contain"
              />
          </div>
          <h1 class="text-2xl font-[var(--font-heading)] text-[var(--color-text-dark)] tracking-wider uppercase">Nora Chambers</h1>
        </div>
        <div class="flex items-center gap-8">
          <div class="hidden md:flex items-center gap-6">
            <a href="tel:+911141075982" class="flex items-center text-[var(--color-text-muted)] hover:text-[var(--color-accent-500)] transition-colors text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 11 4107 5982
            </a>
            <a href="mailto:admin@norachambers.in" class="flex items-center text-[var(--color-text-muted)] hover:text-[var(--color-accent-500)] transition-colors text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              admin@norachambers.in
            </a>
          </div>
          <nav class="hidden md:block">
            <ul class="flex space-x-8">
              <li><a href="/" class="text-[var(--color-text-dark)] hover:text-[var(--color-accent-500)] transition-colors font-[var(--font-sans)] tracking-wide">Home</a></li>
              <li><a href="#about" class="text-[var(--color-text-dark)] hover:text-[var(--color-accent-500)] transition-colors font-[var(--font-sans)] tracking-wide">About</a></li>
              <li><a href="#practice-areas" class="text-[var(--color-text-dark)] hover:text-[var(--color-accent-500)] transition-colors font-[var(--font-sans)] tracking-wide">Practice Areas</a></li>
              <li><a href="#our-team" class="text-[var(--color-text-dark)] hover:text-[var(--color-accent-500)] transition-colors font-[var(--font-sans)] tracking-wide">Our Team</a></li>
              <li><a href="#contact" class="text-[var(--color-text-dark)] hover:text-[var(--color-accent-500)] transition-colors font-[var(--font-sans)] tracking-wide">Contact</a></li>
            </ul>
          </nav>
          <div class="md:hidden">
            <button 
              @click="toggleMobileMenu" 
              class="text-[var(--color-text-dark)] p-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-500)] rounded-md"
              aria-label="Toggle menu"
            >
              <!-- Hamburger icon when menu is closed -->
              <svg 
                v-if="!mobileMenuOpen" 
                xmlns="http://www.w3.org/2000/svg" 
                class="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <!-- X icon when menu is open -->
              <svg 
                v-else 
                xmlns="http://www.w3.org/2000/svg" 
                class="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Mobile Menu Overlay -->
    <div 
      v-if="mobileMenuOpen" 
      @click="closeMobileMenu"
      class="fixed inset-0 bg-[var(--color-text-dark)]/50 backdrop-blur-sm z-40 md:hidden"
    ></div>
    
    <!-- Mobile Menu Panel -->
    <div 
      :class="['fixed top-0 right-0 bottom-0 w-4/5 max-w-xs bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden', mobileMenuOpen ? 'translate-x-0' : 'translate-x-full']"
    >
      <div class="p-6 h-full flex flex-col">
        <div class="flex justify-between items-center mb-8">
          <h2 class="text-lg font-[var(--font-heading)] text-[var(--color-text-dark)]">Menu</h2>
          <button 
            @click="closeMobileMenu" 
            class="text-[var(--color-text-dark)] p-1 hover:bg-gray-100 rounded-full"
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <nav class="mb-8">
          <ul class="space-y-4">
            <li>
              <a 
                href="/" 
                @click="closeMobileMenu"
                class="block py-2 text-[var(--color-text-dark)] hover:text-[var(--color-accent-500)] transition-colors font-[var(--font-sans)] tracking-wide border-b border-[var(--color-beige-200)]"
              >Home</a>
            </li>
            <li>
              <a 
                href="#about" 
                @click="closeMobileMenu"
                class="block py-2 text-[var(--color-text-dark)] hover:text-[var(--color-accent-500)] transition-colors font-[var(--font-sans)] tracking-wide border-b border-[var(--color-beige-200)]"
              >About</a>
            </li>
            <li>
              <a 
                href="#practice-areas" 
                @click="closeMobileMenu"
                class="block py-2 text-[var(--color-text-dark)] hover:text-[var(--color-accent-500)] transition-colors font-[var(--font-sans)] tracking-wide border-b border-[var(--color-beige-200)]"
              >Practice Areas</a>
            </li>
            <li>
              <a 
                href="#our-team" 
                @click="closeMobileMenu"
                class="block py-2 text-[var(--color-text-dark)] hover:text-[var(--color-accent-500)] transition-colors font-[var(--font-sans)] tracking-wide border-b border-[var(--color-beige-200)]"
              >Our Team</a>
            </li>
            <li>
              <a 
                href="#contact" 
                @click="closeMobileMenu"
                class="block py-2 text-[var(--color-text-dark)] hover:text-[var(--color-accent-500)] transition-colors font-[var(--font-sans)] tracking-wide border-b border-[var(--color-beige-200)]"
              >Contact</a>
            </li>
          </ul>
        </nav>
        
        <div class="mt-auto space-y-4">
          <a href="tel:+911141075982" class="flex items-center text-[var(--color-text-muted)] hover:text-[var(--color-accent-500)] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +91 11 4107 5982
          </a>
          <a href="mailto:admin@norachambers.in" class="flex items-center text-[var(--color-text-muted)] hover:text-[var(--color-accent-500)] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            admin@norachambers.in
          </a>
        </div>
      </div>
    </div>
  </header>
  
  <!-- Spacer to prevent content from being hidden behind fixed header -->
  <div class="header-spacer"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';

// Mobile menu state
const mobileMenuOpen = ref(false);

// Toggle mobile menu
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
  if (mobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  } else {
    document.body.style.overflow = ''; // Re-enable scrolling
  }
};

// Close mobile menu
const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
  document.body.style.overflow = ''; // Re-enable scrolling
};

// Close mobile menu when clicking on any link
const handleAnchorClick = (e) => {
  if (e.target.tagName === 'A') {
    closeMobileMenu();
  }
};

// Close mobile menu on escape key press
const handleEscKey = (e) => {
  if (e.key === 'Escape' && mobileMenuOpen.value) {
    closeMobileMenu();
  }
};

// Handle screen resize (close menu if screen gets larger)
const handleResize = () => {
  if (window.innerWidth >= 768 && mobileMenuOpen.value) { // 768px is md breakpoint in Tailwind
    closeMobileMenu();
  }
};

onMounted(() => {
  // Calculate and set the header spacer height based on actual header height
  const updateHeaderSpacerHeight = () => {
    const headerHeight = document.querySelector('header').offsetHeight;
    document.querySelector('.header-spacer').style.height = `${headerHeight}px`;
  };
  
  // Initial calculation
  updateHeaderSpacerHeight();
  
  // Add event listeners
  window.addEventListener('resize', updateHeaderSpacerHeight);
  window.addEventListener('resize', handleResize);
  document.addEventListener('keydown', handleEscKey);
  
  // Cleanup on component unmount
  onUnmounted(() => {
    window.removeEventListener('resize', updateHeaderSpacerHeight);
    window.removeEventListener('resize', handleResize);
    document.removeEventListener('keydown', handleEscKey);
    document.body.style.overflow = ''; // Ensure scrolling is re-enabled
  });
});
</script>

<style scoped>
/* Add slide transition styles */
.translate-x-0 {
  transform: translateX(0);
}

.translate-x-full {
  transform: translateX(100%);
}
</style> 