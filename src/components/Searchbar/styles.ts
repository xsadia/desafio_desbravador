import styled from "styled-components";

export const SearchbarContainer = styled.form`
  display: flex;
  width: 333px;
  height: 46px;

  @media screen and (min-width: 720px) {
    width: 500px;
  }
`;

export const SearchInput = styled.input`
  outline: none;
  height: 100%;
  width: 80%;
  background: #fff;
  border-radius: 6px 0 0 6px;
  border: 2px solid #fff;
  padding: 8px;
  font-weight: 600;
  font-size: 16px;
  color: #000;

  &:focus {
    border-color: #000;
  }
`;

export const SearchButton = styled.button`
  height: 100%;
  flex: 1;
  border: none;
  border-radius: 0 6px 6px 0;
  background: var(--orange-gradient);
  font-weight: 700;
  color: #fff;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;
