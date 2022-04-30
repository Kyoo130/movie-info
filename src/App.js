import "./App.css";
import { Routes, Route } from "react-router-dom";
import {Home, Detail, Movies } from "./pages";
import {Footer, Header} from "./components";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
