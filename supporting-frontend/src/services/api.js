const API_URL = "http://localhost:8000"; // URL de tu backend FastAPI

/* ============================
   AUTH
============================ */

export async function login(usuario, password) {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ usuario, password })
  });
  return response.json();
}

export async function register(usuario, password) {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ usuario, password })
  });
  return response.json();
}

/* ============================
   CONTACTO GENERAL
============================ */

export async function enviarContacto(data) {
  const response = await fetch(`${API_URL}/contacto/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return response.json();
}

/* ============================
   ACCESO EMPRESAS
============================ */

export async function enviarAccesoEmpresas(data) {
  const response = await fetch(`${API_URL}/acceso_empresas/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return response.json();
}

/* ============================
   INTEGRACIÓN PERSONALIZADA
============================ */

export async function enviarIntegracion(data) {
  const response = await fetch(`${API_URL}/integracion/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return response.json();
}

/* ============================
   DEMO GUIADA
============================ */

export async function enviarDemoGuiada(data) {
  const response = await fetch(`${API_URL}/demo_guiada/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return response.json();
}

/* ============================
   TÉCNICOS
============================ */

export async function getTecnicos() {
  const response = await fetch(`${API_URL}/tecnicos/`);
  return response.json();
}

/* ============================
   SERVICIOS
============================ */

export async function getServices() {
  const response = await fetch(`${API_URL}/services/`);
  return response.json();
}
