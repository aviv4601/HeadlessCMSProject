import React from "react";
import { convertingDate } from "../../../utils/functions";

const CommentItem = ({ comment }) => {
  const fixedDateByFormat = convertingDate(comment.date);

  return (
    <div className="mb-8">
      <div className="flex justify-between mb-4">
        <h3 className="font-bold text-xl">{comment.author_name}:</h3>
        <h4>{fixedDateByFormat}</h4>
      </div>
      <div dangerouslySetInnerHTML={{ __html: comment.content.rendered }}></div>
    </div>
  );
};

export default CommentItem;
