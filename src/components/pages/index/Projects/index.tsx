import React from 'react';
import { ProjectsTypes } from './types'
import {
    Content,BackgroundProjects, Boxtext, Figure, H1, Subtext,Projectss,
    SubBox,
    Img
  } from './style.ts'
import Container from '../../../layout/Container/index.tsx';

  
  export const Projects = (props: ProjectsTypes) => {

    return (
      <Content>
        <BackgroundProjects>
          <Container>
            <Projectss>
            <H1>PROJECTS</H1>
              <Boxtext>
                
              </Boxtext>
            </Projectss>
          </Container>
        </BackgroundProjects>
    </Content>
      
    );
  }
  export default Projects


