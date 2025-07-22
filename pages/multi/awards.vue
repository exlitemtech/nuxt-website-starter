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
              <li class="text-[var(--color-text-dark)]">Awards & Recognition</li>
            </ol>
          </nav>
          
          <h1 class="text-4xl lg:text-5xl font-bold text-[var(--color-text-dark)] mb-6 font-[var(--font-heading)]">
            Awards & Recognition
          </h1>
          <p class="text-lg text-[var(--color-text-muted)] max-w-3xl mx-auto">
            Our commitment to legal excellence has been recognized by leading industry publications and institutions worldwide.
          </p>
        </div>

        <!-- Timeline of Awards -->
        <section class="mb-20">
          <div class="relative">
            <!-- Timeline Line -->
            <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[var(--color-accent-300)] transform md:-translate-x-0.5"></div>
            
            <!-- 2024 Awards -->
            <div class="relative flex items-center mb-16">
              <div class="absolute left-0 md:left-1/2 w-8 h-8 bg-[var(--color-accent-500)] rounded-full flex items-center justify-center transform md:-translate-x-1/2">
                <span class="text-white text-sm font-bold">24</span>
              </div>
              <div class="ml-16 md:ml-0 md:w-1/2 md:pr-8">
                <div class="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div class="flex items-center mb-4">
                    <span class="text-3xl mr-4">🏆</span>
                    <div>
                      <h3 class="text-xl font-bold text-[var(--color-text-dark)] font-[var(--font-heading)]">
                        Legal 500 Asia Pacific - Tier 1 Ranking
                      </h3>
                      <p class="text-[var(--color-accent-500)] font-medium">2024</p>
                    </div>
                  </div>
                  <p class="text-[var(--color-text-muted)] mb-4">
                    Recognized as a Tier 1 firm for Corporate & M&A and Dispute Resolution in India, highlighting our exceptional client service and legal expertise.
                  </p>
                  <div class="flex items-center text-[var(--color-accent-500)] text-sm font-medium">
                    <span class="w-2 h-2 bg-[var(--color-accent-500)] rounded-full mr-2"></span>
                    Corporate & M&A Excellence
                  </div>
                </div>
              </div>
            </div>

            <!-- 2023 Awards -->
            <div class="relative flex items-center mb-16">
              <div class="absolute left-0 md:left-1/2 w-8 h-8 bg-[var(--color-accent-500)] rounded-full flex items-center justify-center transform md:-translate-x-1/2">
                <span class="text-white text-sm font-bold">23</span>
              </div>
              <div class="ml-16 md:ml-0 md:w-1/2 md:pl-8 md:ml-auto">
                <div class="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div class="flex items-center mb-4">
                    <span class="text-3xl mr-4">⭐</span>
                    <div>
                      <h3 class="text-xl font-bold text-[var(--color-text-dark)] font-[var(--font-heading)]">
                        Chambers and Partners - Leading Law Firm
                      </h3>
                      <p class="text-[var(--color-accent-500)] font-medium">2023</p>
                    </div>
                  </div>
                  <p class="text-[var(--color-text-muted)] mb-4">
                    Recognized for our outstanding work in Intellectual Property and Tax law, with individual lawyers receiving Band 1 rankings.
                  </p>
                  <div class="flex items-center text-[var(--color-accent-500)] text-sm font-medium">
                    <span class="w-2 h-2 bg-[var(--color-accent-500)] rounded-full mr-2"></span>
                    IP & Tax Law Leadership
                  </div>
                </div>
              </div>
            </div>

            <!-- 2023 Additional -->
            <div class="relative flex items-center mb-16">
              <div class="absolute left-0 md:left-1/2 w-8 h-8 bg-[var(--color-accent-400)] rounded-full flex items-center justify-center transform md:-translate-x-1/2">
                <span class="text-white text-sm font-bold">23</span>
              </div>
              <div class="ml-16 md:ml-0 md:w-1/2 md:pr-8">
                <div class="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div class="flex items-center mb-4">
                    <span class="text-3xl mr-4">🌟</span>
                    <div>
                      <h3 class="text-xl font-bold text-[var(--color-text-dark)] font-[var(--font-heading)]">
                        India Business Law Journal - Elite Law Firm
                      </h3>
                      <p class="text-[var(--color-accent-500)] font-medium">2023</p>
                    </div>
                  </div>
                  <p class="text-[var(--color-text-muted)] mb-4">
                    Featured in the Elite list for our exceptional client service and innovative legal solutions across multiple practice areas.
                  </p>
                  <div class="flex items-center text-[var(--color-accent-500)] text-sm font-medium">
                    <span class="w-2 h-2 bg-[var(--color-accent-500)] rounded-full mr-2"></span>
                    Elite Legal Services
                  </div>
                </div>
              </div>
            </div>

            <!-- 2022 Awards -->
            <div class="relative flex items-center mb-16">
              <div class="absolute left-0 md:left-1/2 w-8 h-8 bg-[var(--color-accent-400)] rounded-full flex items-center justify-center transform md:-translate-x-1/2">
                <span class="text-white text-sm font-bold">22</span>
              </div>
              <div class="ml-16 md:ml-0 md:w-1/2 md:pl-8 md:ml-auto">
                <div class="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div class="flex items-center mb-4">
                    <span class="text-3xl mr-4">🏅</span>
                    <div>
                      <h3 class="text-xl font-bold text-[var(--color-text-dark)] font-[var(--font-heading)]">
                        Asian Legal Business - Boutique Law Firm of the Year
                      </h3>
                      <p class="text-[var(--color-accent-500)] font-medium">2022</p>
                    </div>
                  </div>
                  <p class="text-[var(--color-text-muted)] mb-4">
                    Awarded for our specialized expertise and client-focused approach in handling complex legal matters with precision and efficiency.
                  </p>
                  <div class="flex items-center text-[var(--color-accent-500)] text-sm font-medium">
                    <span class="w-2 h-2 bg-[var(--color-accent-500)] rounded-full mr-2"></span>
                    Boutique Excellence
                  </div>
                </div>
              </div>
            </div>

            <!-- 2022 Additional -->
            <div class="relative flex items-center mb-16">
              <div class="absolute left-0 md:left-1/2 w-8 h-8 bg-[var(--color-accent-300)] rounded-full flex items-center justify-center transform md:-translate-x-1/2">
                <span class="text-white text-sm font-bold">22</span>
              </div>
              <div class="ml-16 md:ml-0 md:w-1/2 md:pr-8">
                <div class="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div class="flex items-center mb-4">
                    <span class="text-3xl mr-4">💼</span>
                    <div>
                      <h3 class="text-xl font-bold text-[var(--color-text-dark)] font-[var(--font-heading)]">
                        Who's Who Legal - Rising Star Attorneys
                      </h3>
                      <p class="text-[var(--color-accent-500)] font-medium">2022</p>
                    </div>
                  </div>
                  <p class="text-[var(--color-text-muted)] mb-4">
                    Three of our senior associates were recognized as Rising Star attorneys in their respective practice areas for exceptional legal talent.
                  </p>
                  <div class="flex items-center text-[var(--color-accent-500)] text-sm font-medium">
                    <span class="w-2 h-2 bg-[var(--color-accent-500)] rounded-full mr-2"></span>
                    Individual Recognition
                  </div>
                </div>
              </div>
            </div>

            <!-- 2021 Awards -->
            <div class="relative flex items-center mb-16">
              <div class="absolute left-0 md:left-1/2 w-8 h-8 bg-[var(--color-accent-300)] rounded-full flex items-center justify-center transform md:-translate-x-1/2">
                <span class="text-white text-sm font-bold">21</span>
              </div>
              <div class="ml-16 md:ml-0 md:w-1/2 md:pl-8 md:ml-auto">
                <div class="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div class="flex items-center mb-4">
                    <span class="text-3xl mr-4">🎯</span>
                    <div>
                      <h3 class="text-xl font-bold text-[var(--color-text-dark)] font-[var(--font-heading)]">
                        Legalera Awards - Best Client Service
                      </h3>
                      <p class="text-[var(--color-accent-500)] font-medium">2021</p>
                    </div>
                  </div>
                  <p class="text-[var(--color-text-muted)] mb-4">
                    Recognized for delivering exceptional client service with a focus on clear communication and innovative legal solutions.
                  </p>
                  <div class="flex items-center text-[var(--color-accent-500)] text-sm font-medium">
                    <span class="w-2 h-2 bg-[var(--color-accent-500)] rounded-full mr-2"></span>
                    Client Service Excellence
                  </div>
                </div>
              </div>
            </div>

            <!-- 2020 Foundation -->
            <div class="relative flex items-center">
              <div class="absolute left-0 md:left-1/2 w-8 h-8 bg-[var(--color-beige-400)] rounded-full flex items-center justify-center transform md:-translate-x-1/2">
                <span class="text-white text-sm font-bold">20</span>
              </div>
              <div class="ml-16 md:ml-0 md:w-1/2 md:pr-8">
                <div class="bg-gradient-to-br from-[var(--color-accent-50)] to-[var(--color-accent-100)] p-8 rounded-2xl shadow-xl border-2 border-[var(--color-accent-200)]">
                  <div class="flex items-center mb-4">
                    <span class="text-3xl mr-4">🏛️</span>
                    <div>
                      <h3 class="text-xl font-bold text-[var(--color-text-dark)] font-[var(--font-heading)]">
                        Nora Chambers Founded
                      </h3>
                      <p class="text-[var(--color-accent-500)] font-medium">2020</p>
                    </div>
                  </div>
                  <p class="text-[var(--color-text-muted)] mb-4">
                    Founded with a vision to deliver exceptional legal services through innovative approaches and unwavering commitment to client success.
                  </p>
                  <div class="flex items-center text-[var(--color-accent-500)] text-sm font-medium">
                    <span class="w-2 h-2 bg-[var(--color-accent-500)] rounded-full mr-2"></span>
                    The Beginning of Excellence
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Recognition Categories -->
        <section class="mb-20">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-[var(--color-text-dark)] mb-4 font-[var(--font-heading)]">
              Areas of Recognition
            </h2>
            <div class="w-24 h-1 bg-[var(--color-accent-500)] mx-auto"></div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div class="w-16 h-16 bg-[var(--color-accent-100)] rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">⚖️</span>
              </div>
              <h3 class="text-lg font-bold text-[var(--color-text-dark)] mb-2 font-[var(--font-heading)]">Dispute Resolution</h3>
              <p class="text-[var(--color-text-muted)] text-sm">Tier 1 rankings for litigation excellence</p>
            </div>

            <div class="text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div class="w-16 h-16 bg-[var(--color-accent-100)] rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">🏢</span>
              </div>
              <h3 class="text-lg font-bold text-[var(--color-text-dark)] mb-2 font-[var(--font-heading)]">Corporate & M&A</h3>
              <p class="text-[var(--color-text-muted)] text-sm">Leading firm recognition across major publications</p>
            </div>

            <div class="text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div class="w-16 h-16 bg-[var(--color-accent-100)] rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">💡</span>
              </div>
              <h3 class="text-lg font-bold text-[var(--color-text-dark)] mb-2 font-[var(--font-heading)]">Intellectual Property</h3>
              <p class="text-[var(--color-text-muted)] text-sm">Band 1 rankings for IP expertise</p>
            </div>

            <div class="text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div class="w-16 h-16 bg-[var(--color-accent-100)] rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">🤝</span>
              </div>
              <h3 class="text-lg font-bold text-[var(--color-text-dark)] mb-2 font-[var(--font-heading)]">Client Service</h3>
              <p class="text-[var(--color-text-muted)] text-sm">Award-winning client satisfaction and service</p>
            </div>
          </div>
        </section>

        <!-- Client Testimonials -->
        <section class="mb-16">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-[var(--color-text-dark)] mb-4 font-[var(--font-heading)]">
              What Our Clients Say
            </h2>
            <div class="w-24 h-1 bg-[var(--color-accent-500)] mx-auto"></div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-white p-8 rounded-2xl shadow-xl">
              <div class="flex items-center mb-4">
                <div class="text-[var(--color-accent-500)] text-4xl mr-4">"</div>
                <div class="flex text-[var(--color-accent-500)]">
                  <span>⭐⭐⭐⭐⭐</span>
                </div>
              </div>
              <p class="text-[var(--color-text-muted)] mb-6 italic leading-relaxed">
                "Nora Chambers provided exceptional guidance during our complex merger. Their expertise in corporate law and attention to detail ensured a smooth transaction. Highly recommended for any business looking for top-tier legal counsel."
              </p>
              <div class="flex items-center">
                <div class="w-12 h-12 bg-[var(--color-accent-100)] rounded-full mr-4 flex items-center justify-center">
                  <span class="text-lg">👤</span>
                </div>
                <div>
                  <h4 class="font-semibold text-[var(--color-text-dark)]">Sarah Mitchell</h4>
                  <p class="text-[var(--color-text-muted)] text-sm">CEO, TechCorp Industries</p>
                </div>
              </div>
            </div>

            <div class="bg-white p-8 rounded-2xl shadow-xl">
              <div class="flex items-center mb-4">
                <div class="text-[var(--color-accent-500)] text-4xl mr-4">"</div>
                <div class="flex text-[var(--color-accent-500)]">
                  <span>⭐⭐⭐⭐⭐</span>
                </div>
              </div>
              <p class="text-[var(--color-text-muted)] mb-6 italic leading-relaxed">
                "The team at Nora Chambers handled our IP portfolio with incredible expertise. Their strategic approach to patent filing and brand protection has been invaluable to our company's growth. Truly world-class legal professionals."
              </p>
              <div class="flex items-center">
                <div class="w-12 h-12 bg-[var(--color-accent-100)] rounded-full mr-4 flex items-center justify-center">
                  <span class="text-lg">👤</span>
                </div>
                <div>
                  <h4 class="font-semibold text-[var(--color-text-dark)]">Rajesh Gupta</h4>
                  <p class="text-[var(--color-text-muted)] text-sm">Founder, InnovateX Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Call to Action -->
        <div class="text-center">
          <div class="bg-gradient-to-r from-[var(--color-accent-500)] to-[var(--color-accent-600)] p-12 rounded-2xl text-white">
            <h2 class="text-3xl font-bold mb-4 font-[var(--font-heading)]">Experience Award-Winning Legal Excellence</h2>
            <p class="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join the clients who trust our award-winning team for their most important legal matters.
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