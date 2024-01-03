import React from "react";
import Link from "next/link";
import { convertingDate } from "../../utils/functions";
import Avatar from "../avatar";
import CoverImage from "./cover-image";

const HeroPost = ({ post }) => {
  const date = convertingDate(post.date);
  const authorId = post._links.author[0].href.split("/").slice(-1)[0];

  return (
    <div className="p-2 justify-center">
      <div className="py-10">
        <Link href={`/pages/posts/${post.slug}`}>
          <CoverImage coverImage={post.better_featured_image} />
        </Link>
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-4xl leading-tight hover:underline">
            <Link href={`/pages/posts/${post.slug}`}>
              {post.title.rendered}
            </Link>
          </h3>
          <div>
            <p>{date}</p>
          </div>
        </div>
        <div className="text-lg leading-relaxed mb-4">
          <div
            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
          ></div>
          <div className="pt-4">
            <Avatar authorId={authorId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPost;
