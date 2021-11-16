import styled from "styled-components";

export const Text = styled.h1`
  font-size: 30px;
  background: var(--orange-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;
`;

export const UsersContainer = styled.div`
  margin-bottom: 8px;
  margin-top: 8px;
  outline: none;

  a {
    outline: none;
    color: #000;
    text-decoration: none;
  }
`;

export const UserInfoContainer = styled.div`
  outline: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 333px;
  height: 46px;
  background: #fff;
  margin-top: 8px;
  border: 2px solid #d8d8d8;
  padding: 8px;
  border-radius: 6px;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const UserName = styled.h1`
  font-size: 16px;
`;

export const UserAvatar = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50px;
`;
