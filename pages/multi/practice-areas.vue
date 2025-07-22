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
              <li class="text-[var(--color-text-dark)]">Practice Areas</li>
            </ol>
          </nav>
          
          <h1 class="text-4xl lg:text-5xl font-bold text-[var(--color-text-dark)] mb-6 font-[var(--font-heading)]">
            Our Practice Areas
          </h1>
          <p class="text-lg text-[var(--color-text-muted)] max-w-3xl mx-auto">
            Comprehensive legal representation across multiple specialized areas of law, delivered by our experienced team of attorneys.
          </p>
        </div>

        <!-- Practice Areas Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Dispute Resolution -->
          <div class="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-[var(--color-accent-500)]">
            <div class="flex items-center mb-6">
              <div class="w-16 h-16 bg-[var(--color-accent-100)] rounded-full flex items-center justify-center mr-4">
                <span class="text-2xl">⚖️</span>
              </div>
              <h3 class="text-2xl font-bold text-[var(--color-text-dark)] font-[var(--font-heading)]">
                Dispute Resolution
              </h3>
            </div>
            <p class="text-[var(--color-text-muted)] mb-6 leading-relaxed">
              Comprehensive litigation support including commercial disputes, civil litigation, arbitration, and mediation services across multiple jurisdictions.
            </p>
            <div class="space-y-2">
              <div class="flex items-center text-sm text-[var(--color-text-muted)]">
                <span class="w-2 h-2 bg-[var(--color-accent-500)] rounded-full mr-3"></span>
                Commercial Litigation
              </div>
              <div class="flex items-center text-sm text-[var(--color-text-muted)]">
                <span class="w-2 h-2 bg-[var(--color-accent-500)] rounded-full mr-3"></span>
                Arbitration & Mediation
              </div>
              <div class="flex items-center text-sm text-[var(--color-text-muted)]">
                <span class="w-2 h-2 bg-[var(--color-accent-500)] rounded-full mr-3"></span>
                Contract Disputes
              </div>
            </div>
          </div>

          <!-- Corporate Advisory -->
          <div class="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-[var(--color-accent-500)]">
            <div class="flex items-center mb-6">
              <div class="w-16 h-16 bg-[var(--color-accent-100)] rounded-full flex items-center justify-center mr-4">
                <span class="text-2xl">🏢</span>
              </div>
              <h3 class="text-2xl font-bold text-[var(--color-text-dark)] font-[var(--font-heading)]">
                Corporate Advisory
              </h3>
            </div>
            <p class="text-[var(--color-text-muted)] mb-6 leading-relaxed">
              Strategic corporate counsel including M&A transactions, corporate governance, compliance, and regulatory advisory services for businesses of all sizes.
            </p>
            <div class="space-y-2">
              <div class="flex items-center text-sm text-[var(--color-text-muted)]">
                <span class="w-2 h-2 bg-[var(--color-accent-500)] rounded-full mr-3"></span>
                Mergers & Acquisitions
              </div>
              <div class="flex items-center text-sm text-[var(--color-text-muted)]">
                <span class="w-2 h-2 bg-[var(--color-accent-500)] rounded-full mr-3"></span>
                Corporate Governance
              </div>
              <div class="flex items-center text-sm text-[var(--color-text-muted)]">
                <span class="w-2 h-2 bg-[var(--color-accent-500)] rounded-full mr-3"></span>
                Regulatory Compliance
              </div>
            </div>
          </div>

          <!-- Intellectual Property -->
          <div class="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-[var(--color-accent-500)]">
            <div class="flex items-center mb-6">
              <div class="w-16 h-16 bg-[var(--color-accent-100)] rounded-full flex items-center justify-center mr-4">
                <span class="text-2xl">💡</span>
              </div>
              <h3 class="text-2xl font-bold text-[var(--color-text-dark)] font-[var(--font-heading)]">
                Intellectual Property
              </h3>
            </div>
            <p class="text-[var(--color-text-muted)] mb-6 leading-relaxed">
              Comprehensive IP protection including patents, trademarks, copyrights, trade secrets, and IP litigation across traditional and emerging technologies.
            </p>
            <div class="space-y-2">
              <div class="flex items-center text-sm text-[var(--color-text-muted)]">
                <span class="w-2 h-2 bg-[var(--color-accent-500)] rounded-full mr-3"></span>
                Patent Registration & Protection
              </div>
              <div class="flex items-center text-sm text-[var(--color-text-muted)]">
                <span class="w-2 h-2 bg-[var(--color-accent-500)] rounded-full mr-3"></span>
                Trademark & Brand Protection
              </div>
              <div class="flex items-center text-sm text-[var(--color-text-muted)]">
                <span class="w-2 h-2 bg-[var(--color-accent-500)] rounded-full mr-3"></span>
                IP Litigation
              </div>
            </div>
          </div>

          <!-- Securities Law -->
          <div class="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-[var(--color-accent-500)]">
            <div class="flex items-center mb-6">
              <div class="w-16 h-16 bg-[var(--color-accent-100)] rounded-full flex items-center justify-center mr-4">
                <span class="text-2xl">📈</span>
              </div>
              <h3 class="text-2xl font-bold text-[var(--color-text-dark)] font-[var(--font-heading)]">
                Securities Law
              </h3>
            </div>
            <p class="text-[var(--color-text-muted)] mb-6 leading-relaxed">
              Expert guidance on securities compliance, public offerings, private placements, and regulatory matters for public and private companies.
            </p>
            <div class="space-y-2">
              <div class="flex items-center text-sm text-[var(--color-text-muted)]">
                <span class="w-2 h-2 bg-[var(--color-accent-500)] rounded-full mr-3"></span>
                SEBI Compliance
              </div>
              <div class="flex items-center text-sm text-[var(--color-text-muted)]">
                <span class="w-2 h-2 bg-[var(--color-accent-500)] rounded-full mr-3"></span>
                Public Offerings (IPO/FPO)
              </div>
              <div class="flex items-center text-sm text-[var(--color-text-muted)]">
                <span class="w-2 h-2 bg-[var(--color-accent-500)] rounded-full mr-3"></span>
                Private Equity Advisory
              </div>
            </div>
          </div>

          <!-- Direct Tax -->
          <div class="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-[var(--color-accent-500)]">
            <div class="flex items-center mb-6">
              <div class="w-16 h-16 bg-[var(--color-accent-100)] rounded-full flex items-center justify-center mr-4">
                <span class="text-2xl">💰</span>
              </div>
              <h3 class="text-2xl font-bold text-[var(--color-text-dark)] font-[var(--font-heading)]">
                Direct Tax
              </h3>
            </div>
            <p class="text-[var(--color-text-muted)] mb-6 leading-relaxed">
              Comprehensive tax advisory services including tax planning, compliance, dispute resolution, and representation before tax authorities.
            </p>
            <div class="space-y-2">
              <div class="flex items-center text-sm text-[var(--color-text-muted)]">
                <span class="w-2 h-2 bg-[var(--color-accent-500)] rounded-full mr-3"></span>
                Tax Planning & Advisory
              </div>
              <div class="flex items-center text-sm text-[var(--color-text-muted)]">
                <span class="w-2 h-2 bg-[var(--color-accent-500)] rounded-full mr-3"></span>
                Tax Litigation
              </div>
              <div class="flex items-center text-sm text-[var(--color-text-muted)]">
                <span class="w-2 h-2 bg-[var(--color-accent-500)] rounded-full mr-3"></span>
                International Taxation
              </div>
            </div>
          </div>

          <!-- Insolvency -->
          <div class="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-[var(--color-accent-500)]">
            <div class="flex items-center mb-6">
              <div class="w-16 h-16 bg-[var(--color-accent-100)] rounded-full flex items-center justify-center mr-4">
                <span class="text-2xl">🔄</span>
              </div>
              <h3 class="text-2xl font-bold text-[var(--color-text-dark)] font-[var(--font-heading)]">
                Insolvency & Restructuring
              </h3>
            </div>
            <p class="text-[var(--color-text-muted)] mb-6 leading-relaxed">
              Expert assistance in corporate restructuring, insolvency proceedings, and debt recovery under the Insolvency and Bankruptcy Code.
            </p>
            <div class="space-y-2">
              <div class="flex items-center text-sm text-[var(--color-text-muted)]">
                <span class="w-2 h-2 bg-[var(--color-accent-500)] rounded-full mr-3"></span>
                IBC Proceedings
              </div>
              <div class="flex items-center text-sm text-[var(--color-text-muted)]">
                <span class="w-2 h-2 bg-[var(--color-accent-500)] rounded-full mr-3"></span>
                Corporate Restructuring
              </div>
              <div class="flex items-center text-sm text-[var(--color-text-muted)]">
                <span class="w-2 h-2 bg-[var(--color-accent-500)] rounded-full mr-3"></span>
                Debt Recovery
              </div>
            </div>
          </div>

          <!-- Employment Law -->
          <div class="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-[var(--color-accent-500)]">
            <div class="flex items-center mb-6">
              <div class="w-16 h-16 bg-[var(--color-accent-100)] rounded-full flex items-center justify-center mr-4">
                <span class="text-2xl">👔</span>
              </div>
              <h3 class="text-2xl font-bold text-[var(--color-text-dark)] font-[var(--font-heading)]">
                Employment Law
              </h3>
            </div>
            <p class="text-[var(--color-text-muted)] mb-6 leading-relaxed">
              Comprehensive employment law services including workplace compliance, employee relations, and employment-related litigation.
            </p>
            <div class="space-y-2">
              <div class="flex items-center text-sm text-[var(--color-text-muted)]">
                <span class="w-2 h-2 bg-[var(--color-accent-500)] rounded-full mr-3"></span>
                Employment Contracts
              </div>
              <div class="flex items-center text-sm text-[var(--color-text-muted)]">
                <span class="w-2 h-2 bg-[var(--color-accent-500)] rounded-full mr-3"></span>
                Workplace Compliance
              </div>
              <div class="flex items-center text-sm text-[var(--color-text-muted)]">
                <span class="w-2 h-2 bg-[var(--color-accent-500)] rounded-full mr-3"></span>
                Employment Disputes
              </div>
            </div>
          </div>

          <!-- Real Estate -->
          <div class="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-[var(--color-accent-500)]">
            <div class="flex items-center mb-6">
              <div class="w-16 h-16 bg-[var(--color-accent-100)] rounded-full flex items-center justify-center mr-4">
                <span class="text-2xl">🏠</span>
              </div>
              <h3 class="text-2xl font-bold text-[var(--color-text-dark)] font-[var(--font-heading)]">
                Real Estate Law
              </h3>
            </div>
            <p class="text-[var(--color-text-muted)] mb-6 leading-relaxed">
              Complete real estate legal services including property transactions, development projects, and real estate dispute resolution.
            </p>
            <div class="space-y-2">
              <div class="flex items-center text-sm text-[var(--color-text-muted)]">
                <span class="w-2 h-2 bg-[var(--color-accent-500)] rounded-full mr-3"></span>
                Property Transactions
              </div>
              <div class="flex items-center text-sm text-[var(--color-text-muted)]">
                <span class="w-2 h-2 bg-[var(--color-accent-500)] rounded-full mr-3"></span>
                Real Estate Development
              </div>
              <div class="flex items-center text-sm text-[var(--color-text-muted)]">
                <span class="w-2 h-2 bg-[var(--color-accent-500)] rounded-full mr-3"></span>
                Title Verification
              </div>
            </div>
          </div>
        </div>

        <!-- Call to Action -->
        <div class="mt-20 text-center">
          <div class="bg-gradient-to-r from-[var(--color-accent-500)] to-[var(--color-accent-600)] p-12 rounded-2xl text-white">
            <h2 class="text-3xl font-bold mb-4 font-[var(--font-heading)]">Need Legal Assistance?</h2>
            <p class="text-lg mb-8 opacity-90">
              Contact our experienced team for personalized legal guidance tailored to your specific requirements.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <NuxtLink 
                to="/multi/contact"
                class="bg-white text-[var(--color-accent-600)] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Schedule Consultation
              </NuxtLink>
              <NuxtLink 
                to="/multi/team"
                class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[var(--color-accent-600)] transition-colors"
              >
                Meet Our Team
              </NuxtLink>
            </div>
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
import MultiPageHeader from '~/components/multi-page/MultiPageHeader.vue'
import Footer from '~/components/Footer.vue'
import ThemeSwitcher from '~/components/ThemeSwitcher.vue'
import NoticeDialog from '~/components/NoticeDialog.vue'
</script>

<style scoped>
[data-theme="minimalistic"] .rounded-2xl,
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