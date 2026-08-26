import MonitoringImg from "../assets/img/monitoring.avif";
import DashboardImg from "../assets/img/dashboard.png";
import CpuChart from "../assets/img/cpu-chart.png";
import NetworkChart from "../assets/img/network-chart.png";
import BrandLogo from "../components/BrandLogo";
import { Activity, ShieldCheck, Cpu, AlertTriangle, CheckCircle2, Server, Radio } from "lucide-react";

export default function Monitorizacion() {
  return (
    <div className="min-h-screen bg-[#020b2b] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-xl z-50 border-b border-slate-800/80 py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <BrandLogo />
          <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-slate-300">
            <a href="/soluciones" className="hover:text-cyan-400 transition-colors">Soluciones</a>
            <a href="/monitorizacion" className="text-cyan-400 font-bold">Monitorización</a>
            <a href="/contacto" className="hover:text-cyan-400 transition-colors">Contacto</a>
          </nav>
          <a href="/login" className="px-4 py-2 border border-slate-700 rounded-xl text-xs font-semibold hover:border-cyan-400 transition-all">
            Ingresar
          </a>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="max-w-7xl mx-auto px-6 pt-32 pb-20 space-y-20">
        
        {/* HERO SECTION */}
        <section className="bg-gradient-to-b from-[#0b111e] to-[#020b2b] border border-cyan-500/20 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -z-0 pointer-events-none" />
          
          <div className="space-y-6 max-w-xl z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
              <Radio className="w-3.5 h-3.5 animate-pulse" /> Supervisión en vivo 24/7
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Monitorización en <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Tiempo Real</span>
            </h1>
            <p className="text-slate-300 text-base leading-relaxed">
              Supervisión continua de servidores, redes, aplicaciones y servicios críticos. Alertas inteligentes, análisis predictivo y reportes automáticos.
            </p>
          </div>

          <div className="w-full md:w-1/2 flex justify-center z-10">
            <img 
              src={MonitoringImg} 
              alt="Monitorización Supporting" 
              className="rounded-2xl border border-cyan-500/30 shadow-2xl max-h-80 object-cover w-full"
            />
          </div>
        </section>

        {/* TARJETAS DE CARACTERÍSTICAS */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">Capacidades del Sistema</h2>
            <p className="text-slate-400 text-sm">Control total de su infraestructura con tecnología preventiva</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0b111e] p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 shadow-xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Estado de Servidores</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Disponibilidad, carga de trabajo, procesos activos y rendimiento general en tiempo real.
              </p>
            </div>

            <div className="bg-[#0b111e] p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 shadow-xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Alertas Inteligentes</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Notificaciones automáticas ante fallos, caídas de servicio o comportamientos anómalos.
              </p>
            </div>

            <div className="bg-[#0b111e] p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 shadow-xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Análisis Predictivo</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Detección temprana de patrones de falla antes de que afecten a la operación comercial.
              </p>
            </div>
          </div>
        </section>

        {/* DEMO DEL DASHBOARD */}
        <section className="bg-[#0b111e] border border-cyan-500/20 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 shadow-2xl">
          <div className="space-y-4 max-w-lg">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">Demo del Panel Control</h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Vista simulada del panel central que utilizan nuestros clientes para supervisar su infraestructura.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Indicadores en tiempo real, alertas inteligentes y análisis de rendimiento centralizado.
            </p>
          </div>

          <div className="w-full md:w-1/2">
            <img 
              src={DashboardImg} 
              alt="Panel Simulado" 
              className="rounded-2xl border border-slate-700 shadow-2xl w-full hover:border-cyan-400/50 transition-all"
            />
          </div>
        </section>

        {/* COMPONENTES Y MÉTRICAS */}
        <section className="space-y-8">
          <h2 className="text-2xl font-extrabold text-white tracking-tight">Componentes del Panel</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0b111e] p-6 rounded-2xl border border-slate-800 space-y-3">
              <h3 className="text-lg font-bold text-cyan-400">Estado General</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> 99.8% Disponibilidad</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> 0 Incidentes críticos</li>
                <li className="flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-amber-400" /> 3 Alertas informativas</li>
              </ul>
            </div>

            <div className="bg-[#0b111e] p-6 rounded-2xl border border-slate-800 space-y-3">
              <h3 className="text-lg font-bold text-cyan-400">Uso de Recursos</h3>
              <div className="space-y-2 text-sm text-slate-300">
                <div className="flex justify-between"><span>CPU</span><span className="font-semibold text-white">42%</span></div>
                <div className="flex justify-between"><span>RAM</span><span className="font-semibold text-white">63%</span></div>
                <div className="flex justify-between"><span>Disco</span><span className="font-semibold text-white">71%</span></div>
              </div>
            </div>

            <div className="bg-[#0b111e] p-6 rounded-2xl border border-slate-800 space-y-3">
              <h3 className="text-lg font-bold text-cyan-400">Servicios Activos</h3>
              <ul className="space-y-1.5 text-sm text-slate-300">
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-400" /> API Principal</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-400" /> Base de Datos PostgreSQL</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-400" /> Servidor Web Nginx</li>
              </ul>
            </div>
          </div>
        </section>

        {/* GRÁFICOS */}
        <section className="space-y-8">
          <h2 className="text-2xl font-extrabold text-white tracking-tight">Gráficos de Actividad</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0b111e] p-6 rounded-2xl border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-white">Actividad de CPU</h3>
              <img src={CpuChart} alt="CPU Chart" className="w-full rounded-xl border border-slate-800" />
            </div>

            <div className="bg-[#0b111e] p-6 rounded-2xl border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-white">Actividad de Red</h3>
              <img src={NetworkChart} alt="Network Chart" className="w-full rounded-xl border border-slate-800" />
            </div>

            <div className="bg-[#0b111e] p-6 rounded-2xl border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-white">Alertas Recientes</h3>
              <ul className="space-y-3 text-xs text-slate-400">
                <li className="p-2.5 rounded-lg bg-slate-900 border border-slate-800"><span className="text-amber-400 font-bold">10:22</span> — Latencia elevada detectada</li>
                <li className="p-2.5 rounded-lg bg-slate-900 border border-slate-800"><span className="text-cyan-400 font-bold">09:58</span> — Reinicio de servicio programado</li>
                <li className="p-2.5 rounded-lg bg-slate-900 border border-slate-800"><span className="text-cyan-400 font-bold">09:41</span> — Pico de tráfico mitigado</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800/80 bg-[#0b111e] py-10 text-center text-xs text-slate-500 space-y-3">
        <p>© 2026 Supporting — IT Support, Hardening & Monitoring</p>
        <p>
          <a href="mailto:contactosupporting@gmail.com" className="text-cyan-400 hover:underline">
            contactosupporting@gmail.com
          </a>
        </p>
      </footer>
    </div>
  );
}