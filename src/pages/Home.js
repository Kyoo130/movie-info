import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/actions/movieAction";
import { Banner } from "../components";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upComingMovies } = useSelector(
    (state) => state.movie
  );
  console.log("home", popularMovies);
  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  return (
    <div>
      {popularMovies.results && <Banner movie={popularMovies.results[3]} />}
    </div>
  );
};

export default Home;
