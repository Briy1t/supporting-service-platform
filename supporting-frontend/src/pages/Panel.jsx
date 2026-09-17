import "../assets/tw/panel.css";
import PanelImg from "../assets/img/panel.png";

export default function Panel() {
  return (
    <div>
      <header className="navbar">
        <div className="container navbar-inner">
          <div className="logo">SUPPORTING 🫴</div>


          <div className="navbar-right">
            <a className="btn-nav" href="/login">Salir</a>
          </div>
        </div>
      </header>

      <main className="container">

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

    
      <footer className="footer">
        <p>© 2026 Supporting — IT Support, Hardening & Monitoring</p>
        <p><a href="mailto:contactosupporting@gmail.com">contactosupporting@gmail.com</a></p>
      </footer>
    </div>
  );
}
