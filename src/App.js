import "./App.css";
import { Route, Routes } from "react-router";
import MainPage from "./pages/mainPage";
import Header from "./components/header/header";
import PreguntasFrecuentes from "./components/preguntas/preguntasFrecuentes";

function App() {
  return (
    <> 
    <Header/>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/preguntasFrecuentes" element={<PreguntasFrecuentes />} />
    </Routes>
    </>
  );
}

export default App;
