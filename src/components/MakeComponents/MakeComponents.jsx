import { Link } from "react-router-dom";
import style from "./makecomponents.module.css";
import dog from "../../assets/dog.png";

export const MakeComponents = () => {
  return (
    <section className={style.make} id="aboutus">
      <div className={style.circule}></div>
      <div className={style.makeContainer}>
        <div className={style.makeDog}>
          <div className={style.petsImg}>
            <img src={dog} alt="dog" />
          </div>
        </div>
        <div className={style.makeDogContent}>
          <h2>Make Fetch! Happen</h2>
          <p>
            If you love pets and want exciting work, apply to be a Fetch! Pet
            Care Provider! We train every team member and provide ongoing
            support to help you get the most from your experience.
          </p>
          <Link to="/location">Join Now</Link>
        </div>
      </div>
    </section>
  );
};
