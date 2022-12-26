import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setName } from "../../features/currentUser/currentUserSlice";

export const Login = () => {
  // const name = useSelector((state) => state.currentUser.name);
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <p>Name:</p>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => dispatch(setName(inputValue))}>button</button>
    </div>
  );
};
