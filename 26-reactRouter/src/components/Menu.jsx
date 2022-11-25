import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Contacts">Contacts</Link>
    </nav>
  );
};

export default Menu;
