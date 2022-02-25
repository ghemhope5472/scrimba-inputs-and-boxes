import React from 'react'
import boxes from './boxes'
import Box from './components/Box'
import './App.css'
import Form from './components/Form'


function App() {

  const [squares, setSquares] = React.useState(boxes)

  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    address: ""
  })

  const handleSubmit=(event) =>{
    event.preventDefault()
    console.log(event)
} 



  const handleClick = (event) => {
    setFormData(prevState => {
      return {
        ...prevState,
        [event.target.name]: event.target.value
      }
    })
  }

  const toggle = (id) => {
    setSquares(prevSquares => {
      const newSquare = []
      for (var i = 0; i < prevSquares.length; i++) {
        const currentSquare = prevSquares[i]
        if (currentSquare.id === id) {
          const updateSquare = {
            ...currentSquare,
            on: !currentSquare.on
          }
          newSquare.push(updateSquare)
        } else {
          newSquare.push(currentSquare)
        }
      }
      return newSquare
    })
  }

  const elements = squares.map(element => {
    return (
      <Box
        key={element.id}
        on={element.on}
        id={element.id}
        toggle={toggle}
        handleSubmit={ (event) => handleSubmit}
      />
    )
  })


  return (
    <div>
      {elements}
      <Form
        handleClick={handleClick}
      />
    </div>
  )
}

export default App