import "./App.css";
import { Routes, Route } from "react-router-dom";
import {Home, Detail, Movies, Search} from "./pages";
import { Footer, Header } from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<Detail />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
