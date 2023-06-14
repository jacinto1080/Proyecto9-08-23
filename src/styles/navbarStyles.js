import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
  align-items: center;
  // background:  rgb(57, 97, 184);
  position: fixed;
  top: -5vh;
  left: ${props => (props.open ? "67px" : "-100%")};
  width: 100%;
  height: 25vh;
  margin-left: auto;
  transition: left 0.3s linear;
  // border-radius: 11%;
  // border: 1px solid black;

  @media only screen and (min-width: 721px) {
    // flex-direction: row;
    margin-top: 10px;
    position: initial;
    height: 150px;
    //justify-content: center;
    // background: #1778b9;
  }
  a {
    // padding: 2px;
    color: #d0c9d1;
    text-decoration: none;
    
  }`;
  
  
  