import "./Navbar.css";
import profile from "../assets/images/profile.jpg";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="profile-wrapper">
        <img
          src={profile}
          alt="Profile"
          className="profile-pic"
        />
      </div>

      <div className="navbar-container">

        <ul className="nav-links">

          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>

        </ul>

      </div>

    </nav>
  );
}

export default Navbar;