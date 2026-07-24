import Contact from "../assets/img/contact.png";
import { useEffect, useState } from "react";

import { 
  enviarContacto,
  enviarAccesoEmpresas,
  enviarIntegracion,
  enviarDemoGuiada
} from "../services/api";

export default function Contacto() {
  const [tipo, setTipo] = useState("contacto_general");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tipoURL = params.get("tipo") || "contacto_general";
    setTipo(tipoURL);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      nombre: e.target.nombre.value,
      email: e.target.email.value,
      mensaje: e.target.mensaje.value,
      tipo: tipo
    };

    try {
      if (tipo === "contacto_general") {
        await enviarContacto(data);
      } 
      else if (tipo === "acceso_empresas") {
        await enviarAccesoEmpresas(data);
      } 
      else if (tipo === "integracion_personalizada") {
        await enviarIntegracion(data);
      } 
      else if (tipo === "demo_guiada") {
        await enviarDemoGuiada(data);
      }

      alert("Solicitud enviada correctamente");
    } catch (error) {
      alert("Error al enviar la solicitud");
      console.error(error);
    }
  };

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
            <img src={Contact} alt="Contacto Supporting" />
          </div>
        </section>

        {/* FORMULARIO */}
        <section className="section">
          <h2 className="section-title">Formulario de Contacto</h2>

          <form 
            className="card" 
            style={{ maxWidth: "600px", margin: "auto" }}
            onSubmit={handleSubmit}
          >
            <label>Nombre</label>
            <input type="text" name="nombre" required />

            <label>Email</label>
            <input type="email" name="email" required />

            <label>Mensaje</label>
            <textarea name="mensaje" rows="5" required></textarea>

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
