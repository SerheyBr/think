import styles from "./CardTechVoice.module.scss";

export default function CardTechVoice({ title, text }) {
  return (
    <div className={styles.cardTechVoice}>
      <h5 className={styles.cardTechVoice__title}>{title}</h5>
      <p className={styles.cardTechVoice__text}>{text}</p>
    </div>
  );
}
