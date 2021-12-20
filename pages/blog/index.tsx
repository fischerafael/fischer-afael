import axios from "axios";
import { GetStaticProps } from "next";
import { IPostRes } from "../../src/interfaces";
import { PageBlog } from "../../src/pages/blog";

const index = ({ posts }: { posts: IPostRes[] }) => {
  return <PageBlog posts={posts} />;
};

export default index;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await axios
    .get(`https://designfischer.com/wp-json/wp/v2/posts?categories=5&6`)
    .then((res) => res.data)
    .catch((err) => {
      console.log("ERROR GETTING POSTS", err);
    });

  return { props: { posts } };
};
