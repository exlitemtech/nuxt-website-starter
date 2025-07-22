export const useTheme = () => {
  const currentTheme = ref('professional')

  const themes = {
    professional: {
      name: 'Professional',
      icon: '🏛️',
      description: 'Warm & approachable'
    },
    minimalistic: {
      name: 'Minimalistic', 
      icon: '⬛',
      description: 'Clean & modern'
    },
    corporate: {
      name: 'Corporate',
      icon: '💼',
      description: 'Dark & sophisticated'
    },
    classic: {
      name: 'Classic',
      icon: '⚖️',
      description: 'Traditional & trustworthy'
    }
  }

  const setTheme = (theme) => {
    currentTheme.value = theme
    document.documentElement.setAttribute('data-theme', theme)
    
    // Store in localStorage
    if (process.client) {
      localStorage.setItem('nora-theme', theme)
    }
  }

  const initializeTheme = () => {
    if (process.client) {
      const savedTheme = localStorage.getItem('nora-theme')
      if (savedTheme && themes[savedTheme]) {
        setTheme(savedTheme)
      } else {
        setTheme('professional')
      }
    }
  }

  return {
    currentTheme: readonly(currentTheme),
    themes,
    setTheme,
    initializeTheme
  }
}