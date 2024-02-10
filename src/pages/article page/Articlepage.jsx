import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useParams } from "react-router";
import img from "./../../assets/images/image.webp";
import { FaUserPen, FaRegClock } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import axios from "axios";
import Loding from "../../components/loding/Loding";

function Articelpage() {
  // Definition State
  const [article, setArticle] = useState({});
  const [isLoding, setIsLoding] = useState(false);
  const params = useParams();
  // API Call
  useEffect(() => {
    setIsLoding(true);
    axios
      .get(`http://localhost:8000/articles/${params.id}`)
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
    <div>
      {/* Navbar Camponent */}
      <Navbar />
      {/* Main */}
      <div className="max-w-[1400px] mx-auto my-12">
        {isLoding ? (
          <Loding />
        ) : (
          <>
            {" "}
            {/* Img Article */}
            <img src={img} className="mx-auto" alt="" />
            <div className="flex justify-center my-6">
              {/* Author Article */}
              <div className="mx-8">
                <FaUserPen
                  className="inline-block pb-1 text-gray-500"
                  size={25}
                />
                <span className=" text-gray-500 px-2 font-bold">
                  {article.author}
                </span>
              </div>
              {/* Date Creat Article */}
              <div className="px-8 mx-8">
                <MdDateRange
                  className="inline-block pb-1 text-gray-500"
                  size={30}
                />
                <span className=" text-gray-500  px-2 font-bold">
                  {article.date}
                </span>
              </div>
              {/* ReadingTime Article*/}
              <div className="mx-8">
                <FaRegClock
                  className="inline-block pb-1 text-gray-500"
                  size={30}
                />
                <span className=" text-gray-500 px-2 font-bold">
                  {article.readingTime} <span>min read</span>
                </span>
              </div>
            </div>
            {/* Main Article */}
            <div>
              <h1 className="max-w-[1200px] my-6 mx-8 font-bold  text-3xl">
                {article.title}
              </h1>
              <p className="max-w-[1200px] my-6 mx-8 text-justify">
                {article.content}
              </p>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Articelpage;
