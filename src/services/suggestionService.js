import { mockSuggestions } from "./mock/mockSuggestions"
// import api from "@/services/api" // backend için hazır

export async function fetchSuggestionsAPI() {
  // 🔁 Gerçek API geldiyse:
  // const res = await api.get("/suggestions")
  // return res.data

  // 🧪 Mock veri ile çalışıyoruz
  return await new Promise((resolve) => {
    setTimeout(() => resolve(mockSuggestions), 500)
  })
}
