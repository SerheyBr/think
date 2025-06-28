import styles from "./ItemColab.module.scss";

export default function ItemColab({ title, text, gridList }) {
  return (
    <div className={styles.itemColab}>
      <div className={styles.itemColab__wrapper}>
        <div className={styles.itemColab__info}>
          <p className={styles.itemColab__title}>{title}</p>
          <p className={styles.itemColab__text}>{text}</p>
        </div>
        <div className={styles.itemColab__grid}>
          {gridList?.map((el, index) => {
            return (
              <div className={styles.itemColab__gridEl} key={index}>
                {el}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
