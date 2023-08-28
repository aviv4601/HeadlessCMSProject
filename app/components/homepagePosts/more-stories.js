import React from "react";
import Link from "next/link";
import Image from "next/image";
import RandomImage from "../../assets/RandomImage.jpg";
import { convertingDate } from "../../utils/functions";
import Avatar from "../avatar";

const MoreStories = ({ posts }) => {
  return (
    <div className="md:grid md:grid-cols-2">
      {posts.slice(1).map((post) => (
        <div key={post.id} className="p-4 lg:p-8 items-center">
          {!post.better_featured_image ? (
            <Image
              src={RandomImage}
              width={800}
              height={500}
              alt="Random Image"
            ></Image>
          ) : (
            <Image
              src={post.better_featured_image.source_url}
              width={800}
              height={500}
              alt={post.better_featured_image.alt_text}
            ></Image>
          )}
          <h3 className="mb-4 mt-8 text-2xl md:text-3xl sm:text-1xl  leading-snug hover:underline">
            <Link href={`/pages/posts/${post.slug}`}>
              {post.title.rendered}
            </Link>
          </h3>
          <div>
            <p>{convertingDate(post.date)}</p>
            <div
              className="text-lg leading-relaxed pt-4"
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            ></div>
          </div>
          <div className="pt-4">
            <Avatar authorId={post.author} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoreStories;
