import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { RepositoryDetails } from "./pages/RepositoryDetails/RepositoryDetails";
import { UserRepos } from "./pages/UserRepos/UserRepos";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:username" element={<UserRepos />} />
        <Route
          path="/user/:username/repos/:reponame"
          element={<RepositoryDetails />}
        />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
