import Link from 'next/link';
import Image from 'next/image';
import { IPost } from '../../models/posts';

import style from './Post.module.scss';

interface PostProps {
  post: IPost
}

function Post({ post }: PostProps) {
  const { title, image, excerpt, date, slug } = post;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const imagePath = `/images/posts/${image}`;
  const linkPath = `/posts/${slug}`;

  return <li className={style.post}>
    <Link href={linkPath}>
      <div className={style.image}>
        <Image
          alt={title}
          src={imagePath}
          width={300}
          height={300}
          layout="responsive"
        />
      </div>
      <div className={style.content}>
        <h3>{title}</h3>
        <time>{formattedDate}</time>
        <p>{excerpt}</p>
      </div>
    </Link>
  </li>
}

export default Post;
