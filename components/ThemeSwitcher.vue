<template>
  <div class="theme-switcher">
    <!-- Main Toggle Button -->
    <button 
      @click="toggleSwitcher"
      :class="[
        'theme-toggle-btn',
        { 'active': isOpen }
      ]"
      aria-label="Theme Switcher"
    >
      <div class="current-theme-icon">{{ themes[currentTheme].icon }}</div>
      <div class="toggle-indicator">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          class="toggle-arrow" 
          :class="{ 'rotated': isOpen }"
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </button>

    <!-- Theme Options Panel -->
    <transition name="theme-panel">
      <div v-if="isOpen" class="theme-panel">
        <div class="theme-panel-header">
          <h3>Choose Theme</h3>
          <button @click="isOpen = false" class="close-btn" aria-label="Close">×</button>
        </div>
        
        <div class="theme-options">
          <button
            v-for="(theme, key) in themes"
            :key="key"
            @click="selectTheme(key)"
            :class="[
              'theme-option',
              { 'active': currentTheme === key }
            ]"
          >
            <div class="theme-icon">{{ theme.icon }}</div>
            <div class="theme-info">
              <div class="theme-name">{{ theme.name }}</div>
              <div class="theme-description">{{ theme.description }}</div>
            </div>
            <div v-if="currentTheme === key" class="check-mark">✓</div>
          </button>
        </div>
        
        <div class="theme-preview">
          <div class="preview-text">Live Preview</div>
          <div class="preview-elements">
            <div class="preview-card">
              <div class="preview-title">Nora Chambers</div>
              <div class="preview-subtitle">Legal Excellence</div>
              <div class="preview-buttons">
                <button class="preview-btn primary">Contact Us</button>
                <button class="preview-btn secondary">Our Team</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- Backdrop -->
    <div 
      v-if="isOpen" 
      @click="isOpen = false" 
      class="theme-backdrop"
    ></div>
  </div>
</template>

<script setup>
const { currentTheme, themes, setTheme, initializeTheme } = useTheme()
const isOpen = ref(false)

const toggleSwitcher = () => {
  isOpen.value = !isOpen.value
}

const selectTheme = (themeKey) => {
  setTheme(themeKey)
  isOpen.value = false
}

// Close on escape key
const handleEscape = (e) => {
  if (e.key === 'Escape' && isOpen.value) {
    isOpen.value = false
  }
}

onMounted(() => {
  initializeTheme()
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
})
</script>

<style scoped>
.theme-switcher {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;
}

.theme-toggle-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--color-accent-500);
  color: var(--color-text-light);
  border: none;
  border-radius: var(--border-radius);
  padding: 0.75rem 1rem;
  box-shadow: var(--shadow-medium);
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  font-weight: 600;
  backdrop-filter: blur(10px);
  border: 1px solid var(--color-accent-600);
}

[data-theme="minimalistic"] .theme-toggle-btn {
  border-radius: 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

[data-theme="corporate"] .theme-toggle-btn {
  background: linear-gradient(135deg, var(--color-accent-500), var(--color-accent-600));
}

[data-theme="classic"] .theme-toggle-btn {
  font-family: var(--font-heading);
}

.theme-toggle-btn:hover {
  background: var(--color-accent-600);
  transform: translateY(-2px);
  box-shadow: var(--shadow-medium);
}

.theme-toggle-btn.active {
  background: var(--color-accent-600);
}

.current-theme-icon {
  font-size: 1.25rem;
  line-height: 1;
}

.toggle-indicator {
  display: flex;
  align-items: center;
}

.toggle-arrow {
  width: 1rem;
  height: 1rem;
  transition: transform 0.3s ease;
}

.toggle-arrow.rotated {
  transform: rotate(180deg);
}

.theme-panel {
  position: absolute;
  bottom: calc(100% + 1rem);
  right: 0;
  background: var(--color-beige-50);
  border: 1px solid var(--color-beige-200);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-medium);
  width: 24rem;
  max-width: 90vw;
  overflow: hidden;
  backdrop-filter: blur(20px);
}

[data-theme="minimalistic"] .theme-panel {
  border-radius: 0;
  border: 2px solid var(--color-beige-300);
}

[data-theme="corporate"] .theme-panel {
  background: var(--color-beige-100);
  border-color: var(--color-beige-300);
}

