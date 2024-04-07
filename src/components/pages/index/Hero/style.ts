import styled from '@emotion/styled'
import paper from '../../img/paper.svg'
const background = (p) => `url('${paper}')`
export const Content = styled.div`

`



export const BackgroundHero = styled.div`
background: no-repeat;
background: ${background}; 
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
 
@media (min-width: }px) {
    font-size:a;
  }

`
export const SubBox = styled.div`
justify-content: space-evenly;
display:flex;
margin-top: 150px;
`

export const Figure = styled.figure`
border: 0.115rem solid #ccf381;
margin: 0;
z-index: 1;
width: 20.334em;
height: 20.67em;
position: relative;

`
export const Img = styled.img`

`

export const H1 = styled.h1`
font-size: 4.4em;
color: indigo;
text-align: left;
margin: 10px 0px;
margin-bottom: 34px;
`
export const Subtext = styled.p`
 margin:10px;
 font-family: Helvetica Neue;
 font-size:16px;
`
