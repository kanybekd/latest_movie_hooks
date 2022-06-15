import { input } from "./data"
import { FaFolderOpen } from "react-icons/fa"
import { FaRegFileAlt } from "react-icons/fa"
import "./App.css"
function App() {
    console.log(input)
    return (
        <div>
            <Helper data={input} />

        </div>
    )

}


function Helper({ data }) {
    return (
        <ul>
            {
                data.map(item => {
                    return item.type === "file" ? <li> <FaRegFileAlt />{item.name}</li> : <li><FaFolderOpen /> {item.name}   <Helper data={item.contents} /> </li>
                })
            }
        </ul>

    )
}

export default App;