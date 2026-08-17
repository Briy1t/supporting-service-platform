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


  const [mostrarPolitica, setMostrarPolitica] = useState(false);
  const [politicaLeida, setPoliticaLeida] = useState(false);

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
      telefono: e.target.telefono.value,
      mensaje: e.target.mensaje.value,
      privacidad: e.target.privacidad.checked,
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
                pattern="^\\+?\\d{9,15}$"
              />
            </div>

            {/* Campo: Mensaje */}
            <div className="form-group">
              <label>Mensaje</label>
              <textarea 
                name="mensaje" 
                rows="5" 
                required
                minLength={5}
              ></textarea>
            </div>

            {/* Bloque de privacidad */}
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
                  Acepto la política de privacidad
                </label>
              )}
            </div>

            {/* Botón enviar */}
            <button type="submit" className="btn-primary">
              Enviar Solicitud
            </button>
          </form>

        </section>
      </main>

      {mostrarPolitica && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Política de Privacidad</h2>

            <p><strong>Última actualización:</strong> Agosto 2026</p>

            <h3>¿Qué datos recogemos?</h3>
            <p>Nombre, correo, teléfono, empresa y descripción de la consulta.</p>

            <h3>¿Para qué los usamos?</h3>
            <p>Para gestionar su solicitud y enviar una propuesta personalizada.</p>

            <h3>¿Quién los procesa?</h3>
            <p>Solo el equipo autorizado de Supporting. No se comparten con terceros.</p>

            <h3>¿Cómo se almacenan y protegen?</h3>
            <p>Se transmiten mediante HTTPS/SSL y se guardan temporalmente en sistemas internos protegidos.</p>

            <h3>¿Cómo se eliminan?</h3>
            <p>
              Si se convierte en cliente, se conservan en su expediente.  
              Si es descartado, se eliminan de forma permanente.
            </p>

            <h3>Derechos del usuario</h3>
            <p>
              Puede solicitar acceso, rectificación o eliminación escribiendo a  
              <strong>contactosupporting@gmail.com</strong>.
            </p>

            <button
              className="btn-primary"
              onClick={() => {
                setMostrarPolitica(false);
                setPoliticaLeida(true); // 🔥 Activa el checkbox
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
