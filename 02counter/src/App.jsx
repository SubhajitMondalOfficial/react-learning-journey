import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() { 

  let [counter, setCounter] = useState(10)


  // Interview topic ******
  const addValue = () => {
    if(counter < 20 ){

      // *It Will increase value by one however I called set counter 5 time
      // setCounter(counter + 1)
      // setCounter(counter + 1)
      // setCounter(counter + 1)
      // setCounter(counter + 1)
      // setCounter(counter + 1)

      // prevCounter is the latest state value that React passes to your updater function.
      // Can we update on the last updated value That why increase by the time we call
      setCounter((prevCounter) => prevCounter + 1)
      setCounter((prevCounter) => prevCounter + 1)
      setCounter((prevCounter) => prevCounter + 1)
      setCounter((prevCounter) => prevCounter + 1)
      setCounter((prevCounter) => prevCounter + 1)
    }  
  }

  const removeValue = () => {
    if(counter >= 1){
      // setCounter(counter - 1)
      // setCounter(counter - 1)
      // setCounter(counter - 1)
      // setCounter(counter - 1)
      // setCounter(counter - 1)

      setCounter(prevCounter => prevCounter - 1)
      setCounter(prevCounter => prevCounter - 1)
      setCounter(prevCounter => prevCounter - 1)
      setCounter(prevCounter => prevCounter - 1)
      setCounter(prevCounter => prevCounter - 1)
    } 
  }
  

  return (
    <> 
        <h1>SUBHAJIT MONDAL</h1>
        <h4>Your Counter Is: {counter}</h4>
        <p>Footer: {counter}</p>
        <button onClick={addValue}  disabled={counter >= 20}>Add Count</button>
        <br />
        <button onClick={removeValue} disabled={counter <= 1} >Remove Vlue</button>
        <p>Count1 {counter}</p>
        <p>Count2 {counter}</p>
        <p>Count3 {counter}</p>
        <p>Count4 {counter}</p>
    </>
  )
}

export default App
