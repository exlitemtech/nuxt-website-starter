<template>
  <section class="bg-[var(--color-beige-100)] py-16 md:py-32 relative overflow-hidden">
    <!-- Background Image Layer -->
    <div class="absolute inset-0 bg-[url('/img/nora-hero-image.png')] bg-cover bg-center"></div>
    
    <!-- Office Conference Room Photo Placeholder -->
    <div class="absolute top-8 right-8 w-64 h-40 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg shadow-lg hidden lg:flex items-center justify-center">
      <div class="text-center text-white/80">
        <div class="text-4xl mb-2">🏢</div>
        <div class="text-sm font-medium">Office Conference Room</div>
        <div class="text-xs opacity-75">(Insert faded photo)</div>
      </div>
    </div>
    
    <!-- Glassmorphic Overlay -->
    <div class="absolute inset-0 bg-gradient-to-r from-[var(--color-beige-100)]/40 to-[var(--color-beige-200)]/50 backdrop-blur-[4px]">
      <!-- Animated light reflection -->
      <div class="absolute inset-0 opacity-15">
        <div class="absolute -inset-[20%] bg-white/20 rounded-full blur-3xl animate-glass-shine"></div>
      </div>
    </div>
    
    <div class="container mx-auto px-4 sm:px-6 relative z-10">
      <div class="max-w-4xl backdrop-blur-[10px] p-5 sm:p-8 md:p-10 rounded-lg bg-white/40 border border-white/50 shadow-xl backdrop-saturate-150 relative overflow-hidden">
        <!-- Inner light reflection for glass container -->
        <div class="absolute -inset-[100%] bg-white/20 rounded-full blur-3xl animate-glass-shine-slow"></div>
        
        <div class="relative z-10"> <!-- Content wrapper to keep text above the animation -->
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 font-[var(--font-heading)] leading-tight text-[var(--color-text-dark)] tracking-wide">Committed to <span class="text-[var(--color-accent-500)] font-bold drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]">Excellence</span> in Legal Practice</h1>
          <p class="text-lg md:text-xl mb-6 md:mb-10 text-[var(--color-text-dark)] max-w-3xl leading-relaxed">
            Leveraging multi-sectoral legal expertise, Nora Chambers delivers comprehensive legal representation and tailored counsel across dispute resolution, corporate advisory, insolvency, intellectual property, securities law, direct tax, and related practice areas.
          </p>
          <p class="text-base md:text-lg mb-6 md:mb-10 text-[var(--color-text-dark)] max-w-3xl leading-relaxed">
            The firm has earned client recognition for its commitment to delivering clear, actionable legal guidance and its attorneys' innovative problem-solving approach to complex legal challenges.
          </p>
          <p class="text-base md:text-lg mb-6 md:mb-10 text-[var(--color-text-dark)] max-w-3xl leading-relaxed">
            Comprising seasoned partners and accomplished associates, Nora Chambers serves as trusted legal counsel to prominent corporations, handling both high-stakes business disputes and day-to-day legal requirements with equal proficiency.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a 
              href="#practice-areas" 
              class="btn-primary text-center inline-block backdrop-blur-sm bg-[var(--color-accent-500)]/90 hover:bg-[var(--color-accent-600)]"
            >
              Our Practice Areas
            </a>
            <a 
              href="#our-team" 
              class="btn-secondary text-center inline-block backdrop-blur-sm bg-white/30 border border-white/40 hover:bg-white/40"
            >
              Our Team
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="absolute bottom-0 w-full">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" class="fill-white">
        <path d="M0,96L80,101.3C160,107,320,117,480,117.3C640,117,800,107,960,96C1120,85,1280,75,1360,69.3L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
      </svg>
    </div>
  </section>
</template>

<style scoped>
@keyframes glass-shine {
  0% {
    left: -100%;
    top: -20%;
  }
  100% {
    left: 200%;
    top: 100%;
  }
}

@keyframes glass-shine-slow {
  0% {
    left: -100%;
    top: -50%;
  }
  100% {
    left: 100%;
    top: 100%;
  }
}

.animate-glass-shine {
  animation: glass-shine 10s linear infinite;
}

.animate-glass-shine-slow {
  animation: glass-shine-slow 25s linear infinite;
}

/* Add text shadow support for better readability */
.drop-shadow-sm {
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.05));
}

.drop-shadow-md {
  filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.1));
}
</style> 