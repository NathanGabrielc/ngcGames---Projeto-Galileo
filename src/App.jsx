import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaInicial from "./pages/PaginaInicial";
import Vitrine from "./pages/Vitrine";
import Detalhes from "./components/Detalhes/Detalhes";

import SobreMim from "./pages/SobreMim";
import Error404 from "./pages/404";
import SignIn from "./components/Form/SignIn";
import SignUp from "./components/Form/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/sobre" element={<SobreMim />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/produtos" element={<Vitrine />} />
        <Route path="detalhes" element={<Detalhes />}>
          <Route path=":id" element={<Detalhes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
