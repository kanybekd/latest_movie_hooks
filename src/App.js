
import { useState } from "react"
import * as actions from './actions'
import { Input, Button } from "reactstrap"
import store from "./store"
import Todo from "./todo"
function App() {
    const [inputVal, setInputVal] = useState("")
    const handleAddTodo = () => {
        setInputVal("")

        store.dispatch({
            type: actions.addTodo,
            data: {
                description: inputVal
            }
        })

    }
    console.log(store.getState())
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-12 col-sm-6">
                    <Input value={inputVal} onChange={(e) => setInputVal(e.target.value)}
                    />

                </div>
                <div className="col-12 col-sm-2">
                    <Button onClick={handleAddTodo}>Add</Button>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col">
                    <Todo />
                </div>
            </div>
        </div>
    )
}

export default App;


