import Button from "../../../ui/Button/Button";
import Image from "next/image";
import styles from "./CardWorkTogether.module.scss";

export default function CardWorkTogether({
  title,
  text,
  imgSrc,
  list,
  btnText,
  link,
  variant = "white",
}) {
  if (variant === "white") {
    return (
      <div className={`${styles.cardWorkTogether} ${styles.white}`}>
        <div className={styles.cardWorkTogether__img}>
          <Image src={imgSrc} width={40} height={40} alt="icon" />
        </div>
        <div className={styles.cardWorkTogether__info}>
          <p className={styles.cardWorkTogether__tittle}>{title}</p>
          <p className={styles.cardWorkTogether__text}>{text}</p>
        </div>
        <ul className={styles.cardWorkTogether__list}>
          {list.map((el, index) => {
            return (
              <li className={styles.cardWorkTogether__listItem} key={index}>
                <Image
                  src={"/icons/sectionWorkTogether/CheckBlack.svg"}
                  width={32}
                  height={32}
                  alt="check"
                />
                <p>{el}</p>
              </li>
            );
          })}
        </ul>
        <Button variant="secondary">{btnText}</Button>
      </div>
    );
  } else {
    return (
      <div className={styles.cardWorkTogether}>
        <p className={styles.cardWorkTogether__tag}>Most Popular</p>

        <div className={styles.cardWorkTogether__img}>
          <Image src={imgSrc} width={40} height={40} alt="icon" />
        </div>
        <div className={styles.cardWorkTogether__info}>
          <p className={styles.cardWorkTogether__tittle}>{title}</p>
          <p className={styles.cardWorkTogether__text}>{text}</p>
        </div>
        <ul className={styles.cardWorkTogether__list}>
          {list.map((el, index) => {
            return (
              <li className={styles.cardWorkTogether__listItem} key={index}>
                <Image
                  src={"/icons/sectionWorkTogether/CheckGreen.svg"}
                  width={32}
                  height={32}
                  alt="check"
                />
                <p>{el}</p>
              </li>
            );
          })}
        </ul>
        <Button variant="primary" arrow={true}>
          {btnText}
        </Button>
      </div>
    );
  }
}
