import { useState } from "react";
function App2() {
    const [counter, setC] = useState(0)

    const handleIncrement = () => {
        if (counter < 20) {

            setC(counter + 1)
        }
    }
    const handleDecrement = () => {
        if (counter) {

            setC(counter - 1)
        }

    }
    const reset = () => {
        setC(0)

    }
    const decideColor = (counter) => {
        if (counter < 10) {
            return "red"
        } else if (counter === 10) {
            return "blue"
        }
        else {
            return "green"
        }
    }
    return (
        <div>
            {/* <h1 style={{ color: decideColor(counter) }}>counter:{counter}</h1> */}
            <h1 style={{ color: counter < 10 ? "red" : counter === 10 ? "blue" : "green" }}>counter:{counter}</h1>
            <button onClick={handleIncrement}>inc</button>
            <button onClick={handleDecrement}>reset</button>
            <button onClick={reset}>dec</button>
        </div>
    )

}
export default App2