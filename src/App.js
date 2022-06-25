import React, {useState} from "react"
import './App.css';
import SlideIn from './component/SlideIn/SlideIn'
import Child from './component/Child/Child'

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
  const [startAnimation, setStartAnimation] = useState(false);
  const switchSentence = clicked ? `I'm a prop` : `I'm a changed prop`;
  const sentenceFunction = () =>{
    setClicked(!clicked)
    setNewProp(switchSentence)
  }




  return (
    <div className="container">
    <HelloWorld newProp={newProp}/>
    <button onClick={sentenceFunction}>Click Me</button>

    <SlideIn isToggled={startAnimation}>
    <Child text={"I'm a prop that likes to slide!"}/>
    </SlideIn>
    <button onClick={()=>{setStartAnimation(!startAnimation)}}>Toggle Button</button>
    </div>
  );
}

export default App;
