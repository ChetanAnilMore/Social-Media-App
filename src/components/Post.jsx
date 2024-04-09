import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";
const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <center>
      <div className="card post-card row" style={{ width: "50%" }}>
        <div className="card-body">
          <h5 className="card-title">
            {post.title}
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              onClick={() => deletePost(post.id)}
            >
              <MdDelete />
            </span>
          </h5>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) => (
            <span className="badge text-bg-primary m-1" key={tag}>
              {tag}
            </span>
          ))}
          <div className="alert alert-info m-1" role="alert">
            This post has been reacted by{" "}
            <span className="fw-bold">{post.reactions}</span> people.
          </div>
        </div>
      </div>
    </center>
  );
};

export default Post;
