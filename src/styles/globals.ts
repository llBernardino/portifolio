import { css } from '@emotion/react'
import { Theme } from './types'

const globals = ({ typography, colors, breakpoints }: Theme) => css`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: ${typography.base};
    font-family: ${typography.body};
    line-height: 1.2;
    -webkit-font-smoothing: antialiased;

    @media (min-width: ${breakpoints.small}px) {
      font-size: ${typography.baseDesk};
      line-height: 1.35;
    }
  }

  body {
    min-height: 100vh;
    margin: 0;
    background-color: ${colors.background};
    color: ${colors.primary};
  }

  a {
    text-decoration: none;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  figure {
    margin: 0;
  }

  img {
    display: block;
    width: 100%;
  }

  input,
  select,
  textarea {
    font-family: ${typography.body};
  }

  h1,
  h2,
  h3,
  p {
    margin: 0;
  }

  label,
  p {
    font: ${typography.paragraph};
  }

  h1 {
    font: ${typography.h1};
  }

  h2 {
    font: ${typography.h2};
  }

  h3 {
    font: ${typography.h3};
  }

  h4 {
    font: ${typography.h4};
  }

  @media (min-width: ${breakpoints.small}px) {
    label,
    p {
      font: ${typography.paragraphDesk};
    }

    h1 {
      font: ${typography.h1Desk};
    }

    h2 {
      font: ${typography.h2Desk};
    }

    h3 {
      font: ${typography.h3Desk};
    }

    h4 {
      font: ${typography.h4Desk};
    }
  }
`

export default globals
