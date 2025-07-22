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
              <li class="text-[var(--color-text-dark)]">Contact Us</li>
            </ol>
          </nav>
          
          <h1 class="text-4xl lg:text-5xl font-bold text-[var(--color-text-dark)] mb-6 font-[var(--font-heading)]">
            Get in Touch
          </h1>
          <p class="text-lg text-[var(--color-text-muted)] max-w-3xl mx-auto">
            Ready to discuss your legal needs? Our experienced team is here to provide expert counsel and tailored solutions for your specific requirements.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <!-- Contact Form -->
          <div class="bg-white p-8 rounded-2xl shadow-xl">
            <h2 class="text-2xl font-bold text-[var(--color-text-dark)] mb-6 font-[var(--font-heading)]">
              Schedule a Consultation
            </h2>
            
            <form class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="firstName" class="block text-sm font-semibold text-[var(--color-text-dark)] mb-2">
                    First Name *
                  </label>
                  <input 
                    type="text" 
                    id="firstName"
                    class="w-full px-4 py-3 border border-[var(--color-beige-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-500)] focus:border-transparent"
                    placeholder="Your first name"
                  >
                </div>
                <div>
                  <label for="lastName" class="block text-sm font-semibold text-[var(--color-text-dark)] mb-2">
                    Last Name *
                  </label>
                  <input 
                    type="text" 
                    id="lastName"
                    class="w-full px-4 py-3 border border-[var(--color-beige-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-500)] focus:border-transparent"
                    placeholder="Your last name"
                  >
                </div>
              </div>

              <div>
                <label for="email" class="block text-sm font-semibold text-[var(--color-text-dark)] mb-2">
                  Email Address *
                </label>
                <input 
                  type="email" 
                  id="email"
                  class="w-full px-4 py-3 border border-[var(--color-beige-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-500)] focus:border-transparent"
                  placeholder="your.email@company.com"
                >
              </div>

              <div>
                <label for="phone" class="block text-sm font-semibold text-[var(--color-text-dark)] mb-2">
                  Phone Number
                </label>
                <input 
                  type="tel" 
                  id="phone"
                  class="w-full px-4 py-3 border border-[var(--color-beige-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-500)] focus:border-transparent"
                  placeholder="+91 98765 43210"
                >
              </div>

              <div>
                <label for="company" class="block text-sm font-semibold text-[var(--color-text-dark)] mb-2">
                  Company/Organization
                </label>
                <input 
                  type="text" 
                  id="company"
                  class="w-full px-4 py-3 border border-[var(--color-beige-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-500)] focus:border-transparent"
                  placeholder="Your company name"
                >
              </div>

              <div>
                <label for="practiceArea" class="block text-sm font-semibold text-[var(--color-text-dark)] mb-2">
                  Practice Area of Interest *
                </label>
                <select 
                  id="practiceArea"
                  class="w-full px-4 py-3 border border-[var(--color-beige-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-500)] focus:border-transparent bg-white"
                >
                  <option value="">Select a practice area</option>
                  <option value="dispute-resolution">Dispute Resolution</option>
                  <option value="corporate-advisory">Corporate Advisory</option>
                  <option value="intellectual-property">Intellectual Property</option>
                  <option value="securities-law">Securities Law</option>
                  <option value="direct-tax">Direct Tax</option>
                  <option value="insolvency">Insolvency & Restructuring</option>
                  <option value="employment-law">Employment Law</option>
                  <option value="real-estate">Real Estate Law</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label for="message" class="block text-sm font-semibold text-[var(--color-text-dark)] mb-2">
                  Message *
                </label>
                <textarea 
                  id="message"
                  rows="5"
                  class="w-full px-4 py-3 border border-[var(--color-beige-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-500)] focus:border-transparent resize-vertical"
                  placeholder="Please describe your legal requirements and how we can assist you..."
                ></textarea>
              </div>

              <div class="flex items-start">
                <input 
                  type="checkbox" 
                  id="privacy"
                  class="mt-1 mr-3 w-4 h-4 text-[var(--color-accent-500)] border-[var(--color-beige-300)] rounded focus:ring-[var(--color-accent-500)]"
                >
                <label for="privacy" class="text-sm text-[var(--color-text-muted)] leading-relaxed">
                  I agree to the processing of my personal data in accordance with the 
                  <a href="#" class="text-[var(--color-accent-500)] hover:text-[var(--color-accent-600)] underline">Privacy Policy</a>
                  and consent to being contacted regarding my inquiry.
                </label>
              </div>

              <button 
                type="submit"
                class="w-full bg-[var(--color-accent-500)] text-white py-4 px-8 rounded-lg font-semibold hover:bg-[var(--color-accent-600)] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          <!-- Contact Information -->
          <div class="space-y-8">
            <!-- Office Information -->
            <div class="bg-white p-8 rounded-2xl shadow-xl">
              <h3 class="text-xl font-bold text-[var(--color-text-dark)] mb-6 font-[var(--font-heading)]">
                Our Office
              </h3>
              
              <div class="space-y-6">
                <div class="flex items-start">
                  <div class="w-12 h-12 bg-[var(--color-accent-100)] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span class="text-[var(--color-accent-600)] text-lg">📍</span>
                  </div>
                  <div>
                    <h4 class="font-semibold text-[var(--color-text-dark)] mb-1">Address</h4>
                    <p class="text-[var(--color-text-muted)] leading-relaxed">
                      Suite 1504, Express Trade Towers<br>
                      15-16 Sector 16A, Noida<br>
                      Uttar Pradesh 201301, India
                    </p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="w-12 h-12 bg-[var(--color-accent-100)] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span class="text-[var(--color-accent-600)] text-lg">📞</span>
                  </div>
                  <div>
                    <h4 class="font-semibold text-[var(--color-text-dark)] mb-1">Phone</h4>
                    <p class="text-[var(--color-text-muted)]">+91 120 4516 000</p>
                    <p class="text-[var(--color-text-muted)]">+91 98765 43210 (Mobile)</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="w-12 h-12 bg-[var(--color-accent-100)] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span class="text-[var(--color-accent-600)] text-lg">📧</span>
                  </div>
                  <div>
                    <h4 class="font-semibold text-[var(--color-text-dark)] mb-1">Email</h4>
                    <p class="text-[var(--color-text-muted)]">info@norachambers.com</p>
                    <p class="text-[var(--color-text-muted)]">partners@norachambers.com</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="w-12 h-12 bg-[var(--color-accent-100)] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span class="text-[var(--color-accent-600)] text-lg">🕒</span>
                  </div>
                  <div>
                    <h4 class="font-semibold text-[var(--color-text-dark)] mb-1">Business Hours</h4>
                    <p class="text-[var(--color-text-muted)]">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p class="text-[var(--color-text-muted)]">Saturday: 10:00 AM - 2:00 PM</p>
                    <p class="text-[var(--color-text-muted)]">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Emergency Contact -->
            <div class="bg-gradient-to-r from-[var(--color-accent-500)] to-[var(--color-accent-600)] p-8 rounded-2xl text-white">
              <h3 class="text-xl font-bold mb-4 font-[var(--font-heading)]">
                24/7 Emergency Legal Support
              </h3>
              <p class="text-white/90 mb-6">
                For urgent legal matters requiring immediate attention, our partners are available 24/7.
              </p>
              <div class="space-y-3">
                <div class="flex items-center">
                  <span class="text-lg mr-3">📱</span>
                  <span>Emergency Hotline: +91 98765 43210</span>
                </div>
                <div class="flex items-center">
                  <span class="text-lg mr-3">📧</span>
                  <span>Emergency Email: urgent@norachambers.com</span>
                </div>
              </div>
            </div>

            <!-- Directions -->
            <div class="bg-white p-8 rounded-2xl shadow-xl">
              <h3 class="text-xl font-bold text-[var(--color-text-dark)] mb-6 font-[var(--font-heading)]">
                How to Reach Us
              </h3>
              
              <div class="space-y-4">
                <div>
                  <h4 class="font-semibold text-[var(--color-text-dark)] mb-2">By Metro</h4>
                  <p class="text-[var(--color-text-muted)] text-sm">
                    Noida Sector 16 Metro Station (Blue Line) - 5 minutes walk
                  </p>
                </div>
                
                <div>
                  <h4 class="font-semibold text-[var(--color-text-dark)] mb-2">By Car</h4>
                  <p class="text-[var(--color-text-muted)] text-sm">
                    Visitor parking available in the building basement. Entry from Sector 15A side.
                  </p>
                </div>
                
                <div>
                  <h4 class="font-semibold text-[var(--color-text-dark)] mb-2">Nearby Landmarks</h4>
                  <p class="text-[var(--color-text-muted)] text-sm">
                    Opposite Noida Authority Building, Near DLF Mall of India
                  </p>
                </div>
              </div>

              <div class="mt-6">
                <button class="text-[var(--color-accent-500)] hover:text-[var(--color-accent-600)] font-medium text-sm">
                  📍 Get Directions on Google Maps →
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- FAQ Section -->
        <section class="mb-20">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-[var(--color-text-dark)] mb-4 font-[var(--font-heading)]">
              Frequently Asked Questions
            </h2>
            <div class="w-24 h-1 bg-[var(--color-accent-500)] mx-auto"></div>
          </div>

          <div class="max-w-4xl mx-auto">
            <div class="space-y-6">
              <div class="bg-white p-6 rounded-xl shadow-lg">
                <h4 class="text-lg font-semibold text-[var(--color-text-dark)] mb-3">
                  How quickly can I expect a response to my inquiry?
                </h4>
                <p class="text-[var(--color-text-muted)]">
                  We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call our emergency hotline for immediate assistance.
                </p>
              </div>

              <div class="bg-white p-6 rounded-xl shadow-lg">
                <h4 class="text-lg font-semibold text-[var(--color-text-dark)] mb-3">
                  Do you offer initial consultations?
                </h4>
                <p class="text-[var(--color-text-muted)]">
                  Yes, we offer initial consultations to understand your legal requirements. The first 30-minute consultation is complimentary for most practice areas.
                </p>
              </div>

              <div class="bg-white p-6 rounded-xl shadow-lg">
                <h4 class="text-lg font-semibold text-[var(--color-text-dark)] mb-3">
                  What information should I prepare for the consultation?
                </h4>
                <p class="text-[var(--color-text-muted)]">
                  Please prepare any relevant documents, a brief summary of your legal issue, and your specific objectives. This will help us provide more targeted advice during the consultation.
                </p>
              </div>

              <div class="bg-white p-6 rounded-xl shadow-lg">
                <h4 class="text-lg font-semibold text-[var(--color-text-dark)] mb-3">
                  Do you handle cases outside of Delhi/NCR?
                </h4>
                <p class="text-[var(--color-text-muted)]">
                  Yes, we handle cases across India and have experience with international legal matters. We can coordinate with local counsel when required for jurisdiction-specific issues.
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- Call to Action -->
        <div class="text-center">
          <div class="bg-white p-12 rounded-2xl shadow-xl">
            <h2 class="text-3xl font-bold text-[var(--color-text-dark)] mb-4 font-[var(--font-heading)]">
              Ready to Get Started?
            </h2>
            <p class="text-lg text-[var(--color-text-muted)] mb-8 max-w-2xl mx-auto">
              Take the first step towards resolving your legal matters with expert guidance from our experienced team.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button class="bg-[var(--color-accent-500)] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-accent-600)] transition-colors">
                Schedule Consultation
              </button>
              <NuxtLink 
                to="tel:+911204516000"
                class="border-2 border-[var(--color-accent-500)] text-[var(--color-accent-500)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-accent-500)] hover:text-white transition-colors"
              >
                Call Now
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

input:focus,
select:focus,
textarea:focus {
  box-shadow: 0 0 0 3px rgba(var(--color-accent-500), 0.1);
}
</style>