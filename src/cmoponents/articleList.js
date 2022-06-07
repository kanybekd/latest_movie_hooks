import React from 'react'
import articleData from "./data"
import { Link } from "react-router-dom"
function ArticleList() {
    // console.log(articleData)
    return (
        <div>

            {
                articleData.map(article => {
                    return (
                        <div>
                            <Link to={`/article-list/${article.name}`}>
                                {article.title}
                            </Link>
                        </div>
                    )
                })
            }


        </div>
    )
}

export default ArticleList