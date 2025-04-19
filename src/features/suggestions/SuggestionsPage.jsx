import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchSuggestions } from "./suggestionSlice"
import styles from "./suggestions.module.css"

export default function SuggestionsPage() {
  const dispatch = useDispatch()
  const { list, loading } = useSelector((state) => state.suggestions)

  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState("Tümü")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")

  useEffect(() => {
    dispatch(fetchSuggestions())
  }, [dispatch])

  const filterSuggestions = () => {
    return list.filter((s) => {
      const matchesSearch =
        s.customerName.toLowerCase().includes(search.toLowerCase()) ||
        s.suggestion.toLowerCase().includes(search.toLowerCase())

      const matchesStatus =
        statusFilter === "Tümü" || s.status === statusFilter

      const created = new Date(s.createdAt)
      const afterStart = startDate ? created >= new Date(startDate) : true
      const beforeEnd = endDate ? created <= new Date(endDate) : true

      return matchesSearch && matchesStatus && afterStart && beforeEnd
    })
  }

  const filteredList = filterSuggestions()

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Öneriler</h2>

      {/* Filtreler */}
      <div className={styles.filters}>
        <div className={styles.filterGroup}>
          <button
            className={`${styles.filterBtn} ${statusFilter === "Tümü" ? styles.active : ""}`}
            onClick={() => setStatusFilter("Tümü")}
          >
            Tümü
          </button>
          <button
            className={`${styles.filterBtn} ${statusFilter === "Beklemede" ? styles.active : ""}`}
            onClick={() => setStatusFilter("Beklemede")}
          >
            Beklemede
          </button>
          <button
            className={`${styles.filterBtn} ${statusFilter === "Uygulandı" ? styles.active : ""}`}
            onClick={() => setStatusFilter("Uygulandı")}
          >
            Uygulandı
          </button>
        </div>

        <div className={styles.dateInputs}>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>

        <input
          type="text"
          className={styles.searchInput}
          placeholder="İsim veya içerikte ara..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {loading ? (
        <p className={styles.loading}>Yükleniyor...</p>
      ) : (
        <div className={styles.list}>
          {filteredList.map((sugg) => (
            <div key={sugg.id} className={styles.row}>
              <div className={styles.profile}>
                <img src={sugg.customerAvatar} className={styles.avatar} alt="avatar"/>
                <div>
                  <p className={styles.name}>{sugg.customerName}</p>
                  <p className={styles.date}>
                    {new Date(sugg.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className={styles.content}>
                <p className={styles.text}>{sugg.suggestion}</p>
                <span className={styles.source}>
                  {sugg.source === "AI" ? "🤖 AI" : "👤 Uzman"}
                </span>
              </div>

              <div className={styles.status}>
                <span
                  className={`${styles.tag} ${
                    sugg.status === "Beklemede" ? styles.pending : styles.done
                  }`}
                >
                  {sugg.status}
                </span>
              </div>
            </div>
          ))}

          {filteredList.length === 0 && (
            <p className={styles.noResult}>Sonuç bulunamadı.</p>
          )}
        </div>
      )}
    </div>
  )
}