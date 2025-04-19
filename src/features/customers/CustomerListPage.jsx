import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCustomers } from "./customerSlice"
import { useNavigate } from "react-router-dom"
import styles from "./customers.module.css"

export default function CustomerListPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { list, loading } = useSelector((state) => state.customers)

  useEffect(() => {
    dispatch(fetchCustomers())
  }, [dispatch])

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Müşteri Listesi</h2>
      {loading ? (
        <p className={styles.loading}>Yükleniyor...</p>
      ) : (
        <div className={styles.table}>
          {list.map((customer) => (
            <div key={customer.id} className={styles.row}>
              {/* Client */}
              <div className={styles.client}>
                <img src={customer.avatarUrl} alt="avatar" className={styles.avatar} />
                <div>
                  <p className={styles.name}>{customer.name}</p>
                  <p className={styles.email}>{customer.email}</p>
                </div>
              </div>

              {/* Risk */}
              <div className={styles.risk}>
                <p className={styles.label}>Risk Skoru</p>
                <div className={styles.scoreBar}>
                  <div
                    className={styles.scoreFill}
                    style={{ width: `${customer.riskScore}%` }}
                  />
                </div>
                <p className={styles.score}>{customer.riskScore}</p>
              </div>

              {/* Alerts */}
              <div className={styles.alerts}>
                <p className={styles.label}>Alertler</p>
                <p>{customer.alerts.critical} kritik / {customer.alerts.total} toplam</p>
              </div>

              {/* Suggestions */}
              <div className={styles.suggestions}>
                <p className={styles.label}>Öneriler</p>
                <p>{customer.suggestions.pending}% ({customer.suggestions.pendingCount}) bekleyen</p>
              </div>

              {/* Actions */}
              <div className={styles.actions}>
                <button className={styles.btn} onClick={() => navigate(`/customers/${customer.id}`)}>Detay</button>
                <button className={styles.btnSecondary}>Grafik</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
