import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./components/Blog";
import Profile from "./components/Profile";
import Post1 from "./components/posts/Post1";
import "./App.css";

function App() {
  return (
    <div className="App w-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/post1" element={<Post1 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
