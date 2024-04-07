import './App.css';
import {Hero} from './components/pages/index/Hero/index.tsx';
import {Page} from './components/pages/index/styles.ts';
import Profile from './components/pages/img/perfil.jpg' 
function App() {
  const perfil = () => `url('${Profile}')`
  return (
    <div className="App">
      <Page>
        
        <Hero name = "Frontend Developer." perfil = {Profile} />
        
      </Page>
    </div>
  );
}

export default App;
