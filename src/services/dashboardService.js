import { mockDashboardData } from "./mock/mockDashboardData"
// import api from "@/services/api" // backend geldiğinde aktif edilecek

export async function fetchDashboardDataAPI() {
  // 🔁 Backend bağlandığında:
  // const response = await api.get("/dashboard")
  // return response.data

  // 🧪 Şimdilik mock veri
  return await new Promise((resolve) => {
    setTimeout(() => resolve(mockDashboardData), 500)
  })
}
