<template>
  <div class="min-h-screen bg-[var(--color-beige-50)]" data-layout="fullscreen">
    <!-- Fixed Side Navigation -->
    <nav class="fixed left-6 top-1/2 transform -translate-y-1/2 z-50">
      <div class="bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-2xl border border-white/40">
        <!-- Logo -->
        <div class="text-center mb-6 pb-4 border-b border-[var(--color-beige-200)]">
          <div class="w-8 h-8 mx-auto mb-2">
            <img 
              src="/img/nora-logo.png" 
              alt="Nora Chambers Logo" 
              class="w-full h-full object-contain"
            />
          </div>
          <div class="text-xs font-semibold text-[var(--color-text-dark)]">NC</div>
        </div>
        
        <!-- Navigation Dots -->
        <div class="space-y-6">
          <a 
            href="#hero" 
            class="nav-dot active" 
            data-section="hero"
            :title="'Overview'"
          >
            <span class="dot-icon">🏠</span>
          </a>
          <a 
            href="#about" 
            class="nav-dot" 
            data-section="about"
            :title="'About'"
          >
            <span class="dot-icon">📋</span>
          </a>
          <a 
            href="#services" 
            class="nav-dot" 
            data-section="services"
            :title="'Services'"
          >
            <span class="dot-icon">⚖️</span>
          </a>
          <a 
            href="#team" 
            class="nav-dot" 
            data-section="team"
            :title="'Team'"
          >
            <span class="dot-icon">👥</span>
          </a>
          <a 
            href="#awards" 
            class="nav-dot" 
            data-section="awards"
            :title="'Awards'"
          >
            <span class="dot-icon">🏆</span>
          </a>
          <a 
            href="#contact" 
            class="nav-dot" 
            data-section="contact"
            :title="'Contact'"
          >
            <span class="dot-icon">📞</span>
          </a>
        </div>
      </div>
    </nav>

    <!-- Main Content Sections -->
    <main class="fullscreen-sections">
      <!-- Hero Section -->
      <section 
        id="hero" 
        class="fullscreen-section bg-gradient-to-br from-[var(--color-beige-100)] to-[var(--color-beige-200)] relative overflow-hidden"
      >
        <!-- Background Pattern -->
        <div class="absolute inset-0 opacity-5">
          <div class="absolute inset-0" style="background-image: radial-gradient(circle at 25% 25%, var(--color-accent-500) 2px, transparent 2px); background-size: 60px 60px;"></div>
        </div>
        
        <!-- Content -->
        <div class="relative z-10 flex items-center justify-center h-full px-12">
          <div class="text-center max-w-5xl">
            <!-- Badge -->
            <div class="inline-flex items-center bg-[var(--color-accent-500)] text-white px-8 py-4 rounded-full text-lg font-semibold mb-8 shadow-lg">
              <span class="mr-3 text-2xl">⚖️</span>
              Legal Excellence Since 2020
            </div>
            
            <!-- Main Heading -->
            <h1 class="text-6xl lg:text-8xl font-bold text-[var(--color-text-dark)] mb-8 font-[var(--font-heading)] leading-tight">
              Nora 
              <span class="text-[var(--color-accent-500)] relative">
                Chambers
                <svg class="absolute -bottom-4 left-0 w-full h-6 text-[var(--color-accent-300)]" viewBox="0 0 400 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 20C150 8 250 8 398 20" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
                </svg>
              </span>
            </h1>
            
            <div class="text-2xl lg:text-3xl text-[var(--color-text-muted)] mb-12 leading-relaxed max-w-4xl mx-auto">
              Committed to excellence in legal practice through innovative problem-solving and comprehensive multi-sectoral expertise.
            </div>
            
            <!-- CTA Buttons -->
            <div class="flex flex-col md:flex-row gap-6 justify-center">
              <button class="bg-[var(--color-accent-500)] text-white px-12 py-6 rounded-2xl font-bold text-lg hover:bg-[var(--color-accent-600)] transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1">
                Explore Our Services
              </button>
              <button class="border-3 border-[var(--color-accent-500)] text-[var(--color-accent-500)] px-12 py-6 rounded-2xl font-bold text-lg hover:bg-[var(--color-accent-500)] hover:text-white transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
            
            <!-- Stats -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
              <div class="text-center">
                <div class="text-4xl font-bold text-[var(--color-accent-500)] mb-2">500+</div>
                <div class="text-[var(--color-text-muted)] font-medium">Cases Handled</div>
              </div>
              <div class="text-center">
                <div class="text-4xl font-bold text-[var(--color-accent-500)] mb-2">95%</div>
                <div class="text-[var(--color-text-muted)] font-medium">Success Rate</div>
              </div>
              <div class="text-center">
                <div class="text-4xl font-bold text-[var(--color-accent-500)] mb-2">20+</div>
                <div class="text-[var(--color-text-muted)] font-medium">Years Experience</div>
              </div>
              <div class="text-center">
                <div class="text-4xl font-bold text-[var(--color-accent-500)] mb-2">8</div>
                <div class="text-[var(--color-text-muted)] font-medium">Practice Areas</div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Scroll Indicator -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <div class="text-[var(--color-text-muted)] text-sm mb-4">Scroll to explore</div>
          <div class="w-1 h-12 bg-[var(--color-accent-300)] rounded-full mx-auto animate-pulse"></div>
        </div>
      </section>

      <!-- About Section -->
      <section 
        id="about" 
        class="fullscreen-section bg-white relative"
      >
        <div class="flex items-center justify-center h-full px-12">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl">
            <!-- Left Column -->
            <div class="flex flex-col justify-center">
              <div class="mb-8">
                <div class="text-[var(--color-accent-500)] font-bold text-xl mb-4">About Nora Chambers</div>
                <h2 class="text-5xl lg:text-6xl font-bold text-[var(--color-text-dark)] font-[var(--font-heading)] mb-8">
                  Excellence in Legal Practice
                </h2>
                <div class="text-xl text-[var(--color-text-muted)] leading-relaxed space-y-6">
                  <p>
                    Founded with a vision to deliver exceptional legal services, <strong class="text-[var(--color-text-dark)]">Nora Chambers</strong> has established itself as a trusted legal counsel for prominent corporations and individuals.
                  </p>
                  <p>
                    Our multi-sectoral expertise spans dispute resolution, corporate advisory, intellectual property, securities law, and specialized practice areas, ensuring comprehensive representation for every client engagement.
                  </p>
                </div>
              </div>
              
              <!-- Mission Points -->
              <div class="space-y-6">
                <div class="flex items-center">
                  <div class="w-4 h-4 bg-[var(--color-accent-500)] rounded-full mr-6"></div>
                  <span class="text-lg text-[var(--color-text-dark)] font-semibold">Innovative Problem-Solving Approach</span>
                </div>
                <div class="flex items-center">
                  <div class="w-4 h-4 bg-[var(--color-accent-400)] rounded-full mr-6"></div>
                  <span class="text-lg text-[var(--color-text-dark)] font-semibold">Clear, Actionable Legal Guidance</span>
                </div>
                <div class="flex items-center">
                  <div class="w-4 h-4 bg-[var(--color-accent-300)] rounded-full mr-6"></div>
                  <span class="text-lg text-[var(--color-text-dark)] font-semibold">Client-Focused Service Excellence</span>
                </div>
              </div>
            </div>
            
            <!-- Right Column -->
            <div class="flex items-center justify-center">
              <div class="bg-gradient-to-br from-[var(--color-accent-50)] to-[var(--color-accent-100)] p-12 rounded-3xl shadow-2xl max-w-md">
                <div class="text-center">
                  <h3 class="text-3xl font-bold text-[var(--color-text-dark)] mb-8 font-[var(--font-heading)]">Our Commitment</h3>
                  <div class="space-y-6">
                    <div class="p-6 bg-white rounded-2xl shadow-lg">
                      <div class="text-3xl font-bold text-[var(--color-accent-500)] mb-2">Excellence</div>
                      <div class="text-[var(--color-text-muted)]">Unwavering commitment to legal excellence</div>
                    </div>
                    <div class="p-6 bg-white rounded-2xl shadow-lg">
                      <div class="text-3xl font-bold text-[var(--color-accent-500)] mb-2">Innovation</div>
                      <div class="text-[var(--color-text-muted)]">Creative solutions for complex challenges</div>
                    </div>
                    <div class="p-6 bg-white rounded-2xl shadow-lg">
                      <div class="text-3xl font-bold text-[var(--color-accent-500)] mb-2">Trust</div>
                      <div class="text-[var(--color-text-muted)]">Building lasting client relationships</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Services Section -->
      <FullscreenServices />

      <!-- Team Section -->
      <FullscreenTeam />

      <!-- Awards Section -->
      <FullscreenAwards />

      <!-- Contact Section -->
      <section 
        id="contact" 
        class="fullscreen-section bg-gradient-to-br from-[var(--color-accent-500)] to-[var(--color-accent-600)] relative text-white"
      >
        <div class="flex items-center justify-center h-full px-12">
          <div class="text-center max-w-5xl">
            <div class="mb-8">
              <div class="text-white/80 font-bold text-xl mb-4">Get in Touch</div>
              <h2 class="text-5xl lg:text-6xl font-bold font-[var(--font-heading)] mb-8">
                Ready to Work Together?
              </h2>
              <div class="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                Contact our experienced team for expert legal counsel tailored to your specific requirements. Available 24/7 for consultations.
              </div>
            </div>
            
            <!-- Contact Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div class="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl">
                <div class="text-4xl mb-4">📧</div>
                <h3 class="text-xl font-bold mb-2">Email Us</h3>
                <p class="text-white/80">info@norachambers.com</p>
                <p class="text-white/80">partners@norachambers.com</p>
              </div>
              <div class="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl">
                <div class="text-4xl mb-4">📞</div>
                <h3 class="text-xl font-bold mb-2">Call Us</h3>
                <p class="text-white/80">+91 120 4516 000</p>
                <p class="text-white/80">+91 98765 43210</p>
              </div>
              <div class="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl">
                <div class="text-4xl mb-4">📍</div>
                <h3 class="text-xl font-bold mb-2">Visit Us</h3>
                <p class="text-white/80">Express Trade Towers</p>
                <p class="text-white/80">Noida, India</p>
              </div>
            </div>
            
            <!-- CTA Buttons -->
            <div class="flex flex-col md:flex-row gap-6 justify-center">
              <button class="bg-white text-[var(--color-accent-600)] px-12 py-6 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl">
                Schedule Consultation
              </button>
              <button class="border-3 border-white text-white px-12 py-6 rounded-2xl font-bold text-lg hover:bg-white hover:text-[var(--color-accent-600)] transition-all duration-300">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
    
    <ThemeSwitcher />
    <NoticeDialog />
  </div>
