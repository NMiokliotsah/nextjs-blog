import PostDetail from "../../components/PostDetail/PostDetail";
import { getAllFiles, getPostData } from "../../helpers/post";

function PostDetailPage({ post }) {
  return <PostDetail post={post} />
}

export function getStaticProps({ params }) {
  const { slug } = params;

  const post = getPostData(slug);

  return {
    props: {
      post,
    },
    revalidate: 600,
  }
}

export function getStaticPaths() {
  const filenames = getAllFiles();
  const slugs = filenames.map(filename => filename.replace(/\.md$/, ''));

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: 'blocking',
  }
}

export default PostDetailPage;
