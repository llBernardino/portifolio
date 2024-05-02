import React, { useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import './stylebutton.css';
import {
 Content,BackgroundProject, Container, H1,
} from './style.ts'
import {
  Col1
 } from './col1.js'
 

export const Project = () => {

  return (
    <Content>
      <BackgroundProject>
          <Container>
              <H1 className="text-center">PROJECTS</H1>
              <Row className="justify-content-center d-flex w-100">
                <Col1
                title={'Site Oportunize'} 
                descript={'React.js Next.js Emotion Hooks TypeScript '}
                github = {'https://github.com/llBernardino/Oportunize'}
                online = {'https://oportunize.org'}
                />
                <Col1
                title={'Site Oportunize'} 
                descript={'React.js Next.js Emotion Hooks TypeScript '}
                github = {'https://github.com/llBernardino/Oportunize'}
                online = {'https://oportunize.org'}
                /> 
                <Col1
                title={'Site Oportunize'} 
                descript={'React.js Next.js Emotion Hooks TypeScript '}
                github = {'https://github.com/llBernardino/Oportunize'}
                online = {'https://oportunize.org'}
                /> 
                <Col1
                title={'Site Oportunize'} 
                descript={'React.js Next.js Emotion Hooks TypeScript '}
                github = {'https://github.com/llBernardino/Oportunize'}
                online = {'https://oportunize.org'}
                /> 
                <Col1
                title={'Site Oportunize'} 
                descript={'React.js Next.js Emotion Hooks TypeScript '}
                github = {'https://github.com/llBernardino/Oportunize'}
                online = {'https://oportunize.org'}
                />
                 <Col1
                title={'Site Oportunize'} 
                descript={'React.js Next.js Emotion Hooks TypeScript '}
                github = {'https://github.com/llBernardino/Oportunize'}
                online = {'https://oportunize.org'}
                />
                 <Col1
                title={'Site Oportunize'} 
                descript={'React.js Next.js Emotion Hooks TypeScript '}
                github = {'https://github.com/llBernardino/Oportunize'}
                online = {'https://oportunize.org'}
                />
                 <Col1
                title={'Site Oportunize'} 
                descript={'React.js Next.js Emotion Hooks TypeScript '}
                github = {'https://github.com/llBernardino/Oportunize'}
                online = {'https://oportunize.org'}
                />             
              </Row>
            </Container>
      </BackgroundProject>
    </Content>
    
  );
}
export default Project

