import React from "react";
import AddButton from "components/AddButton";
import { useSelector } from "react-redux";
import { buttonsValue } from "data/buttonsValue";
import "./cash.scss";

const Cash = () => {
  const cash = useSelector((store) => store.cash.cash);

  return (
    <div className="cash">
      <h2 className="cash__title">Cash</h2>
      <div className="cash__box">
        {buttonsValue.map((price) => (
          <AddButton price={price} key={price} />
        ))}
      </div>
      <p className="cash__sum">
        Money: <span className="cash__span">{`${cash}`}</span>
      </p>
    </div>
  );
};

export default Cash;
