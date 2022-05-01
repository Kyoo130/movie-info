import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { movieAction } from "../redux/actions/movieAction";
import { useDispatch, useSelector } from "react-redux";
import {Loading, MovieCard} from "../components";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { detailMovies, loading } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(movieAction.getDetails(id));
    dispatch(movieAction.getMovies());
  }, []);

  if (loading) {
    return <Loading loading={loading} />;
  }

  return (
    <div>
      <MovieCard detail item={detailMovies} />
    </div>
  );
};

export default Detail;
