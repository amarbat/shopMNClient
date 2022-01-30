import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";

import Landing from "./components/Landing";

const App = () => {
  return (
    <div className="App">

      <div className="nav-bar">
        <div className="nav-logo">
          <Link to="/">Logo</Link>
        </div>
        <div className="nav-menu">
          <div className="nav-menu-item">
            <Link to="/auth/login">Login</Link>
          </div>
          <div className="nav-menu-item">
            <Link to="/auth/signup">SignUp</Link>
          </div>
        </div>
      </div>

      <div className="body">
        <Routes>
          <Route exact path="/" element={<Landing/>}/>
          <Route exact path="/auth/login" element={<Login/>}/>
          <Route exact path="/auth/signup" element={<SignUp/>}/>
        </Routes>
      </div>

      <div className="footer">
        Footer
      </div>

    </div>
  );
}

export default App;