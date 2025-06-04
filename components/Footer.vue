<template>
  <footer class="bg-[var(--color-beige-100)] border-t border-[var(--color-beige-200)] py-12">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div class="md:col-span-4">
          <h3 class="text-2xl mb-4 font-[var(--font-heading)] text-[var(--color-text-dark)] tracking-wide">Punyark Legal</h3>
          <p class="text-[var(--color-text-muted)] mb-4">Dedicated to providing exceptional legal services with integrity and professionalism since 2008.</p>
          <p class="text-[var(--color-accent-500)]">Bar Council of Bihar Certified</p>
        </div>
        <div class="md:col-span-5">
          <h3 class="text-xl font-medium mb-4 text-[var(--color-text-dark)] font-[var(--font-heading)]">Practice Areas</h3>
          <nav class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
            <div><a href="#civil-litigation" class="text-[var(--color-text-muted)] hover:text-[var(--color-accent-500)] transition-colors">Civil Litigation</a></div>
            <div><a href="#criminal-defense" class="text-[var(--color-text-muted)] hover:text-[var(--color-accent-500)] transition-colors">Criminal Defense</a></div>
            <div><a href="#family-law" class="text-[var(--color-text-muted)] hover:text-[var(--color-accent-500)] transition-colors">Family Law</a></div>
            <div><a href="#property-law" class="text-[var(--color-text-muted)] hover:text-[var(--color-accent-500)] transition-colors">Property Law</a></div>
            <div><a href="#constitutional-law" class="text-[var(--color-text-muted)] hover:text-[var(--color-accent-500)] transition-colors">Constitutional Law</a></div>
            <div><a href="#corporate-law" class="text-[var(--color-text-muted)] hover:text-[var(--color-accent-500)] transition-colors">Corporate Law</a></div>
          </nav>
        </div>
        <div class="md:col-span-3">
          <h3 class="text-xl mb-4 font-[var(--font-heading)] text-[var(--color-text-dark)] tracking-wide">Contact Us</h3>
          <address class="not-italic text-[var(--color-text-muted)]">
            <p class="mb-2">LGF, X-7, Hauz Khas</p>
            <p class="mb-2">New Delhi 110016</p>
            <p class="mb-2">Email: <a href="mailto:admin@norachambers.in" class="hover:text-[var(--color-accent-500)] transition-colors">admin@norachambers.in</a></p>
            <p class="mb-2">Phone (Fixed): <a href="tel:+911141075982" class="hover:text-[var(--color-accent-500)] transition-colors">+91 11 4107 5982</a></p>
            <p>Mobile: <a href="tel:+919953803458" class="hover:text-[var(--color-accent-500)] transition-colors">+91 99538 03458</a></p>
          </address>
        </div>
      </div>
      <div class="border-t border-[var(--color-beige-300)] mt-10 pt-6 text-center text-[var(--color-text-muted)]">
        <p>&copy; {{ new Date().getFullYear() }} Punyark Legal. All rights reserved.</p>
        <div class="mt-2 text-sm">
          <a href="#privacy" class="text-[var(--color-text-muted)] hover:text-[var(--color-accent-500)] transition-colors mr-4">Privacy Policy</a>
          <a href="#terms" class="text-[var(--color-text-muted)] hover:text-[var(--color-accent-500)] transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template> 