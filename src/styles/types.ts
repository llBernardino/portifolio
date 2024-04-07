export interface Colors {
  primary: string
  primaryLight: string
  primaryDark: string
  secondaryDark: string
  tertiaryDark: string
  primaryGray: string
  secondary: string
  secondaryHover: string
  tertiary: string
  quaternary: string
  background: string
  backgroundLight: string
  backgroundPrimaryGrey: string
  invertedText: string
  invertedTextLight: string
  light: string
  modalText: string
}

export interface Breakpoints {
  small: number

  maxWidthDesk: string
  maxWidthMobile: string
}

export interface Typography {
  h1: string
  h2: string
  h3: string
  h4: string
  paragraph: string

  h1Desk: string
  h2Desk: string
  h3Desk: string
  h4Desk: string
  paragraphDesk: string

  base: string
  baseDesk: string
  display: string
  body: string

  size1: string
  size2: string
  size3: string
  size4: string
  size5: string
  size6: string

  large: string
  medium: string
  normal: string
  small: string
}

export interface Theme {
  colors: Colors
  breakpoints: Breakpoints
  typography: Typography
}
