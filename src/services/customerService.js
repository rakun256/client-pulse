import { mockCustomers } from "./mock/mockCustomers"
// import api from "@/services/api" // hazır olduğunda backend'e geçmek için aç

export async function fetchCustomersAPI() {
  // ⏳ Backend bağlandığında aşağıdaki satırı aktif edeceksin:
  // const response = await api.get("/customers")
  // return response.data

  // 🧪 Şu an için mock veri kullanıyoruz
  return await new Promise((resolve) => {
    setTimeout(() => resolve(mockCustomers), 400)
  })
}
