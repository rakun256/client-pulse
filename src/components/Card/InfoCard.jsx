import styles from './InfoCard.module.css'

export default function InfoCard({ title, value }) {
  return (
    <div className={styles.card}>
      <p className={styles.title}>{title}</p>
      <h2 className={styles.value}>{value}</h2>
    </div>
  )
}
