import Footer from "./components/footer";
import Header from "./components/header";
import Homepage from "./components/homepage";
import trekLogo from "./img/treklogo.png"

function App() {
  return (
    <>
      <Header logo={<img alt="trek logo" src={trekLogo}></img>}></Header>
      <Homepage></Homepage>
      <Footer></Footer>
    </>
  );
}

export default App;
