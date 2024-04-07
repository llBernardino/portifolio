import { useState, useEffect } from 'react'
import theme from '../styles/theme'


type WindowSize = {
  width: number | undefined
  height: number | undefined
  isMobile: boolean | undefined
  isDesktop: boolean | undefined
}

export const useWindowSize = () => {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
    isMobile: true,
    isDesktop: false,
  })

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: window.innerWidth
          ? window.innerWidth < theme.breakpoints.small
          : true,
        isDesktop: window.innerWidth
          ? window.innerWidth >= theme.breakpoints.small
          : false,
      })
    }

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Call handler right away so state gets updated with initial window size
    handleResize()

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount

  return windowSize
}
