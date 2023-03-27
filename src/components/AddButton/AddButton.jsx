import React from "react";
import { useDispatch } from "react-redux";
import { addCash } from "store/cashSlice";
import { depositMoney } from "store/moneySlice";

import "./addbutton.scss";

const AddButton = ({ price }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addCash({ price }));
    dispatch(depositMoney({ price }));
  };
  return (
    <button className="button addbutton" onClick={handleClick}>
      {price}
    </button>
  );
};

export default AddButton;
