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
        <p>Yükleniyor...</p>
      ) : (
        <ul className={styles.list}>
          {list.map((c) => (
            <li
              key={c.id}
              className={styles.item}
              onClick={() => navigate(`/customers/${c.id}`)}
            >
              <p className={styles.name}>{c.name}</p>
              <p className={styles.email}>{c.email}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
