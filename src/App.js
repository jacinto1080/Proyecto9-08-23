import "./App.css";
import { Route, Routes } from "react-router";
import MainPage from "./pages/mainPage";
// import NavBar from "./components/navBarNuevo/navBarNuevo";
import ModalCitas from "./components/modalCitas/modalCitas";
import Header from "./components/header/header";

function App() {
  return (
    <> 
    <Header/>
    <Routes>
      <Route path="/" element={<MainPage/>} />
      <Route path="/modalCitas" element={<ModalCitas/>} />
    </Routes>
    </>
  );
}

export default App;
