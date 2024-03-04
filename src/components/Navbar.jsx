import { Link } from "react-router-dom";
import homeImg from "../assets/home-icon.png";

function Navbar() {
  return (
    <Link to="/">
      <nav style={{padding: "10px 40px" , background: "blue", textAlign: "center"}}>
        <img
          src={homeImg}
          style={{ height: "40px"}}
        />
      </nav>
    </Link>
  );
}

export default Navbar;
