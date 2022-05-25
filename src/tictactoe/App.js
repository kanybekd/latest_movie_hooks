import { useEffect, useState } from "react";
import "./App.css"
const App = () => {
    const [cells, setCells] = useState([...Array(9).keys()])
    const [flag, setFlag] = useState(false)
    const [dataForX, setDataForX] = useState([])
    const [dataForO, setDataForO] = useState([])
    const [winner, setWinner] = useState("")
    // let arr = [0, "X", 2, "X", 4, 5, 6, 7, "O"]
    // arr[6] = "X"
    // arr[0] = "X"
    // arr[8] = "X"

    const results = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    const handleClick = (i) => {

        let newData = [...cells]
        // flag ? newData[i] = "O" : newData[i] = "X"
        if (!flag) {
            // cells[0]="X"

            newData[i] = "X"
            setDataForX([...dataForX, i])
            //["X",1,2,3,4,5]
        } else {
            newData[i] = "O"
            setDataForO([...dataForO, i])
        }
        setCells(newData)
        setFlag(!flag)
        // console.log(dataForX)
    }
    function longerStreaks(arr1, arr2) {
        let counter = 0
        for (let i of arr1) {
            if (arr2.includes(i)) {
                counter++
            }
        }
        return counter === 3 ? true : false
    }
    useEffect(() => {
        for (let i of results) {
            let joined = i.join("")
            if (dataForX.join("") === joined || longerStreaks(dataForX, i)) {
                console.log("X is a winner")
                setWinner("X won")
            }
            else if (dataForO.join("") === joined || longerStreaks(dataForO, i)) {
                console.log("O is a winner")
                setWinner("O won")
            }
        }
    }, [dataForX, dataForO])
    console.log(dataForX)
    return (
        <div className="container">
            <div className="row">
                {
                    cells.map((i, ind) => {
                        return (
                            <div className="col-sm-4  box" onClick={() => handleClick(ind)}>
                                {i}
                            </div>
                        )
                    })
                }
            </div>
            <div className="row">
                <div className="col">
                    {winner}
                </div>
            </div>
        </div>
    )
}

export default App;


// for firing subscriptions i.e fetching, can run functions based on state Chanhge,

// url.com/?gender=""&&country=""