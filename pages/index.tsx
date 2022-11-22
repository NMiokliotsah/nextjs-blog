import Head from 'next/head';
import FeaturedPosts from '../components/FeaturedPosts/FeaturedPosts';
import Hero from '../components/Hero/Hero';
import { getFeaturedPosts } from '../helpers/post';
import { IPost } from '../models/posts';

interface HomeProps {
  posts: IPost[],
}

function Home({ posts }: HomeProps) {
  return <>
    <Head>
      <title>My Blog</title>
      <meta name='description' content='Posts about development' />
    </Head>
    <Hero />
    <FeaturedPosts posts={posts} />
  </>
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts
    },
    revalidate: 100,
  }
}

export default Home;