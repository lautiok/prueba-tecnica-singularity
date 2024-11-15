import { Link } from "react-router-dom";
import style from "./loginformcomponents.module.css";
import { useState } from "react";
import { useAuth } from "../../Hooks/useAuth";
import { useFormValidation } from "../../Hooks/useFormValidation";
import { ValidatedInput } from "../ValidatedInput/ValidatedInput";

export const LoginFormComponents = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login, error, isloading } = useAuth();
  const { errors, validate } = useFormValidation();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length === 0) {
      login(formData);
    }
  };

  return (
    <section className={style.loginForm}>
      <h2>
        <span className={style.spanline}>|</span> BIENVENIDO
      </h2>
      <form onSubmit={handleSubmit}>
        <ValidatedInput
          type="text"
          name="email"
          placeholder="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />

        <ValidatedInput
          type="password"
          name="password"
          placeholder="password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
        />

        <Link to="/reset-password">¿Olvidaste tu contraseña?</Link>
        {error && <p>{error}</p>}
        <button
          type="submit"
          disabled={isloading || !formData.email || !formData.password}
        >
          {isloading ? "cargando..." : "Iniciar sesión"}
        </button>
      </form>
      <p>
        AÚN NO TENGO CUENTA <Link to="/register">Registrate</Link>
      </p>
    </section>
  );
};
