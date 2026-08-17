import TecnicosImg from "../assets/img/tecnicos.png";

export default function Tecnicos() {
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
            <h1>Equipo Técnico</h1>
            <p>Profesionales especializados en soporte IT, hardening y monitorización.</p>
            <p>Esta plantilla es ficticia y sirve como demostración.</p>
          </div>

          <div className="hero-image">
            <img src={TecnicosImg} alt="Técnicos Supporting" />
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Técnicos Disponibles</h2>

          <div className="cards">
            <div className="card">
              <h3>Laura Martínez</h3>
              <p>Especialista en Soporte IT</p>
              <p>Resolución de incidencias, mantenimiento y asistencia remota.</p>
            </div>

            <div className="card">
              <h3>Carlos Gómez</h3>
              <p>Ingeniero de Hardening</p>
              <p>Endurecimiento de servidores, seguridad avanzada y auditorías.</p>
            </div>

            <div className="card">
              <h3>Andrea Ruiz</h3>
              <p>Analista de Monitorización</p>
              <p>Supervisión 24/7, alertas inteligentes y análisis predictivo.</p>
            </div>

            <div className="card">
              <h3>Javier Torres</h3>
              <p>Administrador de Redes</p>
              <p>Gestión de infraestructura, firewalls y conectividad.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
          <p>© 2026 Supporting — IT Support, Hardening & Monitoring</p>
          <p><a href="mailto:contactosupporting@gmail.com">contactosupporting@gmail.com</a></p>
      </footer>
    </div>
  );
}
