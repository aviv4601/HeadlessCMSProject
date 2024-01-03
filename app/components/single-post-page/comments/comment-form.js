import React from "react";

const CommentForm = () => {
  return (
    <div className="text-center flex flex-col items-center">
      <h1 className="font-bold text-xl">Leave a comment</h1>
      <form className="w-4/5">
        <input
          name="form-name"
          placeholder="Leave a comment..."
          className="w-full p-10 my-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"
        />
      </form>
    </div>
  );
};

export default CommentForm;
