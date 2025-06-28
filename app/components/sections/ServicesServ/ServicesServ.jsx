import styles from "./ServicesServ.module.scss";
import SectionHeader from "../../ui/SectionHeader/SectionHeader";
import ItemServList from "./components/ItemServList";

const listServ = [
  {
    id: 1,
    text: "Create and distribute high-impact content through LinkedIn Newsletter articles",
  },
  {
    id: 2,
    text: "Film and share video content across YouTube, LinkedIn, X, and Facebook",
  },
  {
    id: 3,
    text: "Create and share video interviews with key company figures",
  },
  {
    id: 4,
    text: "Provide comprehensive event coverage including pre-promotion, live updates, and post-event content",
  },
  {
    id: 5,
    text: "Deliver keynote speeches, participate in panel discussions, and moderate events",
  },
  {
    id: 6,
    text: "Deliver keynote speeches, participate in panel discussions, and moderate events",
  },
  {
    id: 7,
    text: "Produce professional case studies with video crews and drone footage",
  },
  {
    id: 8,
    text: "Create custom content, including articles, white papers, and industry reports",
  },
  {
    id: 9,
    text: "Develop customized books with branded elements and company case studies",
  },
  {
    id: 10,
    text: "Run targeted social media campaigns",
  },
  {
    id: 11,
    text: "Distribute content through weekly newsletters",
  },
  {
    id: 12,
    text: "Conduct social media polls for market research and engagement",
  },
  {
    id: 13,
    text: "Offer strategic advertising placement across digital platforms",
  },
  {
    id: 14,
    text: "Amplify content across multiple channels",
  },
];

export default function ServicesServ() {
  return (
    <section className={styles.servicesServ}>
      <div className="container">
        <div className={styles.servicesServ__wrapper}>
          <SectionHeader
            title={"Services"}
            subtitle={
              "Bernard Marr offers the following influencer and thought leadership services:"
            }
          />
          <ul className={styles.servicesServ__list}>
            {listServ.map((el) => {
              return (
                <li key={el.id}>
                  <ItemServList text={el.text} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
