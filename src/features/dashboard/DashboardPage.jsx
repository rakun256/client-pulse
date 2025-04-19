import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getDashboardData } from "./dashboardSlice"
import InfoCard from "../../components/Card/InfoCard"
import ActivityChart from "../../components/ActivityChart/ActivityChart"
import AlertPreview from "../../components/AlertPreview/AlertPreview"
import SuggestionPreview from "../../components/SuggestionPreview/SuggestionPreview"
import styles from "./dashboard.module.css"

export default function DashboardPage() {
  const dispatch = useDispatch()
  const { summary, activityData, alerts, suggestions, loading } = useSelector(
    (state) => state.dashboard
  )

  useEffect(() => {
    dispatch(getDashboardData())
  }, [dispatch])

  if (loading) return <p className={styles.loading}>Yükleniyor...</p>

  return (
    <div className={styles.container}>
      {/* Bilgi Kartları */}
      <div className={styles.cardGrid}>
        <InfoCard title="Toplam Müşteri" value={summary.totalCustomers} />
        <InfoCard title="Aktif Kullanıcı" value={summary.activeUsers} />
        <InfoCard title="Riskli Müşteri" value={summary.riskyCustomers} />
      </div>

      {/* Grafik */}
      <ActivityChart data={activityData} />

      {/* Alert ve Öneriler */}
      <div className={styles.bottomGrid}>
        <AlertPreview alerts={alerts} />
        <SuggestionPreview suggestions={suggestions} />
      </div>
    </div>
  )
}
