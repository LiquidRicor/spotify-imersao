import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Sidebar from './Sidebar/Sidebar';
import Vars from './Vars/Vars';
import Reset from './Reset/Reset';
import Main from './Main/Main';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import MediaQuery from './MediaQuery/MediaQuery';

// Adiciona todos os ícones sólidos ao library
library.add(fas)

function App() {
  return (
    <div>
      <Vars/>
      <Reset/>
      <Sidebar/>
      <Header/>
      <Main/>
      <Footer/>
      <MediaQuery/>
    </div>
  );
}
export default App;
