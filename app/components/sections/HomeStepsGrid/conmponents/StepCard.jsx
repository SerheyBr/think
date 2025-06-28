import styles from "./StepCard.module.scss";

export default function StepCard({ number, title, text }) {
  return (
    <div className={styles.stepCard}>
      <p className={styles.stepCard__number}>{number}</p>
      <div className={styles.stepCard__info}>
        <h5 className={styles.stepCard__title}>{title}</h5>
        <p className={styles.stepCard__text}>{text}</p>
      </div>
    </div>
  );
}
