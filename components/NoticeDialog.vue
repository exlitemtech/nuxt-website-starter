<template>
  <Transition 
    name="dialog" 
    appear
    enter-active-class="transition-all duration-500 ease-out" 
    leave-active-class="transition-all duration-400 ease-in"
    enter-from-class="opacity-0" 
    enter-to-class="opacity-100"
    leave-from-class="opacity-100" 
    leave-to-class="opacity-0"
  >
    <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center z-50">
      <div class="absolute inset-0 bg-[var(--color-text-dark)]/30 backdrop-blur-sm transition-opacity duration-500 ease-out" @click="closeDialog"></div>
      
      <Transition
        appear
        enter-active-class="transition-all duration-500 ease-out delay-100" 
        leave-active-class="transition-all duration-300 ease-in"
        enter-from-class="opacity-0 scale-95 translate-y-8" 
        enter-to-class="opacity-100 scale-100 translate-y-0"
        leave-from-class="opacity-100 scale-100" 
        leave-to-class="opacity-0 scale-95"
      >
        <div v-if="isOpen" class="w-full max-w-3xl max-h-[90vh] bg-white/95 backdrop-blur-md rounded-none border border-[var(--color-beige-200)] shadow-xl p-6 md:p-8 overflow-auto relative z-10 mx-4">
          <div class="flex flex-col h-full justify-between">
            <div>
              <h2 class="text-2xl md:text-3xl mb-3 text-[var(--color-text-dark)] font-[var(--font-heading)] tracking-wide">Disclaimer</h2>
              <div class="w-16 h-0.5 bg-[var(--color-accent-500)] mb-5"></div>
              <div class="mb-6 space-y-3 text-sm md:text-base leading-relaxed">
                <p class="text-[var(--color-text-muted)]">
                  The Bar Council of India does not permit advertisement or solicitation by advocates in any form or manner. By accessing this website, www.norachambers.in, you acknowledge and confirm that you are seeking information relating to Nora Chambers of your own accord and that there has been no form of solicitation, advertisement or inducement by Nora Chambers or its members.
                </p>
                <p class="text-[var(--color-text-muted)]">
                  The content of this website is for informational purposes only and should not be interpreted as soliciting or advertisement. No material/information provided on this website should be construed as legal advice.
                </p>
                <p class="text-[var(--color-text-muted)]">
                  Nora Chambers shall not be liable for consequences of any action taken by relying on the material/information provided on this website.
                </p>
                <p class="text-[var(--color-text-muted)]">
                  The contents of this website are the intellectual property of Nora Chambers.
                </p>
              </div>
            </div>
            <div class="flex justify-end mt-4">
              <button 
                @click="closeDialog" 
                class="bg-[var(--color-accent-500)] hover:bg-[var(--color-accent-600)] text-white font-medium py-2 px-6 rounded-none border border-[var(--color-accent-600)] transition-all duration-300 shadow-md font-[var(--font-sans)] text-sm"
              >
                I Understand
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script setup>
const isOpen = ref(true)

function closeDialog() {
  isOpen.value = false
}
</script>

<style scoped>
/* Clean up the scoped styles since we're now using nested transitions */
.fixed {
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style> 