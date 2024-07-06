import styled from '@emotion/styled'

export const Content = styled.div`
  
`
export const BackgroundHero = styled.div`
  background: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 800px;
  display: flex;
  align-items: center;
`
export const Heros = styled.div`
  display:flex;
  align-items:start;
  justify-content: space-evenly;
  flex-wrap: wrap;
`
export const Boxtext = styled.div`
  text-align: left;
  max-width: 500px;
  @media (max-width: 768px) {
    text-align:center;
  }

`
export const SubBox = styled.div`
  justify-content: space-evenly;
  display:flex;
  margin-top: 100px;

  @media (max-width: 768px) {
    margin-top:50px;
  }
`

export const Figure = styled.figure`
  border: 0.115rem solid #000000;
  margin: 0;
  z-index: 1;
  width: 18.334rem;
  height: 18.67rem;
  position: relative;

  @media (max-width: 768px) {
    margin-top:50px;
    width: 17.334rem;
    height: 15.67rem;
  }
`
export const Img = styled.img`
  width:300px;
  margin-top: -2.435rem;
  margin-left: -2.2rem;

  @media (max-width: 768px) {
    margin-top:50px;
    width: 250px;
    margin-top: -2.435rem;
    margin-left: 13px;
  }
`

export const H1 = styled.h3`
  font-size: 4.4rem;
  color: white;
  margin: 10px 0px;
  font-weight: bold;
  margin-bottom: 34px;
  font-family: Helvetica Neue;

  @media (max-width: 425px) {
    font-size: 3.4rem;
  }
`
export const Subtext = styled.p`
 margin:10px;
 font-family: "Poppins", sans-serif;
 font-size: 20px;

  color:#afacac;
  @media (max-width: 1049px) {
    font-size: 16px;
  }
  @media (max-width: 425px) {
    font-size: 14px;
  }
`

export const Contacts = styled.figure`
 margin:0px;
`
export const Figurebox = styled.div`

`