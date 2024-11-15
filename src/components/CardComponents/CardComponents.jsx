import style from "./cardcomponents.module.css";

export const CardComponents = ({ index }) => {
  const backgroundColor = index % 2 === 0 ? "#4487ff" : "#ff6752";

  return (
    <article className={style.card} style={{ backgroundColor }}>
      <img
        src="https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg"
        alt="Foto de perfil"
      />
      <h3>kenned Dsousa</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        natus, asperiores nulla numquam dolorum, reprehenderit nobis tenetur
        quia dolor error minima dolorem eligendi commodi pariatur, reiciendis
        illum molestiae. Cupiditate, commodi. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Natus pariatur soluta omnis corrupti
        dolorem, qui iusto asperiores, enim fugit vel velit cumque voluptatem
        aliquid dicta, rem sint reprehenderit voluptate totam.
      </p>
    </article>
  );
};
