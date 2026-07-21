import { useEffect, useState } from "react";

export default function Contacto() {
  const [tipo, setTipo] = useState("contacto_general");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tipoURL = params.get("tipo") || "contacto_general";
    setTipo(tipoURL);
  }, []);

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
        {/* HERO CONTACTO */}
        <section className="hero">
          <div className="hero-content">
            <h1>Contáctanos</h1>
            <p>Estamos aquí para ayudarte.</p>
            <p>Completa el formulario y nos pondremos en contacto contigo.</p>

            <p style={{ marginTop: "20px", fontSize: "14px", color: "#b4c7d7" }}>
              Tipo de solicitud detectado:
              <strong style={{ color: "#39dfc2" }}>
                {tipo.replace(/_/g, " ")}
              </strong>
            </p>
          </div>

          <div className="hero-image">
            <img src="/assets/img/contact.png" alt="Contacto Supporting" />
          </div>
        </section>

        {/* FORMULARIO */}
        <section className="section">
          <h2 className="section-title">Formulario de Contacto</h2>

          <form className="card" style={{ maxWidth: "600px", margin: "auto" }}>
            <input type="hidden" name="tipo_solicitud" value={tipo} />

            <label>Nombre</label>
            <input
              type="text"
              name="nombre"
              required
              style={{ marginBottom: "20px", padding: "10px", width: "100%" }}
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              required
              style={{ marginBottom: "20px", padding: "10px", width: "100%" }}
            />

            <label>Mensaje</label>
            <textarea
              name="mensaje"
              rows="5"
              required
              style={{ marginBottom: "20px", padding: "10px", width: "100%" }}
            ></textarea>

            <button type="submit" className="btn-primary">
              Enviar Solicitud
            </button>
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
