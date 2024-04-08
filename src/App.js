import './App.css';
import {Hero} from './components/pages/index/Hero/index.tsx';
import {About} from './components/pages/index/About/index.tsx';
import {Page} from './components/pages/index/styles.ts';
import Profile from './components/pages/img/perfil.jpg'
import pcanime from './components/pages/img/pcanime.gif'  
function App() {

  return (
    <div className="App">
      <Page>
        <Hero name = "Frontend Developer." perfil = {Profile} />
        <About name = "Frontend Developer." perfil = {pcanime} />
      </Page>
    </div>
  );
}

export default App;
