"use client";
import { TextField } from "@mui/material";
import { useState } from "react";
import classes from "./searchbar.module.css";
import Autocomplete from "@mui/material/Autocomplete";
import Link from "next/link";

const SearchBar = ({ posts }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleAutocompleteChange = (event, value) => {
    setSelectedValue(value);
  };

  const postsTitles1 = posts.map((post) => {
    return {
      title: post.title.rendered,
      slug: post.slug,
    };
  });

  return (
    <div className="w-[100%] lg:w-[80%]">
      <div>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={postsTitles1}
          getOptionLabel={(option) => option.title}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Search for posts..." />
          )}
          className={classes.searchBar}
          onChange={handleAutocompleteChange}
        />
        {selectedValue && (
          <Link href={`/pages/posts/${selectedValue.slug}`}>
            <div>
              <a>{selectedValue.title}</a>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
