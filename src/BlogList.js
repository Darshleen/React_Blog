const BlogList = ({ blog, title }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blog.map((blog) => (
        <div className="blogPre" key={blog.id}>
          <div className="blog-img">
            <a href="/">
              <img src={require(`${blog.imageLink}`)} alt="" />
              
            </a>
          </div>
          <div className="blog-des">
            <h2>{blog.title}</h2>
            <p>
              by <span>{blog.author}</span>
            </p>
          </div>  
        </div>
      ))}
    </div>
  );
};

export default BlogList;
