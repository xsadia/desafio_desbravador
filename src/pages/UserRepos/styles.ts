import styled from "styled-components";

export const RepositoriesContainer = styled.div`
  background: #d8d8d8;
  width: 350px;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  padding: 8px;
  margin-bottom: 16px;

  @media screen and (min-width: 720px) {
    width: 640px;
  }

  a + a {
    margin-top: 8px;
  }

  a {
    text-decoration: none;
    color: #000;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 338px;

  @media screen and (min-width: 720px) {
    width: 640px;
  }
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  background: var(--orange-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: filter 0.2s;

  @media screen and (min-width: 720px) {
    font-size: 16px;
  }

  svg {
    margin-right: 4px;
    color: #ff61dc;
  }

  &:hover {
    filter: brightness(0.8);
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  background: var(--orange-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (min-width: 720px) {
    font-size: 32px;
  }
`;

export const Repository = styled.div`
  background: #fff;
  border-radius: 6px;

  padding: 8px;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const RepositoryName = styled.h1`
  font-size: 16px;
  max-width: 208px;
  background: var(--orange-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (min-width: 720px) {
    font-size: 20px;
    max-width: 308px;
  }
`;

export const RepositoryDescription = styled.p`
  font-size: 10.72px;

  @media screen and (min-width: 720px) {
    font-size: 16px;
  }
`;

export const RepositoryNameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const CountersContainer = styled.div`
  width: 130px;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 720px) {
    width: 150px;
  }
`;

export const CounterPill = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  min-width: 60px;
  height: 16px;
  font-size: 10px;
  border-radius: 16px;
  background: var(--orange-gradient);
  padding: 0 8px;
  color: #fff;

  @media screen and (min-width: 720px) {
    font-size: 16px;
    height: fit-content;
    min-width: 70px;
  }

  svg {
    font-size: 10px;
    margin-left: 2px;

    @media screen and (min-width: 720px) {
      font-size: 16px;
    }
  }
`;

export const SortButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 4px;
`;

export const SortButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  background: var(--orange-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  svg {
    margin-right: 4px;
    color: #ff61dc;
  }
`;
