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
              <li class="text-[var(--color-text-dark)]">Our Team</li>
            </ol>
          </nav>
          
          <h1 class="text-4xl lg:text-5xl font-bold text-[var(--color-text-dark)] mb-6 font-[var(--font-heading)]">
            Meet Our Expert Team
          </h1>
          <p class="text-lg text-[var(--color-text-muted)] max-w-3xl mx-auto">
            Our accomplished legal professionals bring decades of experience and specialized expertise to serve your legal needs with excellence and dedication.
          </p>
        </div>

        <!-- Partners Section -->
        <section class="mb-20">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-[var(--color-text-dark)] mb-4 font-[var(--font-heading)]">
              Managing Partners
            </h2>
            <div class="w-24 h-1 bg-[var(--color-accent-500)] mx-auto"></div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- Nora Chambers -->
            <div class="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div class="text-center mb-6">
                <div class="w-32 h-32 bg-gradient-to-br from-[var(--color-accent-100)] to-[var(--color-accent-200)] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div class="text-center text-[var(--color-text-muted)]">
                    <div class="text-4xl mb-2">👩‍⚖️</div>
                    <div class="text-xs">Photo Placeholder</div>
                  </div>
                </div>
                <h3 class="text-2xl font-bold text-[var(--color-text-dark)] mb-2 font-[var(--font-heading)]">Nora Chambers</h3>
                <p class="text-[var(--color-accent-500)] font-medium">Founder & Managing Partner</p>
              </div>
              
              <div class="space-y-4">
                <div>
                  <h4 class="font-semibold text-[var(--color-text-dark)] mb-2">Specializations</h4>
                  <div class="flex flex-wrap gap-2">
                    <span class="bg-[var(--color-accent-100)] text-[var(--color-accent-700)] px-3 py-1 rounded-full text-sm">Corporate Law</span>
                    <span class="bg-[var(--color-accent-100)] text-[var(--color-accent-700)] px-3 py-1 rounded-full text-sm">M&A</span>
                    <span class="bg-[var(--color-accent-100)] text-[var(--color-accent-700)] px-3 py-1 rounded-full text-sm">Securities</span>
                  </div>
                </div>
                
                <div>
                  <h4 class="font-semibold text-[var(--color-text-dark)] mb-2">Experience</h4>
                  <p class="text-[var(--color-text-muted)] text-sm">25+ years in corporate and securities law with extensive experience in complex M&A transactions and regulatory compliance.</p>
                </div>
                
                <div>
                  <h4 class="font-semibold text-[var(--color-text-dark)] mb-2">Education</h4>
                  <p class="text-[var(--color-text-muted)] text-sm">LLB (Hons) from National Law School, LLM from Harvard Law School</p>
                </div>
                
                <div class="pt-4 border-t border-[var(--color-beige-200)]">
                  <div class="flex justify-center space-x-4">
                    <a href="mailto:nora@norachambers.com" class="text-[var(--color-accent-500)] hover:text-[var(--color-accent-600)]">
                      <span class="text-lg">📧</span>
                    </a>
                    <a href="https://linkedin.com/in/norachambers" class="text-[var(--color-accent-500)] hover:text-[var(--color-accent-600)]">
                      <span class="text-lg">💼</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Richard Sterling -->
            <div class="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div class="text-center mb-6">
                <div class="w-32 h-32 bg-gradient-to-br from-[var(--color-accent-100)] to-[var(--color-accent-200)] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div class="text-center text-[var(--color-text-muted)]">
                    <div class="text-4xl mb-2">👨‍⚖️</div>
                    <div class="text-xs">Photo Placeholder</div>
                  </div>
                </div>
                <h3 class="text-2xl font-bold text-[var(--color-text-dark)] mb-2 font-[var(--font-heading)]">Richard Sterling</h3>
                <p class="text-[var(--color-accent-500)] font-medium">Senior Partner</p>
              </div>
              
              <div class="space-y-4">
                <div>
                  <h4 class="font-semibold text-[var(--color-text-dark)] mb-2">Specializations</h4>
                  <div class="flex flex-wrap gap-2">
                    <span class="bg-[var(--color-accent-100)] text-[var(--color-accent-700)] px-3 py-1 rounded-full text-sm">IP Law</span>
                    <span class="bg-[var(--color-accent-100)] text-[var(--color-accent-700)] px-3 py-1 rounded-full text-sm">Technology</span>
                    <span class="bg-[var(--color-accent-100)] text-[var(--color-accent-700)] px-3 py-1 rounded-full text-sm">Litigation</span>
                  </div>
                </div>
                
                <div>
                  <h4 class="font-semibold text-[var(--color-text-dark)] mb-2">Experience</h4>
                  <p class="text-[var(--color-text-muted)] text-sm">20+ years specializing in intellectual property law, with particular expertise in technology and patent litigation.</p>
                </div>
                
                <div>
                  <h4 class="font-semibold text-[var(--color-text-dark)] mb-2">Education</h4>
                  <p class="text-[var(--color-text-muted)] text-sm">LLB from Delhi University, LLM in IP Law from George Washington University</p>
                </div>
                
                <div class="pt-4 border-t border-[var(--color-beige-200)]">
                  <div class="flex justify-center space-x-4">
                    <a href="mailto:richard@norachambers.com" class="text-[var(--color-accent-500)] hover:text-[var(--color-accent-600)]">
                      <span class="text-lg">📧</span>
                    </a>
                    <a href="https://linkedin.com/in/richardsterling" class="text-[var(--color-accent-500)] hover:text-[var(--color-accent-600)]">
                      <span class="text-lg">💼</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Maya Patel -->
            <div class="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div class="text-center mb-6">
                <div class="w-32 h-32 bg-gradient-to-br from-[var(--color-accent-100)] to-[var(--color-accent-200)] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div class="text-center text-[var(--color-text-muted)]">
                    <div class="text-4xl mb-2">👩‍💼</div>
                    <div class="text-xs">Photo Placeholder</div>
                  </div>
                </div>
                <h3 class="text-2xl font-bold text-[var(--color-text-dark)] mb-2 font-[var(--font-heading)]">Maya Patel</h3>
                <p class="text-[var(--color-accent-500)] font-medium">Partner</p>
              </div>
              
              <div class="space-y-4">
                <div>
                  <h4 class="font-semibold text-[var(--color-text-dark)] mb-2">Specializations</h4>
                  <div class="flex flex-wrap gap-2">
                    <span class="bg-[var(--color-accent-100)] text-[var(--color-accent-700)] px-3 py-1 rounded-full text-sm">Tax Law</span>
                    <span class="bg-[var(--color-accent-100)] text-[var(--color-accent-700)] px-3 py-1 rounded-full text-sm">Insolvency</span>
                    <span class="bg-[var(--color-accent-100)] text-[var(--color-accent-700)] px-3 py-1 rounded-full text-sm">Restructuring</span>
                  </div>
                </div>
                
                <div>
                  <h4 class="font-semibold text-[var(--color-text-dark)] mb-2">Experience</h4>
                  <p class="text-[var(--color-text-muted)] text-sm">18+ years in taxation and insolvency law, with expertise in complex corporate restructuring under IBC.</p>
                </div>
                
                <div>
                  <h4 class="font-semibold text-[var(--color-text-dark)] mb-2">Education</h4>
                  <p class="text-[var(--color-text-muted)] text-sm">LLB from Mumbai University, Master's in Taxation from NYU School of Law</p>
                </div>
                
                <div class="pt-4 border-t border-[var(--color-beige-200)]">
                  <div class="flex justify-center space-x-4">
                    <a href="mailto:maya@norachambers.com" class="text-[var(--color-accent-500)] hover:text-[var(--color-accent-600)]">
                      <span class="text-lg">📧</span>
                    </a>
                    <a href="https://linkedin.com/in/mayapatel" class="text-[var(--color-accent-500)] hover:text-[var(--color-accent-600)]">
                      <span class="text-lg">💼</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Associates Section -->
        <section class="mb-20">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-[var(--color-text-dark)] mb-4 font-[var(--font-heading)]">
              Senior Associates
            </h2>
            <div class="w-24 h-1 bg-[var(--color-accent-500)] mx-auto"></div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Arjun Krishnamurthy -->
            <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div class="flex items-center mb-4">
                <div class="w-16 h-16 bg-gradient-to-br from-[var(--color-beige-100)] to-[var(--color-beige-200)] rounded-full mr-4 flex items-center justify-center">
                  <span class="text-2xl">👨‍💻</span>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-[var(--color-text-dark)] font-[var(--font-heading)]">Arjun Krishnamurthy</h3>
                  <p class="text-[var(--color-accent-500)] text-sm font-medium">Senior Associate</p>
                </div>
              </div>
              <p class="text-[var(--color-text-muted)] text-sm mb-3">Dispute Resolution & Commercial Litigation</p>
              <p class="text-[var(--color-text-muted)] text-xs">10+ years experience in complex commercial disputes</p>
            </div>

            <!-- Priya Sharma -->
            <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div class="flex items-center mb-4">
                <div class="w-16 h-16 bg-gradient-to-br from-[var(--color-beige-100)] to-[var(--color-beige-200)] rounded-full mr-4 flex items-center justify-center">
                  <span class="text-2xl">👩‍💼</span>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-[var(--color-text-dark)] font-[var(--font-heading)]">Priya Sharma</h3>
                  <p class="text-[var(--color-accent-500)] text-sm font-medium">Senior Associate</p>
                </div>
              </div>
              <p class="text-[var(--color-text-muted)] text-sm mb-3">Corporate Law & Securities</p>
              <p class="text-[var(--color-text-muted)] text-xs">8+ years in corporate advisory and securities law</p>
            </div>

            <!-- Vikram Singh -->
            <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div class="flex items-center mb-4">
                <div class="w-16 h-16 bg-gradient-to-br from-[var(--color-beige-100)] to-[var(--color-beige-200)] rounded-full mr-4 flex items-center justify-center">
                  <span class="text-2xl">👨‍⚖️</span>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-[var(--color-text-dark)] font-[var(--font-heading)]">Vikram Singh</h3>
                  <p class="text-[var(--color-accent-500)] text-sm font-medium">Senior Associate</p>
                </div>
              </div>
              <p class="text-[var(--color-text-muted)] text-sm mb-3">Intellectual Property & Technology Law</p>
              <p class="text-[var(--color-text-muted)] text-xs">12+ years in IP law and technology disputes</p>
            </div>

            <!-- Anita Desai -->
            <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div class="flex items-center mb-4">
                <div class="w-16 h-16 bg-gradient-to-br from-[var(--color-beige-100)] to-[var(--color-beige-200)] rounded-full mr-4 flex items-center justify-center">
                  <span class="text-2xl">👩‍🏫</span>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-[var(--color-text-dark)] font-[var(--font-heading)]">Anita Desai</h3>
                  <p class="text-[var(--color-accent-500)] text-sm font-medium">Senior Associate</p>
                </div>
              </div>
              <p class="text-[var(--color-text-muted)] text-sm mb-3">Employment & Labor Law</p>
              <p class="text-[var(--color-text-muted)] text-xs">9+ years in employment law and workplace compliance</p>
            </div>

            <!-- Rajesh Kumar -->
            <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div class="flex items-center mb-4">
                <div class="w-16 h-16 bg-gradient-to-br from-[var(--color-beige-100)] to-[var(--color-beige-200)] rounded-full mr-4 flex items-center justify-center">
                  <span class="text-2xl">👨‍🔬</span>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-[var(--color-text-dark)] font-[var(--font-heading)]">Rajesh Kumar</h3>
                  <p class="text-[var(--color-accent-500)] text-sm font-medium">Senior Associate</p>
                </div>
              </div>
              <p class="text-[var(--color-text-muted)] text-sm mb-3">Real Estate & Infrastructure</p>
              <p class="text-[var(--color-text-muted)] text-xs">11+ years in real estate transactions and development</p>
            </div>

            <!-- Kavya Reddy -->
            <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div class="flex items-center mb-4">
                <div class="w-16 h-16 bg-gradient-to-br from-[var(--color-beige-100)] to-[var(--color-beige-200)] rounded-full mr-4 flex items-center justify-center">
                  <span class="text-2xl">👩‍📊</span>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-[var(--color-text-dark)] font-[var(--font-heading)]">Kavya Reddy</h3>
                  <p class="text-[var(--color-accent-500)] text-sm font-medium">Senior Associate</p>
                </div>
              </div>
              <p class="text-[var(--color-text-muted)] text-sm mb-3">Banking & Financial Services</p>
              <p class="text-[var(--color-text-muted)] text-xs">7+ years in banking law and financial regulations</p>
            </div>
          </div>
        </section>

        <!-- Team Stats -->
        <section class="mb-16">
          <div class="bg-gradient-to-r from-[var(--color-accent-500)] to-[var(--color-accent-600)] p-12 rounded-2xl text-white">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div class="text-3xl font-bold mb-2">15+</div>
                <div class="text-sm opacity-90">Legal Professionals</div>
              </div>
              <div>
                <div class="text-3xl font-bold mb-2">200+</div>
                <div class="text-sm opacity-90">Years Combined Experience</div>
              </div>
              <div>
                <div class="text-3xl font-bold mb-2">8</div>
                <div class="text-sm opacity-90">Practice Areas</div>
              </div>
              <div>
                <div class="text-3xl font-bold mb-2">95%</div>
                <div class="text-sm opacity-90">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        <!-- Call to Action -->
        <div class="text-center">
          <div class="bg-white p-12 rounded-2xl shadow-xl">
            <h2 class="text-3xl font-bold text-[var(--color-text-dark)] mb-4 font-[var(--font-heading)]">
              Ready to Work with Our Team?
            </h2>
            <p class="text-lg text-[var(--color-text-muted)] mb-8 max-w-2xl mx-auto">
              Our experienced attorneys are ready to provide you with expert legal counsel tailored to your specific needs.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <NuxtLink 
                to="/multi/contact"
                class="bg-[var(--color-accent-500)] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-accent-600)] transition-colors"
              >
                Schedule Consultation
              </NuxtLink>
              <NuxtLink 
                to="/multi/practice-areas"
                class="border-2 border-[var(--color-accent-500)] text-[var(--color-accent-500)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-accent-500)] hover:text-white transition-colors"
              >
                View Practice Areas
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