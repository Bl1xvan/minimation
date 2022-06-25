import {useSpring, animated as a} from 'react-spring'
import './SlideIn.css'

const SlideIn = ({children, isToggled}) => {

    const animatedProps = useSpring({
        marginTop: isToggled ? 150 : 0,
        config: {mass: 1, tension: 150, friction: 10}
    })
    return(
        <a.div id="slide-in" className="section" style={{...animatedProps}}>
            {children}
        </a.div>
    )
}

export default SlideIn