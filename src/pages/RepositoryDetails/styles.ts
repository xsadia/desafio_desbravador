import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 333px;

  @media screen and (min-width: 720px) {
    width: 640px;
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
    font-size: 32px;
    max-width: 320px;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Description = styled.p`
  font-size: 12.72px;
  align-self: flex-start;

  @media screen and (min-width: 720px) {
    font-size: 16px;
  }
`;

export const LanguageUsed = styled.span`
  font-weight: 600;
`;

export const RepositoryNameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 333px;
  margin-top: 8px;

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

export const GithubLink = styled.a`
  font-size: 13.3333px;
  background: var(--orange-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }

  @media screen and (min-width: 720px) {
    font-size: 16px;
  }
`;
