import React from "react"

//creates box that displays the color colorData.correctColor
export default function Box(props) {
    return (
        <div
        className = "box" 
        style = {{backgroundColor:`${props.color}`}}    
        ></div>
    )
}