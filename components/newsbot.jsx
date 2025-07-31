import { useEffect, useState } from "react"
import Newsitem from "./newsitem"
import { useContext } from "react";
import { ThemContext } from "../src/themecontex";
function NewsBoard({ category }) {
    const [articles, setArticles] = useState([])
    const { t, handleonclick } = useContext(ThemContext);
    useEffect(() => {
        fetchNews()
    }, [category])
    const fetchNews = async () => {
        try {
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
            const res = await fetch(url)
            const data = await res.json()
            setArticles(data.articles)

        } catch (error) {
            console.error("Error fetching news:", error)
        }
    }
    return (
        <div className="container py-5" style={{ fontFamily: "'Poppins', sans-serif" }}>
            <h2 className={`text-center fw-semibold mb-5 ${t === "dark" ? "text-white" : "text-dark"}`}>
                Top News in {category}
            </h2>
            <div className="row justify-content-center g-4">
                {articles.map((news, index) => (
                    <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
                        <Newsitem
                            title={news.title}
                            description={news.description}
                            src={news.urlToImage}
                            url={news.url}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NewsBoard
