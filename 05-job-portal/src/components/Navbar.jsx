import { Bookmark } from "lucide-react"; 

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">JobPortal</h2>

      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/">Jobs</a></li>
        <li><a href="/">Companies</a></li>
        <li><a href="/">About</a></li>
      </ul>

      <button className="saved-btn">
        <Bookmark size={18} />
        Saved Jobs
      </button>
    </nav>
  );
}

export default Navbar;