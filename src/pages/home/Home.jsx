import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Article from "../../components/article/Article";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  //http://localhost:8000/articles
  const [articles, setArticle] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/articles").then((result) => {
      setArticle(result.data);
    });
  }, []);
  return (
    <div>
      <Navbar />
      <div className="max-w-[1400px] mx-auto my-12">
        <h1 className="my-14">Article</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 mt-8 mx-auto">
          {articles.map((article) => (
            <Link to={`/article/${article.id}`}>
              <Article key={article.id} article={article} />
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
