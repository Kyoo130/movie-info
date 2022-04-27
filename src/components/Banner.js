import React from "react";
import styled from "styled-components";

const Banner = ({ movie }) => {
  return (
    <BannerCont
      style={{
        backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.poster_path})`,
      }}
    >
      <BannerInfo>
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
      </BannerInfo>
    </BannerCont>
  );
};

const BannerCont = styled.div`
  display: flex;
  align-items: center;
  background-position: center;
  background-size: cover;
  height: 600px;
  
  :before {
    position: absolute;
    left: 0;
    width: 100%;
    height: 600px;
    content: "";
    background: linear-gradient(to right, black, transparent);
  }
`;

const BannerInfo = styled.div`
  width: 45%;
  margin-left: 3rem;
  z-index: 1;
`;

export default Banner;
