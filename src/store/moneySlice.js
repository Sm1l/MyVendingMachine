import { createSlice } from "@reduxjs/toolkit";
import { quantityOfMoney } from "data/quantityOfMoney";

const moneySlice = createSlice({
  name: "money",
  initialState: {
    money: { ...quantityOfMoney },
  },
  reducers: {
    depositMoney(state, action) {
      console.log(state.money);
    },
    pichUpTheChange(state, action) {
      // state.cash = state.cash + action.payload.price;
    },
    // addCash(state, action) {
    //   state.cash = state.cash + action.payload.price;
    // },
    // spendCash(state, action) {
    //   if (state.cash < action.payload.price) {
    //     state.enoughCash = false;
    //     console.log("У вас недостаточно денег");
    //     alert("У вас недостаточно денег");
    //   } else {
    //     state.enoughCash = true;
    //     state.cash = state.cash - action.payload.price;
    //   }
    // },
  },
});
export const { depositMoney, pichUpTheChange } = moneySlice.actions;
export default moneySlice.reducer;
