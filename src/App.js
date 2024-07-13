import './App.css';
import { Hero } from './components/pages/index/Hero/Hero.tsx';
import {About} from './components/pages/index/About/index.tsx';
import {Page} from './components/pages/index/styles.ts';
import Profile from './components/pages/img/perfil.jpg'
import pcanime from './components/pages/img/pcanime.gif'  
import {Project} from './components/pages/index/Project/index.js';
import { Analytics } from "@vercel/analytics/react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './animations/animations.ts';
import './animations/cursoranimation.js';
import { useTranslation } from "react-i18next";
import "./components/pages/index/lang/i18n.js";
import { Box } from '@mui/material';
import { Buttons } from './components/pages/index/lang/buttons.js';
export const App = () => {
  
  const {t} = useTranslation();
  
  return (
    
    <div className="App" >
      <Page>
        <Buttons/>
        <Hero name = "Frontend Developer." perfil = {Profile}  title={t('hero.title')} textoone={t('hero.textoone')} textotwo={t('hero.textotwo')}/>
        <About name = "Frontend Developer." perfil = {pcanime} textfaculdade={t('about.textfaculdade')} textcurso={t('about.textcurso')} />
        <Project />
        <Analytics />
      </Page>
      
    </div>
  );
}

