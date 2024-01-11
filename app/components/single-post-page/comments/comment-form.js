"use client";
import React from "react";
import { useRef } from "react";
import { useSession } from "next-auth/react";
import { addComment } from "../../../lib/wordpress";

const CommentForm = ({ postId }) => {
  const commentRef = useRef();
  const session = useSession();

  const onSubmitHandler = async () => {
    const requestOptions = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.data?.accessToken}`,
      },
      body: JSON.stringify({ content: commentRef?.current?.value }),
    };
    console.log("requestOptions", requestOptions);
    try {
      const data = await addComment(requestOptions, postId);
      console.log("data", data);
      commentRef.current.value = ""; // cleanup function
    } catch (error) {
      alert(`${error.message} Make sure you are logged in and try again.`);
    }
  };
  return (
    <div className="text-center flex flex-col items-center">
      <h1 className="font-bold text-xl">Leave a comment</h1>
      <form className="w-4/5">
        <input
          name="form-name"
          placeholder="Leave a comment..."
          className="w-full p-10 my-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"
          ref={commentRef}
        />
      </form>
      <button
        className="bg-gray-800 text-white px-10 py-2 rounded-md mt-4"
        onClick={onSubmitHandler}
      >
        Add comment
      </button>
    </div>
  );
};

export default CommentForm;
