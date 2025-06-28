import styles from "./ServicesHero.module.scss";

export default function ServicesHero() {
  return (
    <section className={styles.servicesHero}>
      <div className="container">
        <div className={styles.servicesHero__wrapper}>
          <h5 className={styles.servicesHero__title}>Services</h5>
          <p className={styles.servicesHero__subtitle}>
            Practical, tailored solutions to help you turn AI potential into
            business outcomes.
          </p>
        </div>
      </div>
    </section>
  );
}
