import React, {useState} from "react"
import './App.css';
import Child from './component/Child'

const HelloWorld = ({newProp}) => {
  return(
  <div className="container">
  <h1>Hello World! {newProp}</h1>
  </div>
  )
}

function App() {

  const [newProp, setNewProp] = useState("I'm a prop!")
  const [clicked, setClicked] = useState(false);
  const switchSentence = clicked ? `I'm a prop` : `I'm a changed prop`;
  const sentenceFunction = () =>{
    setClicked(!clicked)
    setNewProp(switchSentence)
  }



  return (
    <>
    <HelloWorld newProp={newProp}/>
    <button onClick={sentenceFunction}>Click Me</button>
    <Child />
    </>
  );
}

export default App;
