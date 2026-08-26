import { useEffect, useState } from "react";
import heroImg from "../assets/img/img_hero.png";
import BrandLogo from "../components/BrandLogo";
import { ShieldCheck, Server, Activity, ArrowRight, Check } from "lucide-react";
import "../assets/tw/index.css";

export default function Index() {
  const [servicios, setServicios] = useState([]);
  const [planes, setPlanes] = useState([]);

  // Consumo dinámico preparado para tus futuros endpoints de API
  useEffect(() => {
    // Reemplazar URLs con tus endpoints reales cuando estén listos
    // fetch('/api/servicios').then(res => res.json()).then(data => setServicios(data));
    // fetch('/api/planes').then(res => res.json()).then(data => setPlanes(data));

    setServicios([
      { id: 1, titulo: "Soporte IT Pro", desc: "Resolución de incidencias y gestión técnica con tiempos de respuesta SLA garantizados.", icon: Server },
      { id: 2, titulo: "Hardening Avanzado", desc: "Aislamiento, configuración segura y blindaje de infraestructura crítica.", icon: ShieldCheck },
      { id: 3, titulo: "Monitorización 24/7", desc: "Telemetría en tiempo real, alertas preventivas y análisis de rendimiento constante.", icon: Activity },
    ]);

    setPlanes([
      { id: 1, nombre: "Básico", precio: "99€", periodo: "/mes", popular: false, items: ["Soporte IT estándar", "Monitorización básica", "Reportes mensuales"] },
      { id: 2, nombre: "Profesional", precio: "199€", periodo: "/mes", popular: true, items: ["Soporte IT prioritario 24/7", "Hardening inicial completo", "Monitorización avanzada", "SLA 2 horas"] },
      { id: 3, nombre: "Empresarial", precio: "349€", periodo: "/mes", popular: false, items: ["Infraestructura dedicada", "Hardening continuo", "SLA 15 minutos", "Auditorías trimestrales"] }
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-[#020b2b] text-slate-100 selection:bg-cyan-500 selection:text-black">
      {/* NAVBAR SIMPLIFICADA */}
      <header className="fixed top-0 left-0 w-full bg-[#020b2b]/80 backdrop-blur-xl z-50 border-b border-slate-800/80 py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <BrandLogo />
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#soluciones" className="hover:text-cyan-400 transition-colors">Soluciones</a>
            <a href="/monitorizacion" className="hover:text-cyan-400 transition-colors">Monitorización en Vivo</a>
            <a href="/contacto" className="hover:text-cyan-400 transition-colors">Contacto</a>
          </nav>

          <a href="/login" className="px-5 py-2.5 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 text-cyan-400 rounded-xl text-xs font-bold hover:border-cyan-400 hover:bg-cyan-500/20 transition-all shadow-lg shadow-cyan-500/5">
            Ingresar
          </a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-20 space-y-28">
        {/* HERO SECTION */}
        <section className="relative rounded-3xl bg-gradient-to-b from-[#0b132b] to-[#020b2b] border border-slate-800 p-8 md:p-14 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-0 pointer-events-none" />
          
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-6">
              <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wide">
                Gestión IT de Alto Rendimiento
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white">
                Infraestructura Segura. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Rendimiento Garantizado.</span>
              </h1>
              <p className="text-slate-400 text-base leading-relaxed">
                Plataforma integral de soporte IT, hardening avanzado y monitorización proactiva para empresas que requieren alta disponibilidad.
              </p>
              <div className="pt-2 flex gap-4">
                <a href="#soluciones" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold text-sm hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20">
                  Explorar Planes <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <img src={heroImg} alt="Supporting Dashboard" className="max-h-80 object-contain drop-shadow-[0_20px_50px_rgba(6,182,212,0.15)]" />
            </div>
          </div>
        </section>

        {/* SERVICIOS PROFESIONALES */}
        <section id="soluciones" className="space-y-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">Servicios Profesionales</h2>
            <p className="text-slate-400 text-sm">Capacidades técnicas diseñadas para proteger y optimizar sus sistemas.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {servicios.map((s) => {
              const IconComp = s.icon || Server;
              return (
                <div key={s.id} className="bg-[#0b111e] p-8 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 shadow-xl space-y-4 group">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{s.titulo}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* PLANES DE SERVICIO */}
        <section className="space-y-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">Planes Adaptados a su Empresa</h2>
            <p className="text-slate-400 text-sm">Seleccione la modalidad de soporte o contáctenos para un plan a medida.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {planes.map((p) => (
              <div 
                key={p.id} 
                className={`p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 relative ${
                  p.popular 
                    ? "bg-gradient-to-b from-[#0e172a] to-[#0b111e] border-2 border-cyan-400 shadow-2xl shadow-cyan-500/10 scale-105" 
                    : "bg-[#0b111e] border border-slate-800"
                }`}
              >
                {p.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-cyan-400 text-slate-950 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                    Más Popular
                  </span>
                )}

                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white">{p.nombre}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-white tracking-tight">{p.precio}</span>
                    <span className="text-slate-400 text-xs">{p.periodo}</span>
                  </div>

                  <ul className="space-y-3 text-sm text-slate-300">
                    {p.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <a 
                    href={`/contacto?plan=${p.nombre.toLowerCase()}`}
                    className={`w-full py-3 rounded-xl font-bold text-xs text-center block transition-all ${
                      p.popular 
                        ? "bg-cyan-400 text-slate-950 hover:bg-cyan-300 shadow-lg shadow-cyan-400/20" 
                        : "bg-slate-800 text-slate-200 hover:bg-slate-700"
                    }`}
                  >
                    Contratar Plan
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800/80 bg-[#070d1e] py-10 text-center text-xs text-slate-500 space-y-2">
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