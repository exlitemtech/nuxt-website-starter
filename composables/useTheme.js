export const useTheme = () => {
  const currentTheme = ref('professional')
  const currentLayout = ref('single-page')

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

  const layouts = {
    'single-page': {
      name: 'Single Page',
      icon: '📄',
      description: 'All content on one page',
      route: '/'
    },
    'multi-page': {
      name: 'Multi-Page',
      icon: '📚',
      description: 'Separate pages for sections',
      route: '/multi'
    },
    'magazine': {
      name: 'Magazine',
      icon: '📰',
      description: 'Magazine-style layout',
      route: '/magazine'
    },
    'dashboard': {
      name: 'Dashboard',
      icon: '🎛️',
      description: 'Card-based dashboard',
      route: '/dashboard'
    },
    'fullscreen': {
      name: 'Full Screen',
      icon: '🖥️',
      description: 'Full-screen sections',
      route: '/fullscreen'
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

  const setLayout = (layout) => {
    currentLayout.value = layout
    
    // Store in localStorage
    if (process.client) {
      localStorage.setItem('nora-layout', layout)
    }
    
    // Navigate to the layout route
    if (process.client) {
      window.location.href = layouts[layout].route
    }
  }

  const initializeTheme = () => {
    if (process.client) {
      const savedTheme = localStorage.getItem('nora-theme')
      const savedLayout = localStorage.getItem('nora-layout')
      
      if (savedTheme && themes[savedTheme]) {
        setTheme(savedTheme)
      } else {
        setTheme('professional')
      }
      
      if (savedLayout && layouts[savedLayout]) {
        currentLayout.value = savedLayout
      } else {
        currentLayout.value = 'single-page'
      }
    }
  }

  return {
    currentTheme: readonly(currentTheme),
    currentLayout: readonly(currentLayout),
    themes,
    layouts,
    setTheme,
    setLayout,
    initializeTheme
  }
}