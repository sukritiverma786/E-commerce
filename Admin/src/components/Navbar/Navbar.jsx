import "./Navbar.css";
import navProfile from "../../assets/navProfile.png";
import avatar from "../../assets/avatardrop.png";


const Navbar = () => {
  return (
    <div className="navbar">
      <img src={navProfile} alt="" className="nav-logo" />
      <img src={avatar} className="nav-profile" alt="" />
    </div>
  );
};

export default Navbar;
