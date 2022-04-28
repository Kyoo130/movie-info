import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const MovieCard = ({ item }) => {
  const { genreList } = useSelector((state) => state.movie);

  return (
    <CardCont>
      <CardImg
        style={{
          backgroundImage: `url(https://www.themoviedb.org//t/p/w300_and_h450_bestv2/${item.poster_path})`,
        }}
      >
        <CardInfo>
          <p>{item.title}</p>
          <GenreList>
            {item.genre_ids.map((id, idx) => (
              <div key={idx}>
                {genreList.find((item) => item.id === id).name}
              </div>
            ))}
          </GenreList>
        </CardInfo>
      </CardImg>
    </CardCont>
  );
};

const CardCont = styled.div`
  width: 98%;
  position: relative;
  margin: 0 auto;

  :before {
    content: "";
    display: block;
    padding-top: calc(450 / 300 * 100%);
  }
`;

const CardImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  background-size: cover;
  background-position: center;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  background-color: rgba(43, 41, 41, 0.9);
  width: 100%;
  height: 100%;
  font-size: 1.2rem;
  transition: 0.5s;

  :hover {
    opacity: 1;
    cursor: pointer;
  }

  p {
    font-size: 1.5rem;
    font-weight: bold;
    color: crimson;
    margin-bottom: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
`;

const GenreList = styled.div`
  display: flex;
  font-size: 0.8rem;

  div {
    padding: 5px;
    margin: 5px;
    border: 0.5px solid #fff;
    border-radius: 5px;
  }
`;

export default MovieCard;
