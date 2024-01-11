import Link from "next/link";
import React from "react";
import GithubLogo from "./footer-components/github-logo";

const Footer = () => {
  return (
    <footer>
      <div className="mt-4 h-28 w-full bg-[#232323] flex justify-center items-center">
        <p className="text-center font-bold text-white p-4">
          ©2024 | Made by Aviv Amrusi
        </p>
        <GithubLogo />
      </div>
    </footer>
  );
};

export default Footer;
