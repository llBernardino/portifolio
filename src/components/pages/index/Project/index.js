import React, { useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import './stylebutton.css';
import {
 Content,BackgroundProject, Container, H1,
} from './style.ts'
import {
  Col1
 } from './col1.js'
import jsicon from '../../img/icons8-javascript.svg'
import reacticon from '../../img/icons8-reagir.svg'
import htmlicon from '../../img/icons8-html-5.svg'   
import bootstrap from '../../img/bootstrap.svg'   
import cssicon from '../../img/icons8-css-50.png' 
import typeicon from '../../img/icons8-typescript-56.png'
import oportunize from '../../img/oportunize2.jpeg'
import bikes from '../../img/bikes2.jpeg'
import { Col2 } from './col2.js';

export const Project = () => {

  return (
    <Content>
      <BackgroundProject>
          <Container>
              <H1 className="text-center">PROJECTS</H1>
              <Row className="justify-content-center d-flex w-100">
                <Col1
                title={'Site Oportunize'}
                imagem ={oportunize}
                descript={'React.js Next.js Emotion Hooks TypeScript '}
                github = {'https://github.com/llBernardino/Oportunize'}
                online = {'https://oportunize.org'}
                iconReact ={reacticon} iconTS ={typeicon} iconCss ={cssicon} iconJS ={jsicon}
                />
                <Col2
                title={'Site Bicicletas'}
                imagem={bikes} 
                descript={'Html5, Css3 , Bootstrap '}
                github = {'https://github.com/llBernardino/Site_Bicicletas'}
                online = {'https://site-bicicletas.vercel.app'}
                iconCss ={cssicon}
                iconHtml ={htmlicon}
                iconBootstrap ={bootstrap}
                iconJS ={jsicon}
                /> 
              </Row>
            </Container>
      </BackgroundProject>
    </Content>
    
  );
}
export default Project

