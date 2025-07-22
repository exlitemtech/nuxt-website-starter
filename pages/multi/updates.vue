<template>
  <div class="min-h-screen bg-[var(--color-beige-50)] flex flex-col">
    <MultiPageHeader />
    <main class="flex-1 py-20">
      <div class="container mx-auto px-6">
        <!-- Header Section -->
        <div class="text-center mb-16">
          <nav class="mb-8">
            <ol class="flex items-center justify-center space-x-2 text-sm text-[var(--color-text-muted)]">
              <li><NuxtLink to="/multi" class="hover:text-[var(--color-accent-500)]">Home</NuxtLink></li>
              <li class="text-[var(--color-beige-400)]">→</li>
              <li class="text-[var(--color-text-dark)]">Legal Updates</li>
            </ol>
          </nav>
          
          <h1 class="text-4xl lg:text-5xl font-bold text-[var(--color-text-dark)] mb-6 font-[var(--font-heading)]">
            Legal Updates & Insights
          </h1>
          <p class="text-lg text-[var(--color-text-muted)] max-w-3xl mx-auto">
            Stay informed with the latest legal developments, regulatory changes, and expert analysis from our team of experienced attorneys.
          </p>
        </div>

        <!-- Featured Update -->
        <section class="mb-16">
          <div class="bg-gradient-to-r from-[var(--color-accent-500)] to-[var(--color-accent-600)] p-12 rounded-2xl text-white mb-8">
            <div class="flex items-center mb-4">
              <span class="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mr-4">Featured Update</span>
              <span class="text-white/80 text-sm">January 15, 2025</span>
            </div>
            <h2 class="text-3xl lg:text-4xl font-bold mb-6 font-[var(--font-heading)]">
              New Securities Regulations: Comprehensive Impact Analysis
            </h2>
            <p class="text-lg text-white/90 mb-8 leading-relaxed">
              Recent SEBI amendments introduce significant changes to corporate compliance requirements for listed entities. Our detailed analysis covers the key implications for public companies and strategic recommendations for immediate compliance actions.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <NuxtLink 
                to="/multi/updates/securities-regulations-2025"
                class="bg-white text-[var(--color-accent-600)] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Read Full Analysis
              </NuxtLink>
              <button class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[var(--color-accent-600)] transition-colors">
                Download PDF Report
              </button>
            </div>
          </div>
        </section>

        <!-- Filter Tabs -->
        <section class="mb-12">
          <div class="flex flex-wrap justify-center gap-4">
            <button 
              @click="activeFilter = 'all'"
              :class="[
                'px-6 py-3 rounded-lg font-medium transition-colors',
                activeFilter === 'all' 
                  ? 'bg-[var(--color-accent-500)] text-white' 
                  : 'bg-white text-[var(--color-text-dark)] hover:bg-[var(--color-accent-100)]'
              ]"
            >
              All Updates
            </button>
            <button 
              @click="activeFilter = 'regulatory'"
              :class="[
                'px-6 py-3 rounded-lg font-medium transition-colors',
                activeFilter === 'regulatory' 
                  ? 'bg-[var(--color-accent-500)] text-white' 
                  : 'bg-white text-[var(--color-text-dark)] hover:bg-[var(--color-accent-100)]'
              ]"
            >
              Regulatory Changes
            </button>
            <button 
              @click="activeFilter = 'analysis'"
              :class="[
                'px-6 py-3 rounded-lg font-medium transition-colors',
                activeFilter === 'analysis' 
                  ? 'bg-[var(--color-accent-500)] text-white' 
                  : 'bg-white text-[var(--color-text-dark)] hover:bg-[var(--color-accent-100)]'
              ]"
            >
              Legal Analysis
            </button>
            <button 
              @click="activeFilter = 'precedent'"
              :class="[
                'px-6 py-3 rounded-lg font-medium transition-colors',
                activeFilter === 'precedent' 
                  ? 'bg-[var(--color-accent-500)] text-white' 
                  : 'bg-white text-[var(--color-text-dark)] hover:bg-[var(--color-accent-100)]'
              ]"
            >
              Court Precedents
            </button>
          </div>
        </section>

        <!-- Updates Grid -->
        <section class="mb-20">
          <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            <!-- Update 1 -->
            <article class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div class="flex items-center justify-between mb-4">
                <span class="bg-[var(--color-accent-100)] text-[var(--color-accent-700)] px-3 py-1 rounded-full text-sm font-medium">Tax Law</span>
                <span class="text-[var(--color-text-muted)] text-sm">January 10, 2025</span>
              </div>
              <h3 class="text-xl font-bold text-[var(--color-text-dark)] mb-4 font-[var(--font-heading)]">
                Supreme Court Sets New Precedent in Tax Assessment Procedures
              </h3>
              <p class="text-[var(--color-text-muted)] mb-6 leading-relaxed">
                The recent Supreme Court ruling in ABC Corp vs. Income Tax Department establishes important guidelines for tax assessment procedures, affecting corporate entities nationwide.
              </p>
              <div class="flex items-center justify-between">
                <NuxtLink 
                  to="/multi/updates/tax-litigation-precedent"
                  class="text-[var(--color-accent-500)] hover:text-[var(--color-accent-600)] font-medium text-sm"
                >
                  Read More →
                </NuxtLink>
                <div class="flex items-center text-[var(--color-text-muted)] text-xs">
                  <span class="mr-2">📖</span>
                  5 min read
                </div>
              </div>
            </article>

            <!-- Update 2 -->
            <article class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div class="flex items-center justify-between mb-4">
                <span class="bg-[var(--color-beige-100)] text-[var(--color-text-dark)] px-3 py-1 rounded-full text-sm font-medium">IP Law</span>
                <span class="text-[var(--color-text-muted)] text-sm">January 5, 2025</span>
              </div>
              <h3 class="text-xl font-bold text-[var(--color-text-dark)] mb-4 font-[var(--font-heading)]">
                Digital Age Patent Protection: New Guidelines Released
              </h3>
              <p class="text-[var(--color-text-muted)] mb-6 leading-relaxed">
                The Patent Office has issued comprehensive guidelines for intellectual property protection in emerging technologies including AI, blockchain, and IoT innovations.
              </p>
              <div class="flex items-center justify-between">
                <NuxtLink 
                  to="/multi/updates/ip-protection-guidelines"
                  class="text-[var(--color-accent-500)] hover:text-[var(--color-accent-600)] font-medium text-sm"
                >
                  Read More →
                </NuxtLink>
                <div class="flex items-center text-[var(--color-text-muted)] text-xs">
                  <span class="mr-2">📖</span>
                  7 min read
                </div>
              </div>
            </article>

            <!-- Update 3 -->
            <article class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div class="flex items-center justify-between mb-4">
                <span class="bg-[var(--color-accent-100)] text-[var(--color-accent-700)] px-3 py-1 rounded-full text-sm font-medium">Corporate Law</span>
                <span class="text-[var(--color-text-muted)] text-sm">December 28, 2024</span>
              </div>
              <h3 class="text-xl font-bold text-[var(--color-text-dark)] mb-4 font-[var(--font-heading)]">
                Companies Act Amendment: Key Changes for Directors
              </h3>
              <p class="text-[var(--color-text-muted)] mb-6 leading-relaxed">
                Recent amendments to the Companies Act introduce new compliance requirements for board directors and significant changes to corporate governance norms.
              </p>
              <div class="flex items-center justify-between">
                <NuxtLink 
                  to="/multi/updates/companies-act-amendment"
                  class="text-[var(--color-accent-500)] hover:text-[var(--color-accent-600)] font-medium text-sm"
                >
                  Read More →
                </NuxtLink>
                <div class="flex items-center text-[var(--color-text-muted)] text-xs">
                  <span class="mr-2">📖</span>
                  6 min read
                </div>
              </div>
            </article>

            <!-- Update 4 -->
            <article class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div class="flex items-center justify-between mb-4">
                <span class="bg-[var(--color-beige-100)] text-[var(--color-text-dark)] px-3 py-1 rounded-full text-sm font-medium">Employment Law</span>
                <span class="text-[var(--color-text-muted)] text-sm">December 20, 2024</span>
              </div>
              <h3 class="text-xl font-bold text-[var(--color-text-dark)] mb-4 font-[var(--font-heading)]">
                Remote Work Policy Framework: Legal Considerations
              </h3>
              <p class="text-[var(--color-text-muted)] mb-6 leading-relaxed">
                With the shift to hybrid work models, employers must navigate complex legal requirements for remote work policies and employee rights protection.
              </p>
              <div class="flex items-center justify-between">
                <NuxtLink 
                  to="/multi/updates/remote-work-framework"
                  class="text-[var(--color-accent-500)] hover:text-[var(--color-accent-600)] font-medium text-sm"
                >
                  Read More →
                </NuxtLink>
                <div class="flex items-center text-[var(--color-text-muted)] text-xs">
                  <span class="mr-2">📖</span>
                  4 min read
                </div>
              </div>
            </article>

            <!-- Update 5 -->
            <article class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div class="flex items-center justify-between mb-4">
                <span class="bg-[var(--color-accent-100)] text-[var(--color-accent-700)] px-3 py-1 rounded-full text-sm font-medium">Banking Law</span>
                <span class="text-[var(--color-text-muted)] text-sm">December 15, 2024</span>
              </div>
              <h3 class="text-xl font-bold text-[var(--color-text-dark)] mb-4 font-[var(--font-heading)]">
                RBI's New Guidelines on Digital Banking Services
              </h3>
              <p class="text-[var(--color-text-muted)] mb-6 leading-relaxed">
                The Reserve Bank of India has released comprehensive guidelines governing digital banking services, impacting fintech partnerships and customer data protection.
              </p>
              <div class="flex items-center justify-between">
                <NuxtLink 
                  to="/multi/updates/rbi-digital-banking"
                  class="text-[var(--color-accent-500)] hover:text-[var(--color-accent-600)] font-medium text-sm"
                >
                  Read More →
                </NuxtLink>
                <div class="flex items-center text-[var(--color-text-muted)] text-xs">
                  <span class="mr-2">📖</span>
                  8 min read
                </div>
              </div>
            </article>

            <!-- Update 6 -->
            <article class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div class="flex items-center justify-between mb-4">
                <span class="bg-[var(--color-beige-100)] text-[var(--color-text-dark)] px-3 py-1 rounded-full text-sm font-medium">Real Estate</span>
                <span class="text-[var(--color-text-muted)] text-sm">December 10, 2024</span>
              </div>
              <h3 class="text-xl font-bold text-[var(--color-text-dark)] mb-4 font-[var(--font-heading)]">
                RERA Compliance Updates for Real Estate Developers
              </h3>
              <p class="text-[var(--color-text-muted)] mb-6 leading-relaxed">
                Recent updates to RERA compliance requirements introduce new obligations for real estate developers and revised timelines for project registrations.
              </p>
              <div class="flex items-center justify-between">
                <NuxtLink 
                  to="/multi/updates/rera-compliance-updates"
                  class="text-[var(--color-accent-500)] hover:text-[var(--color-accent-600)] font-medium text-sm"
                >
                  Read More →
                </NuxtLink>
                <div class="flex items-center text-[var(--color-text-muted)] text-xs">
                  <span class="mr-2">📖</span>
                  5 min read
                </div>
              </div>
            </article>
          </div>

          <!-- Load More Button -->
          <div class="text-center mt-12">
            <button class="bg-[var(--color-accent-500)] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-accent-600)] transition-colors">
              Load More Updates
            </button>
          </div>
        </section>

        <!-- Newsletter Subscription -->
        <section class="mb-16">
          <div class="bg-white p-12 rounded-2xl shadow-xl text-center">
            <h2 class="text-3xl font-bold text-[var(--color-text-dark)] mb-4 font-[var(--font-heading)]">
              Stay Updated with Legal Insights
            </h2>
            <p class="text-lg text-[var(--color-text-muted)] mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest legal updates, regulatory changes, and expert analysis delivered directly to your inbox.
            </p>
            <form class="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                class="flex-1 px-6 py-4 border border-[var(--color-beige-300)] rounded-lg text-[var(--color-text-dark)] placeholder-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-500)] focus:border-transparent"
              >
              <button 
                type="submit"
                class="bg-[var(--color-accent-500)] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-accent-600)] transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p class="text-[var(--color-text-muted)] text-sm mt-4">
              Join 5,000+ legal professionals who trust our insights. Unsubscribe anytime.
            </p>
          </div>
        </section>

        <!-- Legal Resources -->
        <section>
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-[var(--color-text-dark)] mb-4 font-[var(--font-heading)]">
              Legal Resources
            </h2>
            <div class="w-24 h-1 bg-[var(--color-accent-500)] mx-auto"></div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center bg-gradient-to-br from-[var(--color-accent-50)] to-[var(--color-accent-100)] p-8 rounded-2xl">
              <div class="w-16 h-16 bg-[var(--color-accent-500)] rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-white text-2xl">📚</span>
              </div>
              <h3 class="text-xl font-bold text-[var(--color-text-dark)] mb-4 font-[var(--font-heading)]">Legal Guides</h3>
              <p class="text-[var(--color-text-muted)] mb-6">
                Comprehensive guides on various legal topics to help you understand complex legal concepts.
              </p>
              <NuxtLink 
                to="/multi/resources/guides"
                class="inline-flex items-center text-[var(--color-accent-500)] hover:text-[var(--color-accent-600)] font-medium"
              >
                Browse Guides →
              </NuxtLink>
            </div>

            <div class="text-center bg-gradient-to-br from-[var(--color-beige-50)] to-[var(--color-beige-100)] p-8 rounded-2xl">
              <div class="w-16 h-16 bg-[var(--color-accent-500)] rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-white text-2xl">📄</span>
              </div>
              <h3 class="text-xl font-bold text-[var(--color-text-dark)] mb-4 font-[var(--font-heading)]">Templates</h3>
              <p class="text-[var(--color-text-muted)] mb-6">
                Download legal document templates and forms to streamline your legal processes.
              </p>
              <NuxtLink 
                to="/multi/resources/templates"
                class="inline-flex items-center text-[var(--color-accent-500)] hover:text-[var(--color-accent-600)] font-medium"
              >
                Download Templates →
              </NuxtLink>
            </div>

            <div class="text-center bg-gradient-to-br from-[var(--color-accent-50)] to-[var(--color-accent-100)] p-8 rounded-2xl">
              <div class="w-16 h-16 bg-[var(--color-accent-500)] rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-white text-2xl">🎯</span>
              </div>
              <h3 class="text-xl font-bold text-[var(--color-text-dark)] mb-4 font-[var(--font-heading)]">Webinars</h3>
              <p class="text-[var(--color-text-muted)] mb-6">
                Join our expert-led webinars on current legal topics and industry developments.
              </p>
              <NuxtLink 
                to="/multi/resources/webinars"
                class="inline-flex items-center text-[var(--color-accent-500)] hover:text-[var(--color-accent-600)] font-medium"
              >
                View Schedule →
              </NuxtLink>
            </div>
          </div>
        </section>
      </div>
    </main>
    <Footer />
    <ThemeSwitcher />
    <NoticeDialog />
  </div>
</template>

<script setup>
import MultiPageHeader from '~/components/multi-page/MultiPageHeader.vue'
import Footer from '~/components/Footer.vue'
import ThemeSwitcher from '~/components/ThemeSwitcher.vue'
import NoticeDialog from '~/components/NoticeDialog.vue'

const activeFilter = ref('all')
</script>

<style scoped>
[data-theme="minimalistic"] .rounded-2xl,
[data-theme="minimalistic"] .rounded-xl,
[data-theme="minimalistic"] .rounded-full,
[data-theme="minimalistic"] .rounded-lg {
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
</style>