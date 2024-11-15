import { Link } from "react-router-dom";
import styles from "./header.module.css";
import logo from "../../assets/logo.png";
export const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.headerLogo}>
        <img src={logo} alt="logo" />
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="#location">Location</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#service">Service</a>
          </li>
          <li>
            <a href="#aboutus">AboutUs</a>
          </li>
          <li>
            <Link to="/login">Franchisse login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
