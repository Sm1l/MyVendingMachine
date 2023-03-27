import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { pickUpTheChange } from "store/moneySlice";
import "./change.scss";

const Change = () => {
  const change = useSelector((store) => store.cash.cash);
  const dispatch = useDispatch();
  const handleClick = () => dispatch(pickUpTheChange({ change }));

  return (
    <div className="change">
      <h2>Change</h2>
      <button className="button change__button" onClick={handleClick}>
        Pick up the change
      </button>
      <span>Change:{change}</span>
    </div>
  );
};

export default Change;
