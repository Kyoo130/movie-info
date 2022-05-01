import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/actions/movieAction";
import { MovieCard } from "./index";

const MovieSearch = () => {
  const dispatch = useDispatch();
  const inputRef = useRef("");

  const { searchMovies } = useSelector((state) => state.movie);

  const onSubmit = (event) => {
    event.preventDefault();
  };

  const search = (event) => {
    if (event.key === "Enter") {
      let query = event.target.value;
      dispatch(movieAction.getSearchMovies(query));
    }
  };

  useEffect(() => {
    dispatch(movieAction.getSearchMovies());
  }, []);

  return (
    <div>
      <SearchForm onSubmit={onSubmit}>
        <SearchInput
          name="query"
          type="text"
          placeholder="검색할 영화를 입력해주세요."
          required
          ref={inputRef}
          onKeyPress={(event) => search(event)}
        />
      </SearchForm>
      <MovieLists>
        {searchMovies.results &&
          searchMovies.results.map((item) => (
            <li>
              <MovieCard key={item.id} item={item} />
            </li>
          ))}
      </MovieLists>
    </div>
  );
};

const SearchForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 35px;
  margin: 1em auto;
`;

const SearchInput = styled.input`
  width: 60%;
  border: 3px solid crimson;
  border-radius: 0.3em;
  font-size: 1rem;
  margin-right: 10px;
  padding: 0.5em;
  background-color: transparent;
  color: #fff;
`;

const MovieLists = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  
  & li {
    width: 20%;
  }
`;

export default MovieSearch;
