import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import PokemonDetail from "./pages/pokemon/Pokemon";
import TypePage from "./pages/type/TypePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/pokemon/:id" element={<PokemonDetail />} />
          <Route path="/pokemon/type/:type" element={<TypePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
