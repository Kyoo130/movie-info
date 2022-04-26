import "./App.css";
import { Routes, Route } from "react-router-dom";
import {Home, MovieDetail, Movies} from "./pages";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
