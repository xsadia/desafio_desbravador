import { FormEvent, useState } from "react";
import { SearchbarContainer, SearchButton, SearchInput } from "./styles";

type User = {
  login: string;
  id: number;
  avatar_url: string;
};

type SearchbarProps = {
  updateUsers: (foundUsers: Array<User>) => void;
};
export const Searchbar = ({ updateUsers }: SearchbarProps) => {
  const [searchText, setSearchText] = useState<string>("");

  const handleSearch = async (event: FormEvent) => {
    event.preventDefault();
    const response = await fetch(
      `https://api.github.com/search/users?q=${searchText}`
    );

    const data = await response.json();
    updateUsers(data.items);
    setSearchText("");
  };

  return (
    <SearchbarContainer onSubmit={handleSearch}>
      <SearchInput
        placeholder="Search a user"
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <SearchButton type="submit">Search</SearchButton>
    </SearchbarContainer>
  );
};
