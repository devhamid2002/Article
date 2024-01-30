import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useParams } from "react-router";
import img from "./../../assets/images/image.webp";
import { FaUserPen, FaRegClock } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";

function Articelpage() {
  const params = useParams();
  return (
    <div>
      <Navbar />
      <div className="max-w-[1400px] mx-auto my-12">
        <img src={img} className="mx-auto" alt="" />
        <div className="flex justify-center my-6">
          <div className="">
            <FaUserPen className="inline-block text-gray-500" size={25} />
            <span className=" text-gray-500 px-2 font-bold">hamidrea</span>
          </div>
          <div className="px-8">
            <MdDateRange className="inline-block text-gray-500" size={25} />
            <span className=" text-gray-500  px-2 font-bold">May 01,2024</span>
          </div>
          <div>
            <FaRegClock className="inline-block text-gray-500" size={25} />
            <span className=" text-gray-500 px-2 font-bold">
              4 <span>min read</span>
            </span>
          </div>
        </div>
        <h1 className="max-w-[1200px] my-6 mx-8 font-bold  text-3xl">
          Noteworthy technology acquisitions 2021
        </h1>
        <p className="max-w-[1200px] my-6 mx-8 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          hendrerit risus et arcu facilisis euismod. In tristique pellentesque
          lectus, vitae molestie mi feugiat efficitur. Nullam varius ornare quam
          a faucibus. Maecenas blandit a metus vitae mollis. Curabitur
          pellentesque massa nec lacus posuere venenatis. Vestibulum risus
          mauris, sollicitudin posuere sollicitudin sit amet, sodales euismod
          mi. Nullam maximus nibh nec nulla tincidunt gravida. Nulla tempus
          hendrerit libero facilisis efficitur. Maecenas laoreet ipsum eleifend
          tortor varius maximus. Phasellus quis pharetra metus. Cras venenatis
          eros eget arcu tristique aliquet. Praesent lectus nibh, fringilla vel
          tincidunt porta, molestie vitae sem. Donec vitae risus at tortor
          dignissim rutrum quis id magna.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Articelpage;
