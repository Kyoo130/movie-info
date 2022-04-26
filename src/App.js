import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from "react-router-dom";
import {Home, MovieDetail, Movies} from "./pages";
import {Navigation} from "./components";


function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
