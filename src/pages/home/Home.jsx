import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Article from "../../components/article/Article";
import axios from "axios";
import { Link } from "react-router-dom";
import Loding from "../../components/loding/Loding";

function Home() {
  const [articles, setArticle] = useState([]);
  const [isLoding, setIsLoding] = useState(false);
  useEffect(() => {
    setIsLoding(true);
    axios
      .get("http://localhost:8000/articles")
      .then((result) => {
        setArticle(result.data);
        setIsLoding(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoding(false);
      });
  }, []);
  return (
    <div className="">
      <Navbar />
      <div className="max-w-[1400px] mx-auto my-12">
        <h1 className="my-14 font-bold mx-4 text-3xl">Article</h1>
        {isLoding ? (
          <Loding />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 mt-8 mx-4">
            {articles.map((article) => (
              <Link to={`/article/${article.id}`}>
                <Article key={article.id} article={article} />
              </Link>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
