import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Card from "./conponents/Card";

function App() {
  const [count, setCount] = useState(0);
 
  return (
    <>

    

      <Card
       username="Subhajit Mondal" 
       para = "Lorem ipsum dolor sit. id officiis omnis incidunt ipsum eius doloremque harum!" 
       btnText ="Come onn!!" 
       views="200" 
       image="https://i.pinimg.com/736x/78/b8/55/78b855b6a8288b12914b146831eb36d8.jpg" 
       isPremium={true}
       
       />

      <Card  
      username = "Chai aur Code" 
      para =" Hello my name is Shobho from West Bengal siuri birbhum" 
      views="500"  
      image="https://i.pinimg.com/736x/da/e7/d6/dae7d6ab8e2abd3e74d776a5fd49a6cb.jpg"
      isPremium={false}
      />

      
    </>
  );
}
 

export default App;
