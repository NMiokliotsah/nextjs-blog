import AllPosts from "../../components/AllPosts/AllPosts";
import { getAllPosts } from "../../helpers/post";


function AllPostsPage({ posts }) {
  return <AllPosts posts={posts} />
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
