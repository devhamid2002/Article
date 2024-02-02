import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import axios from "axios";

function CreatArticle() {
  const [article, setArticle] = useState({
    Author: "",
    Title: "",
    Date: "",
    ReadTime: "",
    Summary: "",
    Content: "",
  });
  const handleChangeArticle = (e) => {
    setArticle((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleChangeTextarea = (e) => {
    setArticle((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handeleCreatArticle = (e) => {
    axios.post("http://localhost:8000/articles", {
      id: 5,
      imageUrl: "",
      title: article.Title,
      summary: article.Summary,
      readingTime: article.ReadTime,
      author: article.Author,
      date: article.Date,
      content: article.Content,
    });
  };
  return (
    <div>
      <Navbar />
      <section class="py-1">
        <div class="w-full lg:w-8/12 px-4 mx-auto mt-6">
          <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div class="rounded-t bg-white mb-0 px-6 py-6">
              <div class="text-center flex justify-between">
                <h6 class="text-blueGray-700 text-xl font-bold">
                  CREATE ARTICLE
                </h6>
              </div>
            </div>
            <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form>
                <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  User Information
                </h6>
                <div class="flex flex-wrap">
                  <div class="w-full px-4">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        Author
                      </label>
                      <input
                        type="text"
                        onChange={handleChangeArticle}
                        name="Author"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>
                </div>

                <hr class="mt-6 border-b-1 border-blueGray-300" />

                <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  ARTICLE Information
                </h6>
                <div class="flex flex-wrap">
                  <div class="w-full lg:w-12/12 px-4">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        Title
                      </label>
                      <input
                        type="text"
                        onChange={handleChangeArticle}
                        name="Title"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        Date
                      </label>
                      <input
                        type="text"
                        onChange={handleChangeArticle}
                        name="Date"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        Read Time
                      </label>
                      <input
                        type="text"
                        onChange={handleChangeArticle}
                        name="ReadTime"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>
                </div>
                <div class="w-full lg:w-12/12 px-4">
                  <div class="relative w-full mb-3">
                    <label class="block mb-2 text-sm font-medium text-gray-900 ">
                      Upload file
                    </label>
                    <input
                      class="block w-full px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none "
                      name="ImageArticle"
                      type="file"
                    />
                    <div class="mt-1 text-sm text-gray-500">
                      Please enter the photo of your article in this section.
                      (PNG, JPG or JPEG)
                    </div>
                  </div>
                </div>
                <hr class="mt-6 border-b-1 border-blueGray-300" />

                <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Content Information
                </h6>
                <div class="flex flex-wrap">
                  <div class="w-full lg:w-12/12 px-4">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        Summary Article
                      </label>
                      <textarea
                        type="text"
                        name="Summary"
                        onChange={handleChangeTextarea}
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        rows="4"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div class="flex flex-wrap">
                  <div class="w-full lg:w-12/12 px-4">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        Content Article
                      </label>
                      <textarea
                        type="text"
                        name="Content"
                        onChange={handleChangeTextarea}
                        class="border-0 px-3 py-3 mb-10 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        rows="8"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <button
                  class="absolute bg-pink-500 text-white bottom-0 right-0 active:bg-pink-600 font-bold uppercase text-xs px-6 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none mr-14 mb-4 ease-linear transition-all duration-150"
                  type="submit"
                  onClick={handeleCreatArticle}
                >
                  CREATE ARTICLE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default CreatArticle;
