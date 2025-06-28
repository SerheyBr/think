import styles from "./ServicesCollab.module.scss";
import SectionHeader from "../../ui/SectionHeader/SectionHeader";
import ItemColab from "./components/ItemColab";

const cardCollab = [
  {
    id: 1,
    title: "Global tech giants",
    text: "Amazon, Google, Microsoft, Meta, IBM, Oracle, Salesforce, NVIDIA",
    gridList: ["", "", "", "", "", "", "", "", ""],
  },
  {
    id: 2,
    title: "Global tech giants",
    text: "Amazon, Google, Microsoft, Meta, IBM, Oracle, Salesforce, NVIDIA",
    gridList: ["", "", "", "", "", "", "", "", ""],
  },
  {
    id: 3,
    title: "Global tech giants",
    text: "Amazon, Google, Microsoft, Meta, IBM, Oracle, Salesforce, NVIDIA",
    gridList: ["", "", "", "", "", "", "", "", ""],
  },
  {
    id: 4,
    title: "Global tech giants",
    text: "Amazon, Google, Microsoft, Meta, IBM, Oracle, Salesforce, NVIDIA",
    gridList: ["", "", "", "", "", "", "", "", ""],
  },
];
export default function ServicesCollab() {
  return (
    <section className={styles.servicesCollab}>
      <div className="container">
        <div className={styles.servicesCollab__wrapper}>
          <SectionHeader
            title={"Featured Collaborations"}
            subtitle={"Bernard has worked with industry leaders, including:"}
          />
          <div className={styles.servicesCollab__grid}>
            {cardCollab.map((el) => {
              return <ItemColab key={el.id} {...el} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
