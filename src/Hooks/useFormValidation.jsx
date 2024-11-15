import { useState } from "react";

export const useFormValidation = () => {
  const [errors, setErrors] = useState({});

  const validate = (formData) => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "El email es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El email no es válido";
    }
    if (!formData.password) {
      newErrors.password = "La contraseña es obligatoria";
    } else if (formData.password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres";
    }
    setErrors(newErrors);
    return newErrors;
  };

  return { errors, validate };
};
