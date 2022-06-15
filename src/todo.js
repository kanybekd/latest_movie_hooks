import { useState } from "react"
import store from "./reduxTodo/store"
import { Button } from "reactstrap"
import * as actions from "./reduxTodo/actions"
const Todo = () => {
    const [state, setState] = useState(false)
    const data = store.getState()
    const handleDelete = (todoId) => {
        setState(!state)
        store.dispatch({
            type: actions.removeTodo,
            id: todoId
        })

    }
    const handleComplete = (todoId) => {
        setState(!state)
        store.dispatch({
            type: actions.markAsCompleteTodo,
            id: todoId
        })

    }
    return (
        <div>
            {
                data.map(todo => {
                    return (
                        <div>
                            <span style={{ fontSize: "2rem", marginRight: "10px", color: todo.completed ? "green" : "" }}>
                                {todo.description}
                            </span>
                            <Button color="danger" onClick={() => handleDelete(todo.id)}>delete</Button>
                            <Button color="success" onClick={() => handleComplete(todo.id)}>mark as complete</Button>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Todo;