import styles from "./SectionHeader.module.scss";

export default function SectionHeader({ title, subtitle, color = "black" }) {
  return (
    <div
      className={`${styles.sectionHeader} ${styles[`sectionHeader--${color}`]}`}
    >
      <h3 className={styles.sectionHeader__title}>{title}</h3>
      <p className={styles.sectionHeader__subtitle}>{subtitle}</p>
    </div>
  );
}
