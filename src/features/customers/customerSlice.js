import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const mockCustomers = [
  { id: 1, name: "Ahmet Yılmaz", email: "ahmet@ornek.com", registeredAt: "2024-12-01" },
  { id: 2, name: "Zeynep Demir", email: "zeynep@ornek.com", registeredAt: "2025-01-15" },
  { id: 3, name: "Mert Kaya", email: "mert@ornek.com", registeredAt: "2025-02-10" },
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
