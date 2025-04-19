import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useRef } from "react";
import styles from "./customers.module.css";

export default function CustomerDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const detailRef = useRef();
  const customer = useSelector((state) =>
    state.customers.list.find((c) => c.id.toString() === id)
  );

  const exportPDF = async () => {
    const canvas = await html2canvas(detailRef.current, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${customer.name}-detay.pdf`);
  };

  if (!customer) {
    return <p className={styles.notfound}>Müşteri bulunamadı.</p>;
  }

  return (
    <div className={styles.detailContainer}>
      <div className={styles.actionRow}>
        <button className={styles.backBtn} onClick={() => navigate(-1)}>
          ← Geri
        </button>
        <button className={styles.pdfBtn} onClick={exportPDF}>
          📄 PDF Olarak Kaydet
        </button>
      </div>

      <div className={styles.exportArea} ref={detailRef}>
        <div className={styles.detailCard}>
          <img
            src={customer.avatarUrl}
            alt="avatar"
            className={styles.detailAvatar}
          />
          <h2 className={styles.detailName}>{customer.name}</h2>
          <p className={styles.detailEmail}>{customer.email}</p>
        </div>

        <div className={styles.section}>
          <h3>Risk Skoru</h3>
          <div className={styles.scoreBar}>
            <div
              className={styles.scoreFill}
              style={{ width: `${customer.riskScore}%` }}
            />
          </div>
          <p className={styles.scoreText}>{customer.riskScore} / 100</p>
        </div>

        <div className={styles.section}>
          <h3>Alert Geçmişi</h3>
          <ul className={styles.alertList}>
            {Array.from({ length: customer.alerts.total }).map((_, i) => (
              <li key={i} className={styles.alertItem}>
                •{" "}
                {i < customer.alerts.critical
                  ? "⚠️ Kritik Uyarı"
                  : "ℹ️ Bilgilendirme"}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.section}>
          <h3>AI Önerileri</h3>
          <ul className={styles.suggestionList}>
            {Array.from({ length: customer.suggestions.pendingCount }).map(
              (_, i) => (
                <li key={i}>🤖 "Müşteri ile etkileşim kurmanız önerilir."</li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
