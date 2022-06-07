import { useState } from "react";
import { Input, Button, FormGroup, Label } from "reactstrap";
import { nanoid } from "nanoid";
import DeleteIcon from '@mui/icons-material/Delete';
import "./App.css"
const App = () => {
    const [inputTask, setInputTask] = useState("") // gYM
    const [todoTask, setTodoTask] = useState([]) //Gym,
    const [completedCounter, setCompletedcounter] = useState(0) //Gym,
    const [page, setPage] = useState(0) //Gym,

    // console.log(inputTask)
    const handleAddTask = () => {
        if (!inputTask.trim()) {
            alert("task should not be empty")
            setInputTask("")
            return
        }

        for (let i of todoTask) {
            if (i.title.toLowerCase() === inputTask.toLowerCase()) {
                return
            }
        }

        let newObj = { title: inputTask, completed: false, id: nanoid() }
        let newTasksData = [newObj]
        for (let i in todoTask) {
            newTasksData.push(todoTask[i])

        }

        setTodoTask(newTasksData)
        // setTodoTask([inputTask,...todoTask])

        setInputTask("")
    }
    const handleDelete = (id) => {
        console.log(id)
        let newData = todoTask.filter(task => task.id !== id) //]

        setTodoTask(newData)

    }
    const handleCheckBox = (taskId, e) => {
        // console.log(e.target.checked)
        // console.log(taskId)

        let ind;
        for (let i in todoTask) {
            if (todoTask[i].id === taskId) {
                ind = i

            }
        }
        let newData = [...todoTask]
        newData[ind].completed = e.target.checked
        let counter = completedCounter //0
        if (e.target.checked) {
            counter++
        } else {
            counter--
        }



        // for (let i of newData) {
        //     if (i.completed) {
        //         completedCounter++
        //     }
        // }
        setCompletedcounter(counter)
        setTodoTask(newData)

    }
    const handlePrev = () => {
        if (page) {

            setPage(page - 1)
        }
    }
    const handleNext = () => {
        setPage(page + 1)

    }
    console.log(page)
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-4">
                    <div className="d-flex">
                        <div>
                            <Input
                                value={inputTask}
                                placeholder="add task todo.."
                                onChange={(e) => setInputTask(e.target.value)}
                            />
                        </div>
                        <div>
                            <Button onClick={handleAddTask}>add</Button>
                        </div>
                    </div>
                    <div>
                        <h4>completed {completedCounter}</h4>
                        <h4>to be done {todoTask.length - completedCounter}</h4>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-sm-4">
                    {
                        todoTask.slice(page * 4, page * 4 + 4).map((task, indexOfTask) => {
                            let lineThrough = task.completed ? "line-through" : ""
                            return (
                                <div className="border m-3 p-2">

                                    <FormGroup check key={task.id} className="d-flex justify-content-between">
                                        <Input type="checkbox" onChange={(e) => handleCheckBox(task.id, e)} />
                                        <Label check >
                                            <span className={lineThrough}>
                                                {task.title}
                                            </span>
                                        </Label>
                                        <DeleteIcon onClick={() => handleDelete(task.id)} />
                                    </FormGroup>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Button onClick={handlePrev} disabled={page ? false : true}>prev</Button>
                    <Button onClick={handleNext} disabled={page + 1 < Math.ceil(todoTask.length / 4) ? false : true} >next</Button>
                </div>
            </div>
        </div>
    )
}

export default App;


// .line-through{
//     text-decoration: line-through;
// }