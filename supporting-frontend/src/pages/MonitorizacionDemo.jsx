import DashboardImg from "../assets/img/dashboard.png";
import CpuChart from "../assets/img/cpu-chart.png";
import NetworkChart from "../assets/img/network-chart.png";
export default function MonitorizacionDemo() {
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
        {/* HERO DEMO */}
        <section className="hero">
          <div className="hero-content">
            <h1>Demo del Panel de Monitorización</h1>
            <p>Vista simulada del panel que utilizan nuestros clientes para supervisar su infraestructura.</p>
            <p>Indicadores en tiempo real, alertas inteligentes y análisis predictivo.</p>

            <div className="hero-buttons">
              <a href="#dashboard" className="btn-primary">Ver Simulación</a>
              <a href="/contacto?tipo=solicitud_acceso" className="btn-secondary">Solicitar Acceso Real</a>
            </div>
          </div>

          <div className="hero-image">
            <img src={DashboardImg} alt="Panel Simulado" />
          </div>
        </section>

        {/* DASHBOARD SIMULADO */}
        <section id="dashboard" className="section">
          <h2 className="section-title">Dashboard Simulado</h2>

          <div className="cards">
            <div className="card">
              <h3>Estado General</h3>
              <p>
                ✔ 98% de disponibilidad<br />
                ✔ 0 incidentes críticos<br />
                ✔ 3 alertas informativas
              </p>
            </div>

            <div className="card">
              <h3>Uso de Recursos</h3>
              <p>
                CPU: 42%<br />
                RAM: 63%<br />
                Disco: 71%
              </p>
            </div>

            <div className="card">
              <h3>Servicios Activos</h3>
              <p>
                API Principal<br />
                Base de Datos<br />
                Servidor Web<br />
                Firewall
              </p>
            </div>
          </div>
        </section>

        {/* GRÁFICOS SIMULADOS */}
        <section className="section">
          <h2 className="section-title">Gráficos de Actividad</h2>

          <div className="cards">
            <div className="card">
              <h3>Actividad de CPU</h3>
              <img
                src={CpuChart}
                alt="CPU Chart"
                style={{ width: "100%", marginTop: "15px" }}
              />
            </div>

            <div className="card">
              <h3>Actividad de Red</h3>
              <img
                src={NetworkChart}
                alt="Network Chart"
                style={{ width: "100%", marginTop: "15px" }}
              />
            </div>

            <div className="card">
              <h3>Alertas Recientes</h3>
              <p>
                • 10:22 — Latencia elevada<br />
                • 09:58 — Reinicio de servicio<br />
                • 09:41 — Pico de tráfico
              </p>
            </div>
          </div>
        </section>

        {/* SECCIÓN FINAL */}
        <section className="section">
          <h2 className="section-title">¿Quieres Ver el Panel Real?</h2>

          <div className="cards">
            <div className="card">
              <h3>Acceso para Empresas</h3>
              <p>Solicita acceso al panel real y prueba la monitorización avanzada.</p>
              <a href="/contacto?tipo=acceso_empresas" className="btn-primary">Solicitar Acceso</a>
            </div>

            <div className="card">
              <h3>Integración Personalizada</h3>
              <p>Adaptamos el panel a tus servidores, redes y aplicaciones.</p>
              <a href="/contacto?tipo=integracion_personalizada" className="btn-secondary">Hablar con un Técnico</a>
            </div>

            <div className="card">
              <h3>Demo Guiada</h3>
              <p>Un técnico te muestra el panel en directo y responde tus dudas.</p>
              <a href="/contacto?tipo=demo_guiada" className="btn-primary">Agendar Demo</a>
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

