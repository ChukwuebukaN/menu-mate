import React from "react";

function Buttons({ specificButtonTitle, specificButtonText, specificButtonClick, specificButtonStyling }) {
  return (
    <button
      type="button"
      title={specificButtonTitle}
      className={`${specificButtonStyling} w-menuMateButtonWidth h-menuMateButtonHeight font-plusJakartaSans text-base rounded outline-none text-white bg-menuMateOrange hover:bg-menuMateDeepOrange`}
      onClick={specificButtonClick}
    >
      {specificButtonText}
    </button>
  );
}

export default Buttons;
