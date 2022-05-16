import logo from './logo.svg';
import './App.css';
import { Logo } from './Components/Logo/Logo';
import { Contact } from './Components/Button/Contact';

function App() {
  const nav={
    background:"black",
    display:"flex",
    color:"white",
    height:"60px",
      
 
  }

  let mid=["Services","Projects","About"]
 
  return (
    <div className="App">
    <div style={nav}>
    <Logo></Logo>

    <div style={{
           display:"flex" ,
           flex:"1",
           gap:" 5%",
           marginTop:"15px"
         }}>
    {
   
   mid.map((e)=>(
         <div >{e}</div>
       
     ))



 
   }

    </div>

      <Contact></Contact>
    </div>
    </div>
  );
}

export default App;
