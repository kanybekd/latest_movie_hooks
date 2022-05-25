import './App.css';
import { useState } from "react"
const App = () => {
  const [counterA, setA] = useState(0)
  const [counterB, setB] = useState(10)
  const [loggedIn, setLoggedIn] = useState("logged in ")
  function handleIncrement() {
    setA(counterA + 1)
  }
  const handleDecrement = () => {
    setB(counterB - 1)
  }
  const handleReset = () => {
    setB(0)
    setA(0)
  }
  const style = {
    width: "20%",
    marginLeft: "200px",
    border: "1px solid black"
  }
  const handleLoggedIn = (num) => {
    if (counterA > 10) {
      setLoggedIn("logged out")
    }
  }
  return (
    <div style={style}>
      <p>counter A:{counterA}</p>
      <p>counter B:{counterB}</p>
      <button onClick={handleIncrement}>increment counter A</button>
      <button onClick={handleDecrement}>decrement counter B</button>
      <button onClick={handleReset}>reset both counters</button>
      <h1>user :{counterA > 10 ? "logged out" : loggedIn}</h1>
      <button onClick={handleLoggedIn}>change Log in state</button>
    </div>
  )
}

export default App;
