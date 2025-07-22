<template>
  <section 
    id="services" 
    class="fullscreen-section bg-[var(--color-beige-50)] relative"
  >
    <div class="flex items-center justify-center h-full px-12">
      <div class="max-w-7xl w-full">
        <!-- Header -->
        <div class="text-center mb-16">
          <div class="text-[var(--color-accent-500)] font-bold text-xl mb-4">Our Expertise</div>
          <h2 class="text-5xl lg:text-6xl font-bold text-[var(--color-text-dark)] font-[var(--font-heading)] mb-8">
            Practice Areas
          </h2>
          <div class="text-xl text-[var(--color-text-muted)] leading-relaxed max-w-3xl mx-auto">
            Comprehensive legal representation across multiple specialized areas of law
          </div>
        </div>

        <!-- Services Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Dispute Resolution -->
          <div class="group bg-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border-t-4 border-[var(--color-accent-500)]">
            <div class="text-center">
              <div class="w-20 h-20 bg-gradient-to-br from-[var(--color-accent-100)] to-[var(--color-accent-200)] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span class="text-3xl">⚖️</span>
              </div>
              <h3 class="text-xl font-bold text-[var(--color-text-dark)] mb-4 font-[var(--font-heading)]">
                Dispute Resolution
              </h3>
              <p class="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6">
                Commercial litigation, arbitration, and mediation services across multiple jurisdictions.
              </p>
              <div class="space-y-2">
                <div class="text-xs text-[var(--color-text-muted)] flex items-center">
                  <span class="w-2 h-2 bg-[var(--color-accent-500)] rounded-full mr-2"></span>
                  Commercial Litigation
                </div>
                <div class="text-xs text-[var(--color-text-muted)] flex items-center">
                  <span class="w-2 h-2 bg-[var(--color-accent-500)] rounded-full mr-2"></span>
                  Arbitration & Mediation
                </div>
              </div>
            </div>
          </div>

          <!-- Corporate Advisory -->
          <div class="group bg-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border-t-4 border-[var(--color-accent-500)]">
            <div class="text-center">
              <div class="w-20 h-20 bg-gradient-to-br from-[var(--color-accent-100)] to-[var(--color-accent-200)] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span class="text-3xl">🏢</span>
              </div>
              <h3 class="text-xl font-bold text-[var(--color-text-dark)] mb-4 font-[var(--font-heading)]">
                Corporate Advisory
              </h3>
              <p class="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6">
                Strategic corporate counsel including M&A transactions and governance.
              </p>
              <div class="space-y-2">
                <div class="text-xs text-[var(--color-text-muted)] flex items-center">
                  <span class="w-2 h-2 bg-[var(--color-accent-500)] rounded-full mr-2"></span>
                  Mergers & Acquisitions
                </div>
                <div class="text-xs text-[var(--color-text-muted)] flex items-center">
                  <span class="w-2 h-2 bg-[var(--color-accent-500)] rounded-full mr-2"></span>
                  Corporate Governance
                </div>
              </div>
            </div>
          </div>

          <!-- Intellectual Property -->
          <div class="group bg-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border-t-4 border-[var(--color-accent-500)]">
            <div class="text-center">
              <div class="w-20 h-20 bg-gradient-to-br from-[var(--color-accent-100)] to-[var(--color-accent-200)] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span class="text-3xl">💡</span>
              </div>
              <h3 class="text-xl font-bold text-[var(--color-text-dark)] mb-4 font-[var(--font-heading)]">
                Intellectual Property
              </h3>
              <p class="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6">
                Comprehensive IP protection including patents, trademarks, and litigation.
              </p>
              <div class="space-y-2">
                <div class="text-xs text-[var(--color-text-muted)] flex items-center">
                  <span class="w-2 h-2 bg-[var(--color-accent-500)] rounded-full mr-2"></span>
                  Patent Registration
                </div>
                <div class="text-xs text-[var(--color-text-muted)] flex items-center">
                  <span class="w-2 h-2 bg-[var(--color-accent-500)] rounded-full mr-2"></span>
                  IP Litigation
                </div>
              </div>
            </div>
          </div>

          <!-- Securities Law -->
          <div class="group bg-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border-t-4 border-[var(--color-accent-500)]">
            <div class="text-center">
              <div class="w-20 h-20 bg-gradient-to-br from-[var(--color-accent-100)] to-[var(--color-accent-200)] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span class="text-3xl">📈</span>
              </div>
              <h3 class="text-xl font-bold text-[var(--color-text-dark)] mb-4 font-[var(--font-heading)]">
                Securities Law
              </h3>
              <p class="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6">
                Expert guidance on securities compliance and public offerings.
              </p>
              <div class="space-y-2">
                <div class="text-xs text-[var(--color-text-muted)] flex items-center">
                  <span class="w-2 h-2 bg-[var(--color-accent-500)] rounded-full mr-2"></span>
                  SEBI Compliance
                </div>
                <div class="text-xs text-[var(--color-text-muted)] flex items-center">
                  <span class="w-2 h-2 bg-[var(--color-accent-500)] rounded-full mr-2"></span>
                  Public Offerings
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Additional Services Row -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          <!-- Direct Tax -->
          <div class="group bg-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border-t-4 border-[var(--color-accent-400)]">
            <div class="text-center">
              <div class="w-20 h-20 bg-gradient-to-br from-[var(--color-beige-100)] to-[var(--color-beige-200)] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span class="text-3xl">💰</span>
              </div>
              <h3 class="text-lg font-bold text-[var(--color-text-dark)] mb-2 font-[var(--font-heading)]">Direct Tax</h3>
              <p class="text-[var(--color-text-muted)] text-xs">Tax planning, compliance & litigation</p>
            </div>
          </div>

          <!-- Insolvency -->
          <div class="group bg-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border-t-4 border-[var(--color-accent-400)]">
            <div class="text-center">
              <div class="w-20 h-20 bg-gradient-to-br from-[var(--color-beige-100)] to-[var(--color-beige-200)] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span class="text-3xl">🔄</span>
              </div>
              <h3 class="text-lg font-bold text-[var(--color-text-dark)] mb-2 font-[var(--font-heading)]">Insolvency</h3>
              <p class="text-[var(--color-text-muted)] text-xs">IBC proceedings & restructuring</p>
            </div>
          </div>

          <!-- Employment Law -->
          <div class="group bg-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border-t-4 border-[var(--color-accent-400)]">
            <div class="text-center">
              <div class="w-20 h-20 bg-gradient-to-br from-[var(--color-beige-100)] to-[var(--color-beige-200)] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span class="text-3xl">👔</span>
              </div>
              <h3 class="text-lg font-bold text-[var(--color-text-dark)] mb-2 font-[var(--font-heading)]">Employment</h3>
              <p class="text-[var(--color-text-muted)] text-xs">Workplace compliance & disputes</p>
            </div>
          </div>

          <!-- Real Estate -->
          <div class="group bg-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border-t-4 border-[var(--color-accent-400)]">
            <div class="text-center">
              <div class="w-20 h-20 bg-gradient-to-br from-[var(--color-beige-100)] to-[var(--color-beige-200)] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span class="text-3xl">🏠</span>
              </div>
              <h3 class="text-lg font-bold text-[var(--color-text-dark)] mb-2 font-[var(--font-heading)]">Real Estate</h3>
              <p class="text-[var(--color-text-muted)] text-xs">Property transactions & development</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
[data-theme="minimalistic"] .rounded-3xl,
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

.border-t-4 {
  border-top-width: 4px;
}
</style>