import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pickUpTheChange } from "store/moneySlice";
import { returnProductsForChange } from "store/productSlice";
import { changeCash, changeCashAfter } from "store/cashSlice";
import "./change.scss";

const Change = () => {
  const dispatch = useDispatch();

  const cash = useSelector((store) => store.cash.cash);
  const money = useSelector((store) => store.money);
  const banknotesForChange = money.banknotesForChange.join(", ");
  const tail = money.tail;
  const moneyForChange = useSelector((store) => store.products.moneyForChange);
  // const [tail, setTail] = useState(0);

  const handleClick = () => {
    dispatch(pickUpTheChange({ cash }));
    dispatch(returnProductsForChange({ tail })); //? значение tail старое, нет смысла? делаем useEffect
    // dispatch(changeCash({ tail }));
    // dispatch(changeCashAfter({ moneyForChange }));
  };
  //! ??
  useEffect(() => {
    dispatch(changeCash({ tail }));
  }, [tail]);

  useEffect(() => {
    if (tail !== 0) {
      dispatch(returnProductsForChange({ tail }));
    }
  }, [tail]);

  useEffect(() => {
    dispatch(changeCashAfter({ moneyForChange }));
  }, [moneyForChange, tail]);

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
