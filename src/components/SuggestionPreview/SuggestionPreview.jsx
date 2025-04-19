import styles from './SuggestionPreview.module.css'

export default function SuggestionPreview({ suggestions }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Son Öneriler</h3>
      <ul className={styles.list}>
        {suggestions.map((s, index) => (
          <li key={index} className={styles.item}>
            <p className={styles.message}>{s.message}</p>
            <span className={styles.source}>
              {s.source === "AI" ? "AI Destekli" : "Uzman Önerisi"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
