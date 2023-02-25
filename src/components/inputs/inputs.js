import React from "react";

function Inputs({
  specificInputId,
  specificInputType,
  specificInputValue,
  specificInputPlaceholder,
  specificInputOnChange,
  specificInputStyling,
}) {
  return (
    <label
      className="block text-gray-700 text-sm mb-2 leading-5"
      htmlFor={specificInputId}
    >
      <input
        id={specificInputId}
        type={specificInputType}
        value={specificInputValue}
        placeholder={specificInputPlaceholder}
        onChange={specificInputOnChange}
        className={`${specificInputStyling} mt-1 h-11 w-full text-sm leading-4 py-3 px-3 font-lato font-[400] text-menuMateTextGrey appearance-none border rounded-md focus:outline-none`}
      />
    </label>
  );
}

export default Inputs;
