import "./App.css";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/login/login";
import Register from "./pages/register/register";
import ProjectItem from "./pages/project-item/ProjectItem";
import AddProject from "./pages/add-project/AddProject";
import AddNews from "./pages/add-news/AddNews";
import MainContainer from "./pages/main-container/MainContainer";
import NewsItem from "./pages/news-item/NewsItem";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<MainContainer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add" element={<AddProject />} />
        <Route path="/addNews" element={<AddNews />} />
        <Route path="/project/:id" element={<ProjectItem />} />
        <Route path="/news/:id" element={<NewsItem />} />
      </Routes>
    </div>
  );
}

export default App;
