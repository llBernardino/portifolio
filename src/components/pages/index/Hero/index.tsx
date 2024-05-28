import React from 'react';
import { HeroTypes } from './types'
import {
    Content,BackgroundHero, Boxtext, Figure, H1, Subtext,Heros,
    SubBox,
    Img
  } from './style.ts'
import Container from '../../../layout/Container/index.tsx';
import '../../../../App.css';
  
export const Hero = (props: HeroTypes) => {
  return (
    <Content>
      <BackgroundHero>
        <Container>
          <Heros>
            <Boxtext className='select' data-hidden-class="hidden">
              <H1>Frontend<br/>Developer.</H1>
              <Subtext>Gosto de criar produtos front-end sólidos e escaláveis ​​com ótimas experiências de usuário.</Subtext>
              <SubBox>
                <Subtext>Altamente qualificado em aprimoramento progressivo, sistemas de design e engenharia de UI.</Subtext>
                <Subtext>Experiência comprovada na construção de produtos de sucesso para clientes de todo o brasil</Subtext>
              </SubBox>
            </Boxtext>
            <Figure className='select' data-hidden-class="hidden"><Img src={props.perfil} alt='PERFIL' /></Figure>
          </Heros>
        </Container>
      </BackgroundHero>
    </Content>
  );
}