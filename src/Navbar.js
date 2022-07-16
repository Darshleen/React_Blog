import { Link } from "react-router-dom";
const vbar = () => {
  return (
    <nav className="nav">
      <h1>The Belial</h1>
      <div className="links">
          <Link to="/">Home</Link>
          <Link to="/create" className="secondLink">New blog</Link>
      </div>
    </nav>
  );
};

export default vbar;
