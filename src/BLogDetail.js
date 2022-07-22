import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetail = () => {
  const { id } = useParams();
  const {
    data: blog,
    isLoad,
    error,
  } = useFetch("http://localhost:8000/blog/" + id);
  const navigate = useNavigate();
  const handleClick = () => {
    fetch(
      "http://localhost:8000/blog/" + blog.id,
      {
        method: "DELETE",
      })
      .then(() => {
        console.log("deleted");
        navigate("/");
      })
    
  };
  return (
    <div className="blog-detail">
      {error && <div>{error}</div>}
      {isLoad && (
        <div className="gif">
          <img src={require("./img/block.gif")} alt="" />
        </div>
      )}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p className="auth">
            by <span>{blog.author}</span>
          </p>
          {/* <img src={require(`${blog.mainImage}`)} alt="" /> */}
          <div className="blogBody">
            <p>{blog.body}</p>
          </div>
            <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetail;
