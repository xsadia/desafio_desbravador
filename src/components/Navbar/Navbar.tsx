import { NavbarContainer, NavbarTitle } from "./styles";
import { VscGithub } from "react-icons/vsc";

export const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarTitle>
        <VscGithub />
        Github finder
      </NavbarTitle>
    </NavbarContainer>
  );
};
