export default function Index() {
  return (
    <div>
      {/* NAVBAR */}
      <header className="navbar">
        <div className="container navbar-inner">
          <div className="logo">SUPPORTING 🫴</div>

          <nav className="navbar-center">
            <a href="#servicios">Servicios</a>
            <a href="/monitorizacion">Monitorización</a>
            <a href="#precios">Precios</a>
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
            <h1>Infraestructura Segura.</h1>
            <h2>Rendimiento Garantizado.</h2>
            <p>Soporte IT profesional, hardening avanzado y monitorización</p>
            <p>continua para empresas modernas.</p>
          </div>

          <div className="hero-image">
            <img src="/assets/img/img_hero.png" alt="Supporting Hero" />
          </div>
        </section>

        {/* SERVICIOS */}
        <section id="servicios" className="section">
          <h2 className="section-title">Servicios Profesionales</h2>

          <div className="cards">
            <div className="card">
              <h3>Soporte IT</h3>
              <p>Gestión, mantenimiento y resolución de incidencias con tiempos de respuesta garantizados.</p>
            </div>

            <div className="card">
              <h3>Hardening</h3>
              <p>Endurecimiento de servidores, sistemas y redes para máxima seguridad.</p>
            </div>

            <div className="card">
              <h3>Monitorización 24/7</h3>
              <p>Supervisión continua de infraestructura, alertas y análisis preventivo.</p>
            </div>
          </div>
        </section>

        {/* PRECIOS */}
        <section id="precios" className="section">
          <h2 className="section-title">Planes de Servicio</h2>

          <div className="pricing">
            <div className="price-card">
              <h3>Básico</h3>
              <p className="price">99€/mes</p>
              <ul>
                <li>Soporte IT</li>
                <li>Monitorización básica</li>
                <li>Actualizaciones mensuales</li>
              </ul>
            </div>

            <div className="price-card featured">
              <h3>Profesional</h3>
              <p className="price">199€/mes</p>
              <ul>
                <li>Soporte IT completo</li>
                <li>Hardening inicial</li>
                <li>Monitorización avanzada</li>
              </ul>
            </div>

            <div className="price-card">
              <h3>Empresarial</h3>
              <p className="price">349€/mes</p>
              <ul>
                <li>Hardening completo</li>
                <li>Monitorización 24/7</li>
                <li>Respuesta prioritaria</li>
              </ul>
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
