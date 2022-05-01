import SearchIcon from "@mui/icons-material/Search";
import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Container = styled.div`
  align-items: center;
  height: 60px;
  background-color: pink;
`;
const Wrapper = styled.div`
  height: 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  margin-left: 8px;
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  margin-left: 25px;
  padding: 5px;
  display: flex;
  align-items: center;
  border: 0.5px solid lightgrey;

  background-color: white;
`;
const Input = styled.input`
  border: none;
`;
const Middle = styled.div`
  text-align: center;

  flex: 1;
`;
const Logo = styled.h1`
  font-weight: bold;
`;

const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 8px;
  flex: 1;
`;

const MenuItem = styled.div`
  margin-left: 25px;
  font-size: 14px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Container className="container">
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <SearchIcon style={{ color: "grey", fontSize: 16, margin: 4 }} />
          </SearchContainer>
        </Left>
        <Middle>
          <Logo>E-Kart.</Logo>
        </Middle>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Login</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
