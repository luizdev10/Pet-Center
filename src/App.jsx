import NavBar from "./pages/navbar";
import Inicio from "./pages/inicio";
import Sobre from "./pages/sobre";
//import Shop from "./pages/shop";
import BanhoTosa from "./pages/banhoetosa";
import Consultas from "./pages/consulta";
function App() {

  return (
    <>
      <NavBar />
      <Inicio />
      <Sobre />
     {/* <Shop />*/}
    <BanhoTosa />
    <Consultas />
    </>
  )
}

export default App
