import Link from "next/link";
import React from "react";

const ReadMoreBtn = ({ slug }) => {
  return (
    <div>
      <Link href={`/pages/posts/${slug}`}>
        <button className="w-28 bg-green-500 rounded-t-sm text-center p-2 text-white hover:bg-green-700 cursor-pointer">
          Read More
        </button>
      </Link>
    </div>
  );
};

export default ReadMoreBtn;
