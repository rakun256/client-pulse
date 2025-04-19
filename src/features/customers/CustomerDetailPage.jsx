import { useParams, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import styles from "./customers.module.css"

export default function CustomerDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const customer = useSelector((state) =>
    state.customers.list.find((c) => c.id.toString() === id)
  )

  if (!customer) {
    return <p className={styles.notfound}>Müşteri bulunamadı.</p>
  }

  return (
    <div className={styles.container}>
      <button className={styles.backBtn} onClick={() => navigate(-1)}>← Geri</button>
      <h3 className={styles.title}>Müşteri Detayı</h3>
      <p><strong>Ad:</strong> {customer.name}</p>
      <p><strong>Email:</strong> {customer.email}</p>
      <p><strong>Kayıt Tarihi:</strong> {customer.registeredAt}</p>
    </div>
  )
}
