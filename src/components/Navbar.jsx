import profile from "../assets/images/profile.jpg";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-section">
        <img src={profile} alt="profile" />

        <span>Your Name</span>
      </div>

      <ul>
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
    </nav>
  );
}

export default Navbar;