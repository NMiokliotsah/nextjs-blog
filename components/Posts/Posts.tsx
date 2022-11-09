import Post from "../Post/Post";
import style from './Posts.module.scss';

interface PostsProps {
  posts: [],
}

function Posts({ posts }: PostsProps) {
  return <ul className={style.grid}>
    {posts.map(post => <Post post={post} />)}
  </ul>
}

export default Posts;


