import { createContext, useState } from "react";

export const AuthContext = createContext();

export const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isloading, setIsloading] = useState(false);

  const api = import.meta.env.VITE_API_URL;

  const login = async (user) => {
    setIsloading(true);

    if (!api) {
      setError("No se ha definido la variable de entorno");
      setIsloading(false);
    }
    try {
      const response = await fetch(`${api}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error al iniciar sesión");
      }
      setUser(data);
      setIsloading(false);
      alert("Login exitoso");
    } catch (error) {
      setError(error.message);
      console.log(error);
      setIsloading(false);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        error,
        isloading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
