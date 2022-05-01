let initialState = {
  popularMovies: {},
  topRatedMovies: {},
  upComingMovies: {},
  detailMovies: {},
  searchMovies: {},
  loading: true,
  genreList: {},
};

function movieReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_MOVIES_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "GET_MOVIES_SUCCESS":
      return {
        ...state,
        popularMovies: payload.popularMovies,
        topRatedMovies: payload.topRatedMovies,
        upComingMovies: payload.upComingMovies,
        genreList: payload.genreList,
        loading: false,
      };

    case "GET_DETAILS_SUCCESS":
      return {
        ...state,
        detailMovies: payload.detailMovies,
        loading: false,
      };

    case "GET_SEARCH_SUCCESS":
      return {
        ...state,
        searchMovies: payload.searchMovies,
        loading: false,
      };

    case "SEARCH_INITIALIZE":
      return {
        ...state,
        searchMovies: {},
      }

    case "GET_MOVIES_FAILURE":
      return {
        ...state,
        loading: true,
      };

    default:
      return { ...state };
  }
}

export default movieReducer;
