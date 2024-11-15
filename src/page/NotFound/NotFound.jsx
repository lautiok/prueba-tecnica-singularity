import style from "./notfound.module.css";

export const NotFound = () => {
  return (
    <main className={style.notfound}>
      <h1>404</h1>
      <p>La página que buscas no existe</p>
      <a href="/">Volver a la página de inicio</a>
    </main>
  );
};
