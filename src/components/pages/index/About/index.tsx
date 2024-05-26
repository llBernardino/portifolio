import React from 'react';
import { AboutTypes } from './types'
import Container from '../../../layout/Container/index.tsx'
import htmlicon from '../../img/icons8-html-5.svg'   
import jsicon from '../../img/icons8-javascript.svg'
import reacticon from '../../img/icons8-reagir.svg'
import nodeicon from '../../img/icons8-nodejs.svg'   
import cssicon from '../../img/icons8-css-50.png' 
import typeicon from '../../img/icons8-typescript-56.png'
import {Content,BackgroundAbout, Boxtext, Figure, H1, Subtext,Abouts,SubBox,Img,Icon} from './style.ts'
export const About = (props: AboutTypes) => {
  return (
    <Content>
      <BackgroundAbout>
        <Container>
          <Abouts>
            <Boxtext className='select' data-hidden-class="hidden2">
              <H1>Technology<br/>Skills</H1>
              <Subtext>
                <Icon src={htmlicon} alt='HTML'/>
                <Icon src={jsicon} alt='javascript'/>
                <Icon src={reacticon} width='45px' alt='React'/>
                <Icon src={nodeicon}alt='Node Js'/><Icon src={cssicon}alt='Css'/>
                <Icon src={typeicon}alt='TypeScript'width='45px'/></Subtext>
              <SubBox>
                <Subtext>Cursando Bacharelado em Ciencia Da Computação | UECE - CE |<br/>Formado Tecnico em Informatica | EEP Jaime Alecar |</Subtext>
              </SubBox>
            </Boxtext>
            <Figure className='select' data-hidden-class="hidden" ><Img src={props.perfil} alt='PERFIL' /></Figure>
          </Abouts>
        </Container>
      </BackgroundAbout>
    </Content>
  );
}
 


