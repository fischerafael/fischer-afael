import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import { IPostRes } from "../../../src/interfaces";
import { PageBlogPost } from "../../../src/pages/blogPost";

const index = ({ post }: { post: IPostRes }) => {
  return <PageBlogPost post={post} />;
};

export default index;

export const getStaticPaths: GetStaticPaths = async () => {
  const posts: IPostRes[] = await axios
    .get(`https://designfischer.com/wp-json/wp/v2/posts?categories=5&6`)
    .then((res) => res.data)
    .catch((err) => {
      console.log("ERROR GETTING POSTS", err);
    });

  const postPaths = posts.map((post) => {
    return {
      params: {
        slug: post.slug,
      },
    };
  });

  return { paths: postPaths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async () => {
  const post: IPostRes = await axios
    .get(
      `https://designfischer.com/wp-json/wp/v2/posts?slug=como-conseguir-o-primeiro-emprego-como-desenvolvedor`
    )
    .then((res) => res.data[0])
    .catch((err) => {
      console.log("ERROR GETTING POSTS", err);
    });

  return { props: { post } };
};
