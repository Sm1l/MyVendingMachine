import { createSlice } from "@reduxjs/toolkit";
import { quantityOfMoney } from "data/quantityOfMoney";

const moneySlice = createSlice({
  name: "money",
  initialState: {
    money: [...quantityOfMoney],
    banknotesForChange: [],
    tail: 0,
  },
  reducers: {
    depositMoney(state, action) {
      const banknote = state.money.find((item) => item.denomination === action.payload.price);
      banknote.quantity = banknote.quantity + 1;
    },

    //todo------------------------------

    pickUpTheChange(state, action) {
      let cash = action.payload.cash; //*сумма для возврата
      const money = state.money; //*массив доступных денег
      let banknotesForChange = [];
      let tail = 0;

      const calculateChange = (cash) => {
        if (cash > 0) {
          // console.log("Есть сдача", cash, ", идем дальше");
          for (let i = 0; i < money.length; i++) {
            // if (cash < money[i].denomination) {
            //   // console.log(`сдача меньше, чем номинал ${money[i].denomination}, двигаемся дальше `);
            //   continue;
            // } else
            if (cash >= money[i].denomination) {
              //*если сдача больше, чем номинал купюры
              // console.log(`сдача больше, чем номинал ${money[i].denomination}, работаем здесь `);
              if (money[i].quantity > 0) {
                // console.log("купюры есть в наличии");
                money[i].quantity -= 1;
                banknotesForChange.push(money[i].denomination);
                return calculateChange(cash - money[i].denomination);
              } else {
                // console.log("Купюры", money[i].denomination, "закончились");
                if (money.at(-1).quantity === 0) {
                  // console.log("К сожалению мы не сможем выдать Вам сдачу, пожалуйста выберите товар!");
                  tail = cash; //todo остаток от выдачи сдачи
                  alert("К сожалению мы не сможем выдать Вам сдачу, пожалуйста выберите товар на оставшуюся сумму!");
                  return;
                }
              }
            }
          }
        }
        return { banknotesForChange, tail };
      };
      calculateChange(cash);
      // console.log(banknotesForChange);
      state.banknotesForChange = banknotesForChange;
      state.tail = tail;
    },
    clearBanknotesForChange(state) {
      state.banknotesForChange = [];
    },

    //todo----------------------------todo
  },
});
export const { depositMoney, pickUpTheChange, clearBanknotesForChange } = moneySlice.actions;
export default moneySlice.reducer;
