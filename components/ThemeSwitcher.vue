<template>
  <div class="theme-switcher">
    <!-- Main Toggle Button -->
    <button 
      @click="toggleSwitcher"
      :class="[
        'theme-toggle-btn',
        { 'active': isOpen }
      ]"
      aria-label="Design Switcher"
    >
      <div class="current-icons">
        <span class="current-theme-icon">{{ themes[currentTheme].icon }}</span>
        <span class="current-layout-icon">{{ layouts[currentLayout].icon }}</span>
      </div>
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

    <!-- Design Options Panel -->
    <transition name="theme-panel">
      <div v-if="isOpen" class="theme-panel">
        <div class="theme-panel-header">
          <h3>Website Design</h3>
          <button @click="isOpen = false" class="close-btn" aria-label="Close">×</button>
        </div>
        
        <!-- Theme Section -->
        <div class="section">
          <div class="section-header">
            <h4>🎨 Visual Themes</h4>
            <div class="section-subtitle">Choose your color & style</div>
          </div>
          <div class="options-grid">
            <button
              v-for="(theme, key) in themes"
              :key="key"
              @click="selectTheme(key)"
              :class="[
                'option-btn',
                { 'active': currentTheme === key }
              ]"
            >
              <div class="option-icon">{{ theme.icon }}</div>
              <div class="option-info">
                <div class="option-name">{{ theme.name }}</div>
                <div class="option-description">{{ theme.description }}</div>
              </div>
              <div v-if="currentTheme === key" class="check-mark">✓</div>
            </button>
          </div>
        </div>

        <!-- Layout Section -->
        <div class="section">
          <div class="section-header">
            <h4>📐 Page Layouts</h4>
            <div class="section-subtitle">Choose your structure</div>
          </div>
          <div class="options-grid">
            <button
              v-for="(layout, key) in layouts"
              :key="key"
              @click="selectLayout(key)"
              :class="[
                'option-btn',
                { 'active': currentLayout === key }
              ]"
            >
              <div class="option-icon">{{ layout.icon }}</div>
              <div class="option-info">
                <div class="option-name">{{ layout.name }}</div>
                <div class="option-description">{{ layout.description }}</div>
              </div>
              <div v-if="currentLayout === key" class="check-mark">✓</div>
            </button>
          </div>
        </div>
        
        <!-- Live Preview -->
        <div class="theme-preview">
          <div class="preview-text">Live Preview: {{ themes[currentTheme].name }} × {{ layouts[currentLayout].name }}</div>
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

        <!-- Quick Access -->
        <div class="quick-access">
          <div class="quick-text">🚀 Popular Combinations</div>
          <div class="quick-buttons">
            <button @click="applyCombo('professional', 'single-page')" class="combo-btn">Classic Site</button>
            <button @click="applyCombo('corporate', 'dashboard')" class="combo-btn">Modern Firm</button>
            <button @click="applyCombo('minimalistic', 'magazine')" class="combo-btn">Clean Layout</button>
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
const { currentTheme, currentLayout, themes, layouts, setTheme, setLayout, initializeTheme } = useTheme()
const isOpen = ref(false)

const toggleSwitcher = () => {
  isOpen.value = !isOpen.value
}

const selectTheme = (themeKey) => {
  setTheme(themeKey)
}

const selectLayout = (layoutKey) => {
  setLayout(layoutKey)
  isOpen.value = false
}

const applyCombo = (theme, layout) => {
  setTheme(theme)
  setTimeout(() => {
    setLayout(layout)
  }, 100)
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
  gap: 0.75rem;
  background: var(--color-accent-500);
  color: var(--color-text-light);
  border: none;
  border-radius: var(--border-radius);
  padding: 1rem 1.25rem;
  box-shadow: var(--shadow-medium);
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  font-weight: 600;
  backdrop-filter: blur(10px);
  border: 1px solid var(--color-accent-600);
  min-width: 140px;
}

