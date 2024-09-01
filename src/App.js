import "./css/style.scss";
import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Skill from "./pages/Skill";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Project from "./pages/Project";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/project" element={<Project />} /> */}
        {/* <Route path="/products/:id" element={<ProductDetail />} /> */}
        {/* <Route path="" element={<Collection />} /> */}
      </Routes>
    </div>
  );
}

export default App;
