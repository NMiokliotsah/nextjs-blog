import Posts from '../Posts/Posts';
import style from './AllPosts.module.scss';
import { IPost } from '../../models/posts';

interface AllPostsProps {
  posts: IPost[],
}

function AllPosts({ posts }: AllPostsProps) {
  return <section className={style.posts}>
    <h1>All Posts</h1>
    <Posts posts={posts} />
  </section>
}

export default AllPosts;
