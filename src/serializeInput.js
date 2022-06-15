import { useState } from "react";
const App = () => {
    const [text, setText] = useState("")
    // const [data,setData]=useState([])
    const handleChange = (e) => {
        setText(e.target.value)

    }
    return (
        <div className="container">
            <div className="row">
                <div className="col col-sm-6 offset-3">
                    <input value={text} type="text" onChange={handleChange} />
                    {
                        text.split(" ").map(i => <div>  {i}    </div>)
                    }
                </div>
            </div>
        </div>

    )
}
export default App;