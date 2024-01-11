"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

const Avatar = ({ authorId }) => {
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    const fetchAvatar = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8899/BlogsWebsite/BlogPosts/wp-json/wp/v2/users/${authorId}`
        );
        const avatarData = await response.data;
        setAvatar(avatarData);
      } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch avatar."); // Handle the error gracefully
      }
    };

    fetchAvatar();
  }, [authorId]);

  if (!avatar) {
    return <div>Loading...</div>; // You can render a loading state while the data is being fetched
  }

  return (
    <div className="flex items-center">
      <div className="w-12 mr-4">
        <Image
          src={avatar.avatar_urls[96]}
          width={96}
          height={96}
          alt={avatar.name}
          className="rounded-full"
        ></Image>
      </div>
      <h5 className="text-xl font-bold">{avatar.name}</h5>
    </div>
  );
};

export default Avatar;
