import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">¡Bienvenido a "          "! <span className="cupcake-icon">🧁</span></h1>
      <p className="home-subtitle">Donde cada bocado es un momento de felicidad</p>
      
      <p className="welcome-message">
        Descubre nuestros exquisitos pasteles y postres artesanales, 
        elaborados con los mejores ingredientes y mucho amor.
      </p>
      
      <div className="auth-buttons">
        <Link to="/login" className="auth-button login-button">
          Iniciar Sesión <span className="cupcake-icon">🍰</span>
        </Link>
        <Link to="/register" className="auth-button register-button">
          Registrarse <span className="cupcake-icon">🎂</span>
        </Link>
      </div>
      
      <div className="products-container">
        <h2 className="products-title">Nuestras Delicias</h2>
        <p style={{ color: '#8b5e83', fontStyle: 'italic' }}>
          Próximamente nuestro catálogo de pasteles, cupcakes y más...
        </p>
        <div style={{ marginTop: '20px', fontSize: '24px' }}>
          <span role="img" aria-label="emojis">🍪 🍩 🧁 🎂 🍫</span>
        </div>
      </div>
    </div>
  );
}