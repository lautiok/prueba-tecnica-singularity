import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { HeroComponents } from "../../components/HeroComponents/HeroComponents";
import { MakeComponents } from "../../components/MakeComponents/MakeComponents";
import { ServiceComponents } from "../../components/servicesComponents/serviceComponents";
import { SliderComponents } from "../../components/SliderComponents/SliderComponents";
import { StepsComponents } from "../../components/StepsComponents/StepsComponents";
import styles from "./home.module.css";
export const Home = () => {
  return (
    <main className={styles.main}>
      <Header />
      <HeroComponents />
      <ServiceComponents />
      <SliderComponents />
      <StepsComponents />
      <MakeComponents />
      <Footer />
    </main>
  );
};
