import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../utils/axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await api.post("/auth/login", { email, password });
      console.log(response.data);
    } catch (error) {
      setError(error.response?.data?.message || "Error en el servidor");
      console.error(error);
    }
  };

  return (
    <form onSubmit={submit}>
      <h2>Iniciar Sesión</h2>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {!error && email && password && (
        <div style={{ color: "green" }}>Sesión iniciada</div>
      )}
      <input
        type="email"
        placeholder="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Ingresar</button>
    </form>
  );
}
