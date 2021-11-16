import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Interface } from "../../components/UI/Interface";
import {
  BackButton,
  ButtonsContainer,
  Container,
  CounterPill,
  CountersContainer,
  Description,
  GithubLink,
  LanguageUsed,
  RepositoryName,
  RepositoryNameContainer,
} from "./styles";
import { CgGitFork } from "react-icons/cg";
import { AiFillStar, AiOutlineArrowLeft } from "react-icons/ai";

type RepositoryType = {
  id: number;
  name: string;
  full_name: string;
  description: string;
  forks_count: number;
  stargazers_count: number;
  html_url: string;
  language: string;
};

export const RepositoryDetails = () => {
  const [repository, setRepository] = useState<RepositoryType>(
    {} as RepositoryType
  );

  const { username, reponame } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://api.github.com/repos/${username}/${reponame}`
      );

      const data = await response.json();
      setRepository(data);
    })();
  }, []);

  return (
    <Interface>
      <Container>
        <RepositoryNameContainer>
          <RepositoryName>{repository.name}</RepositoryName>
          <CountersContainer>
            <CounterPill>
              {repository.stargazers_count}
              <AiFillStar />
            </CounterPill>
            <CounterPill>
              {repository.forks_count}
              <CgGitFork />
            </CounterPill>
          </CountersContainer>
        </RepositoryNameContainer>
        <Description>
          <Description>{repository.description}</Description>
          <span>
            Language used: <LanguageUsed>{repository.language}</LanguageUsed>
          </span>
        </Description>
        <ButtonsContainer>
          <BackButton onClick={() => navigate(`/user/${username}`)}>
            <AiOutlineArrowLeft />
            back
          </BackButton>
          <GithubLink href={repository.html_url}>
            go to repository on github
          </GithubLink>
        </ButtonsContainer>
      </Container>
    </Interface>
  );
};
