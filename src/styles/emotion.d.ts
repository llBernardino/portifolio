import '@emotion/react'
import { Colors, Breakpoints, Typography } from './types'

declare module '@emotion/react' {
  export interface Theme {
    colors: Colors
    breakpoints: Breakpoints
    typography: Typography
  }
}
