import Image from "next/image";
import ReactMarkdown from "react-markdown";

import style from './PostDetail.module.scss';

const DUMMY_POST = {
  title: 'Getting Started with Next js',
  image: 'getting-started-nextjs.png',
  excerpt: 'Next js is a React framework',
  slug: 'getting-started-with-nextjs',
  date: '2022-02-10',
  content: '# This is a first post',
}

function PostDetail({ post = DUMMY_POST }) {
  const { title, image, content } = post;

  const imagePath = `/images/posts/${image}`;

  return <article className={style.content}>
    <header className={style.header}>
      <h1>{title}</h1>
      <Image src={imagePath} alt={title} width={200} height={150} />
    </header>
    <article>
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  </article>
}

export default PostDetail;
