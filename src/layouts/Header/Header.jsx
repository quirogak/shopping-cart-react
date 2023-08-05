import { Link } from "react-router-dom";
import "/src/styles/header.css";
import NavBar from "../NavBar/NavBar"

const Header = () => {
  return (
    <header>
      <Link to={"/"} className="logo">
        Shopping Cart
      </Link>
      <Link to={"/shop"} className="header-item">
        Products
      </Link>
      <Link to={"/shop/clothing"} className="header-item">
        Clothing
      </Link>
      <Link to={"/shop/electronics"} className="header-item">
        Electronics
      </Link>
      <Link to={"/shop/jewelry"} className="header-item">
        Jewelry
      </Link>
      <NavBar></NavBar>
    </header>
  );
};

export default Header;
