import About from "./pages/about/About";
import Articelpage from "./pages/article page/Articelpage";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/article/:id" element={<Articelpage />} />
      </Routes>
    </div>
  );
}

export default App;
