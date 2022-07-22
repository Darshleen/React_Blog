import { Link } from "react-router-dom";

const BlogList = ({ blog, title }) => {
  return (
    <div className="blog-list">
      {blog.map((blog) => (
        <div className="blogPre" key={blog.id}>
          <div className="blog-img">
            <Link to={`/blog/${blog.id}`}>
              {/* <img src={require(`${blog.imageLink}`)} alt="" />   */}
            </Link>
          </div>
          <div className="blog-des">
            <Link to={`/blog/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>
              by <span>{blog.author}</span>
            </p>
            </Link>
          </div>  
        </div>
      ))}
    </div>
  );
};

export default BlogList;
