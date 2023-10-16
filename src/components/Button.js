import React from "react"

//creates button that displays guess option given through prop
export default function Button(props) {
    //randomizes flex order on each render
    let buttonOrder = Math.floor(Math.random() * 9);
    
    return(
        <button
            name={props.name}
            type="button"
            className="button"
            onClick={props.handleButton}
            style={
                {order: `${buttonOrder}`} 
            }
        >
        {props.color}
        </button>
    )
}