import FeaturedPosts from '../components/FeaturedPosts/FeaturedPosts';
import Hero from '../components/Hero/Hero';
import styles from '../styles/Home.module.css'

const DUMMY_DATE = [
  {
    title: 'Getting Started with Next js',
    image: 'getting-started-nextjs.png',
    excerpt: 'Next js is a React framework',
    slug: 'getting-started-with-nextjs',
    date: '2022-02-10',
  },
  {
    title: 'Getting Started with Next js',
    image: 'getting-started-nextjs.png',
    excerpt: 'Next js is a React framework',
    slug: 'getting-started-with-nextjs',
    date: '2022-02-10',
  },
  {
    title: 'Getting Started with Next js',
    image: 'getting-started-nextjs.png',
    excerpt: 'Next js is a React framework',
    slug: 'getting-started-with-nextjs',
    date: '2022-02-10',
  }
]

function Home() {
  return <>
    <Hero />
    <FeaturedPosts posts={DUMMY_DATE} />
  </>
}

export default Home;