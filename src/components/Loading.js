import React from "react";
import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";
import { useSelector } from "react-redux";

const Loading = () => {
  const { loading } = useSelector((state) => state.movie);
  return (
    <LoadingCont>
      <ClipLoader color="#fff" loading={loading} size={150} />
    </LoadingCont>
  );
};

const LoadingCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

export default Loading;
