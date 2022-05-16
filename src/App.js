import logo from './logo.svg';
import './App.css';
import { Logo } from './Components/Logo/Logo';
import { Links } from './Components/Links/Link';
import { Contact } from './Components/Button/Contact';

function App() {
  const nav={
    background:"black",
    display:"flex",
    color:"white",
    height:"60px",
      
 
  }
  return (
    <div className="App">
    <div style={nav}>
    <Logo></Logo>
      <Links></Links>
      <Contact></Contact>
    </div>
    </div>
  );
}

export default App;
