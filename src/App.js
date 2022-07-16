import Navbar from "./Navbar";
import Home from "./home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./Create";
import BlogDetail from "./BLogDetail";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/create" element={<Create/> }/>
          <Route exact path="/blog/:id" element={<BlogDetail/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
