import SectionHeader from "../../../components/ui/SectionHeader/SectionHeader";
import Button from "../../ui/Button/Button";
import styles from "./HomeWorkTogether.module.scss";
import Image from "next/image";

export function CardWorkTogether({
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

const cards = [
  {
    id: 1,
    imgSrc: "/icons/sectionWorkTogether/img1.svg",
    title: "Keynote Speaking",
    text: "Inspire your audience with insights on AI, innovation, and digital transformation ",
    list: ["Conference keynotes", "Corporate events", "University lectures"],
    btnText: "Book Keynote Speaking",
    link: "/",
    variant: "white",
  },
  {
    id: 2,
    imgSrc: "/icons/sectionWorkTogether/img2.svg",
    title: "Strategic Consulting",
    text: "Transform your organization with expert guidance on AI and digital innovation",
    list: [
      "AI strategy development",
      "Digital transformation",
      "Technology roadmapping",
    ],
    btnText: "Partner With Me",
    link: "/",
    variant: "black",
  },
  {
    id: 3,
    imgSrc: "/icons/sectionWorkTogether/img3.svg",
    title: "Advisory Services",
    text: "Ongoing strategic guidance for executives and leadership teams",
    list: ["Board advisory", "C-suite mentoring", "Startup guidance"],
    btnText: "Book Advisory Services",
    link: "/",
    variant: "white",
  },
];

export default function HomeWorkTogether() {
  return (
    <section className={styles.homeWorkTogether}>
      <div className="container">
        <div className={styles.homeWorkTogether__wrapper}>
          <SectionHeader
            title={"Let's Work Together"}
            subtitle={
              "Book me for strategic consulting, keynote speaking, or executive advisory"
            }
          />
          <div className={styles.homeWorkTogether__columns}>
            {/* <CardWorkTogether variant="white" />
            <CardWorkTogether variant="black" />
            <CardWorkTogether /> */}
            {cards.map((el) => {
              return <CardWorkTogether key={el.id} {...el} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
