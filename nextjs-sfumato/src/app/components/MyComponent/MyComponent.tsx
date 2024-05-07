"use client";

// Include the CSS file compiled by Sfumato
import styles from "./MyComponent.module.css";

export default function MyComponent({
  children,
}: {
  children: React.ReactNode
}) {
  return <section className={styles.dashboard}>{children}</section>
}