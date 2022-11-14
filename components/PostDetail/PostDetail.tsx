import Image from "next/image";
import ReactMarkdown from "react-markdown";

import style from './PostDetail.module.scss';

function PostDetail({ post }) {
  const { title, image, content } = post;

  const imagePath = `/images/posts/${image}`;

  const customRenderers = {
    img(image) {
      const { src, alt } = image;

      return <Image
        src={`/images/posts/${src}`}
        alt={alt}
        width={600}
        height={300}
      />
    },
  }

  return <article className={style.content}>
    <header className={style.header}>
      <h1>{title}</h1>
      <Image src={imagePath} alt={title} width={200} height={150} />
    </header>
    <article>
      <ReactMarkdown components={customRenderers}>{content}</ReactMarkdown>
    </article>
  </article>
}

export default PostDetail;
