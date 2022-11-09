import Link from 'next/link';
import Image from 'next/image';
import style from './Post.module.scss';

interface PostProps {
  post: {
    title: string,
    image: string,
    excerpt: string,
    date: Date | number,
    slug: string,
  }
}

function Post({ post }: PostProps) {
  const { title, image, excerpt, date, slug } = post;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const imagePath = `/images/posts/${slug}/${image}`;

  return <li className={style.post}>
    <Link href="">
      <div className={style.image}>
        <Image
          alt={title}
          src={imagePath}
          width={300}
          height={300}
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
