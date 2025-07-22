<template>
  <div class="min-h-screen bg-[var(--color-beige-50)]" data-layout="dashboard">
    <!-- Dashboard Header -->
    <header class="bg-white shadow-sm border-b border-[var(--color-beige-200)] sticky top-0 z-50">
      <div class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <div class="w-10 h-10">
              <img 
                src="/img/nora-logo.png" 
                alt="Nora Chambers Logo" 
                class="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 class="text-xl font-[var(--font-heading)] text-[var(--color-text-dark)] font-bold">Nora Chambers</h1>
              <p class="text-[var(--color-text-muted)] text-xs">Legal Dashboard</p>
            </div>
          </div>
          
          <div class="flex items-center space-x-4">
            <div class="hidden md:flex items-center bg-[var(--color-accent-100)] text-[var(--color-accent-700)] px-4 py-2 rounded-full text-sm font-medium">
              <span class="w-2 h-2 bg-[var(--color-accent-500)] rounded-full mr-2 animate-pulse"></span>
              Available 24/7
            </div>
            <button class="bg-[var(--color-accent-500)] text-white px-6 py-2 rounded-lg font-medium hover:bg-[var(--color-accent-600)] transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Dashboard Grid -->
    <main class="container mx-auto px-6 py-8">
      <!-- Dashboard Grid Layout -->
      <div class="grid grid-cols-12 gap-6">
        <!-- Hero Card - Large -->
        <div class="col-span-12 lg:col-span-8">
          <div class="bg-gradient-to-r from-[var(--color-accent-500)] to-[var(--color-accent-600)] p-12 rounded-2xl text-white shadow-xl h-full min-h-[400px] flex flex-col justify-center">
            <div class="mb-6">
              <div class="inline-flex items-center bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                <span class="mr-2">⚖️</span>
                Legal Excellence Since 2020
              </div>
              <h1 class="text-4xl lg:text-5xl font-bold mb-6 font-[var(--font-heading)] leading-tight">
                Committed to Excellence in Legal Practice
              </h1>
              <p class="text-lg text-white/90 mb-8 leading-relaxed max-w-2xl">
                Multi-sectoral legal expertise delivering comprehensive representation across dispute resolution, corporate advisory, and specialized practice areas.
              </p>
            </div>
            <div class="flex flex-wrap gap-4">
              <button class="bg-white text-[var(--color-accent-600)] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Our Services
              </button>
              <button class="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[var(--color-accent-600)] transition-colors">
                Meet the Team
              </button>
            </div>
          </div>
        </div>

        <!-- Quick Stats Card -->
        <div class="col-span-12 lg:col-span-4">
          <div class="bg-white p-8 rounded-2xl shadow-xl h-full">
            <h3 class="text-xl font-bold text-[var(--color-text-dark)] mb-6 font-[var(--font-heading)]">
              Quick Statistics
            </h3>
            <div class="space-y-6">
              <div class="flex items-center justify-between p-4 bg-[var(--color-accent-50)] rounded-xl">
                <div>
                  <div class="text-2xl font-bold text-[var(--color-accent-600)]">500+</div>
                  <div class="text-[var(--color-text-muted)] text-sm">Cases Handled</div>
                </div>
                <div class="text-3xl">📊</div>
              </div>
              <div class="flex items-center justify-between p-4 bg-[var(--color-beige-50)] rounded-xl">
                <div>
                  <div class="text-2xl font-bold text-[var(--color-accent-600)]">95%</div>
                  <div class="text-[var(--color-text-muted)] text-sm">Success Rate</div>
                </div>
                <div class="text-3xl">🎯</div>
              </div>
              <div class="flex items-center justify-between p-4 bg-[var(--color-accent-50)] rounded-xl">
                <div>
                  <div class="text-2xl font-bold text-[var(--color-accent-600)]">20+</div>
                  <div class="text-[var(--color-text-muted)] text-sm">Years Experience</div>
                </div>
                <div class="text-3xl">⏱️</div>
              </div>
              <div class="flex items-center justify-between p-4 bg-[var(--color-beige-50)] rounded-xl">
                <div>
                  <div class="text-2xl font-bold text-[var(--color-accent-600)]">8</div>
                  <div class="text-[var(--color-text-muted)] text-sm">Practice Areas</div>
                </div>
                <div class="text-3xl">⚖️</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Practice Areas - Grid Cards -->
        <div class="col-span-12 lg:col-span-6">
          <div class="bg-white p-8 rounded-2xl shadow-xl h-full">
            <h3 class="text-2xl font-bold text-[var(--color-text-dark)] mb-6 font-[var(--font-heading)]">
              Practice Areas
            </h3>
            <div class="grid grid-cols-2 gap-4">
              <div class="p-4 bg-gradient-to-br from-[var(--color-accent-50)] to-[var(--color-accent-100)] rounded-xl text-center hover:shadow-md transition-shadow cursor-pointer">
                <div class="text-2xl mb-2">⚖️</div>
                <div class="font-semibold text-[var(--color-text-dark)] text-sm">Dispute Resolution</div>
              </div>
              <div class="p-4 bg-gradient-to-br from-[var(--color-beige-50)] to-[var(--color-beige-100)] rounded-xl text-center hover:shadow-md transition-shadow cursor-pointer">
                <div class="text-2xl mb-2">🏢</div>
                <div class="font-semibold text-[var(--color-text-dark)] text-sm">Corporate Advisory</div>
              </div>
              <div class="p-4 bg-gradient-to-br from-[var(--color-accent-50)] to-[var(--color-accent-100)] rounded-xl text-center hover:shadow-md transition-shadow cursor-pointer">
                <div class="text-2xl mb-2">💡</div>
                <div class="font-semibold text-[var(--color-text-dark)] text-sm">Intellectual Property</div>
              </div>
              <div class="p-4 bg-gradient-to-br from-[var(--color-beige-50)] to-[var(--color-beige-100)] rounded-xl text-center hover:shadow-md transition-shadow cursor-pointer">
                <div class="text-2xl mb-2">📈</div>
                <div class="font-semibold text-[var(--color-text-dark)] text-sm">Securities Law</div>
              </div>
              <div class="p-4 bg-gradient-to-br from-[var(--color-accent-50)] to-[var(--color-accent-100)] rounded-xl text-center hover:shadow-md transition-shadow cursor-pointer">
                <div class="text-2xl mb-2">💰</div>
                <div class="font-semibold text-[var(--color-text-dark)] text-sm">Direct Tax</div>
              </div>
              <div class="p-4 bg-gradient-to-br from-[var(--color-beige-50)] to-[var(--color-beige-100)] rounded-xl text-center hover:shadow-md transition-shadow cursor-pointer">
                <div class="text-2xl mb-2">🔄</div>
                <div class="font-semibold text-[var(--color-text-dark)] text-sm">Insolvency</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Team Highlights -->
        <div class="col-span-12 lg:col-span-6">
          <div class="bg-white p-8 rounded-2xl shadow-xl h-full">
            <h3 class="text-2xl font-bold text-[var(--color-text-dark)] mb-6 font-[var(--font-heading)]">
              Leadership Team
            </h3>
            <div class="space-y-4">
              <div class="flex items-center p-4 bg-[var(--color-beige-50)] rounded-xl hover:shadow-md transition-shadow">
                <div class="w-16 h-16 bg-gradient-to-br from-[var(--color-accent-200)] to-[var(--color-accent-300)] rounded-full mr-4 flex items-center justify-center">
                  <span class="text-2xl">👩‍⚖️</span>
                </div>
                <div class="flex-1">
                  <h4 class="font-bold text-[var(--color-text-dark)]">Nora Chambers</h4>
                  <p class="text-[var(--color-accent-500)] text-sm font-medium">Founder & Managing Partner</p>
                  <p class="text-[var(--color-text-muted)] text-xs">Corporate Law • Securities • M&A</p>
                </div>
              </div>
              <div class="flex items-center p-4 bg-[var(--color-beige-50)] rounded-xl hover:shadow-md transition-shadow">
                <div class="w-16 h-16 bg-gradient-to-br from-[var(--color-accent-200)] to-[var(--color-accent-300)] rounded-full mr-4 flex items-center justify-center">
                  <span class="text-2xl">👨‍⚖️</span>
                </div>
                <div class="flex-1">
                  <h4 class="font-bold text-[var(--color-text-dark)]">Richard Sterling</h4>
                  <p class="text-[var(--color-accent-500)] text-sm font-medium">Senior Partner</p>
                  <p class="text-[var(--color-text-muted)] text-xs">IP Law • Technology • Litigation</p>
                </div>
              </div>
              <div class="flex items-center p-4 bg-[var(--color-beige-50)] rounded-xl hover:shadow-md transition-shadow">
                <div class="w-16 h-16 bg-gradient-to-br from-[var(--color-accent-200)] to-[var(--color-accent-300)] rounded-full mr-4 flex items-center justify-center">
                  <span class="text-2xl">👩‍💼</span>
                </div>
                <div class="flex-1">
                  <h4 class="font-bold text-[var(--color-text-dark)]">Maya Patel</h4>
                  <p class="text-[var(--color-accent-500)] text-sm font-medium">Partner</p>
                  <p class="text-[var(--color-text-muted)] text-xs">Tax Law • Insolvency • Restructuring</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Recent Awards - Compact -->
        <div class="col-span-12 md:col-span-6 lg:col-span-4">
          <div class="bg-white p-6 rounded-2xl shadow-xl h-full">
            <div class="flex items-center mb-4">
              <h3 class="text-lg font-bold text-[var(--color-text-dark)] font-[var(--font-heading)]">Recent Awards</h3>
              <span class="ml-2 text-2xl">🏆</span>
            </div>
            <div class="space-y-3">
              <div class="p-3 bg-[var(--color-accent-50)] rounded-lg">
                <div class="text-sm font-semibold text-[var(--color-text-dark)]">Legal 500 Tier 1</div>
                <div class="text-xs text-[var(--color-text-muted)]">2024 • Corporate & M&A</div>
              </div>
              <div class="p-3 bg-[var(--color-beige-50)] rounded-lg">
                <div class="text-sm font-semibold text-[var(--color-text-dark)]">Chambers Leading Firm</div>
                <div class="text-xs text-[var(--color-text-muted)]">2023 • IP & Tax Law</div>
              </div>
              <div class="p-3 bg-[var(--color-accent-50)] rounded-lg">
                <div class="text-sm font-semibold text-[var(--color-text-dark)]">Boutique Firm of Year</div>
                <div class="text-xs text-[var(--color-text-muted)]">2022 • Asian Legal Business</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Latest Updates -->
        <div class="col-span-12 md:col-span-6 lg:col-span-4">
          <div class="bg-white p-6 rounded-2xl shadow-xl h-full">
            <div class="flex items-center mb-4">
              <h3 class="text-lg font-bold text-[var(--color-text-dark)] font-[var(--font-heading)]">Latest Updates</h3>
              <span class="ml-2 text-2xl">📰</span>
            </div>
            <div class="space-y-3">
              <div class="p-3 bg-[var(--color-accent-50)] rounded-lg border-l-3 border-[var(--color-accent-500)]">
                <div class="text-sm font-semibold text-[var(--color-text-dark)] mb-1">SEBI Regulations Update</div>
                <div class="text-xs text-[var(--color-text-muted)]">Jan 15, 2025</div>
              </div>
              <div class="p-3 bg-[var(--color-beige-50)] rounded-lg">
                <div class="text-sm font-semibold text-[var(--color-text-dark)] mb-1">Tax Assessment Precedent</div>
                <div class="text-xs text-[var(--color-text-muted)]">Jan 10, 2025</div>
              </div>
              <div class="p-3 bg-[var(--color-accent-50)] rounded-lg">
                <div class="text-sm font-semibold text-[var(--color-text-dark)] mb-1">IP Protection Guidelines</div>
                <div class="text-xs text-[var(--color-text-muted)]">Jan 5, 2025</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Widget -->
        <div class="col-span-12 md:col-span-6 lg:col-span-4">
          <div class="bg-gradient-to-br from-[var(--color-accent-500)] to-[var(--color-accent-600)] p-6 rounded-2xl text-white shadow-xl h-full">
            <div class="flex items-center mb-4">
              <h3 class="text-lg font-bold font-[var(--font-heading)]">Get in Touch</h3>
              <span class="ml-2 text-2xl">📞</span>
            </div>
            <div class="space-y-3">
              <div class="flex items-center text-sm">
                <span class="mr-3">📧</span>
                <span>info@norachambers.com</span>
              </div>
              <div class="flex items-center text-sm">
                <span class="mr-3">📞</span>
                <span>+91 120 4516 000</span>
              </div>
              <div class="flex items-center text-sm">
                <span class="mr-3">📍</span>
                <span>Noida, India</span>
              </div>
              <button class="w-full bg-white text-[var(--color-accent-600)] py-3 px-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors mt-4">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>

        <!-- Services Overview - Wide Card -->
        <div class="col-span-12 lg:col-span-8">
          <div class="bg-white p-8 rounded-2xl shadow-xl">
            <h3 class="text-2xl font-bold text-[var(--color-text-dark)] mb-6 font-[var(--font-heading)]">
              Our Legal Services Overview
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="space-y-4">
                <div class="flex items-start">
                  <div class="w-12 h-12 bg-[var(--color-accent-100)] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span class="text-[var(--color-accent-600)] text-lg">⚖️</span>
                  </div>
                  <div>
                    <h4 class="font-semibold text-[var(--color-text-dark)] mb-2">Dispute Resolution</h4>
                    <p class="text-[var(--color-text-muted)] text-sm">Commercial litigation, arbitration, and mediation services</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="w-12 h-12 bg-[var(--color-accent-100)] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span class="text-[var(--color-accent-600)] text-lg">🏢</span>
                  </div>
                  <div>
                    <h4 class="font-semibold text-[var(--color-text-dark)] mb-2">Corporate Advisory</h4>
                    <p class="text-[var(--color-text-muted)] text-sm">M&A transactions, governance, and compliance</p>
                  </div>
                </div>
              </div>
              <div class="space-y-4">
                <div class="flex items-start">
                  <div class="w-12 h-12 bg-[var(--color-accent-100)] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span class="text-[var(--color-accent-600)] text-lg">💡</span>
                  </div>
                  <div>
                    <h4 class="font-semibold text-[var(--color-text-dark)] mb-2">Intellectual Property</h4>
                    <p class="text-[var(--color-text-muted)] text-sm">Patents, trademarks, and IP litigation</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="w-12 h-12 bg-[var(--color-accent-100)] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span class="text-[var(--color-accent-600)] text-lg">📈</span>
                  </div>
                  <div>
                    <h4 class="font-semibold text-[var(--color-text-dark)] mb-2">Securities Law</h4>
                    <p class="text-[var(--color-text-muted)] text-sm">SEBI compliance and public offerings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Newsletter Signup -->
        <div class="col-span-12 lg:col-span-4">
          <div class="bg-white p-6 rounded-2xl shadow-xl h-full">
            <h3 class="text-lg font-bold text-[var(--color-text-dark)] mb-4 font-[var(--font-heading)]">
              Legal Updates Newsletter
            </h3>
            <p class="text-[var(--color-text-muted)] text-sm mb-6">
              Subscribe to receive the latest legal insights and regulatory updates.
            </p>
            <form class="space-y-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                class="w-full px-4 py-3 border border-[var(--color-beige-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-500)] focus:border-transparent"
              >
              <button 
                type="submit"
                class="w-full bg-[var(--color-accent-500)] text-white py-3 px-4 rounded-lg font-medium hover:bg-[var(--color-accent-600)] transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p class="text-[var(--color-text-muted)] text-xs mt-3">
              Join 5,000+ legal professionals. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </main>
    
    <Footer />
    <ThemeSwitcher />
    <NoticeDialog />
  </div>
</template>

<script setup>
import Footer from '~/components/Footer.vue'
import ThemeSwitcher from '~/components/ThemeSwitcher.vue'
import NoticeDialog from '~/components/NoticeDialog.vue'
</script>

<style scoped>
/* Dashboard-specific styles */
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
[data-theme="classic"] h3,
[data-theme="classic"] h4 {
  font-style: italic;
}

/* Dashboard grid responsive adjustments */
@media (max-width: 768px) {
  .grid-cols-12 > * {
    grid-column: span 12 !important;
  }
}

/* Hover effects for dashboard cards */
.hover\:shadow-md:hover {
  transform: translateY(-1px);
}

/* Custom border utilities */
.border-l-3 {
  border-left-width: 3px;
}
</style>