</template>

<script setup>
import FullscreenServices from '~/components/fullscreen/FullscreenServices.vue'
import FullscreenTeam from '~/components/fullscreen/FullscreenTeam.vue'
import FullscreenAwards from '~/components/fullscreen/FullscreenAwards.vue'
import ThemeSwitcher from '~/components/ThemeSwitcher.vue'
import NoticeDialog from '~/components/NoticeDialog.vue'

onMounted(() => {
  // Smooth scroll behavior for navigation
  const navDots = document.querySelectorAll('.nav-dot')
  
  navDots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      e.preventDefault()
      const targetId = dot.getAttribute('href').substring(1)
      const targetSection = document.getElementById(targetId)
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    })
  })
  
  // Update active navigation dot on scroll
  const sections = document.querySelectorAll('.fullscreen-section')
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Update active nav dot
        navDots.forEach(dot => dot.classList.remove('active'))
        const activeNavDot = document.querySelector(`[data-section="${entry.target.id}"]`)
        if (activeNavDot) {
          activeNavDot.classList.add('active')
        }
      }
    })
  }, {
    threshold: 0.5
  })
  
  sections.forEach(section => observer.observe(section))
})
</script>

<style scoped>
/* Fullscreen sections */
.fullscreen-section {
  min-height: 100vh;
  scroll-snap-align: start;
  position: relative;
}

.fullscreen-sections {
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
}

/* Navigation dots */
.nav-dot {
  @apply w-12 h-12 bg-white/50 rounded-full flex items-center justify-center text-[var(--color-text-muted)] hover:bg-white hover:text-[var(--color-text-dark)] transition-all duration-300 cursor-pointer;
}

.nav-dot.active {
  @apply bg-[var(--color-accent-500)] text-white shadow-lg scale-110;
}

.nav-dot:hover {
  transform: scale(1.1);
}

.dot-icon {
  font-size: 1.2rem;
}

/* Custom utilities */
.border-3 {
  border-width: 3px;
}

/* Theme adaptations */
[data-theme="minimalistic"] .rounded-3xl,
[data-theme="minimalistic"] .rounded-2xl,
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

/* Mobile adjustments */
@media (max-width: 768px) {
  nav {
    display: none;
  }
  
  .fullscreen-sections {
    scroll-snap-type: none;
  }
  
  .fullscreen-section {
    min-height: auto;
    padding: 2rem 0;
  }
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Hide scrollbar but keep functionality */
.fullscreen-sections::-webkit-scrollbar {
  display: none;
}

.fullscreen-sections {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>