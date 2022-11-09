import Post from "../Post/Post";
import style from './Posts.module.scss';
import { IPost } from '../../models/posts';

interface PostsProps {
  posts: IPost[],
}

function Posts({ posts }: PostsProps) {
  return <ul className={style.grid}>
    {posts.map((post: IPost) => <Post key={post.slug} post={post} />)}
  </ul>
}

export default Posts;


