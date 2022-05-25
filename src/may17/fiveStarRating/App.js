
import { useState } from "react";
import "./App.css"
function App() {
    const arr = [1, 2, 3, 4, 5]
    const [position, setPosition] = useState(-1)
    const [flag, setFlag] = useState(false)
    const handleClick = () => {
        setFlag(true)
    }
    const handleMouseOver = (ind) => {
        setPosition(ind)
        setFlag(false)
        // console.log(ind)
    }
    const handleMouseLeave = () => {
        if (!flag) {
            setPosition(-1)
        }
    }
    return (
        <div className="App">
            {
                arr.map((item, i) => {
                    let active = position >= i ? "active" : ""
                    return (
                        <div className={`box ${active}`}
                            onClick={handleClick}
                            onMouseOver={() => handleMouseOver(i)}
                            onMouseLeave={handleMouseLeave} >
                            {item}
                        </div>
                    )
                })
            }

        </div>
    )
}

export default App;