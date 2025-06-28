import styles from "./ServicesPartner.module.scss";
import SectionHeader from "../../ui/SectionHeader/SectionHeader";
import CardPartner from "./components/CardPartner";

const cardsParter = [
  {
    id: 1,
    imgSrc: "./icons/sectionServisesPartner/img1.svg",
    text: "Access to a highly engaged audience of business and technology decision-makers",
  },
  {
    id: 2,
    imgSrc: "./icons/sectionServisesPartner/img2.svg",
    text: "Multi-channel amplification across established platforms",
  },
  {
    id: 3,
    imgSrc: "./icons/sectionServisesPartner/img3.svg",
    text: "Professional content creation and distribution",
  },
  {
    id: 4,
    imgSrc: "./icons/sectionServisesPartner/img4.svg",
    text: "Expert moderation and thought leadership",
  },
  {
    id: 5,
    imgSrc: "./icons/sectionServisesPartner/img5.svg",
    text: "Proven track record with leading global brands",
  },
  {
    id: 6,
    imgSrc: "./icons/sectionServisesPartner/img6.svg",
    text: "Comprehensive analytics and campaign reporting",
  },
];

export default function ServicesPartner() {
  return (
    <section className={styles.servicesPartner}>
      <div className="container">
        <div className={styles.servicesPartner__wrapper}>
          <SectionHeader title={"Why Partner with Bernard?"} />
          <div className={styles.servicesPartner__grid}>
            {cardsParter.map((el) => {
              return <CardPartner key={el.id} {...el} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
