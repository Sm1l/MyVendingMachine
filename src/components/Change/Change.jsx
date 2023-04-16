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
  const tailValue = money.tail.value;
  const moneyForChange = useSelector((store) => store.products.moneyForChange);
  const moneyForChangeValue = moneyForChange.value;
  // const [tail, setTail] = useState(0);

  const handleClick = () => {
    dispatch(pickUpTheChange({ cash }));
  };

  useEffect(() => {
    dispatch(changeCash({ tail: tailValue }));
    if (tail !== 0) {
      dispatch(returnProductsForChange({ tail: tailValue }));
    }
  }, [tail]);

  useEffect(() => {
    dispatch(changeCashAfter({ moneyForChange: moneyForChangeValue }));
  }, [moneyForChange]);

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
