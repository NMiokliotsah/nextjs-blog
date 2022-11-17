import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';

import style from './PostDetail.module.scss';

SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('css', css);

interface PostDetailProps {
  post: {
    title: string,
    image: string,
    content: string,
  }
}

function PostDetail({ post }: PostDetailProps) {
  const { title, image, content } = post;

  const imagePath = `/images/posts/${image}`;

  const customRenderers = {
    img(image: { src: string, alt: string }) {
      const { src, alt } = image;

      return <Image
        src={`/images/posts/${src}`}
        alt={alt}
        width={600}
        height={300}
        layout="responsive"
      />
    },

    code(code: { className: string, children: string }) {
      const { className, children } = code;
      const language = className.split('-')[1]; // className is something like language-js => We need the "js" part here

      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          children={children}
        />
      );
    }
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
