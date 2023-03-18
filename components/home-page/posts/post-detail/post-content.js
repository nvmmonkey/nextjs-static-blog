import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import ReactMarkdown from "react-markdown";

const DUMMY_POST = {
  slug: "getting-started-with-nextjs",
  title: "Getting Started with NextJS",
  image: "getting-started-nextjs.png",
  date: "2022-01-01",
  content: "# This is a first post",
};

function PostContent() {
  const imgPath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imgPath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
