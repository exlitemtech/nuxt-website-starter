<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">Trusted by Leading Companies</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
        <!-- Using placeholder logos - in a real project you would use actual company logos -->
        <div v-for="i in 6" :key="i" class="flex justify-center">
          <div class="h-12 w-32 bg-gray-200 rounded-md flex items-center justify-center text-gray-500 font-semibold">
            LOGO {{ i }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template> 