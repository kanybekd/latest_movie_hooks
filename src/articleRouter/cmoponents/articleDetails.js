import React from 'react'
import { useParams } from "react-router-dom"
import articleData from "./data"
import { Link } from "react-router-dom"
function ArticleDetails({ users }) {
    const url = useParams()
    const filtered = articleData.filter(article => article.name === url.name)[0]
    const restOfTheArticles = articleData.filter(article => article.name !== url.name)
    return (
        <div>
            <div>

                {
                    filtered.contents[0].props.children
                }
            </div>
            <br />
            <h4>People also liked these articles.....</h4>
            <div>
                {
                    restOfTheArticles.map(article => {
                        return (

                            <div>
                                <Link to={`/article-list/${article.name}`}>
                                    <h6>{article.title}</h6>
                                </Link>
                                <p>{article.contents[0].props.children.slice(0, 100)}.....</p>
                            </div>
                        )
                    })
                }

            </div>
            <h5>Currently active readers:</h5>
            <div>
                {
                    users.map(user => {
                        return (
                            <div>{user.name}</div>
                        )
                    })

                }
            </div>
        </div>
    )
}

export default ArticleDetails