import React from "react";
import Avatar from "../avatar";
import CoverImage from "../homepagePosts/cover-image";
import { convertingDate } from "../../utils/functions";

const PostHeader = ({ post, category }) => {
  return (
    <div>
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center">
        <h1>{post.title.rendered}</h1>
      </div>
      <div className="hidden md:block my-12">
        <Avatar authorId={post.author} />
      </div>
      <div>
        <CoverImage coverImage={post.better_featured_image} />
      </div>
      <div className="block  md:hidden my-12">
        <Avatar authorId={post.author} />
      </div>
      <section className="my-8 max-w-2xl mx-auto">
        <p>{`Posted ${convertingDate(post.date)} under ${category}`}</p>
      </section>
    </div>
  );
};

export default PostHeader;
