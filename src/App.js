import React, {useState} from "react"
import './App.css';
import Group from './Group'

const HelloWorld = ({newProp}) => {
  return(
  <div className="section">
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
    <div className="container">
    <HelloWorld newProp={newProp}/>
    <button onClick={sentenceFunction}>Click Me</button>
    <Group />
    </div>
  );
}

export default App;
