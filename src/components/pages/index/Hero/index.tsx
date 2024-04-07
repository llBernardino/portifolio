import React from 'react';
import { HeroTypes } from './types'
import {
    Content,BackgroundHero, Boxtext, Figure, H1, Subtext,Heros,
    SubBox,
    Img
  } from './style.ts'
import Container from '../../../layout/Container/index.tsx';

  
  export const Hero = (props: HeroTypes) => {

    return (
      <Content>
        <BackgroundHero>
          <Container>
            <Heros>
              <Boxtext>
                <H1>Frontend<br/>Developer.</H1>
                <Subtext>Gosto de criar produtos front-end sólidos e escaláveis ​​com<br/> ótimas experiências de usuário.</Subtext>
                <SubBox>
                  <Subtext>Altamente qualificado em aprimoramento<br/> progressivo, sistemas de design e<br/> engenharia de UI.</Subtext>
                  <Subtext>Experiência comprovada na construção<br/> de produtos de sucesso para clientes<br/> em vários países.</Subtext>
                </SubBox>
              </Boxtext>
              <Figure ><Img src={props.perfil} alt='PERFIL' width='300px;'/></Figure>
            </Heros>
            
          </Container>
        </BackgroundHero>
    </Content>
      
    );
  }
  export default Hero


