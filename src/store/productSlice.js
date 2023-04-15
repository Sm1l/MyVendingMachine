import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import { productsInfo } from "../data/productsInfo";

const initProducts = productsInfo //!почему не работает?
  .sort((a, b) => {
    return a.price - b.price;
  })
  .map((product) => {
    return {
      title: product.title,
      price: product.price,
      quantity: product.quantity,
      description: product.description,
      id: uuidv4(),
    };
  });
const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [...initProducts],
    boughtProducts: [],
    moneyForChange: 0,
  },
  reducers: {
    //*уменьшает количество
    buyProduct(state, action) {
      const product = state.products.find((product) => product.id === action.payload.id);
      if (product.quantity <= 0) {
        console.log("Товар закончился");
        alert("Товар закончился");
      } else {
        product.quantity = product.quantity - 1;
      }
    },

    boughtProduct(state, action) {
      const product = state.products.find((item) => item.id === action.payload.id);
      const bPr = state.boughtProducts.find((item) => item.title === product.title);
      if (bPr) {
        bPr.quantity = bPr.quantity + 1;
      } else {
        state.boughtProducts.push({ title: product.title, quantity: 1, id: uuidv4() });
      }
    },

    returnProductsForChange(state, action) {
      let tail = action.payload.tail;
      const products = state.products;
      // const productsForSort = state.products;
      //! ??
      //!изменяет products!!!(в этом нет необходимости, но...)
      // const sortProducts = productsForSort.sort((a, b) => {
      //   return b.price - a.price;
      // });
      const recursion = (tail) => {
        for (let i = products.length - 1; i >= 0; i--) {
          const product = products[i];
          if (tail >= product.price) {
            console.log("Этот подходит на сдачу", product.title);
            if (product.quantity <= 0) {
              console.log(`Товар закончился, не можем ${product.title} выдать сдачу`);
            } else {
              product.quantity = product.quantity - 1;
              tail = tail - product.price;
              console.log("Выдаем сдачу товаром", product.title);
              console.log(tail);
              const bPr = state.boughtProducts.find((item) => item.title === product.title);
              if (bPr) {
                bPr.quantity = bPr.quantity + 1;
              } else {
                state.boughtProducts.push({ title: product.title, quantity: 1, id: uuidv4() });
              }
              return recursion(tail);
            }
          }
        }
      };
      recursion(tail);
      state.moneyForChange = tail;
    },
  },
});

export const { addProduct, buyProduct, boughtProduct, returnProductsForChange } = productSlice.actions;
export default productSlice.reducer;
