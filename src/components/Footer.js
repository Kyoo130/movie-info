import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterCont>
      <span>Copyright 2022. Kyoo130. All Rights Reserved.</span>
    </FooterCont>
  );
};

const FooterCont = styled.footer`
  text-align: center;
  color: #717171;
  padding: 0 0 3rem 0;
`;

export default Footer;
