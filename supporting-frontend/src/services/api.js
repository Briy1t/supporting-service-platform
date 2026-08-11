const API_URL = "http://localhost:8001"; // lo cambiaremos cuanod migremos a cloud aws

export async function enviarContacto(data) {
  return await fetch(`${API_URL}/admin/forms/importar`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      empresa: data.nombre,
      contacto: data.nombre,
      correo: data.email,
      mensaje: data.mensaje,
      origen: data.tipo || "contacto_general"
    })
  });
}


export async function enviarAccesoEmpresas(data) {
  return await fetch(`${API_URL}/admin/forms/importar`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      empresa: data.nombre,
      contacto: data.nombre,
      correo: data.email,
      mensaje: data.mensaje,
      origen: "acceso_empresas"
    })
  });
}


export async function enviarIntegracion(data) {
  return await fetch(`${API_URL}/admin/forms/importar`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      empresa: data.nombre,
      contacto: data.nombre,
      correo: data.email,
      mensaje: data.mensaje,
      origen: "integracion_personalizada"
    })
  });
}


export async function enviarDemoGuiada(data) {
  return await fetch(`${API_URL}/admin/forms/importar`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      empresa: data.nombre,
      contacto: data.nombre,
      correo: data.email,
      mensaje: data.mensaje,
      origen: "demo_guiada"
    })
  });
}
