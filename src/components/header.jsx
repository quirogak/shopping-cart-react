import "../styles/header.css";
import NavBar from "./navbar";
const Header = (props) => {
  return (
    <header>
      <h1>{props.logo}</h1>
      <NavBar></NavBar>
    </header>
  );
};

export default Header;
