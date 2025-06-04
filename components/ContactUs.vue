<template>
  <section id="contact" class="py-20 bg-white border-t border-[var(--color-beige-200)]">
    <div class="container mx-auto px-6">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold mb-4 font-[var(--font-heading)] text-[var(--color-text-dark)]">Schedule a Consultation</h2>
          <p class="text-[var(--color-text-muted)] max-w-3xl mx-auto">I offer personalized legal consultations to understand your case and provide expert guidance tailored to your needs.</p>
        </div>
        
        <!-- Office Location and Map -->
        <div class="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div class="bg-[var(--color-beige-50)] p-8 shadow-md">
            <h3 class="text-2xl font-semibold mb-6 font-[var(--font-heading)] text-[var(--color-text-dark)]">Visit Our Office</h3>
            <div class="flex items-start mb-5">
              <div class="text-[var(--color-accent-500)] mr-4 mt-1 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-semibold mb-1 text-[var(--color-text-dark)]">Address:</h4>
                <p class="text-[var(--color-text-muted)] mb-1">Chamber No. 94, Bar Council Bhawan</p>
                <p class="text-[var(--color-text-muted)]">Patna High Court, Patna 800001</p>
              </div>
            </div>
            
            <div class="flex items-start mb-5">
              <div class="text-[var(--color-accent-500)] mr-4 mt-1 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-semibold mb-1 text-[var(--color-text-dark)]">Phone:</h4>
                <p class="text-[var(--color-text-muted)]">
                  <a href="tel:+919431660616" class="hover:text-[var(--color-accent-500)] transition-colors">+91 94316 60616</a>
                </p>
              </div>
            </div>
            
            <div class="flex items-start mb-5">
              <div class="text-[var(--color-accent-500)] mr-4 mt-1 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-semibold mb-1 text-[var(--color-text-dark)]">Email:</h4>
                <p class="text-[var(--color-text-muted)] mb-1">
                  <a href="mailto:akarun@punyark.com" class="hover:text-[var(--color-accent-500)] transition-colors">akarun@punyark.com</a>
                </p>
                <p class="text-[var(--color-text-muted)]">Response within 24 hours</p>
              </div>
            </div>
            
            <div class="flex items-start mb-5">
              <div class="text-[var(--color-accent-500)] mr-4 mt-1 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-semibold mb-1 text-[var(--color-text-dark)]">Consultation Hours:</h4>
                <p class="text-[var(--color-text-muted)] mb-1">Monday - Friday: 10:00 AM - 6:00 PM</p>
                <p class="text-[var(--color-text-muted)]">Saturday: 10:00 AM - 2:00 PM</p>
                <p class="text-[var(--color-text-muted)] mt-2">By appointment only</p>
              </div>
            </div>
            
            <div class="mt-4">
              <a 
                href="https://www.google.com/maps/place/Patna+High+Court/@25.6154,85.1354,17z/data=!3m1!4b1!4m6!3m5!1s0x39ed567a0fbb6c1f:0x39ed567a0fbb6c1f!8m2!3d25.6154!4d85.1354!16s%2Fg%2F11t7z9fb6p" 
                target="_blank" 
                rel="noopener noreferrer"
                class="inline-flex items-center text-[var(--color-accent-500)] hover:text-[var(--color-accent-600)] transition-colors font-medium"
              >
                Get Directions
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          <div class="shadow-md">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.8993703813526!2d85.1354!3d25.6154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed567a0fbb6c1f%3A0x133415a0427d094!2sBihar%20Bar%20Council%20Bhawan!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Punyark Legal Location Map"
            ></iframe>
          </div>
        </div>
        
        <div class="bg-[var(--color-beige-100)] rounded-none shadow-md p-8">
          <h3 class="text-3xl font-semibold mb-8 font-[var(--font-heading)] text-[var(--color-text-dark)]">Schedule a Consultation</h3>
          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="name" class="block text-[var(--color-text-muted)] font-medium mb-2 font-[var(--font-sans)]">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name" 
                  class="w-full px-4 py-3 border border-[var(--color-beige-300)] rounded-none focus:outline-none focus:ring-1 focus:ring-[var(--color-accent-500)] bg-white text-[var(--color-text-dark)]"
                  required
                >
              </div>
              <div>
                <label for="email" class="block text-[var(--color-text-muted)] font-medium mb-2 font-[var(--font-sans)]">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email" 
                  class="w-full px-4 py-3 border border-[var(--color-beige-300)] rounded-none focus:outline-none focus:ring-1 focus:ring-[var(--color-accent-500)] bg-white text-[var(--color-text-dark)]"
                  required
                >
              </div>
            </div>
            <div>
              <label for="topic" class="block text-[var(--color-text-muted)] font-medium mb-2 font-[var(--font-sans)]">Legal Matter</label>
              <select 
                id="topic" 
                v-model="form.topic" 
                class="w-full px-4 py-3 border border-[var(--color-beige-300)] rounded-none focus:outline-none focus:ring-1 focus:ring-[var(--color-accent-500)] bg-white text-[var(--color-text-dark)]"
                required
              >
                <option value="" disabled selected>Please select your legal matter</option>
                <option value="tax-law">Tax Law</option>
                <option value="corporate-law">Corporate Law</option>
                <option value="civil-litigation">Civil Litigation</option>
                <option value="criminal-law">Criminal Law</option>
                <option value="property-law">Property Law</option>
                <option value="family-law">Family Law</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label for="message" class="block text-[var(--color-text-muted)] font-medium mb-2 font-[var(--font-sans)]">Brief Description of Your Case</label>
              <textarea 
                id="message" 
                v-model="form.message" 
                rows="4" 
                class="w-full px-4 py-3 border border-[var(--color-beige-300)] rounded-none focus:outline-none focus:ring-1 focus:ring-[var(--color-accent-500)] bg-white text-[var(--color-text-dark)]"
                required
                placeholder="Please provide a brief overview of your legal matter..."
              ></textarea>
            </div>
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div class="text-[var(--color-text-muted)] text-sm">
                <p>All consultations are confidential and protected by attorney-client privilege. I will personally review your case and respond within 24 hours.</p>
              </div>
              <button 
                type="submit" 
                class="bg-[var(--color-accent-500)] hover:bg-[var(--color-accent-600)] text-white font-bold py-3 px-8 rounded-none border border-[var(--color-accent-600)] transition-all duration-300 shadow-md font-[var(--font-sans)]"
              >
                Request Consultation
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const form = ref({
  name: '',
  email: '',
  topic: '',
  message: ''
})

function submitForm() {
  alert('Form submitted! (This is just a demo)')
  // In a real application, you would send the form data to your backend
  form.value = {
    name: '',
    email: '',
    topic: '',
    message: ''
  }
}
</script> 