import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { movieAction } from "../redux/actions/movieAction";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "../components";
import MovieDetail from "../components/MovieDetail";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { detailMovies, loading } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(movieAction.getDetails(id));
    dispatch(movieAction.getMovies());
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <MovieDetail movie={detailMovies} />
    </div>
  );
};

export default Detail;
