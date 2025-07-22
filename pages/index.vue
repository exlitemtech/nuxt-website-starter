<template>
  <div class="min-h-screen bg-[var(--color-warm-gray-50)] flex flex-col">
    <Header />
    <HeroSection />
    
    <!-- Practice Areas Section -->
    <PracticeAreas />
    
    <!-- Updates Section -->
    <Updates />
    
    <!-- Our Team Section -->
    <OurTeam />
    
    <!-- Awards Section -->
    <Awards />
    
    <ContactUs />
    <Footer />
    <ColorToggle />
    <NoticeDialog />
  </div>
</template>

<script setup>
import NoticeDialog from '~/components/NoticeDialog.vue'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import HeroSection from '~/components/HeroSection.vue'
import ContactUs from '~/components/ContactUs.vue'
import ColorToggle from '~/components/ColorToggle.vue'
import OurTeam from '~/components/OurTeam.vue'
import Awards from '~/components/Awards.vue'
import PracticeAreas from '~/components/PracticeAreas.vue'
import Updates from '~/components/Updates.vue'
</script>
