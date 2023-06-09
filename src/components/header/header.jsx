import { HeaderWrapper } from "../../styles/headerWrapper"
import { useState } from "react";
import Navbar from "../navBarNuevo/navBarNuevo";
import MenuButton from "../menuButton/menuButtonWrapper";

const Header = () => {
  const [open, setOpen] = useState(false)
  const handleClick = ()=> {
    setOpen(!open)
  }
  return (
    <HeaderWrapper>
      <Navbar open={open} handleClick={handleClick}/>
      <MenuButton open={open} handleClick={handleClick}/>
    </HeaderWrapper>
  );
};
export default Header;


