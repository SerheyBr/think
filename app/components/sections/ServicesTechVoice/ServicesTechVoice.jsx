import styles from "./ServicesTechVoice.module.scss";
import CardTechVoice from "./components/CardTechVoice";

const cardsTechVoice = [
  {
    id: 1,
    title: "Provide",
    text: "powerful amplification for your content and your message.",
  },
  {
    id: 2,
    title: "Reach",
    text: "your target audience and drive high engagement across multiple platforms.",
  },
  {
    id: 3,
    title: "Help",
    text: "generate high-quality leads for your business.",
  },
];

export default function ServicesTechVoice() {
  return (
    <section className={styles.servicesTechVoice}>
      <div className="container">
        <div className={styles.servicesTechVoice__wrapper}>
          <h5 className={styles.servicesTechVoice__title}>
            <span>Amplify</span> Your Message Through a Leading Tech & Business
            Voice
          </h5>
          <p className={styles.servicesTechVoice__text}>
            Bernard Marr is one of the world’s most successful social media
            influencers at the intersection of business and technology. With his
            trusted and engaged audience of over 4.5 million followers and
            newsletter subscribers, Bernard can:
          </p>
          <div className={styles.servicesTechVoice__columns}>
            {cardsTechVoice.map((el) => {
              return (
                <CardTechVoice title={el.title} text={el.text} key={el.id} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
