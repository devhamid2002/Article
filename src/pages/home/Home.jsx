import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Article from "../../components/article/Article";
import axios from "axios";
import { Link } from "react-router-dom";
import Loding from "../../components/loding/Loding";

function Home() {
  // Definition State
  const [articles, setArticle] = useState([]);
  const [isLoding, setIsLoding] = useState(false);
  useEffect(() => {
    // API Call here

    // setIsLoding(true);
    // axios
    //   .get("http://localhost:8000/articles")
    //   .then((result) => {
    //     setArticle(result.data);
    //     setIsLoding(false);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     setIsLoding(false);
    //   });
    setIsLoding(true);
    setArticle([
      {
        id: 1,
        imageUrl: "",
        title: "Noteworthy technology acquisitions 2021",
        summary:
          "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
        readingTime: "5",
        author: "Hamidreza Yavarzadeh",
        date: "May 01,2024",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit risus et arcu facilisis euismod. In tristique pellentesque lectus, vitae molestie mi feugiat efficitur. Nullam varius ornare quam a faucibus. Maecenas blandit a metus vitae mollis. Curabitur pellentesque massa nec lacus posuere venenatis. Vestibulum risus mauris, sollicitudin posuere sollicitudin sit amet, sodales euismod mi. Nullam maximus nibh nec nulla tincidunt gravida. Nulla tempus hendrerit libero facilisis efficitur. Maecenas laoreet ipsum eleifend tortor varius maximus. Phasellus quis pharetra metus. Cras venenatis eros eget arcu tristique aliquet. Praesent lectus nibh, fringilla vel tincidunt porta, molestie vitae sem. Donec vitae risus at tortor dignissim rutrum quis id magna.",
      },
      {
        id: 2,
        imageUrl: "",
        title: "Noteworthy technology acquisitions 2021",
        summary:
          "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
        readingTime: "4",
        author: "Alireza seif",
        date: "May 01,2024",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit risus et arcu facilisis euismod. In tristique pellentesque lectus, vitae molestie mi feugiat efficitur. Nullam varius ornare quam a faucibus. Maecenas blandit a metus vitae mollis. Curabitur pellentesque massa nec lacus posuere venenatis. Vestibulum risus mauris, sollicitudin posuere sollicitudin sit amet, sodales euismod mi. Nullam maximus nibh nec nulla tincidunt gravida. Nulla tempus hendrerit libero facilisis efficitur. Maecenas laoreet ipsum eleifend tortor varius maximus. Phasellus quis pharetra metus. Cras venenatis eros eget arcu tristique aliquet. Praesent lectus nibh, fringilla vel tincidunt porta, molestie vitae sem. Donec vitae risus at tortor dignissim rutrum quis id magna.",
      },
      {
        id: 3,
        imageUrl: "",
        title: "Noteworthy technology acquisitions 2021",
        summary:
          "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
        readingTime: "2",
        author: "Mohammadreza hashempor",
        date: "May 01,2024",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit risus et arcu facilisis euismod. In tristique pellentesque lectus, vitae molestie mi feugiat efficitur. Nullam varius ornare quam a faucibus. Maecenas blandit a metus vitae mollis. Curabitur pellentesque massa nec lacus posuere venenatis. Vestibulum risus mauris, sollicitudin posuere sollicitudin sit amet, sodales euismod mi. Nullam maximus nibh nec nulla tincidunt gravida. Nulla tempus hendrerit libero facilisis efficitur. Maecenas laoreet ipsum eleifend tortor varius maximus. Phasellus quis pharetra metus. Cras venenatis eros eget arcu tristique aliquet. Praesent lectus nibh, fringilla vel tincidunt porta, molestie vitae sem. Donec vitae risus at tortor dignissim rutrum quis id magna.",
      },
      {
        id: 4,
        imageUrl: "",
        title: "Noteworthy technology acquisitions 2021",
        summary:
          "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
        readingTime: "3",
        author: "Hamed malekmohammadi",
        date: "May 01,2024",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit risus et arcu facilisis euismod. In tristique pellentesque lectus, vitae molestie mi feugiat efficitur. Nullam varius ornare quam a faucibus. Maecenas blandit a metus vitae mollis. Curabitur pellentesque massa nec lacus posuere venenatis. Vestibulum risus mauris, sollicitudin posuere sollicitudin sit amet, sodales euismod mi. Nullam maximus nibh nec nulla tincidunt gravida. Nulla tempus hendrerit libero facilisis efficitur. Maecenas laoreet ipsum eleifend tortor varius maximus. Phasellus quis pharetra metus. Cras venenatis eros eget arcu tristique aliquet. Praesent lectus nibh, fringilla vel tincidunt porta, molestie vitae sem. Donec vitae risus at tortor dignissim rutrum quis id magna.",
      },
      {
        id: 5,
        imageUrl: "",
        title: "Noteworthy technology acquisitions 2021",
        summary:
          "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
        readingTime: "5",
        author: "Hamidreza Yavarzadeh",
        date: "May 01,2024",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit risus et arcu facilisis euismod. In tristique pellentesque lectus, vitae molestie mi feugiat efficitur. Nullam varius ornare quam a faucibus. Maecenas blandit a metus vitae mollis. Curabitur pellentesque massa nec lacus posuere venenatis. Vestibulum risus mauris, sollicitudin posuere sollicitudin sit amet, sodales euismod mi. Nullam maximus nibh nec nulla tincidunt gravida. Nulla tempus hendrerit libero facilisis efficitur. Maecenas laoreet ipsum eleifend tortor varius maximus. Phasellus quis pharetra metus. Cras venenatis eros eget arcu tristique aliquet. Praesent lectus nibh, fringilla vel tincidunt porta, molestie vitae sem. Donec vitae risus at tortor dignissim rutrum quis id magna.",
      },
      {
        id: 6,
        imageUrl: "",
        title: "Noteworthy technology acquisitions 2021",
        summary:
          "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
        readingTime: "4",
        author: "Alireza seif",
        date: "May 01,2024",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit risus et arcu facilisis euismod. In tristique pellentesque lectus, vitae molestie mi feugiat efficitur. Nullam varius ornare quam a faucibus. Maecenas blandit a metus vitae mollis. Curabitur pellentesque massa nec lacus posuere venenatis. Vestibulum risus mauris, sollicitudin posuere sollicitudin sit amet, sodales euismod mi. Nullam maximus nibh nec nulla tincidunt gravida. Nulla tempus hendrerit libero facilisis efficitur. Maecenas laoreet ipsum eleifend tortor varius maximus. Phasellus quis pharetra metus. Cras venenatis eros eget arcu tristique aliquet. Praesent lectus nibh, fringilla vel tincidunt porta, molestie vitae sem. Donec vitae risus at tortor dignissim rutrum quis id magna.",
      },
      {
        id: 7,
        imageUrl: "",
        title: "Noteworthy technology acquisitions 2021",
        summary:
          "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
        readingTime: "2",
        author: "Mohammadreza hashempor",
        date: "May 01,2024",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit risus et arcu facilisis euismod. In tristique pellentesque lectus, vitae molestie mi feugiat efficitur. Nullam varius ornare quam a faucibus. Maecenas blandit a metus vitae mollis. Curabitur pellentesque massa nec lacus posuere venenatis. Vestibulum risus mauris, sollicitudin posuere sollicitudin sit amet, sodales euismod mi. Nullam maximus nibh nec nulla tincidunt gravida. Nulla tempus hendrerit libero facilisis efficitur. Maecenas laoreet ipsum eleifend tortor varius maximus. Phasellus quis pharetra metus. Cras venenatis eros eget arcu tristique aliquet. Praesent lectus nibh, fringilla vel tincidunt porta, molestie vitae sem. Donec vitae risus at tortor dignissim rutrum quis id magna.",
      },
      {
        id: 8,
        imageUrl: "",
        title: "Noteworthy technology acquisitions 2021",
        summary:
          "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
        readingTime: "3",
        author: "Hamed malekmohammadi",
        date: "May 01,2024",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit risus et arcu facilisis euismod. In tristique pellentesque lectus, vitae molestie mi feugiat efficitur. Nullam varius ornare quam a faucibus. Maecenas blandit a metus vitae mollis. Curabitur pellentesque massa nec lacus posuere venenatis. Vestibulum risus mauris, sollicitudin posuere sollicitudin sit amet, sodales euismod mi. Nullam maximus nibh nec nulla tincidunt gravida. Nulla tempus hendrerit libero facilisis efficitur. Maecenas laoreet ipsum eleifend tortor varius maximus. Phasellus quis pharetra metus. Cras venenatis eros eget arcu tristique aliquet. Praesent lectus nibh, fringilla vel tincidunt porta, molestie vitae sem. Donec vitae risus at tortor dignissim rutrum quis id magna.",
      },
    ]);
    setIsLoding(false);
  }, []);
  return (
    <div className="">
      {/* Navbar Cammponent */}
      <Navbar />
      {/* Main */}
      <div className="max-w-[1400px] mx-auto my-12">
        <h1 className="my-14 font-bold mx-4 text-3xl">Article</h1>
        {/* Spinner Loding */}
        {isLoding ? (
          <Loding />
        ) : (
          // Articles Camponent
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 mt-8 mx-4">
            {articles.map((article) => (
              <Link to={`/article/${article.id}`}>
                <Article key={article.id} article={article} />
              </Link>
            ))}
          </div>
        )}
      </div>
      {/* Footer Camponent */}
      <Footer />
    </div>
  );
}

export default Home;
