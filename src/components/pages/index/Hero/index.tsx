import React from 'react';
import { HeroTypes } from './types'
import {
    Content,BackgroundHero, Boxtext, Figure, H1, Subtext,Heros,
    SubBox,
    Img,Contacts
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
                <Subtext>Experiência comprovada na construção de produtos de sucesso para clientes de todo o Brasil.</Subtext>
              </SubBox>
              <Contacts className='mt-4'>
                <a className='mx-2 ' href="https://www.linkedin.com/in/cauã-bernardino-lima-73413b22a/" rel='noreferrer' target="_blank"><img alt='LinkedIn' src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a>
                <a className='mx-2 ' href="https://github.com/llBernardino" target="_blank" rel='noreferrer'><img alt='github' src="https://img.shields.io/badge/Github-black?style=for-the-badge&logo=github&logoColor=white" /></a>
                <a className='mx-2 ' href = "mailto:cauaberrnardinolima@gmail.com" target="_blank" rel='noreferrer' ><img alt='Gmail' src="https://img.shields.io/badge/Gmail-white?style=for-the-badge&logo=gmail&logoColor=red" /></a>
                <a className='mx-2 ' href="https://contate.me/devcaua" target="_blank" rel='noreferrer'><img alt='whatsapp' src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" /></a>
              </Contacts>
            </Boxtext>
            <Figure className='select' data-hidden-class="hidden"><Img  src={props.perfil} alt='PERFIL' /></Figure>
          </Heros>
        </Container>
      </BackgroundHero>
    </Content>
  );
}