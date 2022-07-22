import { useState } from "react";
import {useNavigate} from "react-router-dom"
const Create = () => {
    const [title,setTitle]=useState("");
    const [body,setBody]=useState("");
    const [author,setAuthor]=useState("");
    const [imageLink,setimageLink]=useState("");
    const [mainImage,setMainImage]=useState("");
    const redirect=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const blog={title,body,author,imageLink,mainImage};
        fetch("http://localhost:8000/blog",{
            method:"POST",
            headers: {"content-Type" : "application/json"},
            body: JSON.stringify(blog)
        } )
        .then(()=>{
        console.log("new blog added")
        redirect("/");
    })
    }
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input type="text"required value={title} onChange={(e)=>setTitle(e.target.value)} />
        <label>Blog Body:</label>
        <textarea value={body} onChange={(e)=>setBody(e.target.value)} required>
        </textarea>
        <label>Blog Author:</label>
        <select value={author} onChange={(e)=>setAuthor(e.target.value)}>
            <option value="jason marley">jason marley</option>
            <option value="chris evan">chris evan</option>
            <option value="henry park">henry park</option>
        </select>
        {/* <label>Blog Thumbnail:</label>
            <input type="file" accept="image/*" value={imageLink} onChange={(e)=>setimageLink(e.target.value)} />
        <label>Blog Main Image:</label>
            <input type="file" accept="image/*" value={mainImage} onChange={(e)=>setMainImage(e.target.value)} /> */}
        <button>Add Blog</button>
      </form>
      <img src={imageLink} alt="" />
      <p>{imageLink}</p>
    </div>
  );
};

export default Create;
