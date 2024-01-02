import React from "react";
import { commentsData } from "../../../utils/mocks/mockComments";
import CommentsList from "./CommentsList";
import Comment from "./Comment";
import { useSelector } from "react-redux";
import useVideoComments from "../../../hooks/useVideoComments";

// const Comment = ({ data }) => {
//   const { name, text, replies } = data;

//   return (
//     <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
//       <img className="h-8" src={user} alt="user"/>
//       <div className="px-3">
//         <p className="font-bold">{name}</p>
//         <p>{text}</p>
//       </div>
//     </div>
//   );
// };

// const CommentsList = ({ comments }) => {
//   return comments.map((comment, index) => (
//     <div key={index}>
//       <Comment data={comment} />
//       <div className="pl-5 border border-l-gray ml-5">
//         <CommentsList comments={comment.replies} />
//       </div>
//     </div>
//   ));
// };

const CommentsContainer = ({ videoId }) => {
    useVideoComments(videoId)
    const comments = useSelector((store) => store.video?.comments);

  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
        {!comments.length && <CommentsList comments={commentsData} />}
        {comments?.map((comment, index) => (
          <div key={index}>
            <Comment data={comment} />
          </div>
        ))}
    </div>
  );
};

export default CommentsContainer;
