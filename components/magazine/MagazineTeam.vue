<template>
  <section id="team" class="px-12 py-20 bg-white">
    <div class="max-w-6xl">
      <!-- Section Header -->
      <div class="flex items-center mb-12">
        <div class="w-1 h-16 bg-[var(--color-accent-500)] mr-8"></div>
        <div>
          <h2 class="text-4xl font-bold text-[var(--color-text-dark)] font-[var(--font-heading)]">Our Expert Team</h2>
          <p class="text-[var(--color-text-muted)] mt-2">Seasoned Partners & Accomplished Associates</p>
        </div>
      </div>

      <!-- Partners Spotlight -->
      <div class="mb-16">
        <div class="bg-gradient-to-br from-[var(--color-accent-50)] to-[var(--color-accent-100)] p-12 rounded-2xl shadow-xl">
          <h3 class="text-2xl font-bold text-[var(--color-text-dark)] mb-8 font-[var(--font-heading)] text-center">
            Managing Partners
          </h3>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Nora Chambers -->
            <div class="text-center">
              <div class="w-32 h-32 bg-gradient-to-br from-[var(--color-accent-200)] to-[var(--color-accent-300)] rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                <div class="text-center text-[var(--color-text-dark)]">
                  <div class="text-4xl mb-2">👩‍⚖️</div>
                  <div class="text-xs opacity-75">Photo</div>
                </div>
              </div>
              <h4 class="text-xl font-bold text-[var(--color-text-dark)] mb-2 font-[var(--font-heading)]">Nora Chambers</h4>
              <p class="text-[var(--color-accent-600)] font-semibold mb-3">Founder & Managing Partner</p>
              <p class="text-[var(--color-text-muted)] text-sm mb-4">25+ years in corporate and securities law</p>
              <div class="space-y-2 text-xs text-[var(--color-text-muted)]">
                <div class="bg-white/50 px-3 py-1 rounded-full inline-block mr-2">Corporate Law</div>
                <div class="bg-white/50 px-3 py-1 rounded-full inline-block mr-2">M&A</div>
                <div class="bg-white/50 px-3 py-1 rounded-full inline-block">Securities</div>
              </div>
            </div>

            <!-- Richard Sterling -->
            <div class="text-center">
              <div class="w-32 h-32 bg-gradient-to-br from-[var(--color-accent-200)] to-[var(--color-accent-300)] rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                <div class="text-center text-[var(--color-text-dark)]">
                  <div class="text-4xl mb-2">👨‍⚖️</div>
                  <div class="text-xs opacity-75">Photo</div>
                </div>
              </div>
              <h4 class="text-xl font-bold text-[var(--color-text-dark)] mb-2 font-[var(--font-heading)]">Richard Sterling</h4>
              <p class="text-[var(--color-accent-600)] font-semibold mb-3">Senior Partner</p>
              <p class="text-[var(--color-text-muted)] text-sm mb-4">20+ years in intellectual property law</p>
              <div class="space-y-2 text-xs text-[var(--color-text-muted)]">
                <div class="bg-white/50 px-3 py-1 rounded-full inline-block mr-2">IP Law</div>
                <div class="bg-white/50 px-3 py-1 rounded-full inline-block mr-2">Technology</div>
                <div class="bg-white/50 px-3 py-1 rounded-full inline-block">Litigation</div>
              </div>
            </div>

            <!-- Maya Patel -->
            <div class="text-center">
              <div class="w-32 h-32 bg-gradient-to-br from-[var(--color-accent-200)] to-[var(--color-accent-300)] rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                <div class="text-center text-[var(--color-text-dark)]">
                  <div class="text-4xl mb-2">👩‍💼</div>
                  <div class="text-xs opacity-75">Photo</div>
                </div>
              </div>
              <h4 class="text-xl font-bold text-[var(--color-text-dark)] mb-2 font-[var(--font-heading)]">Maya Patel</h4>
              <p class="text-[var(--color-accent-600)] font-semibold mb-3">Partner</p>
              <p class="text-[var(--color-text-muted)] text-sm mb-4">18+ years in taxation and insolvency law</p>
              <div class="space-y-2 text-xs text-[var(--color-text-muted)]">
                <div class="bg-white/50 px-3 py-1 rounded-full inline-block mr-2">Tax Law</div>
                <div class="bg-white/50 px-3 py-1 rounded-full inline-block mr-2">Insolvency</div>
                <div class="bg-white/50 px-3 py-1 rounded-full inline-block">Restructuring</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Associates Grid -->
      <div class="mb-16">
        <h3 class="text-2xl font-bold text-[var(--color-text-dark)] mb-8 font-[var(--font-heading)]">Senior Associates</h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Arjun Krishnamurthy -->
          <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[var(--color-beige-200)]">
            <div class="flex items-center mb-4">
              <div class="w-16 h-16 bg-gradient-to-br from-[var(--color-beige-100)] to-[var(--color-beige-200)] rounded-full mr-4 flex items-center justify-center">
                <span class="text-2xl">👨‍💻</span>
              </div>
              <div class="flex-1">
                <h4 class="text-lg font-bold text-[var(--color-text-dark)] font-[var(--font-heading)]">Arjun Krishnamurthy</h4>
                <p class="text-[var(--color-accent-500)] text-sm font-medium">Senior Associate</p>
              </div>
            </div>
            <p class="text-[var(--color-text-muted)] text-sm mb-2">Dispute Resolution & Commercial Litigation</p>
            <p class="text-[var(--color-text-muted)] text-xs">10+ years in complex commercial disputes</p>
          </div>

          <!-- Priya Sharma -->
          <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[var(--color-beige-200)]">
            <div class="flex items-center mb-4">
              <div class="w-16 h-16 bg-gradient-to-br from-[var(--color-beige-100)] to-[var(--color-beige-200)] rounded-full mr-4 flex items-center justify-center">
                <span class="text-2xl">👩‍💼</span>
              </div>
              <div class="flex-1">
                <h4 class="text-lg font-bold text-[var(--color-text-dark)] font-[var(--font-heading)]">Priya Sharma</h4>
                <p class="text-[var(--color-accent-500)] text-sm font-medium">Senior Associate</p>
              </div>
            </div>
            <p class="text-[var(--color-text-muted)] text-sm mb-2">Corporate Law & Securities</p>
            <p class="text-[var(--color-text-muted)] text-xs">8+ years in corporate advisory and securities law</p>
          </div>

          <!-- Vikram Singh -->
          <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[var(--color-beige-200)]">
            <div class="flex items-center mb-4">
              <div class="w-16 h-16 bg-gradient-to-br from-[var(--color-beige-100)] to-[var(--color-beige-200)] rounded-full mr-4 flex items-center justify-center">
                <span class="text-2xl">👨‍⚖️</span>
              </div>
              <div class="flex-1">
                <h4 class="text-lg font-bold text-[var(--color-text-dark)] font-[var(--font-heading)]">Vikram Singh</h4>
                <p class="text-[var(--color-accent-500)] text-sm font-medium">Senior Associate</p>
              </div>
            </div>
            <p class="text-[var(--color-text-muted)] text-sm mb-2">Intellectual Property & Technology Law</p>
            <p class="text-[var(--color-text-muted)] text-xs">12+ years in IP law and technology disputes</p>
          </div>

          <!-- Anita Desai -->
          <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[var(--color-beige-200)]">
            <div class="flex items-center mb-4">
              <div class="w-16 h-16 bg-gradient-to-br from-[var(--color-beige-100)] to-[var(--color-beige-200)] rounded-full mr-4 flex items-center justify-center">
                <span class="text-2xl">👩‍🏫</span>
              </div>
              <div class="flex-1">
                <h4 class="text-lg font-bold text-[var(--color-text-dark)] font-[var(--font-heading)]">Anita Desai</h4>
                <p class="text-[var(--color-accent-500)] text-sm font-medium">Senior Associate</p>
              </div>
            </div>
            <p class="text-[var(--color-text-muted)] text-sm mb-2">Employment & Labor Law</p>
            <p class="text-[var(--color-text-muted)] text-xs">9+ years in employment law and compliance</p>
          </div>

          <!-- Rajesh Kumar -->
          <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[var(--color-beige-200)]">
            <div class="flex items-center mb-4">
              <div class="w-16 h-16 bg-gradient-to-br from-[var(--color-beige-100)] to-[var(--color-beige-200)] rounded-full mr-4 flex items-center justify-center">
                <span class="text-2xl">👨‍🔬</span>
              </div>
              <div class="flex-1">
                <h4 class="text-lg font-bold text-[var(--color-text-dark)] font-[var(--font-heading)]">Rajesh Kumar</h4>
                <p class="text-[var(--color-accent-500)] text-sm font-medium">Senior Associate</p>
              </div>
            </div>
            <p class="text-[var(--color-text-muted)] text-sm mb-2">Real Estate & Infrastructure</p>
            <p class="text-[var(--color-text-muted)] text-xs">11+ years in real estate transactions</p>
          </div>

          <!-- Kavya Reddy -->
          <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[var(--color-beige-200)]">
            <div class="flex items-center mb-4">
              <div class="w-16 h-16 bg-gradient-to-br from-[var(--color-beige-100)] to-[var(--color-beige-200)] rounded-full mr-4 flex items-center justify-center">
                <span class="text-2xl">👩‍📊</span>
              </div>
              <div class="flex-1">
                <h4 class="text-lg font-bold text-[var(--color-text-dark)] font-[var(--font-heading)]">Kavya Reddy</h4>
                <p class="text-[var(--color-accent-500)] text-sm font-medium">Senior Associate</p>
              </div>
            </div>
            <p class="text-[var(--color-text-muted)] text-sm mb-2">Banking & Financial Services</p>
            <p class="text-[var(--color-text-muted)] text-xs">7+ years in banking law and regulations</p>
          </div>
        </div>
      </div>

      <!-- Team Statistics -->
      <div class="bg-gradient-to-r from-[var(--color-accent-500)] to-[var(--color-accent-600)] p-12 rounded-2xl text-white">
        <div class="text-center mb-8">
          <h3 class="text-2xl font-bold mb-4 font-[var(--font-heading)]">Our Team in Numbers</h3>
          <div class="w-24 h-1 bg-white/30 mx-auto"></div>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-4xl font-bold mb-2">15+</div>
            <div class="text-white/90 text-sm">Legal Professionals</div>
          </div>
          <div>
            <div class="text-4xl font-bold mb-2">200+</div>
            <div class="text-white/90 text-sm">Years Combined Experience</div>
          </div>
          <div>
            <div class="text-4xl font-bold mb-2">8</div>
            <div class="text-white/90 text-sm">Practice Areas</div>
          </div>
          <div>
            <div class="text-4xl font-bold mb-2">95%</div>
            <div class="text-white/90 text-sm">Client Satisfaction Rate</div>
          </div>
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
[data-theme="minimalistic"] .rounded-full {
  border-radius: 0 !important;
}

[data-theme="corporate"] .bg-white {
  background: linear-gradient(135deg, var(--color-beige-100), var(--color-beige-200)) !important;
}

[data-theme="classic"] h2,
[data-theme="classic"] h3,
[data-theme="classic"] h4 {
  font-style: italic;
}
</style>