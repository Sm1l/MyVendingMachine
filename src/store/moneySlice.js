import { createSlice } from "@reduxjs/toolkit";
import { quantityOfMoney } from "data/quantityOfMoney";

const moneySlice = createSlice({
  name: "money",
  initialState: {
    money: { ...quantityOfMoney },
  },
  reducers: {
    depositMoney(state, action) {
      const value = action.payload.price;
      state.money[value] += 1;
    },
    pickUpTheChange(state, action) {
      const change = action.payload.change;
      const money = state.money;
      console.log("Change is here");
      // console.log(change);
      for (let key in money) {
        console.log(key);
        console.log(money[key]);
      }

      // for (let i = money.length - 1; i >= 0; i--) {
      //   const value = i;
      //   const quantity = money[i];
      //   console.log(value);
      // }
    },
  },
});
export const { depositMoney, pickUpTheChange } = moneySlice.actions;
export default moneySlice.reducer;
