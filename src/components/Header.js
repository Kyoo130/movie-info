import React, {useState} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const [menu, setMenu] = useState([
    {id: 1, name: "홈", link: "/"},
    {id: 2, name: "검색", link: "/movies"},
    {id: 3, name: "영화", link: "/movies"},
    {id: 4, name: "관심 콘텐츠", link: "/"},
  ]);

  return (
    <HeaderCont>
      <h1>
        <img width={130} src={"/images/title_logo.png"} alt="logo" />
      </h1>
      <Menu>
        {
          menu.map((item) => (
            <MenuItem key={item.id}>
              <MenuLink className="nav-item" to={item.link}>
                {item.name}
              </MenuLink>
            </MenuItem>
          ))
        }
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
