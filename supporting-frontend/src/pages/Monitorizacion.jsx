import MonitoringImg from "../assets/img/monitoring.avif";
import DashboardImg from "../assets/img/dashboard.png"; 
import CpuChart from "../assets/img/cpu-chart.png";
import NetworkChart from "../assets/img/network-chart.png";

export default function Monitorizacion() {
  return (
    <div>
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
        <section className="hero">
          <div className="hero-content">
            <h1>Monitorización en Tiempo Real</h1>
            <p>Supervisión continua de servidores, redes, aplicaciones y servicios críticos.</p>
            <p>Alertas inteligentes, análisis predictivo y reportes automáticos.</p>         
          </div>
          <div className="hero-image">
            <img src={MonitoringImg} alt="Monitorización Supporting" />
          </div>
        </section>

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

        <section id="demo" className="hero">
          <div className="hero-content">
            <h1>Demo del Panel de Monitorización</h1>
            <p>Vista simulada del panel que utilizan nuestros clientes para supervisar su infraestructura.</p>
            <p>Indicadores en tiempo real, alertas inteligentes y análisis predictivo.Tambien contamos con integracion personalizada.</p>
          </div>

          <div className="hero-image">
            <img src={DashboardImg} alt="Panel Simulado" />
          </div>
        </section>

        <section id="dashboard" className="section">
          <h2 className="section-title">Se componete de : </h2>

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
      </main>

      <footer className="footer">
        <p>© 2026 Supporting — IT Support, Hardening & Monitoring</p>
        <p><a href="mailto:contactosupporting@gmail.com">contactosupporting@gmail.com</a></p>
      </footer>
    </div>
  );
}
