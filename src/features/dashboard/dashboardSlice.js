import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { fetchDashboardDataAPI } from "../../services/dashboardService"

// ✅ Thunk: Dashboard verilerini getir
export const getDashboardData = createAsyncThunk(
  "dashboard/getDashboardData",
  async () => {
    return await fetchDashboardDataAPI()
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
    error: null,
  },
  reducers: {
    // örn: alert ekleme/silme gibi local işlemler burada olabilir
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDashboardData.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getDashboardData.fulfilled, (state, action) => {
        const data = action.payload
        state.summary = data.summary
        state.activityData = data.activityData
        state.alerts = data.alerts
        state.suggestions = data.suggestions
        state.loading = false
      })
      .addCase(getDashboardData.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export default dashboardSlice.reducer
