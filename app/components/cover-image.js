import React from "react";
import Image from "next/image";
import RandomImage from "../assets/RandomImage.jpg";

const CoverImage = ({ coverImage }) => {
  return (
    <div>
      {!coverImage ? (
        <Image
          src={RandomImage}
          width={500}
          height={500}
          alt="Random Image"
          className="shadow-small hover:shadow-medium transition-shadow duration-200"
        ></Image>
      ) : (
        <Image
          src={coverImage.source_url}
          width={1200}
          height={500}
          alt={coverImage.alt_text}
          className="shadow-small hover:shadow-medium transition-shadow duration-200"
        ></Image>
      )}
    </div>
    //
  );
};

export default CoverImage;
