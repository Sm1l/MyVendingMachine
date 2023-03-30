import { createSlice } from "@reduxjs/toolkit";
import { quantityOfMoney } from "data/quantityOfMoney";

const moneySlice = createSlice({
  name: "money",
  initialState: {
    money: [...quantityOfMoney],
    banknotesForChange: [],
    noChange: false,
  },
  reducers: {
    depositMoney(state, action) {
      const banknote = state.money.find((item) => item.denomination === action.payload.price);
      banknote.quantity = banknote.quantity + 1;
    },

    //todo------------------------------

    pickUpTheChange(state, action) {
      let change = action.payload.change; //сумма для возврата
      const money = state.money; //массив доступных денег
      let banknotesForChange = [];

      const calculateChange = (change) => {
        if (change > 0) {
          console.log("Есть сдача", change, ", идем дальше");
          for (let i = 0; i < money.length; i++) {
            console.log("внутри цикла");
            if (change < money[i].denomination) {
              console.log(`сдача меньше, чем номинал ${money[i].denomination}, двигаемся дальше `);
              continue;
            } else if (change >= money[i].denomination) {
              //если сдача больше, чем номинал купюры
              console.log(`сдача больше, чем номинал ${money[i].denomination}, работаем здесь `);
              if (money[i].quantity > 0) {
                console.log("купюры есть в наличии");
                state.noChange = false;
                // console.log(money[i].quantity);
                //если купюры есть в наличии
                money[i].quantity -= 1;
                banknotesForChange.push(money[i].denomination);
                // console.log(banknotesForChange);
                const newChange = change - money[i].denomination;
                return calculateChange(newChange);
              } else {
                state.noChange = false;
                console.log("Купюры", money[i].denomination, "закончились");
                if (money.at(-1).quantity === 0) {
                  console.log("К сожалению мы не сможем выдать Вам сдачу, пожалуйста выберите товар!");
                  //!выдать товаром, подумать!
                  state.noChange = true;
                  return;
                }
              }
            }
          }
        }
        return banknotesForChange;
      };
      calculateChange(change);
      // console.log(banknotesForChange);
      state.banknotesForChange = banknotesForChange.join(", ");
    },

    //todo----------------------------todo
  },
});
export const { depositMoney, pickUpTheChange } = moneySlice.actions;
export default moneySlice.reducer;
