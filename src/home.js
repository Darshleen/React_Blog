import React, { useEffect, useRef, useState } from "react";
import BlogList from "./BlogList";
const Home = () => {
  const [blog, setBlog] = useState(null);
  const[isLoad,setIsLoad]=useState(true);
  let eff = useRef(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (eff.current === false) {
      setTimeout(()=>{
      fetch("http://localhost:8000/blog")
        .then((res) => {
          if(!res.ok){
            throw Error("could not fetch data :(");
          }
          return res.json();
        })
        .then(data =>{
          setBlog(data);
          setIsLoad(false);
          setError(null);
        })
        
        .catch((err) => {
          setError(err.message);
          setIsLoad(false);
        });
      },2000);
      return () => {
        eff.current = true;
      };
  }
  }, []);
  return (
    <section className="homePage">
      { error && <div>{error}</div>}
      {isLoad && <div className="gif"><img src={require('./img/block.gif')} alt="" /></div>  } 
      {blog && <BlogList blog={blog} title="All blogs"  />} 
    </section>
  );
};

export default Home;
