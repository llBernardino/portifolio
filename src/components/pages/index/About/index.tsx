import React from 'react';
import { AboutTypes } from './types'
import {
    Content,BackgroundAbout, Boxtext, Figure, H1, Subtext,Abouts,
    SubBox,
    Img,Icon
  } from './style.ts'
import Container from '../../../layout/Container/index.tsx'
import htmlicon from '../../img/icons8-html-5.svg'   
import jsicon from '../../img/icons8-javascript.svg'
import reacticon from '../../img/icons8-reagir.svg'
import nodeicon from '../../img/icons8-nodejs.svg'   
import cssicon from '../../img/icons8-css-50.png'  
  export const About = (props: AboutTypes) => {

    return (
      <Content>
        <BackgroundAbout>
          <Container>
            <Abouts>
              <Boxtext>
                <H1>Technology<br/>Skills</H1>
                <Subtext><Icon src={htmlicon} alt='HTML'/><Icon src={jsicon} alt='javascript'/><Icon src={reacticon} width='45px' alt='React'/><Icon src={nodeicon}alt='Node Js'/><Icon src={cssicon}alt='Css'/></Subtext>
                <SubBox>
                  <Subtext>Altamente qualificado em aprimoramento progressivo, sistemas de design e engenharia de UI.</Subtext>
                  <Subtext>Experiência comprovada na construção de produtos de sucesso para clientes em vários países.</Subtext>
                </SubBox>
              </Boxtext>
              <Figure ><Img src={props.perfil} alt='PERFIL' /></Figure>
            </Abouts>
          </Container>
        </BackgroundAbout>
    </Content>
      
    );
  }
  export default About


