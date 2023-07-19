import Header from "./components/header"
import Homepage from "./components/homepage"
import Footer from "./components/footer"
import trekLogo from "./assets/treklogo.png"

function App() {

  return (
    <>
      <>
        <Header logo={<img alt="trek logo" src={trekLogo}></img>}></Header>
        <Homepage></Homepage>
        <Footer></Footer>
      </>
    </>
  );
}

export default App;
