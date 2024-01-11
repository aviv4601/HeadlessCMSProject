import React from "react";
import { Divider } from "@mui/material";
import Link from "next/link";

const RecentPosts = ({ posts }) => {
  return (
    <div className="py-4">
      <h1 className="font-bold text-2xl">Recent Posts</h1>
      <Divider className="py-2" />
      <ul className="w-[85%]">
        {posts.slice(0, 5).map((post) => (
          <li key={post.id}>
            <Link href={`/pages/posts/${post.slug}`}>
              <h1 className="font-semilight my-2">{post.title.rendered}</h1>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentPosts;
