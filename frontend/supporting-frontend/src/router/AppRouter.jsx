import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "../pages/Index";
import Contacto from "../pages/Contacto";
import Monitorizacion from "../pages/Monitorizacion";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/monitorizacion" element={<Monitorizacion />} />
      </Routes>
    </BrowserRouter>
  );
}