.current-icons {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.current-theme-icon, .current-layout-icon {
  font-size: 1.25rem;
  line-height: 1;
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
  width: 28rem;
  max-width: 90vw;
  max-height: 80vh;
  overflow-y: auto;
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
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem;
  border-bottom: 1px solid var(--color-beige-200);
  background: var(--color-beige-100);
  position: sticky;
  top: 0;
  z-index: 10;
}

.theme-panel-header h3 {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 700;
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
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-btn:hover {
  color: var(--color-text-dark);
  background: var(--color-beige-200);
}

.section {
  padding: 1.25rem;
  border-bottom: 1px solid var(--color-beige-200);
}

.section:last-child {
  border-bottom: none;
}

.section-header {
  margin-bottom: 1rem;
}

.section-header h4 {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text-dark);
  margin-bottom: 0.25rem;
}

.section-subtitle {
  font-size: 0.75rem;
  color: var(--color-text-muted);
  font-weight: 500;
}

.options-grid {
  display: grid;
  gap: 0.5rem;
}

.option-btn {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.875rem;
  background: transparent;
  border: 1px solid transparent;
  border-radius: calc(var(--border-radius) * 0.75);
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  text-align: left;
}

[data-theme="minimalistic"] .option-btn {
  border-radius: 0;
  border: 1px solid var(--color-beige-300);
}

.option-btn:hover {
  background: var(--color-beige-100);
  border-color: var(--color-beige-300);
}

.option-btn.active {
  background: var(--color-accent-500);
  color: var(--color-text-light);
  border-color: var(--color-accent-600);
}

[data-theme="corporate"] .option-btn.active {
  background: linear-gradient(135deg, var(--color-accent-500), var(--color-accent-600));
}

.option-icon {
  font-size: 1.25rem;
  margin-right: 0.875rem;
  line-height: 1;
  min-width: 1.25rem;
}

.option-info {
  flex: 1;
}

.option-name {
  font-weight: 600;
  margin-bottom: 0.25rem;
  font-size: 0.875rem;
}

.option-description {
  font-size: 0.75rem;
  opacity: 0.8;
}

.check-mark {
  font-size: 1rem;
  font-weight: bold;
  margin-left: 0.5rem;
}

.theme-preview {
  padding: 1.25rem;
  background: var(--color-beige-100);
}

.preview-text {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-text-muted);
  margin-bottom: 0.875rem;
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
  margin-bottom: 0.875rem;
}

.preview-buttons {
  display: flex;
  gap: 0.5rem;
}

.preview-btn {
  padding: 0.375rem 0.875rem;
  border-radius: var(--border-radius);
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: var(--font-sans);
  flex: 1;
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

.quick-access {
  padding: 1.25rem;
  background: var(--color-beige-100);
  border-top: 1px solid var(--color-beige-200);
}

.quick-text {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-text-muted);
  margin-bottom: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.quick-buttons {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.combo-btn {
  background: var(--color-beige-50);
  color: var(--color-text-dark);
  border: 1px solid var(--color-beige-300);
  padding: 0.5rem 0.875rem;
  border-radius: calc(var(--border-radius) * 0.75);
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  flex: 1;
  min-width: 80px;
}

[data-theme="minimalistic"] .combo-btn {
  border-radius: 0;
}

.combo-btn:hover {
  background: var(--color-accent-500);
  color: var(--color-text-light);
  border-color: var(--color-accent-600);
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
    width: 26rem;
    right: -6rem;
  }
  
  .theme-toggle-btn {
    padding: 0.875rem 1rem;
    min-width: 120px;
  }
}

@media (max-width: 480px) {
  .theme-panel {
    width: calc(100vw - 2rem);
    right: -8rem;
  }
  
  .current-icons {
    gap: 0.25rem;
  }
  
  .theme-toggle-btn {
    min-width: 100px;
    padding: 0.75rem 0.875rem;
  }
  
  .quick-buttons {
    flex-direction: column;
  }
  
  .combo-btn {
    flex: none;
  }
}
</style>