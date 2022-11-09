import AllPosts from "../../components/AllPosts/AllPosts";

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
];

function AllPostsPage() {
  return <AllPosts posts={DUMMY_DATE}/>
}

export default AllPostsPage;
