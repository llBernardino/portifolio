import styled from '@emotion/styled'
import paper from '../../img/paper.svg'
const background = () => `url('${paper}')`
export const Content = styled.div`

`

export const BackgroundProjects = styled.div`
  background: no-repeat;
  // background: ${background}; 
  background-color:gray;
  background-size: cover;
  background-position: center;
  min-height: 800px;
  display: flex;
  align-items: center;
`
export const Projectss = styled.div`
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
  margin-top: 150px;

  @media (max-width: 768px) {
    margin-top:50px;
  }
`

export const Figure = styled.figure`
  border: 0.115rem solid #000000;
  margin: 0;
  z-index: 1;
  width: 18.334em;
  height: 18.67em;
  position: relative;

  @media (max-width: 768px) {
    margin-top:50px;
  }
`
export const Img = styled.img`
  width:300px;
  margin-top: -2.435em;
  margin-left: -2.2em;
`

export const H1 = styled.h1`
  font-size: 4.4em;
  color: indigo;
  margin: 10px 0px;
  font-weight: bold;
  margin-bottom: 34px;
  
  font-family: Helvetica Neue;

  @media (max-width: 425px) {
    font-size: 3.4em;
  }
`
export const Subtext = styled.p`
 margin:10px;
 font-family: Helvetica Neue;
 font-size: 20px;

  @media (max-width: 1049px) {
    font-size: 16px;
  }
  @media (max-width: 425px) {
    font-size: 14px;
  }
`
