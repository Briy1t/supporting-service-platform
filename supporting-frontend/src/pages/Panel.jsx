import PanelImg from "../assets/img/panel.png";

export default function Panel() {
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
            <a className="btn-nav" href="/login">Salir</a>
          </div>
        </div>
      </header>

      <main className="container">
        {/* HERO PANEL */}
        <section className="hero">
          <div className="hero-content">
            <h1>Panel del Usuario</h1>
            <p>
              Bienvenido a tu área personal. Aquí podrás ver tus servicios contratados,
              estado de monitorización y soporte técnico.
            </p>
            <p>Algunas funciones están en desarrollo.</p>
          </div>

          <div className="hero-image">
            <img src={PanelImg} alt="Panel Supporting" />
          </div>
        </section>

        {/* SECCIÓN PRINCIPAL */}
        <section className="section">
          <h2 className="section-title">Tus Servicios</h2>

          <div className="cards">
            <div className="card">
              <h3>Estado de Monitorización</h3>
              <p>En construcción. Pronto podrás ver el estado de tus servidores y redes.</p>
            </div>

            <div className="card">
              <h3>Soporte Técnico</h3>
              <p>Acceso a técnicos especializados según tu plan contratado.</p>
              <a href="/tecnicos" className="btn-secondary">Ver Técnicos</a>
            </div>

            <div className="card">
              <h3>Historial</h3>
              <p>En construcción. Aquí aparecerán tus reportes y auditorías.</p>
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
