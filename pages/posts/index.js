import { DUMMY_POSTS } from "..";
import AllPosts from "../../components/home-page/posts/all-posts";

function AllPostsPage() {
  const DUMMY_POSTS = [
    {
      slug: "getting-started-with-nextjs",
      title: "Getting Started with NextJS",
      image: "getting-started-nextjs.png",
      excerpt:
        "NextJS is a React framework for production, it makes building full-stack React apps and sites a breeze and ship with built-in SSR.",
      date: "2022-01-01",
    },
    {
      slug: "getting-started-with-nextjs2",
      title: "Getting Started with NextJS",
      image: "getting-started-nextjs.png",
      excerpt:
        "NextJS is a React framework for production, it makes building full-stack React apps and sites a breeze and ship with built-in SSR.",
      date: "2022-01-01",
    },
    {
      slug: "getting-started-with-nextjs3",
      title: "Getting Started with NextJS",
      image: "getting-started-nextjs.png",
      excerpt:
        "NextJS is a React framework for production, it makes building full-stack React apps and sites a breeze and ship with built-in SSR.",
      date: "2022-01-01",
    },
    {
      slug: "getting-started-with-nextjs4",
      title: "Getting Started with NextJS",
      image: "getting-started-nextjs.png",
      excerpt:
        "NextJS is a React framework for production, it makes building full-stack React apps and sites a breeze and ship with built-in SSR.",
      date: "2022-01-01",
    },
  ];

  return <AllPosts posts={DUMMY_POSTS} />;
}

export default AllPostsPage;
