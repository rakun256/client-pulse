import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const mockCustomers = [
  {
    id: 1,
    name: "Ahmet Yılmaz",
    email: "ahmet@example.com",
    avatarUrl: "https://randomuser.me/api/portraits/men/10.jpg",
    riskScore: 72,
    alerts: { critical: 2, total: 5 },
    suggestions: { pending: 60, pendingCount: 3, applied: 40 },
  },
  {
    id: 2,
    name: "Zeynep Demir",
    email: "zeynep@example.com",
    avatarUrl: "https://randomuser.me/api/portraits/women/15.jpg",
    riskScore: 45,
    alerts: { critical: 1, total: 2 },
    suggestions: { pending: 30, pendingCount: 1, applied: 70 },
  },
  {
    id: 3,
    name: "Mert Kaya",
    email: "mert@example.com",
    avatarUrl: "https://randomuser.me/api/portraits/men/22.jpg",
    riskScore: 88,
    alerts: { critical: 4, total: 6 },
    suggestions: { pending: 90, pendingCount: 5, applied: 10 },
  },
  {
    id: 4,
    name: "Ali Koç",
    email: "ali@example.com",
    avatarUrl: "https://randomuser.me/api/portraits/men/48.jpg",
    riskScore: 23,
    alerts: { critical: 0, total: 1 },
    suggestions: { pending: 10, pendingCount: 1, applied: 90 },
  },
  {
    id: 5,
    name: "Burak Güneş",
    email: "burak@example.com",
    avatarUrl: "https://randomuser.me/api/portraits/men/35.jpg",
    riskScore: 66,
    alerts: { critical: 2, total: 3 },
    suggestions: { pending: 50, pendingCount: 2, applied: 50 },
  },
  {
    id: 6,
    name: "Deniz Öz",
    email: "deniz@example.com",
    avatarUrl: "https://randomuser.me/api/portraits/women/9.jpg",
    riskScore: 95,
    alerts: { critical: 5, total: 7 },
    suggestions: { pending: 80, pendingCount: 4, applied: 20 },
  },
  {
    id: 7,
    name: "Canan Tekin",
    email: "canan@example.com",
    avatarUrl: "https://randomuser.me/api/portraits/women/70.jpg",
    riskScore: 34,
    alerts: { critical: 1, total: 1 },
    suggestions: { pending: 20, pendingCount: 1, applied: 80 },
  },
  {
    id: 8,
    name: "Emre Tunca",
    email: "emre@example.com",
    avatarUrl: "https://randomuser.me/api/portraits/men/88.jpg",
    riskScore: 57,
    alerts: { critical: 2, total: 4 },
    suggestions: { pending: 45, pendingCount: 2, applied: 55 },
  },
  {
    id: 9,
    name: "Melisa Arı",
    email: "melisa@example.com",
    avatarUrl: "https://randomuser.me/api/portraits/women/33.jpg",
    riskScore: 80,
    alerts: { critical: 3, total: 6 },
    suggestions: { pending: 70, pendingCount: 3, applied: 30 },
  },
  {
    id: 10,
    name: "Kaan Uslu",
    email: "kaan@example.com",
    avatarUrl: "https://randomuser.me/api/portraits/men/66.jpg",
    riskScore: 51,
    alerts: { critical: 1, total: 2 },
    suggestions: { pending: 40, pendingCount: 1, applied: 60 },
  }
]

export const fetchCustomers = createAsyncThunk("customers/fetch", async () => {
  await new Promise((r) => setTimeout(r, 400))
  return mockCustomers
})

const customersSlice = createSlice({
  name: "customers",
  initialState: {
    list: [],
    selectedCustomer: null,
    loading: false,
  },
  reducers: {
    selectCustomer: (state, action) => {
      state.selectedCustomer = action.payload
    },
    closeCustomerDetail: (state) => {
      state.selectedCustomer = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomers.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchCustomers.fulfilled, (state, action) => {
        state.list = action.payload
        state.loading = false
      })
  },
})

export const { selectCustomer, closeCustomerDetail } = customersSlice.actions
export default customersSlice.reducer
