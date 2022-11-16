import Head from 'next/head';
import FeaturedPosts from '../components/FeaturedPosts/FeaturedPosts';
import Hero from '../components/Hero/Hero';
import { getFeaturedPosts } from '../helpers/post';

import styles from '../styles/Home.module.css'


function Home({ posts }) {
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