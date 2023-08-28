import React from "react";
import styles from "./pages-post.module.css";

const PagesPosts = ({ posts }) => {
  return (
    <div>
      <div
        dangerouslySetInnerHTML={{ __html: posts.content.rendered }}
        className={styles.content}
      ></div>
    </div>
  );
};

export default PagesPosts;
