import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MovieCard = ({ item, detail }) => {
  const navigate = useNavigate();

  if(detail) {
    return (
      <DetailCont>
        <MovieImg
          src={`https://www.themoviedb.org//t/p/w300_and_h450_bestv2/${item.poster_path}`}
          alt={item.title}
        />
        <InfoCont>
          <h2>{item?.title}</h2>
          <InfoList>
            {item.adult && item.adult ? <li>18</li> : null}
            <li>{item.release_date}</li>
            <li>{item.vote_average}</li>
            {item.genres &&
              item.genres.map((genre) => <li key={genre.id}>{genre.name}</li>)}
            <li>{item?.runtime}</li>
          </InfoList>
          <MovieOverview>{item.overview}</MovieOverview>
          <TrailerBtn>트레일러 재생</TrailerBtn>
        </InfoCont>
      </DetailCont>
    )
  }

  return (
    <DivEl
      onClick={() => {
        navigate(`/movies/${item.id}`);
      }}
    >
      <ImgEl
        src={`https://www.themoviedb.org//t/p/w300_and_h450_bestv2/${item?.poster_path}`}
        alt={item.title}
      />
    </DivEl>
  );
};

const DivEl = styled.div`
  padding: 0.3em;
  cursor: pointer;
  transition: all 0.2s linear;

  :hover {
    border: 3px solid #fff;
    border-radius: 0.2em;
  }
`;

const ImgEl = styled.img`
  max-width: 100%;
  height: auto;
`;

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
`;

export default MovieCard;
