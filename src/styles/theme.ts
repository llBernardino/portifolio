import { Colors, Breakpoints, Typography, Theme } from './types'

///////////////////////////////////////////////////////////////////////////////
//  # Variables
//--------------------------------
//    Define all your global variables in this file
///////////////////////////////////////////////////////////////////////////////

// ## Colors
//---------------------------------
//    Colors variables are used with the syntax below
//    const EmotionComponent = styled.selector`
//      $rule:  ${colors.colorName};
//    `
//    not color names as it won't affect your project in the long run
///////////////////////////////////////////////////////////////////////////////

const colors: Colors = {
  primary: '#232323',
  primaryLight: '#23232399',
  primaryDark: '#232323CC',
  secondaryDark: '#0D0D0D',
  tertiaryDark: '#1E1E1E',
  primaryGray: '#8E9093',

  secondary: '#C49152',
  secondaryHover: '#C49152BB',

  tertiary: '#F8F8F8',

  quaternary: '#F1F1F1',

  background: '#F7F3F3',
  backgroundLight: '#FFFFFF',
  backgroundPrimaryGrey: '#2F2F2F',
  invertedText: '#FFFFFF',
  invertedTextLight: '#FEFAFA',

  light: '#ECE7E4',
  modalText: '#1E1E1E',
}

// # Media Queries breakpoints
//    MQ variables are defined as number and are used with the syntax below.
//
//      const EmotionComponent = styled.selector`
//        @media (min-width: ${props => props.theme.breakpoints.small}px) {
//          ...
//        }
//      `
//
//    Try to use abstract names and not something specific as mobile, as it
//    won't affect your project in the long run
///////////////////////////////////////////////////////////////////////////////
const breakpoints: Breakpoints = {
  small: 769,

  maxWidthDesk: '74rem',
  maxWidthMobile: '28rem',
}

const typography: Typography = {
  h1: '700 1.75rem "Roboto", sans-serif',
  h2: '700 1.5rem "Roboto", sans-serif',
  h3: '700 1.25rem "Roboto", sans-serif',
  h4: '700 1.125rem "Roboto", sans-serif',
  paragraph: '300 0.875rem "Roboto", sans-serif',

  h1Desk: '700 2.75rem "Roboto", sans-serif',
  h2Desk: '700 2.25rem "Roboto", sans-serif',
  h3Desk: '700 1.75rem "Roboto", sans-serif',
  h4Desk: '700 1.5rem "Roboto", sans-serif',
  paragraphDesk: '300 1.125rem "Roboto", sans-serif',

  base: '100%',
  baseDesk: '100%',
  display: '"Roboto", sans-serif',
  body: '"Roboto", sans-serif',

  size1: '2.75rem',
  size2: '2.25rem',
  size3: '1.75rem',
  size4: '1.5rem',
  size5: '1.25rem',
  size6: '1rem',
  large: '1.25rem',
  medium: '1.125rem',
  normal: '1rem',
  small: '0.875rem',
}

const theme: Theme = { colors, breakpoints, typography }

export default theme
