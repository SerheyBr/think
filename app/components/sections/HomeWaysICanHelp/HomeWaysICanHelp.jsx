import styles from "./HomeWaysICanHelp.module.scss";
import CanHelpCard from "./components/CanHelpCard";
import Image from "next/image";
import SectionHeader from "../../../components/ui/SectionHeader/SectionHeader";

export default function HomeWaysICanHelp() {
  return (
    <section className={styles.homeWaysICanHelp}>
      <div className="container">
        <div className={styles.homeWaysICanHelp__wrapper}>
          <SectionHeader
            title={"How I Can Help Your Organization"}
            subtitle={
              " Leverage cutting-edge AI and strategic expertise to drive meaningful transformation"
            }
          />

          <div className={styles.homeWaysICanHelp__grid}>
            <CanHelpCard
              title={"Strategic AI Consulting"}
              text={`Chart a clear path from idea to impact.
Help craft roadmaps that align AI
initiatives with your business goals,
whether that’s cost reduction, revenue
growth, or superior customer experience`}
              img={
                <Image
                  src={"/icons/sectionICanHelp/icon1.svg"}
                  width={60}
                  height={60}
                  alt="icon"
                />
              }
            />
            <CanHelpCard
              title={"AI Transformation"}
              text={`Drive enterprise-wide AI adoption with
end-to-end technical integration,
workflow redesign, and people-centric
change management to embed AI into
daily operations`}
              img={
                <Image
                  src={"/icons/sectionICanHelp/icon2.svg"}
                  width={60}
                  height={60}
                  alt="icon"
                />
              }
            />
            <CanHelpCard
              title={"Executive Advisory"}
              text={`Benefit from C-level expertise in building,
scaling, and leading technology
companies from startup to successful
exit.`}
              img={
                <Image
                  src={"/icons/sectionICanHelp/icon3.svg"}
                  width={60}
                  height={60}
                  alt="icon"
                />
              }
            />
            <CanHelpCard
              title={"Keynote Speaking"}
              text={`Inspire your audience with thought-
provoking insights on AI, innovation, and
human potential`}
              img={
                <Image
                  src={"/icons/sectionICanHelp/icon4.svg"}
                  width={60}
                  height={60}
                  alt="icon"
                />
              }
            />
            <CanHelpCard
              title={"Startup Mentoring"}
              text={`Guide startups from seed to success with
battle-tested strategies for product
development, go-to-market, and
fundraising.`}
              img={
                <Image
                  src={"/icons/sectionICanHelp/icon5.svg"}
                  width={60}
                  height={60}
                  alt="icon"
                />
              }
            />
            <CanHelpCard
              title={"Lorem Ipsum"}
              text={`Lorem ipsum dolor sit amet consectetur. Amet ac est maecenas urna ipsum justo. In lobortis amet ac tortor. Feugiat enim tortor semper purus lacus ut felis mi id.`}
              img={""}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
