import React from "react";
import styled from "styled-components";

const MovieDetail = ({ movie }) => {
  console.log(movie);
  return (
    <DetailCont>
      <MovieImg
        src={`https://www.themoviedb.org//t/p/w300_and_h450_bestv2/${movie?.poster_path}`}
        alt={movie?.title}
      />
      <InfoCont>
        <h2>{movie?.title}</h2>
        <InfoList>
          {movie?.adult === true ? <li>18</li> : null}
          <li>{movie?.release_date}</li>
          <li>{movie?.vote_average}</li>
          {movie?.genres.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
          <li>{movie?.runtime}</li>
        </InfoList>
        <MovieOverview>{movie?.overview}</MovieOverview>
      <TrailerBtn>트레일러 재생</TrailerBtn>
      </InfoCont>
    </DetailCont>
  );
};

const DetailCont = styled.div`
  display: flex;
  justify-content: center;
  margin: 5em auto;
  padding: 0 2em;
`;

const MovieImg = styled.img`
  max-width: 50%;
  height: auto;
`;

const InfoCont = styled.div`
  width: 50%;
  padding: 1.5em;

  h2 {
    font-size: 2.5rem;
  }
`;

const InfoList = styled.ul`
  display: flex;

  li {
    border: 1px solid #fff;
    border-radius: 5px;
    padding: 0.3em;
    margin: 0.5em 0.5em 0.5em 0;
  }
`;

const MovieOverview = styled.p`
  margin: 1em 0;
  padding: 1em 0;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
`;

const TrailerBtn = styled.button`
  background-color: red;
  color: #fff;
  margin: 1.5em auto;
  padding: 1em;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1rem;
`

export default MovieDetail;
