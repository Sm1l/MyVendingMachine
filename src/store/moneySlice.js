import { createSlice } from "@reduxjs/toolkit";
import { quantityOfMoney } from "data/quantityOfMoney";

const moneySlice = createSlice({
  name: "money",
  initialState: {
    money: [...quantityOfMoney],
  },
  reducers: {
    depositMoney(state, action) {
      const banknote = state.money.find((item) => item.denomination === action.payload.price);
      banknote.quantity = banknote.quantity + 1;
    },

    //todo------------------------------
    pickUpTheChange(state, action) {
      // console.log("Change is here");
      let change = action.payload.change; //сумма для возврата
      const money = state.money; //массив доступных денег
      const banknotesForChange = [];

      const calculateChange = (change) => {
        if (change === 0) {
          console.log("change = 0", banknotesForChange);
          return banknotesForChange;
        } else {
          console.log("Есть сдача", change, ", идем дальше");
          for (let i = 0; i < money.length; i++) {
            // console.log("внутри цикла");
            // console.log(change, "= change");
            // console.log(money[i].denomination, "= money.denomination");
            // if (change >= money.denomination && money.quantity > 0) {
            if (change >= money[i].denomination) {
              if (money[i].quantity > 0) {
                //!решить вопрос, вроде не работает
                // console.log("change > money");
                banknotesForChange.push(money[i].denomination);
                money[i].quantity -= 1;
                const newChange = change - money[i].denomination;
                return calculateChange(newChange);
              } else {
                console.log("Купюры", money[i].denomination, "закончились");
                continue;
              }
            } else if (change < money[i].denomination) {
              // console.log("change < money");
              continue;
            }
          }
          console.log(banknotesForChange);
          return banknotesForChange;
        }
      };

      calculateChange(change);

      // for (let i = 0; i < money.length; i++) {
      //   if (money.quantity <= 0) {
      //     console.log(`Купюры номиналом ${money.denomination} закончились`);
      //     continue;
      //   } else if (change >= money.denomination) {
      //     banknotesForChange.push(money.denomination);
      //     change = change - money.denomination;
      //   } else {
      //     console.log(banknotesForChange);
      //     continue;
      //   }
      // }
    },
    //todo------------------------------
  },
});
export const { depositMoney, pickUpTheChange } = moneySlice.actions;
export default moneySlice.reducer;
