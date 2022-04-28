import React from "react";
import styled from "styled-components";

const Banner = ({ movie }) => {
  return (
    <BannerCont>
      <InfoCont
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)), url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.poster_path})`,
        }}
      >
        <Title>{movie.title}</Title>
        <OverView>{movie.overview}</OverView>
      </InfoCont>
    </BannerCont>
  );
};

const BannerCont = styled.div`
  position: relative;
  margin: 0 auto;

  :before {
    content: "";
    display: block;
    padding-top: calc(800 / 1920 * 100%);
  }
`;

const InfoCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  padding: 50px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const OverView = styled.p`
  font-size: 1.3rem;
  width: 50%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @media (max-width: 768px) {
    width: 70%;
    font-size: 1rem;
  }
`;

export default Banner;
