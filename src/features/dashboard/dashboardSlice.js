import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

// MOCK DATA
const mockDashboardData = {
  summary: {
    totalCustomers: 120,
    activeUsers: 87,
    riskyCustomers: 14,
  },
  activityData: [
    { date: "Mon", count: 10 },
    { date: "Tue", count: 24 },
    { date: "Wed", count: 18 },
    { date: "Thu", count: 31 },
    { date: "Fri", count: 22 },
    { date: "Sat", count: 13 },
    { date: "Sun", count: 15 },
  ],
  alerts: [
    { level: "Yüksek", message: "Müşteri A son 3 gündür pasif." },
    { level: "Orta", message: "Müşteri B, önerilen içeriği görmedi." },
    { level: "Düşük", message: "Müşteri C'nin etkileşimi düştü." },
  ],
  suggestions: [
    { message: "Müşteri A için içerik önerin.", source: "AI" },
    { message: "Müşteri B ile birebir iletişim önerin.", source: "Uzman" },
  ],
}

export const getDashboardData = createAsyncThunk(
  "dashboard/getDashboardData",
  async () => {
    await new Promise((r) => setTimeout(r, 500)) // Simülasyon
    return mockDashboardData
  }
)

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    summary: {},
    activityData: [],
    alerts: [],
    suggestions: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDashboardData.pending, (state) => {
        state.loading = true
      })
      .addCase(getDashboardData.fulfilled, (state, action) => {
        state.summary = action.payload.summary
        state.activityData = action.payload.activityData
        state.alerts = action.payload.alerts
        state.suggestions = action.payload.suggestions
        state.loading = false
      })
      .addCase(getDashboardData.rejected, (state) => {
        state.loading = false
      })
  },
})

export default dashboardSlice.reducer
