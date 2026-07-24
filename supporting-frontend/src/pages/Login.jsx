import LoginImg from "../assets/img/login.png";

export default function Login() {
  return (
    <div>
      {/* NAVBAR */}
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
        {/* HERO LOGIN */}
        <section className="hero">
          <div className="hero-content">
            <h1>Acceso de Usuario</h1>
            <p>Ingresa con tus credenciales para acceder a tu panel de control.</p>
            <p>Si aún no tienes acceso, contacta con nuestro equipo técnico.</p>
          </div>

          <div className="hero-image">
            <img src={LoginImg} alt="Login Supporting" />
          </div>
        </section>

        {/* FORMULARIO DE LOGIN */}
        <section className="section">
          <h2 className="section-title">Iniciar Sesión</h2>

          <form className="card" style={{ maxWidth: "500px", margin: "auto" }}>
            <label>Usuario</label>
            <input
              type="text"
              name="usuario"
              required
              style={{ marginBottom: "20px", padding: "10px", width: "100%" }}
            />

            <label>Contraseña</label>
            <input
              type="password"
              name="password"
              required
              style={{ marginBottom: "20px", padding: "10px", width: "100%" }}
            />

            <button type="submit" className="btn-primary">Ingresar</button>

            <p style={{ marginTop: "20px", color: "#b4c7d7", fontSize: "14px" }}>
              * Panel en construcción — algunas funciones pueden no estar disponibles.
            </p>
          </form>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Supporting — IT Support, Hardening & Monitoring</p>
      </footer>
    </div>
  );
}
