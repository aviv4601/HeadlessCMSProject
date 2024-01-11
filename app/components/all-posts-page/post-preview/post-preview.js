import React from "react";
import Image from "next/image";
import { convertingDate } from "../../../utils/functions";
import RandomImage from "../../../assets/RandomImage.jpg";
import ReadMoreBtn from "../../UI/read-more-btn";

const PostPreview = ({ post }) => {
  return (
    <div className="md:flex max-w-full items-center space-x-3 my-8 md:-space-y-8 ">
      {!post.better_featured_image ? (
        <Image src={RandomImage} width={400} height={400} alt="Random Image" />
      ) : (
        <Image
          src={post.better_featured_image.source_url}
          alt={post.better_featured_image.alt_text}
          width={400}
          height={400}
        />
      )}
      <div className=" md:my-0">
        <h3 className="font-bold text-xl">{post.title.rendered}</h3>
        <p className="my-12">{`Posted ${convertingDate(post.date)}`}</p>
        <ReadMoreBtn slug={post.slug} />
      </div>
    </div>
  );
};

export default PostPreview;
