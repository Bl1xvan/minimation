import React, {useState} from "react"
import { useSpring, animated as a } from "react-spring"

const HelloWorld = ({childProp}) => {
    const animatedProps = useSpring({
      from: {paddingTop: 0},
      paddingTop: 200,
      config:{mass: 1, tension: 150, friction: 10}
    })
    return(<a.h2 style={{...animatedProps}}>{childProp}</a.h2>)
  }
  
  function Child() {
  
    const[startAnimation, setStartAnimation] = useState(false)
 
  
    return (
    <div className="childcont">
      <HelloWorld childProp={"I am a child!"}/>
      <button onClick={()=> setStartAnimation(!startAnimation)}>Now Click Me!</button>
    </div> 
    );
  }

  export default Child