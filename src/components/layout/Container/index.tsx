import styled from '@emotion/styled'

export interface ContentTypes {
  width?: string
  noPadding?: boolean
}

const Container = styled.div<ContentTypes>`
  width: 100%;
  max-width:1200px;
  padding:0 1rem;
  margin: 0 auto;
 
`

export default Container
