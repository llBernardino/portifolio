
import styled from '@emotion/styled'
export const Content = styled.div`
 
`

export const Header = styled.header`
  background: black;
  width: 100%;
  top: 0;
  z-index: 4;
`
export  const Container = styled.div`
  width: 100%;
  max-width:1200px;
  margin: 0 auto;

`
export const Image = styled.img`
  margin:0px auto;
`
export const H1 = styled.h4`
  margin:0px;
  color:indigo;
`
export const Figure = styled.figure`
  text-align:start;
  margin:0px;
  display:flex;
  width: 100%;
  max-width: 200px;

  @media (max-width:760px) {
    max-width: none;
  }
`
export const Nav = styled.nav`
  width: 100%;
  display:flex;
  justify-content: center;
`

export const Link = styled.a`
 
` 
export const Form = styled.form`
  width: 100%;
  max-width: 500px

  @media (max-width:760px) {
    max-width: none;
  }

`