.theme-panel-header {
  display: flex;
  justify-content: between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid var(--color-beige-200);
  background: var(--color-beige-100);
}

.theme-panel-header h3 {
  margin: 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-text-dark);
  font-family: var(--font-heading);
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--color-text-muted);
  cursor: pointer;
  padding: 0.25rem;
  line-height: 1;
  transition: color 0.2s ease;
  margin-left: auto;
}

.close-btn:hover {
  color: var(--color-text-dark);
}

.theme-options {
  padding: 0.5rem;
}

.theme-option {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.75rem;
  background: transparent;
  border: 1px solid transparent;
  border-radius: calc(var(--border-radius) * 0.75);
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
}

[data-theme="minimalistic"] .theme-option {
  border-radius: 0;
}

.theme-option:hover {
  background: var(--color-beige-100);
  border-color: var(--color-beige-300);
}

.theme-option.active {
  background: var(--color-accent-500);
  color: var(--color-text-light);
  border-color: var(--color-accent-600);
}

[data-theme="corporate"] .theme-option.active {
  background: linear-gradient(135deg, var(--color-accent-500), var(--color-accent-600));
}

.theme-icon {
  font-size: 1.5rem;
  margin-right: 0.75rem;
  line-height: 1;
}

.theme-info {
  flex: 1;
}

.theme-name {
  font-weight: 600;
  margin-bottom: 0.125rem;
  font-size: 0.875rem;
}

.theme-description {
  font-size: 0.75rem;
  opacity: 0.8;
}

.check-mark {
  font-size: 1rem;
  font-weight: bold;
  margin-left: 0.5rem;
}

.theme-preview {
  padding: 1rem;
  border-top: 1px solid var(--color-beige-200);
  background: var(--color-beige-100);
}

.preview-text {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-text-muted);
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.preview-card {
  background: var(--color-beige-50);
  border: 1px solid var(--color-beige-200);
  border-radius: var(--border-radius);
  padding: 1rem;
  box-shadow: var(--shadow-light);
}

[data-theme="minimalistic"] .preview-card {
  border-radius: 0;
}

.preview-title {
  font-size: 1rem;
  font-weight: bold;
  color: var(--color-text-dark);
  font-family: var(--font-heading);
  margin-bottom: 0.25rem;
}

.preview-subtitle {
  font-size: 0.75rem;
  color: var(--color-text-muted);
  margin-bottom: 0.75rem;
}

.preview-buttons {
  display: flex;
  gap: 0.5rem;
}

.preview-btn {
  padding: 0.375rem 0.75rem;
  border-radius: var(--border-radius);
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: var(--font-sans);
}

[data-theme="minimalistic"] .preview-btn {
  border-radius: 0;
  text-transform: uppercase;
  letter-spacing: 0.025em;
}

.preview-btn.primary {
  background: var(--color-accent-500);
  color: var(--color-text-light);
  border: 1px solid var(--color-accent-600);
}

[data-theme="corporate"] .preview-btn.primary {
  background: linear-gradient(135deg, var(--color-accent-500), var(--color-accent-600));
}

.preview-btn.secondary {
  background: transparent;
  color: var(--color-text-dark);
  border: 1px solid var(--color-beige-300);
}

[data-theme="corporate"] .preview-btn.secondary {
  color: var(--color-accent-400);
  border-color: var(--color-accent-500);
}

.theme-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.1);
  z-index: -1;
  backdrop-filter: blur(2px);
}

/* Transitions */
.theme-panel-enter-active,
.theme-panel-leave-active {
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.theme-panel-enter-from {
  opacity: 0;
  transform: translateY(1rem) scale(0.95);
}

.theme-panel-leave-to {
  opacity: 0;
  transform: translateY(1rem) scale(0.95);
}

/* Responsive */
@media (max-width: 768px) {
  .theme-switcher {
    bottom: 1rem;
    right: 1rem;
  }
  
  .theme-panel {
    width: 20rem;
    right: -4rem;
  }
  
  .theme-toggle-btn {
    padding: 0.625rem 0.875rem;
  }
}

@media (max-width: 480px) {
  .theme-panel {
    width: calc(100vw - 2rem);
    right: -6rem;
  }
}
</style>