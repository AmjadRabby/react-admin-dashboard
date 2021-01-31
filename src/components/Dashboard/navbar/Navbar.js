import "./Navbar.css";
import avatar from "../../../assets/avatar.svg";

const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className="navbar__left">
        <a className="active_link" href="#">
          Admin
        </a>
      </div>
      <div className="navbar__right">
        <a href="#">
          <i className="fa fa-search" aria-hidden="true"></i>
        </a>

        <a href="#" className="">
          <img width="30" src={avatar} alt="avatar" />
          <span className="ml-2">Amjad Ahmed</span>
        </a>

        <div className="sidebar__logout">
          <i className="fa fa-power-off mr-1"></i>
          <a href="#">Log out</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
