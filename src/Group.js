import React, {useState} from "react"
import SlideIn from './SlideIn'
import Child from './Child'

const groupNames = [
    {
     name: "Jack",
     gender: "boy",
     bgcolor: "blue",
     fgcolor: "white"
    },
    {name: "Jill",
     gender: "girl",
    bgcolor: "pink",
    fgcolor: "black"}
]


const Group = () => {
    const [startAnimation, setStartAnimation] = useState(false);
    return(<>

    {groupNames.map(group=>{
        return(
            <div className="cheat" style={{backgroundColor: group.bgcolor, color: group.fgcolor }}>
                <SlideIn isToggled={startAnimation}>
                    <Child text={`${group.name} is a ${group.gender}`}/>
                </SlideIn>
            </div>
            )
        })}

        <button onClick={()=>{setStartAnimation(!startAnimation)}}>Toggle Button</button> 
        </>)  
}

export default Group