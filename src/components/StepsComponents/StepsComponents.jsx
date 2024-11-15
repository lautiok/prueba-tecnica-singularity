import ArrowRightSvg from "../svg/ArrowRightSvg";
import CalendarSvg from "../svg/CalendarSvg";
import MatchSvg from "../svg/MatchSvg";
import RelaxSvg from "../svg/RelaxSvg";
import styles from "./slepscomponents.module.css";

export const StepsComponents = () => {
  return (
    <section className={styles.steps} id="service">
      <div className={styles.stepsContainer}>
        <div className={styles.step}>
          <article className={styles.Card}>
            <CalendarSvg />
            <h3>Reserve</h3>
          </article>
          <article className={styles.CardMatch}>
            <MatchSvg />
            <h3>Match</h3>
          </article>
          <article className={styles.Card}>
            <RelaxSvg />
            <h3>Relax</h3>
          </article>
        </div>
      </div>
      <div className={styles.stepsContent}>
        <h2>How it Works</h2>
        <p className={styles.serviceText}>
          Because finding a good pet sitter shouldn’t be a hassle. With Fetch!
          It’s as easy as…
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
        <div className={styles.circule}></div>
      </div>
    </section>
  );
};
