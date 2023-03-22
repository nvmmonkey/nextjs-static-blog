import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import ReactMarkdown from "react-markdown";
import { Prism as SytaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

import Image from "next/image";

function PostContent(props) {
  const { post } = props;
  const imgPath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderers = {
    //-------------//
    //IMG & P MarkDown//
    //-------------//
    p: (paragraph) => {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.properties.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },

    //-------------//
    //CODE MarkDown//
    //-------------//
    code: (code) => {
      const { className, children } = code;
      const language = className.replace("language-", "");

      return (
        <SytaxHighlighter
          className={classes.code}
          style={a11yDark}
          language={language}
          children={children[0]}
        />
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imgPath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
