import Contact from "../assets/img/contact.png";
import { useEffect, useState } from "react";
import { enviarContacto } from "../services/api";

export default function Contacto() {

  const [tipo, setTipo] = useState("general");
  const [mostrarPolitica, setMostrarPolitica] = useState(false);
  const [politicaLeida, setPoliticaLeida] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataWeb = {
      nombre: e.target.nombre.value,
      email: e.target.email.value,
      telefono: e.target.telefono.value,
      mensaje: e.target.mensaje.value,
      tipo: tipo,
      privacidad: e.target.privacidad.checked
    };

    const dataPlataforma = {
      contacto: e.target.nombre.value,
      correo: e.target.email.value,
      telefono: e.target.telefono.value,
      mensaje: e.target.mensaje.value,
      origen: tipo
    };

    try {
      await enviarContacto(dataWeb);

      const res = await fetch("http://localhost:8001/admin/forms/importar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataPlataforma)
      });

      if (!res.ok) {
        const error = await res.json();
        alert(error.detail);
        return;
      }
      alert("Solicitud enviada correctamente");

    } catch (err) {
      console.error("Error enviando contacto:", err);
      alert("Hubo un error al enviar la solicitud");
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

        {/* HERO */}
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

        <section className="section">
          <h2 className="section-title">Formulario de Contacto</h2>

          <form 
            className="form-contact"
            onSubmit={handleSubmit}
          >
            {/* Campo: Nombre */}
            <div className="form-group">
              <label>Nombre</label>
              <input 
                type="text" 
                name="nombre" 
                required
                pattern="^[A-Za-zÁÉÍÓÚáéíóúñÑ ]{3,50}$"
              />
            </div>

            {/* Campo: Email */}
            <div className="form-group">
              <label>Email</label>
              <input 
                type="email" 
                name="email" 
                required
              />
            </div>

            {/* Campo: Teléfono */}
            <div className="form-group">
              <label>Teléfono</label>
              <input 
                type="tel" 
                name="telefono" 
                required
                pattern="^\+?\d[\d\s]{8,14}$"
                title="Ingrese un número de teléfono válido"
              />
            </div>

            <div className="form-group">
              <label>Mensaje</label>
              <textarea 
                name="mensaje" 
                rows="5" 
                required
                minLength={5}
              ></textarea>
            </div>

            <div className="form-privacy">
              <p className="form-info">
                Antes de enviar su solicitud lea nuestra política de privacidad.
              </p>

              <button 
                type="button" 
                className="btn-secondary"
                onClick={() => setMostrarPolitica(true)}
              >
                Ver política de privacidad
              </button>

              {politicaLeida && (
                <label className="privacy-check">
                  <input type="checkbox" name="privacidad" required />
                  Acepto las políticas de privacidad
                </label>
              )}
            </div>

            <button type="submit" className="btn-primary">
              Enviar Solicitud
            </button>

            <div className="volver-container">
              <button className="btn-nav" onClick={() => window.history.back()}>
                ← Volver
              </button>
            </div>
          </form>

        </section>
      </main>

      {mostrarPolitica && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Política de Privacidad</h2>

            <p><strong>Última actualización:</strong> Agosto 2026</p>

            <h3>¿Qué datos recogemos?</h3>
            <p>Nombre, correo, teléfono y descripción de la consulta.</p>

            <h3>¿Para qué los usamos?</h3>
            <p>Para gestionar su solicitud y enviar una propuesta personalizada.</p>

            <h3>¿Quién los procesa?</h3>
            <p>Solo el equipo autorizado de Supporting.</p>

            <h3>¿Cómo se eliminan?</h3>
            <p>
              Si se convierte en cliente, se conservan en su expediente.  
              Si es descartado, se eliminan de forma permanente.
            </p>

            <button
              className="btn-primary"
              onClick={() => {
                setMostrarPolitica(false);
                setPoliticaLeida(true);
              }}
              style={{ marginTop: "20px" }}
            >
              He leído la política
            </button>
          </div>
        </div>
      )}

      <footer className="footer">
        <p>© 2026 Supporting — IT Support, Hardening & Monitoring</p>
        <p>
          <a href="mailto:contactosupporting@gmail.com">contactosupporting@gmail.com</a>
        </p>
      </footer>
    </div>
  );
}
