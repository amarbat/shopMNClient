import './css/Header.css';

const Header = () => {
  return (
    <div className="Header">
      <div className="nav-logo">Logo</div>
      <div className="nav-menu">
        <div className="nav-menu-item">Login</div>
        <div className="nav-menu-item">Sign Up</div>
      </div>
    </div>
  );
}

export default Header;
