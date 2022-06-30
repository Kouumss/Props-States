import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./components/Button/Buttons";
import { useState } from "react";
import "./App.css";

let pageActuelle = "AKEUIL";
let element = <div className="batman">LOOK THIS DIV !</div>



function App() {

  const [showDiv1, hide1] = useStateToHide()

  function useStateToHide() {

    const [showDiv1, setShowdiv] = useState(false)
    const hide1 = () => setShowdiv(!showDiv1)
    
        return (
    
            [showDiv1, hide1]
        );
    };

  /////// POUR AFFICHER SUR LE PROPS DANS LA CONSOLE

  function fnNavParent(destination) {
    pageActuelle = destination;
    console.log(pageActuelle);
  }


  return (
    <div className="App bg-light">

      <Button fnNav={fnNavParent} txt="Accueil" />
      <Button fnNav={fnNavParent} txt="Gallerie" />
      <Button fnNav={fnNavParent} txt="Contact" />

      <div className="showDiv">
        <button onClick={hide1}> Clic To Show Div !</button>
        {showDiv1 && element}
      </div>
      
      
    </div>
  );
}

export default App;  
    

