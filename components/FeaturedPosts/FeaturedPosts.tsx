import Posts from '../Posts/Posts';
import { IPost } from '../../models/posts';

import style from './Featured.module.scss';

interface FeaturedPostsProps {
  posts: IPost[],
}

function FeaturedPosts({ posts }: FeaturedPostsProps) {
  return <section className={style.latest}>
    <h2>Featured Posts</h2>
    <Posts posts={posts} />
  </section>
}

export default FeaturedPosts;