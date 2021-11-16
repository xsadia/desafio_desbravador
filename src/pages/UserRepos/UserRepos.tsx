import { Interface } from "../../components/UI/Interface";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import {
  BackButton,
  CounterPill,
  CountersContainer,
  RepositoriesContainer,
  Repository,
  RepositoryDescription,
  RepositoryName,
  RepositoryNameContainer,
  SortButton,
  SortButtonContainer,
  Title,
  TitleContainer,
} from "./styles";
import { CgGitFork } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineArrowLeft,
  AiOutlineCheckCircle,
  AiFillCheckCircle,
} from "react-icons/ai";
import { Spinner } from "../../components/Spinner/Spinner";

type RepositoryType = {
  id: number;
  name: string;
  full_name: string;
  description: string;
  forks_count: number;
  stargazers_count: number;
};

export const UserRepos = () => {
  const [repositories, setRepositories] = useState<Array<RepositoryType>>([]);
  const [sortByStars, setSortByStars] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { username } = useParams();
  const navigate = useNavigate();
  const sortDecrescent = (a: RepositoryType, b: RepositoryType): number => {
    if (a.stargazers_count < b.stargazers_count) return 1;
    if (a.stargazers_count > b.stargazers_count) return -1;

    return 0;
  };

  const getRepos = useCallback(async () => {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`
    );

    const data = await response.json();
    if (sortByStars) {
      const sortedDecrescentData = data.sort(sortDecrescent);
      setRepositories([...sortedDecrescentData]);
      return;
    }
    const sortedCrescent = data.sort(
      (a: RepositoryType, b: RepositoryType) =>
        a.stargazers_count - b.stargazers_count
    );
    setRepositories([...sortedCrescent]);
  }, [sortByStars]);

  useEffect(() => {
    setIsLoading(true);
    getRepos();
    setIsLoading(false);
  }, [getRepos]);

  return (
    <Interface>
      <TitleContainer>
        <Title>{username}'s repositories</Title>
        <BackButton onClick={() => navigate("/")}>
          <AiOutlineArrowLeft /> back
        </BackButton>
      </TitleContainer>
      <RepositoriesContainer>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <SortButtonContainer>
              <SortButton onClick={() => setSortByStars(!sortByStars)}>
                {sortByStars ? <AiFillCheckCircle /> : <AiOutlineCheckCircle />}
                Sort by stars
              </SortButton>
            </SortButtonContainer>
            {repositories.map((repository) => (
              <Link key={repository.id} to={`repos/${repository.name}`}>
                <Repository>
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
                  <RepositoryDescription>
                    {repository.description}
                  </RepositoryDescription>
                </Repository>
              </Link>
            ))}
          </>
        )}
      </RepositoriesContainer>
    </Interface>
  );
};
