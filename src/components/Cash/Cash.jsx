import React from "react";
import AddButton from "components/AddButton";
import { useSelector } from "react-redux";
import { buttonsValue } from "data/buttonsValue";
import "./cash.scss";

const Cash = () => {
  const state = useSelector((store) => store.cash);
  const cash = state.cash;
  return (
    <div className="cash">
      <h2 className="cash__title">Cash</h2>
      <div className="cash__box">
        {buttonsValue.map((price) => (
          <AddButton price={price} key={price} />
        ))}
        {/* map need */}
      </div>
      <p>{`Money: ${cash}`}</p>
    </div>
  );
};

export default Cash;
