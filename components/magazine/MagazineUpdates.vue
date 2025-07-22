<template>
  <section id="updates" class="px-12 py-20 bg-white">
    <div class="max-w-6xl">
      <!-- Section Header -->
      <div class="flex items-center mb-12">
        <div class="w-1 h-16 bg-[var(--color-accent-500)] mr-8"></div>
        <div>
          <h2 class="text-4xl font-bold text-[var(--color-text-dark)] font-[var(--font-heading)]">Latest Legal Updates</h2>
          <p class="text-[var(--color-text-muted)] mt-2">Stay informed with recent developments and expert insights</p>
        </div>
      </div>

      <!-- Featured Update -->
      <div class="mb-12">
        <div class="bg-gradient-to-r from-[var(--color-accent-500)] to-[var(--color-accent-600)] p-8 rounded-2xl text-white shadow-xl">
          <div class="flex items-center mb-4">
            <span class="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mr-4">Featured Update</span>
            <span class="text-white/80 text-sm">January 15, 2025</span>
          </div>
          <h3 class="text-2xl font-bold mb-4 font-[var(--font-heading)]">
            New Securities Regulations: Comprehensive Impact Analysis
          </h3>
          <p class="text-lg text-white/90 mb-6 leading-relaxed">
            Recent SEBI amendments introduce significant changes to corporate compliance requirements for listed entities. Our detailed analysis covers the key implications and strategic recommendations.
          </p>
          <button class="bg-white text-[var(--color-accent-600)] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Read Full Analysis
          </button>
        </div>
      </div>

      <!-- Updates Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
        <!-- Update 1 -->
        <article class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[var(--color-beige-200)]">
          <div class="flex items-center justify-between mb-4">
            <span class="bg-[var(--color-accent-100)] text-[var(--color-accent-700)] px-3 py-1 rounded-full text-sm font-medium">Tax Law</span>
            <span class="text-[var(--color-text-muted)] text-sm">Jan 10, 2025</span>
          </div>
          <h3 class="text-lg font-bold text-[var(--color-text-dark)] mb-3 font-[var(--font-heading)]">
            Supreme Court Tax Assessment Ruling
          </h3>
          <p class="text-[var(--color-text-muted)] mb-4 leading-relaxed text-sm">
            New precedent set for tax assessment procedures affecting corporate entities nationwide.
          </p>
          <div class="flex items-center justify-between">
            <span class="text-[var(--color-accent-500)] hover:text-[var(--color-accent-600)] font-medium text-sm cursor-pointer">
              Read More →
            </span>
            <div class="flex items-center text-[var(--color-text-muted)] text-xs">
              <span class="mr-1">📖</span>
              5 min read
            </div>
          </div>
        </article>

        <!-- Update 2 -->
        <article class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[var(--color-beige-200)]">
          <div class="flex items-center justify-between mb-4">
            <span class="bg-[var(--color-beige-100)] text-[var(--color-text-dark)] px-3 py-1 rounded-full text-sm font-medium">IP Law</span>
            <span class="text-[var(--color-text-muted)] text-sm">Jan 5, 2025</span>
          </div>
          <h3 class="text-lg font-bold text-[var(--color-text-dark)] mb-3 font-[var(--font-heading)]">
            Digital Age Patent Protection
          </h3>
          <p class="text-[var(--color-text-muted)] mb-4 leading-relaxed text-sm">
            New guidelines for intellectual property protection in emerging technologies including AI and blockchain.
          </p>
          <div class="flex items-center justify-between">
            <span class="text-[var(--color-accent-500)] hover:text-[var(--color-accent-600)] font-medium text-sm cursor-pointer">
              Read More →
            </span>
            <div class="flex items-center text-[var(--color-text-muted)] text-xs">
              <span class="mr-1">📖</span>
              7 min read
            </div>
          </div>
        </article>

        <!-- Update 3 -->
        <article class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[var(--color-beige-200)]">
          <div class="flex items-center justify-between mb-4">
            <span class="bg-[var(--color-accent-100)] text-[var(--color-accent-700)] px-3 py-1 rounded-full text-sm font-medium">Corporate Law</span>
            <span class="text-[var(--color-text-muted)] text-sm">Dec 28, 2024</span>
          </div>
          <h3 class="text-lg font-bold text-[var(--color-text-dark)] mb-3 font-[var(--font-heading)]">
            Companies Act Amendment Updates
          </h3>
          <p class="text-[var(--color-text-muted)] mb-4 leading-relaxed text-sm">
            Recent amendments introduce new compliance requirements for board directors and corporate governance.
          </p>
          <div class="flex items-center justify-between">
            <span class="text-[var(--color-accent-500)] hover:text-[var(--color-accent-600)] font-medium text-sm cursor-pointer">
              Read More →
            </span>
            <div class="flex items-center text-[var(--color-text-muted)] text-xs">
              <span class="mr-1">📖</span>
              6 min read
            </div>
          </div>
        </article>

        <!-- Update 4 -->
        <article class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[var(--color-beige-200)]">
          <div class="flex items-center justify-between mb-4">
            <span class="bg-[var(--color-beige-100)] text-[var(--color-text-dark)] px-3 py-1 rounded-full text-sm font-medium">Employment Law</span>
            <span class="text-[var(--color-text-muted)] text-sm">Dec 20, 2024</span>
          </div>
          <h3 class="text-lg font-bold text-[var(--color-text-dark)] mb-3 font-[var(--font-heading)]">
            Remote Work Policy Framework
          </h3>
          <p class="text-[var(--color-text-muted)] mb-4 leading-relaxed text-sm">
            Legal considerations for hybrid work models and employee rights protection in remote work policies.
          </p>
          <div class="flex items-center justify-between">
            <span class="text-[var(--color-accent-500)] hover:text-[var(--color-accent-600)] font-medium text-sm cursor-pointer">
              Read More →
            </span>
            <div class="flex items-center text-[var(--color-text-muted)] text-xs">
              <span class="mr-1">📖</span>
              4 min read
            </div>
          </div>
        </article>

        <!-- Update 5 -->
        <article class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[var(--color-beige-200)]">
          <div class="flex items-center justify-between mb-4">
            <span class="bg-[var(--color-accent-100)] text-[var(--color-accent-700)] px-3 py-1 rounded-full text-sm font-medium">Banking Law</span>
            <span class="text-[var(--color-text-muted)] text-sm">Dec 15, 2024</span>
          </div>
          <h3 class="text-lg font-bold text-[var(--color-text-dark)] mb-3 font-[var(--font-heading)]">
            RBI Digital Banking Guidelines
          </h3>
          <p class="text-[var(--color-text-muted)] mb-4 leading-relaxed text-sm">
            New guidelines governing digital banking services, impacting fintech partnerships and data protection.
          </p>
          <div class="flex items-center justify-between">
            <span class="text-[var(--color-accent-500)] hover:text-[var(--color-accent-600)] font-medium text-sm cursor-pointer">
              Read More →
            </span>
            <div class="flex items-center text-[var(--color-text-muted)] text-xs">
              <span class="mr-1">📖</span>
              8 min read
            </div>
          </div>
        </article>

        <!-- Update 6 -->
        <article class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[var(--color-beige-200)]">
          <div class="flex items-center justify-between mb-4">
            <span class="bg-[var(--color-beige-100)] text-[var(--color-text-dark)] px-3 py-1 rounded-full text-sm font-medium">Real Estate</span>
            <span class="text-[var(--color-text-muted)] text-sm">Dec 10, 2024</span>
          </div>
          <h3 class="text-lg font-bold text-[var(--color-text-dark)] mb-3 font-[var(--font-heading)]">
            RERA Compliance Updates
          </h3>
          <p class="text-[var(--color-text-muted)] mb-4 leading-relaxed text-sm">
            Recent updates to RERA compliance requirements and revised timelines for project registrations.
          </p>
          <div class="flex items-center justify-between">
            <span class="text-[var(--color-accent-500)] hover:text-[var(--color-accent-600)] font-medium text-sm cursor-pointer">
              Read More →
            </span>
            <div class="flex items-center text-[var(--color-text-muted)] text-xs">
              <span class="mr-1">📖</span>
              5 min read
            </div>
          </div>
        </article>
      </div>

      <!-- Newsletter Subscription -->
      <div class="bg-gradient-to-br from-[var(--color-accent-50)] to-[var(--color-accent-100)] p-8 rounded-2xl shadow-xl">
        <div class="max-w-2xl mx-auto text-center">
          <h3 class="text-2xl font-bold text-[var(--color-text-dark)] mb-4 font-[var(--font-heading)]">
            Stay Updated with Legal Insights
          </h3>
          <p class="text-[var(--color-text-muted)] mb-6">
            Subscribe to receive the latest legal updates and expert analysis delivered to your inbox.
          </p>
          <form class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              class="flex-1 px-4 py-3 border border-[var(--color-beige-300)] rounded-lg text-[var(--color-text-dark)] placeholder-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-500)] focus:border-transparent"
            >
            <button 
              type="submit"
              class="bg-[var(--color-accent-500)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[var(--color-accent-600)] transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p class="text-[var(--color-text-muted)] text-sm mt-4">
            Join 5,000+ legal professionals. Unsubscribe anytime.
          </p>
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
[data-theme="minimalistic"] .rounded-lg,
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