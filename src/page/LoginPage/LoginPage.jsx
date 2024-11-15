import { LoginFormComponents } from "../../components/LoginComponents/LoginFormComponents";
import logo from "../../assets/pet.png";
import style from "./loginpage.module.css";
export const LoginPage = () => {
  return (
    <main className={style.loginpage}>
      <div className={style.logoLogin}>
        <div className={style.logoContainer}>
          <div className={style.bg_color}></div>
          <div className={style.wave}></div>
          <img src={logo} alt="logo" />
        </div>
      </div>
      <LoginFormComponents />
    </main>
  );
};
