import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/actions/movieAction";
import { Banner, MovieSlide } from "../components";
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upComingMovies, loading } =
    useSelector((state) => state.movie);

  const randomBanner = () => {
    const randomNum = Math.floor(Math.random() * 10);
    return Number(randomNum);
  };

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  if (loading) {
    return <ClipLoader color="#fff" loading={loading} size={150} />;
  }

  return (
    <div>
      <Banner movie={popularMovies.results[randomBanner()]} />
      <h1>Popular Movies</h1>
      <MovieSlide movies={popularMovies} />
      <h1>Top Rated Movies</h1>
      <MovieSlide movies={topRatedMovies} />
      <h1>Upcoming Movies</h1>
      <MovieSlide movies={upComingMovies} />
    </div>
  );
};

export default Home;
