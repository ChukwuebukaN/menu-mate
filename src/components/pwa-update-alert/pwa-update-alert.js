/* eslint-disable react/prop-types */
import React from "react";
// import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";

function Alert({ text, buttonText, onClick }) {
  // const dispatch = useDispatch();

  // eslint-disable-next-line consistent-return
  // useEffect(() => {
  //   if (!onClick) {
  //     const timer = setTimeout(() => {
  //       dispatch({ type });
  //     }, 6000);
  //     return () => clearTimeout(timer);
  //   }
  // }, []);

  return (
    <div className="alert">
      {text}{" "}
      {buttonText && (
        <button type="button" onClick={onClick}>
          {buttonText}
        </button>
      )}
    </div>
  );
}

export default Alert;
