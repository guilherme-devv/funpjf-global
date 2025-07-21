
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Index from "./pages/Index";
import Historia from "./pages/Historia";
import Contato from "./pages/Contato";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Transparencia from "./pages/Transparencia";
import CRPs from "./pages/CRPs";
import Contabilidade from "./pages/Contabilidade";
import Investimentos from "./pages/Investimentos";
import Certificacoes from "./pages/Certificacoes";
import './styles/main.css';

const App = () => (
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/transparencia" element={<Transparencia />} />
        <Route path="/transparencia/:categoria" element={<Transparencia />} />
        <Route path="/crps" element={<CRPs />} />
        <Route path="/crps/:categoria" element={<CRPs />} />
        <Route path="/contabilidade" element={<Contabilidade />} />
        <Route path="/contabilidade/:categoria" element={<Contabilidade />} />
        <Route path="/investimentos" element={<Investimentos />} />
        <Route path="/investimentos/:categoria" element={<Investimentos />} />
        <Route path="/certificacoes" element={<Certificacoes />} />
        <Route path="/certificacoes/:categoria" element={<Certificacoes />} />
        <Route path="/login" element={<Login />} />
        <Route 
          path="/admin" 
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);

export default App;
