import { createSlice } from "@reduxjs/toolkit";

const cashSlice = createSlice({
  name: "cash",
  initialState: {
    cash: 0,
  },
  reducers: {
    addCash(state, action) {
      state.cash = state.cash + action.payload.price;
    },
    spendCash(state, action) {
      state.cash = state.cash - action.payload.price;
    },
    changeCash(state, action) {
      state.cash = action.payload.tail;
    },
    changeCashAfter(state, action) {
      state.cash = action.payload.moneyForChange;
    },
  },
});
export const { addCash, spendCash, changeCash, changeCashAfter } = cashSlice.actions;
export default cashSlice.reducer;
