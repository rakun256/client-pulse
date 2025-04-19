import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { fetchCustomersAPI } from "../../services/customerService"

// ✅ Thunk: Müşteri listesini getir
export const fetchCustomers = createAsyncThunk("customers/fetch", async () => {
  return await fetchCustomersAPI()
})

const customersSlice = createSlice({
  name: "customers",
  initialState: {
    list: [],
    selectedCustomer: null,
    loading: false,
    error: null,
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
        state.error = null
      })
      .addCase(fetchCustomers.fulfilled, (state, action) => {
        state.list = action.payload
        state.loading = false
      })
      .addCase(fetchCustomers.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export const { selectCustomer, closeCustomerDetail } = customersSlice.actions
export default customersSlice.reducer
