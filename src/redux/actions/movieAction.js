import api from "../api";

const API_KEY = process.env.REACT_APP_MOVIES_API_KEY;

function getMovies() {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_MOVIES_REQUEST" });
      const popularMovieApi = api.get(
        `/movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`
      );
      const topRatedApi = api.get(
        `/movie/top_rated?api_key=${API_KEY}&language=ko-KR&page=1`
      );
      const upComingApi = api.get(
        `/movie/upcoming?api_key=${API_KEY}&language=ko-KR&page=1`
      );
      const genreApi = api.get(
        `/genre/movie/list?api_key=${API_KEY}&language=ko-KR`
      );

      let [popularMovies, topRatedMovies, upComingMovies, genreList] =
        await Promise.all([
          popularMovieApi,
          topRatedApi,
          upComingApi,
          genreApi,
        ]);

      dispatch({
        type: "GET_MOVIES_SUCCESS",
        payload: {
          popularMovies: popularMovies.data,
          topRatedMovies: topRatedMovies.data,
          upComingMovies: upComingMovies.data,
          genreList: genreList.data.genres,
        },
      });
    } catch (error) {
      dispatch({ type: "GET_MOVIES_FAILURE" });
    }
  };
}

function getDetails(id) {
  return async (dispatch) => {
    if (id) {
      dispatch({ type: "GET_MOVIES_REQUEST" });
      const detailMovieApi = await api.get(
        `movie/${id}?api_key=${API_KEY}&language=ko-KR`
      );

      dispatch({
        type: "GET_DETAILS_SUCCESS",
        payload: {
          detailMovies: detailMovieApi.data,
        },
      });
    } else {
      dispatch({ type: "GET_MOVIES_FAILURE" });
    }
  };
}

export const movieAction = { getMovies, getDetails };
