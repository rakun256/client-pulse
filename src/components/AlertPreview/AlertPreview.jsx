import styles from './AlertPreview.module.css'

export default function AlertPreview({ alerts }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Son Uyarılar</h3>
      <ul className={styles.list}>
        {alerts.map((alert, index) => (
          <li key={index} className={styles.item}>
            <span className={styles.level} data-level={alert.level}>
              {alert.level}
            </span>
            <p className={styles.message}>{alert.message}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
