const API_URL = "http://localhost:8000"; // tu backend FastAPI

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

export async function getTecnicos() {
  const response = await fetch(`${API_URL}/tecnicos/`);
  return response.json();
}

export async function getServices() {
  const response = await fetch(`${API_URL}/services/`);
  return response.json();
}
