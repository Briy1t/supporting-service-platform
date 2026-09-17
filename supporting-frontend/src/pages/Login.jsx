import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginImg from "../assets/img/login.png";
import BrandLogo from "../components/BrandLogo";
import { LogIn, KeyRound, User, ShieldCheck } from "lucide-react";
import "../assets/tw/login.css";

export default function Login() {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:8000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ usuario, password })
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.detail || "Credenciales incorrectas");
        return;
      }

      const data = await response.json();

      localStorage.setItem("token", data.token);
      localStorage.setItem("usuario", data.usuario);
      localStorage.setItem("rol", data.rol);

      navigate("/panel");

    } catch (err) {
      setError("Error de conexión con el servidor");
    }
  };

  return (
    <div className="login-page">
      <div className="login-glow-top" />

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full bg-[#020b2b]/80 backdrop-blur-xl z-50 border-b border-slate-800/80 py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <BrandLogo />
          <a href="/" className="text-xs font-semibold text-slate-400 hover:text-cyan-400 transition-colors">
            ← Volver al Inicio
          </a>
        </div>
      </header>

      {/* CONTENIDO CENTRADO VERTICAL Y HORIZONTALMENTE */}
      <main className="flex-1 flex items-center justify-center px-6 pt-24 pb-12 w-full relative z-10">
        <div className="login-card grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* LADO IZQUIERDO: Mensaje institucional e Imagen */}
          <div className="space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" /> Acceso Corporativo
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Acceso de <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Usuario</span>
              </h1>
              <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                Ingresa con tus credenciales asignadas para gestionar y supervisar la plataforma en tiempo real.
              </p>
            </div>

            <div className="pt-2 flex justify-center md:justify-start">
              <img 
                src={LoginImg} 
                alt="Supporting Login" 
                className="w-44 md:w-52 h-auto drop-shadow-[0_10px_25px_rgba(6,182,212,0.2)]" 
              />
            </div>
          </div>

          {/* LADO DERECHO: Formulario de Login */}
          <form onSubmit={handleLogin} className="space-y-4 bg-[#0e1a42] p-6 md:p-8 rounded-xl border border-slate-700/60 shadow-inner">
            <div className="space-y-1">
              <h2 className="text-lg font-bold text-white">Iniciar Sesión</h2>
              <p className="text-xs text-slate-400">Introduce tus datos de acceso</p>
            </div>

            {error && (
              <div className="login-error-alert">
                {error}
              </div>
            )}

            <div className="space-y-3 pt-2">
              <div className="space-y-1.5">
                <label className="login-label">
                  <User className="w-3.5 h-3.5 text-cyan-400" /> Usuario
                </label>
                <input
                  type="text"
                  value={usuario}
                  onChange={(e) => setUsuario(e.target.value)}
                  required
                  placeholder="Nombre de usuario"
                  className="login-input"
                />
              </div>

              <div className="space-y-1.5">
                <label className="login-label">
                  <KeyRound className="w-3.5 h-3.5 text-cyan-400" /> Contraseña
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  className="login-input"
                />
              </div>
            </div>

            <button type="submit" className="login-btn-primary">
              <LogIn className="w-4 h-4" /> Ingresar
            </button>
          </form>

        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800/80 bg-[#070d1e] py-4 text-center text-xs text-slate-500 space-y-1 relative z-10">
        <p>© 2026 Supporting — IT Support, Hardening & Monitoring</p>
        <p>
          <a href="mailto:contactosupporting@gmail.com" className="text-cyan-400 hover:underline">
            contactosupporting@gmail.com
          </a>
        </p>
      </footer>
    </div>
  );
}