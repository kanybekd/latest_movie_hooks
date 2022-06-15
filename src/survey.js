import { startTransition, useState } from "react"
import { data } from "./surveyData"
import { Button, List } from "reactstrap"
function App() {
    console.log(data)
    const [pageNumber, setPage] = useState(0)
    const handleOptions = (type, text) => {
        if (type === "cb") {
            return (

                <div>
                    <input type="checkbox" />
                    {text}
                </div>
            )
        }
        if (type === "lb") {
            return <p>{text}</p>
        }
        if (type === "tb") {
            return (
                <div>

                    <input type="text" />
                    {text}
                </div>
            )
        }
        if (type === "rbil") {
            return (
                <div>

                    <input type="radio" />
                    {text}
                </div>
            )
        }

    }
    const handleArrayOptions = (questionOptions, q) => {
        return (
            <div>

                {q}
                {questionOptions.map(i => {
                    return (
                        <div>
                            {handleOptions("rbil", i.Description)}
                        </div>
                    )
                })}
            </div>
        )
    }
    return (
        <div>
            {
                [data[pageNumber]].map(item => {
                    return (
                        <div>
                            <h3>{item.Name}</   h3>
                            {item.Sections.map(i => {
                                return (
                                    <div>
                                        <p>
                                            {i.Label}
                                        </p>
                                        {
                                            i.Questions.map(question => {
                                                return (
                                                    <div>

                                                        {!Array.isArray(question.Options) ? handleOptions(question.UI, question.Label) : handleArrayOptions(question.Options, question.Label)}
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>

                                )
                            })}
                        </div>
                    )
                })
            }
            <Button disabled={!pageNumber ? true : false} onClick={() => setPage(pageNumber - 1)}>prev</Button>
            <Button disabled={pageNumber === data.length - 1 ? true : false} onClick={() => setPage(pageNumber + 1)}>next</Button>
        </div>
    )
}

export default App;


// react hooks
// use state, useEffect , useContext, useREducer, useRef
// react class components
// five star, tci tac Toe, amazon,
// life cylces
// redux
// JSON, es6, bootstrap, scss, material, reactstrap ,
// javascript algorithms - array manipulation,s tring manipulation,  [{key:[{salary:123123},{}]},{key:[{salary:123123},{}]}]
// listen silent
// pangram
// "A quick brown fox jumps over the lazy dog"
// "a-z"
// race car

// OOP-
// Data structres - linked List, stack, ques, trees







