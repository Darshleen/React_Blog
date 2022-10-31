// import React, { useEffect, useRef, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
  const {data:blog,isLoad,error}=useFetch("http://localhost:8070/blog");
  return (
    <section className="homePage">
      {error && <div>{error}</div>}
      {isLoad && (
        <div className="gif">
          <img src={require("./img/block.gif")} alt="" />
        </div>
      )}
      {blog && <BlogList blog={blog} />}
    </section>
  );
};

export default Home;
