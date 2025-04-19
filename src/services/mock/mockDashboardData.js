export const mockDashboardData = {
    summary: {
      totalCustomers: 4,
      activeUsers: 3,
      riskyCustomers: 2,
    },
    activityData: [
      { date: "Pzt", count: 12 },
      { date: "Sal", count: 19 },
      { date: "Çar", count: 14 },
      { date: "Per", count: 26 },
      { date: "Cum", count: 21 },
      { date: "Cmt", count: 8 },
      { date: "Paz", count: 11 },
    ],
    alerts: [
      { level: "Yüksek", message: "Ahmet Yılmaz 3 gündür pasif." },
      { level: "Orta", message: "Mert Kaya önerilen içeriği görmedi." },
      { level: "Düşük", message: "Zeynep Demir'in etkileşimi düştü." },
    ],
    suggestions: [
      { message: "Mert Kaya için içerik önerin.", source: "AI" },
      { message: "Ali Koç ile birebir iletişim önerin.", source: "Uzman" },
    ],
  }
  