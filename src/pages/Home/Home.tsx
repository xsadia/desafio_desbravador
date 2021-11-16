import {
  Text,
  UserAvatar,
  UserInfoContainer,
  UserName,
  UsersContainer,
} from "./styles";
import { Searchbar } from "../../components/Searchbar/Searchbar";
import { useState } from "react";
import { Interface } from "../../components/UI/Interface";
import { Link } from "react-router-dom";
import { Spinner } from "../../components/Spinner/Spinner";

type User = {
  login: string;
  id: number;
  avatar_url: string;
};

export const Home = () => {
  const [users, setUsers] = useState<Array<User>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (foundUsers: Array<User>) => {
    setIsLoading(true);
    setUsers([...foundUsers]);
    setIsLoading(false);
  };

  return (
    <Interface>
      <Text>Search for github users</Text>
      <Searchbar updateUsers={handleChange} />
      <UsersContainer>
        {isLoading ? (
          <Spinner />
        ) : (
          users.map((user) => (
            <Link key={user.id} to={`/user/${user.login}`}>
              <UserInfoContainer>
                <UserAvatar src={user.avatar_url} />
                <UserName>{user.login}</UserName>
              </UserInfoContainer>
            </Link>
          ))
        )}
      </UsersContainer>
    </Interface>
  );
};
