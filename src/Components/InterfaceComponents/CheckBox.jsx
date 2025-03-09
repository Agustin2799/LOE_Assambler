import React, { useState, useContext } from "react";
import { Context } from "../../Store/AppContext";

const CheckBox = ({ text, action = null }) => {
  const [isChecked, setIsChecked] = useState(false);
  const { store, actions } = useContext(Context);
  return (
    <div
      onClick={() => {
        action?.();
        setIsChecked(!isChecked);
      }}
      className={`py-0.5 px-1.5 flex flex-row w-max justify-between items-center cursor-pointer ${isChecked ? "text-white" : "text-gray-400"}`}
    >
      <div className="w-min me-2">
              <div className={`rounded-full w-4 h-4 border ${isChecked ? " border-amber-600 bg-amber-400": "border-cyan-950 bg-blue-950"}`}></div>
      </div>
      <div className="w-max">{text}</div>
    </div>
  );
};

export default CheckBox;
