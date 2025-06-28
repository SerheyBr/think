import Link from "next/link";
import styles from "./button.module.scss";
import ArrowRight from "../Ions/ArrowRight";

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  type = "button",
  disabled = false,
  arrow = false,
}) {
  const className = `${styles.button} ${styles[variant]}`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      <p>
        {children}
        {arrow ? <ArrowRight /> : null}
      </p>
    </button>
  );
}
