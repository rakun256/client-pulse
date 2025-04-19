import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { fetchSuggestionsAPI } from "../../services/suggestionService"

export const fetchSuggestions = createAsyncThunk(
  "suggestions/fetchSuggestions",
  async () => {
    return await fetchSuggestionsAPI()
  }
)

const suggestionsSlice = createSlice({
  name: "suggestions",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSuggestions.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchSuggestions.fulfilled, (state, action) => {
        state.list = action.payload
        state.loading = false
      })
      .addCase(fetchSuggestions.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export default suggestionsSlice.reducer
