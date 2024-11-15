import { Link } from "react-router-dom";
import styles from "./herocomponents.module.css";
import pets from "../../assets/pets-golden.png";

export const HeroComponents = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.bg_color}></div>
      <div className={styles.wave}></div>
      <div className={styles.contenidoHero}>
        <h1>We Get Pet Care!</h1>
        <p>
          For over 17 Years, Fetch! Pet Care has been a trusted partner in
          keeping pets healthy and happy!
        </p>
        <div className={styles.contenidoButton}>
          <Link className={styles.button} to="/pets">
            Schedule Service
          </Link>
          <a href="tel:+8663382463">Or Call 866.338.2463</a>
        </div>
      </div>
      <div className={styles.petsHero}>
        <div className={styles.petsImg}>
          <img src={pets} alt="pets" />
        </div>
      </div>
    </section>
  );
};
