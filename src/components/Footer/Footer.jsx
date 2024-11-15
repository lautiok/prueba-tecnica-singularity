import { Link } from "react-router-dom";
import ArrowRightSvg from "../svg/ArrowRightSvg";
import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.footerResources}>
        <div className={styles.footerResource}>
          <ul>
            <h2>About</h2>

            <li>
              <Link to="/location">Location</Link>
            </li>
            <li>
              <Link to="/us">Franchise With Us</Link>
            </li>
            <li>
              <Link to="/partners">Partners</Link>
            </li>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
            <li>
              <Link to="/happen">Make Fetch Happen!</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerResource}>
          <ul>
            <h2>Resources</h2>
            <li>
              <Link to="/reward">Reviews</Link>
            </li>
            <li>
              <Link to="/pets">Pet Resource Center</Link>
            </li>
            <li>
              <Link to="/mediapets">Media Fact Sheet</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerResource}>
          <ul>
            <li>
              <Link to="/gift">Gift Cards</Link>
            </li>
            <li>
              <Link to="/service">Services</Link>
            </li>
            <li>
              <Link to="/login">Franchisee Login</Link>
            </li>
            <li>
              <Link to="/Terms">Terms of Use</Link>
            </li>
            <li>
              <Link to="/Privacy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div className={styles.stepsContent}>
          <h2>NewsLetter</h2>
          <p className={styles.serviceText}>
            Sign up to receive the Fetch! Family Newsletter
          </p>

          <form>
            <input type="text" placeholder="Email Address" />
            <button type="submit">
              <ArrowRightSvg />
            </button>
          </form>
          <div className={styles.circule}></div>
        </div>
      </section>
    </footer>
  );
};
