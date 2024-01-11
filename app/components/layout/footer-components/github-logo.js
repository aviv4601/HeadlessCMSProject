"use client";
import React from "react";

const GithubLogo = () => {
  const onClickHandler = () => {
    console.log("clicked");
    window.location.href = "https://github.com/aviv4601/HeadlessCMSProject";
  };

  return (
    <div onClick={onClickHandler}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        id="github"
        className="w-[30px] cursor-pointer"
      >
        <path
          fill="white"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          d="M8 .5C3.859.5.5 3.866.5 8.02a7.518 7.518 0 0 0 5.13 7.134c.375.069.512-.163.512-.362 0-.179-.007-.651-.01-1.279-2.086.454-2.527-1.008-2.527-1.008-.341-.868-.832-1.1-.832-1.1-.681-.467.052-.457.052-.457.752.053 1.148.775 1.148.775.669 1.149 1.755.817 2.183.625.068-.486.262-.817.476-1.005-1.665-.19-3.416-.835-3.416-3.716 0-.821.292-1.492.772-2.018-.078-.191-.336-.955.072-1.991 0 0 .63-.202 2.063.771A7.16 7.16 0 0 1 8 4.136a7.173 7.173 0 0 1 1.878.253c1.432-.973 2.06-.771 2.06-.771.409 1.035.152 1.799.075 1.99.481.526.771 1.197.771 2.018 0 2.888-1.754 3.524-3.424 3.71.269.232.509.691.509 1.392 0 1.005-.009 1.816-.009 2.063 0 .201.135.435.516.361A7.518 7.518 0 0 0 15.5 8.02C15.5 3.866 12.142.5 8 .5z"
        ></path>
      </svg>
    </div>
  );
};

export default GithubLogo;