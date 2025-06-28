import styles from "./ItemServList.module.scss";

export default function ItemServList({ text }) {
  return <p className={styles.itemServList}>{text}</p>;
}
