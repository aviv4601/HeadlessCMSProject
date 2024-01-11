"use client";
import React from "react";
import SearchBar from "./sideline-content/searchbar";
import RecentPosts from "./sideline-content/recent-posts";
import Categories from "./sideline-content/categories";

const SidelineContent = ({ posts, categories }) => {
  return (
    <div className="grid justify-center my-8">
      <div>
        <SearchBar posts={posts} />
      </div>
      <div>
        <RecentPosts posts={posts} />
      </div>
      <div>
        <Categories categories={categories} />
      </div>
    </div>
  );
};

export default SidelineContent;
