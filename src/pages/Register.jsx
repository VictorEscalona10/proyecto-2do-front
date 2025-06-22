import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../utils/axios";
import "./Register.css";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    setError("");
    setSuccess(false);

    if (!name) {
      setError("Por favor ingresa tu nombre");
      return;
    }

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

    if (password !== repeatPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    try {
      const response = await api.post("/auth/register", { 
        name, 
        email, 
        password, 
        repeatPassword 
      });
      console.log(response.data);
      setSuccess(true);
    } catch (error) {
      setError(error.response?.data?.message || "Error en el servidor");
      console.error(error);
    }
  };

  return (
    <form onSubmit={submit} className="register-form">
      <h2 className="register-title">Registrarse</h2>
      
      {submitted && error && (
        <div className="notification-message error-message">
          {error}
        </div>
      )}
      
      {success && (
        <div className="notification-message success-message">
          ¡Registro exitoso!
        </div>
      )}

      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={`register-input ${submitted && !name ? 'input-error' : ''}`}
      />

      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={`register-input ${submitted && (!email || !/\S+@\S+\.\S+/.test(email)) ? 'input-error' : ''}`}
      />

      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={`register-input ${submitted && (!password || password.length < 6) ? 'input-error' : ''}`}
      />

      <input
        type="password"
        placeholder="Repetir Contraseña"
        value={repeatPassword}
        onChange={(e) => setRepeatPassword(e.target.value)}
        className={`register-input ${submitted && (password !== repeatPassword) ? 'input-error' : ''}`}
      />

      <button type="submit" className="register-button">
        Registrarse
      </button>

      <Link to="/" className="back-button">
        Volver al Inicio
      </Link>
    </form>
  );
}