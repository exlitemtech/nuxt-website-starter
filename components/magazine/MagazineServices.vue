<template>
  <section id="services" class="px-12 py-20 bg-[var(--color-beige-50)]">
    <div class="max-w-6xl">
      <!-- Section Header -->
      <div class="flex items-center mb-12">
        <div class="w-1 h-16 bg-[var(--color-accent-500)] mr-8"></div>
        <div>
          <h2 class="text-4xl font-bold text-[var(--color-text-dark)] font-[var(--font-heading)]">Practice Areas</h2>
          <p class="text-[var(--color-text-muted)] mt-2">Comprehensive Legal Services Across Multiple Domains</p>
        </div>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <!-- Featured Service -->
        <div class="lg:col-span-2 bg-gradient-to-r from-[var(--color-accent-500)] to-[var(--color-accent-600)] p-12 rounded-2xl text-white mb-8">
          <div class="flex items-center mb-6">
            <span class="text-5xl mr-6">⚖️</span>
            <div>
              <h3 class="text-3xl font-bold mb-2 font-[var(--font-heading)]">Dispute Resolution</h3>
              <p class="text-white/90 text-lg">Our flagship practice area with exceptional track record</p>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 class="font-semibold mb-3 text-xl">Commercial Litigation</h4>
              <p class="text-white/90 text-sm leading-relaxed">
                Complex commercial disputes across multiple jurisdictions with strategic litigation management.
              </p>
            </div>
            <div>
              <h4 class="font-semibold mb-3 text-xl">Arbitration</h4>
              <p class="text-white/90 text-sm leading-relaxed">
                International and domestic arbitration proceedings with experienced arbitration counsel.
              </p>
            </div>
            <div>
              <h4 class="font-semibold mb-3 text-xl">Mediation</h4>
              <p class="text-white/90 text-sm leading-relaxed">
                Alternative dispute resolution through skilled mediation and negotiation services.
              </p>
            </div>
          </div>
        </div>

        <!-- Regular Services -->
        <div class="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-[var(--color-accent-500)]">
          <div class="flex items-center mb-6">
            <div class="w-16 h-16 bg-[var(--color-accent-100)] rounded-full flex items-center justify-center mr-4">
              <span class="text-2xl">🏢</span>
            </div>
            <div>
              <h3 class="text-xl font-bold text-[var(--color-text-dark)] font-[var(--font-heading)]">Corporate Advisory</h3>
              <p class="text-[var(--color-text-muted)] text-sm">M&A • Governance • Compliance</p>
            </div>
          </div>
          <p class="text-[var(--color-text-muted)] mb-6 leading-relaxed">
            Strategic corporate counsel including mergers & acquisitions, corporate governance, and regulatory compliance for businesses of all sizes.
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

        <div class="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-[var(--color-accent-500)]">
          <div class="flex items-center mb-6">
            <div class="w-16 h-16 bg-[var(--color-accent-100)] rounded-full flex items-center justify-center mr-4">
              <span class="text-2xl">💡</span>
            </div>
            <div>
              <h3 class="text-xl font-bold text-[var(--color-text-dark)] font-[var(--font-heading)]">Intellectual Property</h3>
              <p class="text-[var(--color-text-muted)] text-sm">Patents • Trademarks • Copyrights</p>
            </div>
          </div>
          <p class="text-[var(--color-text-muted)] mb-6 leading-relaxed">
            Comprehensive IP protection including patents, trademarks, copyrights, and IP litigation across traditional and emerging technologies.
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

        <div class="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-[var(--color-accent-500)]">
          <div class="flex items-center mb-6">
            <div class="w-16 h-16 bg-[var(--color-accent-100)] rounded-full flex items-center justify-center mr-4">
              <span class="text-2xl">📈</span>
            </div>
            <div>
              <h3 class="text-xl font-bold text-[var(--color-text-dark)] font-[var(--font-heading)]">Securities Law</h3>
              <p class="text-[var(--color-text-muted)] text-sm">SEBI Compliance • Public Offerings</p>
            </div>
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

        <div class="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-[var(--color-accent-500)]">
          <div class="flex items-center mb-6">
            <div class="w-16 h-16 bg-[var(--color-accent-100)] rounded-full flex items-center justify-center mr-4">
              <span class="text-2xl">💰</span>
            </div>
            <div>
              <h3 class="text-xl font-bold text-[var(--color-text-dark)] font-[var(--font-heading)]">Direct Tax</h3>
              <p class="text-[var(--color-text-muted)] text-sm">Tax Planning • Litigation • Advisory</p>
            </div>
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
      </div>

      <!-- Service Highlight -->
      <div class="bg-white p-8 rounded-2xl shadow-xl">
        <div class="text-center mb-8">
          <h3 class="text-2xl font-bold text-[var(--color-text-dark)] mb-4 font-[var(--font-heading)]">
            Why Choose Our Legal Services?
          </h3>
          <div class="w-24 h-1 bg-[var(--color-accent-500)] mx-auto"></div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div class="p-6">
            <div class="text-3xl font-bold text-[var(--color-accent-500)] mb-2">500+</div>
            <div class="text-[var(--color-text-muted)] text-sm">Cases Successfully Handled</div>
          </div>
          <div class="p-6">
            <div class="text-3xl font-bold text-[var(--color-accent-500)] mb-2">95%</div>
            <div class="text-[var(--color-text-muted)] text-sm">Client Success Rate</div>
          </div>
          <div class="p-6">
            <div class="text-3xl font-bold text-[var(--color-accent-500)] mb-2">8</div>
            <div class="text-[var(--color-text-muted)] text-sm">Specialized Practice Areas</div>
          </div>
          <div class="p-6">
            <div class="text-3xl font-bold text-[var(--color-accent-500)] mb-2">24/7</div>
            <div class="text-[var(--color-text-muted)] text-sm">Emergency Legal Support</div>
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
[data-theme="minimalistic"] .rounded-full {
  border-radius: 0 !important;
}

[data-theme="corporate"] .bg-white {
  background: linear-gradient(135deg, var(--color-beige-100), var(--color-beige-200)) !important;
}

[data-theme="classic"] h2,
[data-theme="classic"] h3 {
  font-style: italic;
}
</style>