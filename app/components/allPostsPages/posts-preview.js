import React from "react";
import PostPreview from "./postPreview/post-preview";
import { Divider } from "@mui/material";

const PostsPreview = ({ posts }) => {
  if (posts.length === 0) {
    // Handle the case when no posts are found
    return <div>No posts found.</div>;
  }
  return (
    <div className="grid justify-center">
      {posts.map((post) => (
        <div key={post.id}>
          <PostPreview post={post} />
          <Divider className="py-2 w-[90%]" />
        </div>
      ))}
    </div>
  );
};

export default PostsPreview;
