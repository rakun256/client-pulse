import { useSelector } from "react-redux"
import styles from "./reports.module.css"

export default function ReportsPage() {
  const customers = useSelector((state) => state.customers.list)
  const suggestions = useSelector((state) => state.suggestions.list)

  const totalCustomers = customers.length
  const totalSuggestions = suggestions.length
  const pendingSuggestions = suggestions.filter((s) => s.status === "Beklemede").length
  const completedSuggestions = suggestions.filter((s) => s.status === "Uygulandı").length
  const aiSuggestions = suggestions.filter((s) => s.source === "AI").length
  const expertSuggestions = suggestions.filter((s) => s.source === "Uzman").length

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Genel Raporlar</h2>

      <div className={styles.grid}>
        <div className={styles.card}>
          <p className={styles.label}>Toplam Müşteri</p>
          <h3 className={styles.value}>{totalCustomers}</h3>
        </div>

        <div className={styles.card}>
          <p className={styles.label}>Toplam Öneri</p>
          <h3 className={styles.value}>{totalSuggestions}</h3>
        </div>

        <div className={styles.card}>
          <p className={styles.label}>Bekleyen Öneriler</p>
          <h3 className={styles.value}>{pendingSuggestions}</h3>
        </div>

        <div className={styles.card}>
          <p className={styles.label}>Uygulanan Öneriler</p>
          <h3 className={styles.value}>{completedSuggestions}</h3>
        </div>

        <div className={styles.card}>
          <p className={styles.label}>AI Tarafından Üretilen</p>
          <h3 className={styles.value}>{aiSuggestions}</h3>
        </div>

        <div className={styles.card}>
          <p className={styles.label}>Uzman Tarafından Üretilen</p>
          <h3 className={styles.value}>{expertSuggestions}</h3>
        </div>
      </div>

      <div className={styles.footerNote}>
        Bu veriler son güncellemeden itibaren günceldir.
      </div>
    </div>
  )
}