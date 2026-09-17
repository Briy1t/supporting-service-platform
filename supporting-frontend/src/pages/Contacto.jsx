import { useState } from "react";
import { enviarContacto } from "../services/api";
import BrandLogo from "../components/BrandLogo";
import { Mail, Phone, MapPin, Send, FileText, Lock } from "lucide-react";
import "../assets/tw/contactos.css";

export default function Contacto() {
  const [mostrarPolitica, setMostrarPolitica] = useState(false);
  const [politicaLeida, setPoliticaLeida] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!politicaLeida) {
      alert("Debes abrir y leer la política de privacidad antes de continuar.");
      return;
    }

    const dataWeb = {
      nombre: e.target.nombre.value,
      email: e.target.email.value,
      telefono: e.target.telefono.value,
      mensaje: e.target.mensaje.value,
      privacidad: e.target.privacidad.checked
    };

    const dataPlataforma = {
      contacto: e.target.nombre.value,
      correo: e.target.email.value,
      telefono: e.target.telefono.value,
      mensaje: e.target.mensaje.value
    };

    try {
      await enviarContacto(dataWeb);

      const res = await fetch("http://localhost:8001/admin/forms/importar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataPlataforma)
      });

      if (!res.ok) {
        const error = await res.json();
        alert(error.detail || "Error al registrar en la plataforma");
        return;
      }

      alert("Solicitud enviada correctamente");
      e.target.reset();
      setPoliticaLeida(false);

    } catch (err) {
      console.error("Error enviando contacto:", err);
      alert("Hubo un error al enviar la solicitud");
    }
  };

  return (
    <div className="contacto-page">
      <div className="contacto-glow-1" />
      <div className="contacto-glow-2" />

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-xl z-50 border-b border-slate-800/80 py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <BrandLogo />
          <a href="/" className="text-xs font-semibold text-slate-400 hover:text-cyan-400 transition-colors">
            ← Volver al Inicio
          </a>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="max-w-5xl mx-auto px-6 pt-36 pb-12 space-y-12 w-full relative z-10">
        <div className="text-center space-y-3">
          <h1 className="text-4xl font-extrabold text-white tracking-tight">
            Hablemos de su <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Infraestructura</span>
          </h1>
          <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
            ¿Tiene alguna consulta o necesita una solución personalizada para su empresa? Nuestro equipo responderá a la brevedad.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* CONTACTO DIRECTO */}
          <div className="contacto-card space-y-6">
            <h3 className="text-base font-bold text-white tracking-wide">Contacto Directo</h3>
            
            <div className="space-y-5 text-sm">
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-xs text-slate-300 font-medium">contactosupporting@gmail.com</span>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-xs text-slate-300 font-medium">+34 900 000 000</span>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-xs text-slate-300 font-medium">Soporte Global / Remoto</span>
              </div>
            </div>
          </div>

          {/* FORMULARIO */}
          <form onSubmit={handleSubmit} className="md:col-span-2 contacto-card space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="contacto-label">Nombre Completo</label>
                <input 
                  type="text" 
                  name="nombre"
                  required
                  placeholder="Ej. Juan Pérez"
                  className="contacto-input"
                />
              </div>

              <div className="space-y-1.5">
                <label className="contacto-label">Correo Electrónico</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="juan@empresa.com"
                  className="contacto-input"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="contacto-label">Teléfono</label>
              <input 
                type="tel" 
                name="telefono"
                placeholder="+34 600 000 000"
                className="contacto-input"
              />
            </div>

            <div className="space-y-1.5">
              <label className="contacto-label">Mensaje</label>
              <textarea 
                name="mensaje"
                required
                rows="4" 
                placeholder="¿En qué podemos ayudarle?"
                className="contacto-input resize-none"
              ></textarea>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <input 
                type="checkbox" 
                name="privacidad" 
                id="privacidad"
                disabled={!politicaLeida}
                required
                className={`w-4 h-4 rounded accent-cyan-400 ${!politicaLeida ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
              />
              <label htmlFor="privacidad" className="text-xs text-slate-400">
                Acepto la{" "}
                <button 
                  type="button" 
                  onClick={() => setMostrarPolitica(true)}
                  className="text-cyan-400 underline hover:text-cyan-300 font-medium"
                >
                  Política de Privacidad
                </button>
                {!politicaLeida && (
                  <span className="text-[10px] text-amber-400/90 ml-2 inline-flex items-center gap-1 font-medium bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    <Lock className="w-3 h-3 inline" /> Leer antes de aceptar
                  </span>
                )}
              </label>
            </div>

            <button type="submit" className="contacto-btn">
              <Send className="w-3.5 h-3.5" /> Enviar Mensaje
            </button>
          </form>
        </div>
      </main>

      {/* MODAL PRIVACIDAD */}
      {mostrarPolitica && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 p-6 md:p-8 rounded-2xl max-w-lg w-full space-y-4 shadow-2xl">
            <div className="flex items-center gap-2 text-cyan-400">
              <FileText className="w-5 h-5" />
              <h2 className="text-lg font-bold">Política de Privacidad</h2>
            </div>
            
            <p className="text-xs text-slate-500"><strong>Última actualización:</strong> Agosto 2026</p>

            <div className="space-y-3 text-xs text-slate-300 max-h-60 overflow-y-auto pr-2">
              <div>
                <h3 className="font-semibold text-slate-100">¿Qué datos recogemos?</h3>
                <p className="text-slate-400">Nombre, correo electrónico, teléfono y descripción detallada de su consulta.</p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-100">¿Para qué los usamos?</h3>
                <p className="text-slate-400">Exclusivamente para gestionar su solicitud técnica o propuesta comercial.</p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-100">¿Quién los procesa?</h3>
                <p className="text-slate-400">Únicamente el equipo autorizado de Supporting mediante nuestros canales seguros.</p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-100">Retención y eliminación</h3>
                <p className="text-slate-400">
                  Se conservan durante la relación comercial o se eliminan de forma segura tras resolver su consulta.
                </p>
              </div>
            </div>

            <button
              type="button"
              className="w-full py-3 bg-cyan-400 text-slate-950 font-bold rounded-xl text-xs hover:bg-cyan-300 transition-colors mt-4 cursor-pointer"
              onClick={() => {
                setMostrarPolitica(false);
                setPoliticaLeida(true);
              }}
            >
              He leído la política de privacidad
            </button>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="border-t border-slate-800 bg-slate-900/50 py-6 text-center text-xs text-slate-500 space-y-1 relative z-10">
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