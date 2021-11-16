import { NavbarContainer, NavbarTitle } from "./styles";
import { VscGithub } from "react-icons/vsc";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <NavbarContainer>
      <Link to="/">
        <NavbarTitle>
          <VscGithub />
          Github finder
        </NavbarTitle>
      </Link>
    </NavbarContainer>
  );
};
