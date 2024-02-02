import NotFound from "./pages/404/NotFound";
import About from "./pages/about/About";
import Articelpage from "./pages/article page/Articlepage";
import CreatArticle from "./pages/creactpage/CreatArticle";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Signup from "./pages/sign up/Signup";
import Services from "./pages/services/Services";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Sign-up" element={<Signup />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/article/:id" element={<Articelpage />} />
        <Route path="/CreatArticle" element={<CreatArticle />} />
      </Routes>
    </div>
  );
}

export default App;
