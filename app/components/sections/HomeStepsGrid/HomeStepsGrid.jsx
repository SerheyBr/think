import styles from "./HomeStepsGrid.module.scss";
import StepCard from "./conmponents/StepCard";
import SectionHeader from "../../../components/ui/SectionHeader/SectionHeader";

export default function HomeStepsGrid() {
  return (
    <section className={styles.stepsGrid}>
      <div className="container">
        <div className={styles.stepsGrid__wrapper}>
          <SectionHeader title={"Shape Your Three-Year Trajectory"} />
          <div className={styles.stepsGrid__columns}>
            <StepCard
              number={"01"}
              title={"Why It Matters"}
              text={
                "AI breakthroughs, economic shifts, social trends and geopolitical forces are converging to reshape the next three years."
              }
            />
            <StepCard
              number={"02"}
              title={"What You Will Gain"}
              text={
                "The science-based frameworks that that safeguard and propel your business, your family and your personal ambitions."
              }
            />
            <StepCard
              number={"03"}
              title={"How to Get Started"}
              text={
                "Concrete steps you can take today, this quarter and over the next three years to secure your winning edge."
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
