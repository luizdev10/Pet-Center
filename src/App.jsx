import NavBar from "./pages/navbar";
import Inicio from "./pages/inicio";
import Sobre from "./pages/sobre";
//import Shop from "./pages/shop";
import BanhoTosa from "./pages/banhoetosa";
import Consultas from "./pages/consulta";
import Footer from "./pages/footer";
import Privacidade from "./pages/privacidade";

function App() {

  return (
    <>
      <NavBar />
      <Inicio />
      <Sobre />
     {/* <Shop />*/}
    <BanhoTosa />
    <Consultas />
      <Privacidade />
      <Footer />
    </>
  )
}

export default App
