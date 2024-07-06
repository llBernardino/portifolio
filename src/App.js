import './App.css';
import { Hero } from './components/pages/index/Hero/Hero.tsx';
import {About} from './components/pages/index/About/index.tsx';
import {Page} from './components/pages/index/styles.ts';
import Profile from './components/pages/img/perfil.jpg'
import pcanime from './components/pages/img/pcanime.gif'  
import {Project} from './components/pages/index/Project/index.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './animations/animations.ts';

export const App = () => {
  return (
    <div className="App">
      <Page>
        <Hero name = "Frontend Developer." perfil = {Profile} />
        <About name = "Frontend Developer." perfil = {pcanime} />
        <Project />
      </Page>
    </div>
  );
}

