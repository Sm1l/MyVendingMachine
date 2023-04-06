import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pickUpTheChange } from "store/moneySlice";
import { changeCash } from "store/cashSlice";
import "./change.scss";

const Change = () => {
  const dispatch = useDispatch();

  const cash = useSelector((store) => store.cash.cash);
  const money = useSelector((store) => store.money);
  const banknotesForChange = money.banknotesForChange.join(", ");
  const tail = money.tail;
  // const [tail, setTail] = useState(0);

  const handleClick = () => {
    dispatch(pickUpTheChange({ cash }));

    //!значение tail запаздывает на цикл
    if (!tail) {
      dispatch(changeCash({ tail }));
    }
  };
  //! работает не правильно. Если tail не меняется, то не меняет money
  useEffect(() => {
    dispatch(changeCash({ tail }));
  }, [tail]);
  // console.log("change");

  return (
    <div className="change">
      <h2>Change</h2>
      <button className="button change__button" onClick={handleClick}>
        Pick up the change
      </button>
      <span>Change: {banknotesForChange}</span>
    </div>
  );
};

export default Change;
