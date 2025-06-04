<template>
  <section id="our-team" class="py-20 bg-[var(--color-beige-50)]">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-[var(--color-text-dark)] mb-4 font-[var(--font-heading)]">About Me</h2>
        <p class="text-[var(--color-text-muted)] max-w-3xl mx-auto">With over 40 years of experience at the Patna High Court, I provide personalized legal solutions with a focus on integrity and client satisfaction.</p>
      </div>
      
      <div class="max-w-4xl mx-auto">
        <!-- Attorney Profile -->
        <div class="bg-white shadow-xl group overflow-hidden hover:shadow-2xl transition-all duration-500 rounded-sm relative">
          <!-- Decorative accent element -->
          <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-accent-400)] to-[var(--color-accent-600)]"></div>
          
          <div class="relative overflow-hidden h-[400px]">
            <img 
              src="https://placehold.co/600x800/2a4365/FFFFFF?text=Arun+Kumar+Arun" 
              alt="Arun Kumar Arun" 
              class="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-[var(--color-text-dark)]/90 via-[var(--color-text-dark)]/50 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-500"></div>
            
            <!-- Name overlay on image -->
            <div class="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <h3 class="text-3xl font-semibold mb-1 text-white font-[var(--font-heading)]">Arun Kumar Arun</h3>
              <p class="text-[var(--color-beige-100)] opacity-90 text-base tracking-wide">Founder & Principal Attorney</p>
            </div>
          </div>
          
          <div class="p-8 bg-white border-t border-[var(--color-beige-200)]">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 class="text-xl font-semibold mb-4 text-[var(--color-text-dark)]">Practice Areas</h4>
                <ul class="space-y-2 text-[var(--color-text-muted)]">
                  <li class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-[var(--color-accent-500)]" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    Tax Law & Litigation
                  </li>
                  <li class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-[var(--color-accent-500)]" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    Corporate Law
                  </li>
                  <li class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-[var(--color-accent-500)]" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    Civil Litigation
                  </li>
                  <li class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-[var(--color-accent-500)]" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    Property Law
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 class="text-xl font-semibold mb-4 text-[var(--color-text-dark)]">Professional Experience</h4>
                <p class="text-[var(--color-text-muted)] mb-4 leading-relaxed">With over 40 years of experience at the Patna High Court, I specialize in providing expert legal counsel in tax law, corporate matters, and civil litigation. My practice is built on a foundation of integrity, personalized attention, and a deep understanding of the law.</p>
                
                <div class="flex space-x-4">
                  <a href="mailto:akarun@punyark.com" class="text-[var(--color-text-muted)] hover:text-[var(--color-accent-500)] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                  <a href="tel:+919431660616" class="text-[var(--color-text-muted)] hover:text-[var(--color-accent-500)] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// The component uses static data for now, but could be updated to fetch from an API
</script> 