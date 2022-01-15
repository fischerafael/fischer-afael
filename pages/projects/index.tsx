import axios from "axios";
import { GetStaticProps } from "next";
import { IGithubRepo } from "../../src/interfaces";
import { PageProjects } from "../../src/pages/projects";

const index = ({ repos }: { repos: IGithubRepo[] }) => {
  return <PageProjects repos={repos} />;
};

export default index;

export const getStaticProps: GetStaticProps = async () => {
  const repos: IGithubRepo[] = await axios
    .get(
      `https://api.github.com/users/fischerafael/repos?per_page=150&sort=created`
    )
    .then((res) => res.data)
    .catch((err) => {
      console.log("ERROR GETTING POSTS", err);
    });

  const portfolioRepos = getPortfolioRepos(repos);
  const reposWithCover = portfolioRepos.map((repo) => {
    return { ...repo, cover: getCover(repo.full_name) };
  });

  return { props: { repos: reposWithCover || [] } };
};

const getPortfolioRepos = (repos: IGithubRepo[]) => {
  const isPortofolioRepos = repos.filter((repo) => {
    const isPortfolio = repo.topics?.some((topic) => topic === "portfolio");
    return isPortfolio;
  });
  return isPortofolioRepos;
};

const getCover = (repo_name: string) => {
  return `https://raw.githubusercontent.com/${repo_name}/main/cover.png`;
};
