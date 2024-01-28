import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Article from "../../components/article/Article";

function Home() {
  //http://localhost:8000/articles
  let article = [
    {
      id: 1,
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0373/9041/8051/files/Gaming_Setup_1.jpg?v=1617349925",
      title: "Noteworthy technology acquisitions 2021",
      summary:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      id: 2,
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0373/9041/8051/files/Gaming_Setup_1.jpg?v=1617349925",
      title: "Noteworthy technology acquisitions 2021",
      summary:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      id: 3,
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0373/9041/8051/files/Gaming_Setup_1.jpg?v=1617349925",
      title: "Noteworthy technology acquisitions 2021",
      summary:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      id: 4,
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0373/9041/8051/files/Gaming_Setup_1.jpg?v=1617349925",
      title: "Noteworthy technology acquisitions 2021",
      summary:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="max-w-[1400px] mx-auto my-12">
        <h1 className="my-14">Article</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 mt-8 mx-auto">
          {article.map((article) => (
            <Article key={article.id} article={article} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
