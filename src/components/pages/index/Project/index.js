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
import poke from '../../img/poke.jpeg'
import bem from '../../img/bem.jpeg'
import car from '../../img/car.jpeg'
import { Col2 } from './col2.js';
import { Col3 } from './col3.js';
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
                Visit = {'https://oportunize.org'}
                iconReact ={reacticon} iconTS ={typeicon} iconCss ={cssicon} iconJS ={jsicon}
                />
                <Col2
                title={'Site Bicicletas'}
                imagem={bikes} 
                descript={'Html5, Css3 , Bootstrap '}
                github = {'https://github.com/llBernardino/Site_Bicicletas'}
                Visit = {'https://site-bicicletas.vercel.app'}
                iconCss ={cssicon}
                iconHtml ={htmlicon}
                iconBootstrap ={bootstrap}
                iconJS ={jsicon}
                />
                <Col2
                title={'Pokedex'}
                imagem={poke} 
                descript={'Integração com API , Html5, Css3 ,Javascript, Bootstrap.'}
                github = {'https://github.com/llBernardino/Pokedex'}
                Visit = {'https://pokedex-eta-henna.vercel.app'}
                iconCss ={cssicon}
                iconHtml ={htmlicon}
                iconBootstrap ={bootstrap}
                iconJS ={jsicon}
                /> 
                <Col3
                title={'Carrinho Compras'}
                imagem={car} 
                descript={'Integração com API , Html5, Css3 ,Javascript, React.'}
                github = {'https://github.com/llBernardino/projeto-carrinhos-de-compras-react'}
                Visit = {'https://projeto-carrinhos-de-compras-react.vercel.app'}
                iconCss ={cssicon}
                iconHtml ={htmlicon}
                iconJS ={jsicon}
                iconReact ={reacticon}
                /> 
                <Col2
                title={'Site Bem Viver'}
                imagem={bem} 
                descript={'Html5, Css3 , Bootstrap '}
                github = {'https://github.com/llBernardino/Bem_Viver_Landing_Page'}
                Visit = {''}
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

