import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../utils/axios";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    setError("");
    setSuccess(false);

    if (!email) {
      setError("Por favor ingresa tu correo electrónico");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Ingrese un correo válido");
      return;
    }

    if (!password) {
      setError("Por favor ingresa tu contraseña");
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    try {
      const response = await api.post("/auth/login", { email, password });
      console.log(response.data);
      setSuccess(true);
    } catch (error) {
      setError(error.response?.data?.message || "Error en el servidor");
      console.error(error);
    }
  };

  return (
    <form onSubmit={submit} className="login-form">
      <h2 className="login-title">Iniciar Sesión</h2>
      
      {submitted && error && (
        <div className="notification-message error-message">
          {error}
        </div>
      )}
      
      {success && (
        <div className="notification-message success-message">
          ¡Sesión iniciada correctamente!
        </div>
      )}

      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={`login-input ${submitted && (!email || !/\S+@\S+\.\S+/.test(email)) ? 'input-error' : ''}`}
      />

      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={`login-input ${submitted && (!password || password.length < 6) ? 'input-error' : ''}`}
      />

      <button type="submit" className="login-button">
        Ingresar
      </button>

      <Link to="/" className="back-button">
        Volver al Inicio
      </Link>
    </form>
  );
}