import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginImg from "../assets/img/login.png";

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
        body: JSON.stringify({
          usuario: usuario,
          password: password
        })
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.detail || "Credenciales incorrectas");
        return;
      }

      const data = await response.json();

      // Guardar token
      localStorage.setItem("token", data.token);
      localStorage.setItem("usuario", data.usuario);
      localStorage.setItem("rol", data.rol);

      // Navegar al panel
      navigate("/panel");

    } catch (err) {
      setError("Error de conexión con el servidor");
    }
  };

  return (
    <div>
      <header className="navbar">
        <div className="container navbar-inner">
          <div className="logo">SUPPORTING 🫴</div>

          <nav className="navbar-center">
            <a href="/#servicios">Servicios</a>
            <a href="/monitorizacion">Monitorización</a>
            <a href="/#precios">Precios</a>
            <a href="/contacto">Contacto</a>
          </nav>

          <div className="navbar-right">
            <a className="btn-nav" href="/login">Ingresar</a>
          </div>
        </div>
      </header>

      <main className="container">
        <section className="hero">
          <div className="hero-content">
            <h1>Acceso de Usuario</h1>
            <p>Ingresa con tus credenciales para acceder a tu panel de control.</p>
          </div>

          <div className="hero-image">
            <img src={LoginImg} alt="Login Supporting" />
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Iniciar Sesión</h2>

          <form className="card" style={{ maxWidth: "500px", margin: "auto" }} onSubmit={handleLogin}>
            
            {error && (
              <p style={{ color: "red", marginBottom: "20px" }}>
                {error}
              </p>
            )}

            <label>Usuario</label>
            <input
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              required
              style={{ marginBottom: "20px", padding: "10px", width: "100%" }}
            />

            <label>Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ marginBottom: "20px", padding: "10px", width: "100%" }}
            />

            <button type="submit" className="btn-primary">Ingresar</button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Supporting — IT Support, Hardening & Monitoring</p>
      </footer>
    </div>
  );
}
