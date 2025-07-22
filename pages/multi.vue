<template>
  <div class="min-h-screen bg-[var(--color-beige-50)] flex flex-col">
    <MultiPageHeader />
    <main class="flex-1">
      <MultiPageHero />
      <QuickOverview />
      <RecentUpdates />
    </main>
    <Footer />
    <ThemeSwitcher />
    <NoticeDialog />
  </div>
</template>

<script setup>
import MultiPageHeader from '~/components/multi-page/MultiPageHeader.vue'
import MultiPageHero from '~/components/multi-page/MultiPageHero.vue'
import QuickOverview from '~/components/multi-page/QuickOverview.vue'
import RecentUpdates from '~/components/multi-page/RecentUpdates.vue'
import Footer from '~/components/Footer.vue'
import ThemeSwitcher from '~/components/ThemeSwitcher.vue'
import NoticeDialog from '~/components/NoticeDialog.vue'
</script>