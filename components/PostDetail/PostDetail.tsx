import Image from "next/image";
import ReactMarkdown from "react-markdown";

import style from './PostDetail.module.scss';

function PostDetail({ post }) {
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
