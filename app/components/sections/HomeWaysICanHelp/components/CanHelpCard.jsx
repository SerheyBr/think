import styles from "./CanHelpCard.module.scss";
import Image from "next/image";

export default function CanHelpCard({ img, title, text }) {
  return (
    <div className={styles.canHelpCard}>
      <div className={styles.canHelpCard__icon}>{img}</div>
      <h5 className={styles.canHelpCard__title}>{title}</h5>
      <p className={styles.canHelpCard__text}>{text}</p>
    </div>
  );
}
