"use client";
import React from "react";
import classes from "./post-body.module.css";

const PostBody = ({ post }) => {
  return (
    <div className="my-8 max-w-2xl mx-auto">
      <div
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        className={classes.content}
      ></div>
    </div>
  );
};

export default PostBody;
