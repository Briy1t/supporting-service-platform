import TecnicosImg from "../assets/img/tecnicos.png";
import "../assets/tw/tecnicos.css";

export default function Tecnicos() {
  return (
    <div className="min-h-screen bg-[#020b2b] text-slate-100 pt-28 pb-16 px-4 max-w-7xl mx-auto space-y-12">
      <header className="fixed top-0 left-0 w-full bg-[#020b2b]/90 backdrop-blur-md z-50 border-b border-cyan-500/20 py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="text-xl font-bold font-mono text-cyan-400">SUPPORTING 🫴</div>
          <div>
            <a className="px-4 py-2 border border-cyan-500/40 text-cyan-400 rounded-lg text-xs font-semibold hover:bg-cyan-500/10 transition" href="/login">Salir</a>
          </div>
        </div>
      </header>

      <main>
        <section className="bg-[#0b111e] border border-cyan-500/20 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <h1 className="text-3xl font-bold font-mono text-white">Equipo Técnico</h1>
            <p className="text-slate-300 text-sm">Profesionales especializados en soporte IT, hardening y monitorización.</p>
            <p className="text-xs text-slate-500">Esta plantilla es ficticia y sirve como demostración.</p>
          </div>

          <div className="w-full md:w-1/3 flex justify-center">
            <img src={TecnicosImg} alt="Técnicos Supporting" className="max-h-48 object-contain" />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold font-mono text-center text-white mb-8">Técnicos Disponibles</h2>

          <div className="tecnicos-grid">
            <div className="tecnico-card">
              <h3>Laura Martínez</h3>
              <p>Soporte IT</p>
              <p className="text-xs text-slate-400">Resolución de incidencias, mantenimiento y asistencia remota.</p>
            </div>

            <div className="tecnico-card">
              <h3>Carlos Gómez</h3>
              <p>Ingeniero de Hardening</p>
              <p className="text-xs text-slate-400">Endurecimiento de servidores, seguridad avanzada y auditorías.</p>
            </div>

            <div className="tecnico-card">
              <h3>Andrea Ruiz</h3>
              <p>Analista de Monitorización</p>
              <p className="text-xs text-slate-400">Supervisión 24/7, alertas inteligentes y análisis predictivo.</p>
            </div>

            <div className="tecnico-card">
              <h3>Javier Torres</h3>
              <p>Administrador de Redes</p>
              <p className="text-xs text-slate-400">Gestión de infraestructura, firewalls y conectividad.</p>
            </div>
          </div>
        </section>

        <div className="text-center pt-8">
          <button className="px-6 py-2 border border-slate-700 text-slate-300 rounded-lg text-sm hover:border-cyan-400 hover:text-cyan-400 transition" onClick={() => window.history.back()}>
            ← Volver
          </button>
        </div>
      </main>

      <footer className="mt-16 border-t border-slate-800 pt-8 text-center text-xs text-slate-500 space-y-2">
        <p>© 2026 Supporting — IT Support, Hardening & Monitoring</p>
        <p><a href="mailto:contactosupporting@gmail.com" className="text-cyan-400 hover:underline">contactosupporting@gmail.com</a></p>
      </footer>
    </div>
  );
}