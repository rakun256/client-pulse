import { useSelector } from "react-redux"
import { useState } from "react"
import styles from "./settings.module.css"

export default function SettingsPage() {
  const user = useSelector((state) => state.auth.user)
  const [emailNotif, setEmailNotif] = useState(true)
  const [systemNotif, setSystemNotif] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const [language, setLanguage] = useState("tr")

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Ayarlar</h2>

      <section className={styles.section}>
        <h3>Kullanıcı Ayarları</h3>
        <div className={styles.row}><strong>Ad Soyad:</strong> {user?.name || "-"}</div>
        <div className={styles.row}><strong>Email:</strong> {user?.email || "-"}</div>
        <div className={styles.row}>
          <label><strong>Şifreyi Değiştir:</strong></label>
          <input type="password" placeholder="Yeni şifre" className={styles.input} />
        </div>
        <div className={styles.row}>
          <label><strong>Dil:</strong></label>
          <select value={language} onChange={(e) => setLanguage(e.target.value)} className={styles.input}>
            <option value="tr">Türkçe</option>
            <option value="en">English</option>
          </select>
        </div>
      </section>

      <section className={styles.section}>
        <h3>Bildirimler</h3>
        <div className={styles.row}>
          <label><input type="checkbox" checked={emailNotif} onChange={() => setEmailNotif(!emailNotif)} /> E-posta Bildirimleri</label>
        </div>
        <div className={styles.row}>
          <label><input type="checkbox" checked={systemNotif} onChange={() => setSystemNotif(!systemNotif)} /> Sistem İçi Bildirimler</label>
        </div>
      </section>

      <section className={styles.section}>
        <h3>Gizlilik & Güvenlik</h3>
        <div className={styles.row}><strong>2FA:</strong> Etkin değil <button className={styles.btn}>Etkinleştir</button></div>
        <div className={styles.row}><strong>Aktif Oturumlar:</strong> 2 cihaz <button className={styles.btn}>Tümünü Sonlandır</button></div>
      </section>

      <section className={styles.section}>
        <h3>Görünüm</h3>
        <div className={styles.row}>
          <label><input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} /> Karanlık Mod</label>
        </div>
      </section>

      <section className={styles.section}>
        <h3>Uygulama Bilgisi</h3>
        <div className={styles.row}><strong>Sürüm:</strong> v1.0.3</div>
        <div className={styles.row}><button className={styles.btn}>Güncelleme Notlarını Gör</button></div>
      </section>
    </div>
  )
}
