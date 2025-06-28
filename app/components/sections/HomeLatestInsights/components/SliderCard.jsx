"use client";
import styles from "./SliderCard.module.scss";
import Image from "next/image";
import Link from "next/link";
import IconArrow from "./IconArrow";

export default function SliderCard({ imgSrc, title, subtitle }) {
  return (
    <div className={styles.sliderCard}>
      <div className={styles.sliderCard__img}>
        <Image src={imgSrc} width={360} height={200} alt="slide" />
      </div>
      <div className={styles.sliderCard__info}>
        <div className={styles.sliderCard__subtitle}>{subtitle}</div>
        <div className={styles.sliderCard__title}>{title}</div>
        <Link href={"/"} className={styles.sliderCard__link}>
          Read More <IconArrow />
        </Link>
      </div>
    </div>
  );
}
