import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/actions/movieAction";
import { Banner, MovieSlide } from "../components";
import ClipLoader from "react-spinners/ClipLoader";
import styled from "styled-components";

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
    return (
      <LoadingCont>
        <ClipLoader color="#fff" loading={loading} size={150} />
      </LoadingCont>
    );
  }

  return (
    <div>
      <Banner movie={popularMovies.results[randomBanner()]} />
      <MovieList>
        <Title>인기있는 영화</Title>
        <MovieSlide movies={popularMovies} />
      </MovieList>
      <MovieList>
        <Title>개봉 예정 영화</Title>
        <MovieSlide movies={upComingMovies} />
      </MovieList>
      <MovieList>
        <Title>높은 평점 영화</Title>
        <MovieSlide movies={topRatedMovies} />
      </MovieList>
    </div>
  );
};

const MovieList = styled.div`
  margin: 4rem 0;
`;

const Title = styled.h2`
  margin: 0.8rem 0.2rem;
  font-weight: bold;
`;

const LoadingCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`

export default Home;
