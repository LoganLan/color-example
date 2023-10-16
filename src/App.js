import React from "react"
import './App.css';
import Button from "./components/Button"
import Box from "./components/Box"

export default function App() {
  const [colorData, setColorData] = React.useState({
    correctColor: "",
    wrongColorOne: "",
    wrongColorTwo: ""
  })
  const [answer, setAnswer] = React.useState(true)
  const [message, setMessage] = React.useState("")
  
  function generateColor() {
    const range = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
    let newColor = "#"
    for (let i = 0; i < 6; i++) {
      newColor+= (range[Math.floor(Math.random()*16)])
    }
    return newColor;
  }

  function handleButton(event) {
    //checks if user's answer was true or false 
    setAnswer ( event.target.name === `${colorData.correctColor}` ? true : false)
    
    //Create response message based on answer given
    setMessage (
      answer? `${event.target.name} was Correct!` : `${event.target.name} was Incorrect!`
    )

    //change color hex code options for next play
    setColorData(
      {
        correctColor: generateColor(),
        wrongColorOne: generateColor(),
        wrongColorTwo: generateColor()
      }
    )
  }

  //First Setup of color selection
  React.useEffect(() => {
    setColorData(
      {
        correctColor: generateColor(),
        wrongColorOne: generateColor(),
        wrongColorTwo: generateColor()
      }
    )
  }, [])


  //Page display to render
  return (
    <div className="app">
      <h1>GUESS THE HEX CODE</h1>
      
      <Box
        color = {colorData.correctColor}
      />
      
      <div className="app--buttons">  
        <Button
          name = {colorData.correctColor}
          color = {colorData.correctColor}
          handleButton = {handleButton}
        />
        <Button
          name = {colorData.wrongColorOne}
          color = {colorData.wrongColorOne}
          handleButton = {handleButton}
        />
        <Button
          name = {colorData.wrongColorTwo}
          color = {colorData.wrongColorTwo}
          handleButton = {handleButton}
        />
      </div>
      
      <h1>{message}</h1>
    </div>
  );
}