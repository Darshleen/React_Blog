import { Link } from "react-router-dom";
import mainIcon from "./img/main.svg";
const vbar = () => {
  return (
    <nav className="nav">
      <h1>The Belial</h1>
      <div className="icon-main">
        <img src={mainIcon} alt=""  />
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" className="secondLink">
          New blog
        </Link>
      </div>
    </nav>
  );
};

export default vbar;
