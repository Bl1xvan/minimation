import React, {useState} from 'react'
import {useSpring, animated as a} from 'react-spring'
import './SlideIn.css'

const SlideIn = ({children, isToggled}) => {

    const [singleAnimation, setSingleAnimation] = useState(false)
    const singleProp = {
        marginTop: singleAnimation ? 150 : 0
    }
    const animatedProps = useSpring({
        marginTop: 0,
        config: {mass: 1, tension: 150, friction: 10}
    })

    return(
        <>
        <a.div id="slide-in" className="section" style={isToggled ? {...animatedProps} : {...singleProp}}>
            {children}
        </a.div>
        <button onClick={()=>{setSingleAnimation(!singleAnimation)}}>Click Me!</button>
        </>
    )
}

export default SlideIn