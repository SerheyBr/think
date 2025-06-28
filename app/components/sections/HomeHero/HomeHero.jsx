import styles from "./homeHero.module.scss";
import Button from "../../ui/Button/Button";
// import ChatBot from "../../ChatBot/ChatBot";

export default function HomeHero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.hero__wrapper}>
          <div className={styles.hero__content}>
            <h1 className={styles.hero__title}>
              <span>Transforming</span> Business Through AI & Strategic
              Innovation
            </h1>
            <p className={styles.hero__subtitle}>
              AI Transformation Strategist | Speaker | Advisor Guiding Your
              Digital Future
            </p>

            <div className={styles.hero__buttons}>
              <Button arrow={true}>Partner With Me</Button>
              <Button variant="primary-ghost">Explore Insights </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
