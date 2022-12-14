import Head from "next/head";
import AllPosts from "../../components/AllPosts/AllPosts";
import { getAllPosts } from "../../helpers/post";
import { IPost } from '../../models/posts';

interface AllPostsPageProps {
  posts: IPost[],
}

function AllPostsPage({ posts }: AllPostsPageProps) {
  return <>
    <Head>
      <title>All Posts</title>
      <meta name="description" content="All posts about development" />
    </Head>
    <AllPosts posts={posts} />
  </>
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
    revalidate: 100,
  }
}

export default AllPostsPage;
