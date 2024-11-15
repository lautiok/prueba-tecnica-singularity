import ArrowRightSvg from "../svg/ArrowRightSvg";
import DogSvg from "../svg/DogSvg";
import FootSvg from "../svg/FootSvg";
import HomeSvg from "../svg/HomeSvg";
import PetSvg from "../svg/petSvg";
import styles from "./servicecomponents.module.css";

export const ServiceComponents = () => {
  return (
    <section className={styles.services} id="location">
      <div className={styles.ourServices}>
        <h2>Our Services</h2>
        <p className={styles.serviceText}>
          National Brand With a Local Feel. Experience the Fetch! Difference
        </p>
        <p className={styles.servicesText}>
          Enter Your Location and Fetch Our Services
        </p>
        <form>
          <input type="text" placeholder="Zip Code" />
          <button type="submit">
            <ArrowRightSvg />
          </button>
        </form>
      </div>
      <div className={styles.servicesCard}>
        <div className={styles.CardContainer}>
          <article className={styles.Card}>
            <DogSvg />
            <h3>Dog Walking</h3>
          </article>
          <article className={styles.Card}>
            <PetSvg />
            <h3>Pet Sitting</h3>
          </article>
          <article className={styles.Card}>
            <HomeSvg />
            <h3>Overnight Care</h3>
          </article>
          <article className={styles.Card}>
            <FootSvg />
            <h3>Other Services</h3>
          </article>
        </div>
      </div>
    </section>
  );
};
