import styles from "./CardPartner.module.scss";
import Image from "next/image";

export default function CardPartner({ imgSrc, text }) {
  return (
    <div className={styles.servicesPartner}>
      <div className={styles.servicesPartner__img}>
        <Image src={imgSrc} width={60} height={60} alt="icon" />
      </div>
      <p className={styles.servicesPartner__text}>{text}</p>
    </div>
  );
}
