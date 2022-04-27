import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderCont>
      <h1>
        <img width={130} src={"/images/title_logo.png"} alt="logo" />
      </h1>
      <Menu>
        <MenuItem>
          <MenuLink className="nav-item" to="/">
            홈
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink className="nav-item" to="/movies">
            검색
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink className="nav-item" to="/movies">
            영화
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink className="nav-item" to="/">
            관심 콘텐츠
          </MenuLink>
        </MenuItem>
      </Menu>
    </HeaderCont>
  );
};

const HeaderCont = styled.header`
  h1 {
    text-align: center;
    margin-top: 0.2em;
  }
  img {
    width: 200px;
  }
`

const Menu = styled.ul`
  display: flex;
`

const MenuItem = styled.li`
  width: 25%;
  transition: 0.5s;
  :hover {
    width: 28%;
    background-color: #D32F27;
  }
`

const MenuLink = styled(Link)`
  display: block;
  padding: 0.5em;
  font-size: 1.1rem;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: #fff;
  :hover {
    color: #fff;
  }
`

export default Header;
