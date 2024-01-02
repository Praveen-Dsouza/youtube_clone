import user from "../../../utils/icons/navbar/user.png"

const Comment = ({ data }) => {
    const { name, text } = data;
  
    return (
      <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
        <img
          className="w-12 h-12"
          src={user}
          alt="user"
        />
        <div className="px-3">
          <p className="font-bold">{name}</p>
          <p>{text}</p>
        </div>
      </div>
    );
};

const CommentsList = ({ comments }) => {
    return comments.map((comment, index) => (
        <div key={index}>
          <Comment data={comment} />
          <div className="pl-5 border border-l-black ml-5">
            <CommentsList comments={comment.replies} />
          </div>
        </div>
    ));
}

export default CommentsList
