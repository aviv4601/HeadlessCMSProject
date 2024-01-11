import React from "react";
import { Divider } from "@mui/material";
import Link from "next/link";

const Categories = ({ categories }) => {
  return (
    <div>
      <h1 className="font-bold text-2xl">Categories</h1>
      <Divider className="py-2" />
      <ul className="w-[85%]">
        {categories.map((category) => (
          <li key={category.id}>
            <Link href={`/pages/posts/sorted-by-category/${category.id}`}>
              <h1 className="font-semilight my-2">
                {category.name} ({category.count})
              </h1>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
