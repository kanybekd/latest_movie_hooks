import React from "react"
import NavBar from "./cmoponents/navBar";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import About from "./cmoponents/about"
import Home from "./cmoponents/home"
import Contacts from "./cmoponents/contacts"
import NotFoundPage from "./cmoponents/notFoundPage"
import ArticleList from "./cmoponents/articleList"
import ArticleDetails from "./cmoponents/articleDetails"

function App() {
    const [users, setUsers] = React.useState([])
    React.useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <BrowserRouter>
                        <NavBar />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contacts" element={<Contacts />} />
                            <Route path="*" element={<NotFoundPage />} />
                            <Route path="/article-list" element={<ArticleList />} />
                            <Route path="/article-list/:name" element={<ArticleDetails users={users} />} />
                        </Routes>
                    </BrowserRouter >
                </div>
            </div>
        </div>


    )
}

export default App;

