import MonitoringImg from "../assets/img/monitoring.avif";

export default function Monitorizacion() {
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
            <a href="/contacto?tipo=contacto_general">Contacto</a>
          </nav>

          <div className="navbar-right">
            <a className="btn-nav" href="/login">Ingresar</a>
          </div>
        </div>
      </header>

      <main className="container">
        {/* HERO MONITORIZACIÓN */}
        <section className="hero">
          <div className="hero-content">
            <h1>Monitorización en Tiempo Real</h1>
            <p>Supervisión continua de servidores, redes, aplicaciones y servicios críticos.</p>
            <p>Alertas inteligentes, análisis predictivo y reportes automáticos.</p>

            <div className="hero-buttons">
              <a href="#panel" className="btn-primary">Cómo funciona</a>
              <a href="/monitorizacion/demo" className="btn-secondary">Solicitar Demo</a>
            </div>
          </div>

          <div className="hero-image">
            <img src={MonitoringImg} alt="Monitorización Supporting" />
          </div>
        </section>

        {/* SECCIÓN PRINCIPAL */}
        <section id="panel" className="section">
          <h2 className="section-title">Panel de Monitorización</h2>

          <div className="cards">
            <div className="card">
              <h3>Estado de Servidores</h3>
              <p>Disponibilidad, carga, procesos activos y rendimiento general.</p>
            </div>

            <div className="card">
              <h3>Alertas Inteligentes</h3>
              <p>Notificaciones automáticas ante fallos, caídas o comportamientos anómalos.</p>
            </div>

            <div className="card">
              <h3>Análisis Predictivo</h3>
              <p>Detección temprana de problemas antes de que afecten a la operación.</p>
            </div>
          </div>
        </section>

        {/* SECCIÓN EXTRA */}
        <section className="section">
          <h2 className="section-title">Reportes y Auditoría</h2>

          <div className="cards">
            <div className="card">
              <h3>Reportes Automáticos</h3>
              <p>Informes diarios, semanales y mensuales sobre el estado de la infraestructura.</p>
            </div>

            <div className="card">
              <h3>Historial de Eventos</h3>
              <p>Registro completo de incidentes, alertas y acciones realizadas.</p>
            </div>

            <div className="card">
              <h3>Auditoría de Seguridad</h3>
              <p>Revisión de accesos, cambios y actividad sospechosa.</p>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Supporting — IT Support, Hardening & Monitoring</p>
      </footer>
    </div>
  );
}
