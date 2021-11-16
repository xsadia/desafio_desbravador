import { ReactNode } from "react";
import { Navbar } from "../Navbar/Navbar";
import { Container } from "./styles";

type InterfaceProps = {
  children: ReactNode;
};

export const Interface = ({ children }: InterfaceProps) => {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
    </>
  );
};
