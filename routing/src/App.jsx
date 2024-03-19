import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import News from "./pages/News/News";
import NewsDetail from "./pages/NewsDetail/NewsDetail";
import PostDetail from "./pages/PostDetail/PostDetail";

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/posts/:id" element={<PostDetail />} />
          </Routes>
        </div>
      </main>

      <footer>
        <div className="container">
          <h1>Footer</h1>
        </div>
      </footer>
    </div>
  );
}

export default App;
