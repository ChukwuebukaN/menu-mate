import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Buttons from "../components/buttons/buttons";
import { NonAuthRoutes } from "../helpers/urls";
import { ReactComponent as LeftArrowIcon } from "../assets/svg/left-arrow-icon.svg";

function VerifyForgotPassword() {
  const navigate = useNavigate();
  const otpRef = useRef([]);
  const [input1Value, setInput1Value] = useState("");

  useEffect(() => {
    const ac = new AbortController();
    document.title = "Menu Mate • Sign Up";

    return function cleanup() {
      ac.abort();
    };
  }, []);

  /** handles Restaurant Sign Up and Stores user details to Redux */
  const handleRestaurantSignUp = (e) => {
    e.preventDefault();
    // setBtnIsLoading(true);
  };

  /** Otp Code Change Handler */
  const codeChangeHandler = (event) => {
    const [, codeFieldIndex] = event.target.name.split("-");
    const fieldIntIndex = parseInt(codeFieldIndex, 10);
    setInput1Value((prevState) => prevState + event.target.value);

    if (fieldIntIndex < 3) {
      otpRef.current[fieldIntIndex + 1].focus();
    } else {
      const field = document.querySelector(`Input[name=code-${fieldIntIndex}]`);
      field.blur();
    }
  };

  /** Displays Otp Input Fileds */
  const otpInputFields = new Array(4).fill(0).map((item, index) => {
    return (
      <div
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        className={`${
          input1Value[index] && "bg-menuMateOrange"
        } w-12 h-14 border-2 flex justify-center items-center rounded-lg border-menuMateOrange`}
      >
        <input
          ref={(ref) => otpRef.current.push(ref)}
          id={index}
          type="number"
          // value={input1Value}
          name={`code-${index}`}
          placeholder=""
          maxLength={1}
          onChange={(e) => codeChangeHandler(e)}
          className={`${
            input1Value[index] && "bg-menuMateOrange text-white"
          } w-6 border-b-2 border-menuMateOrange text-center text-3xl leading-4 font-lato font-[700] text-menuMateTextGrey appearance-none focus:outline-none`}
        />
      </div>
    );
  });

  /** Displays Forgot Password Component */
  const forgotPasswordComponent = () => {
    return (
      <div className="flex justify-center h-screen w-full">
        <div className="mt-6 w-full mx-7">
          <button type="button" onClick={() => navigate(NonAuthRoutes.verifyEmail)}>
            <LeftArrowIcon />
          </button>
          <p className="text-2xl mt-4 font-lato font-[700]">OTP Verification</p>
          <p className="mt-2 mb-11 text-base font-lato font-[400] text-menuMateTextGrey">
            Please input the OTP sent to your email address.
          </p>

          <form onSubmit={() => handleRestaurantSignUp()}>
            <div className="flex w-full justify-evenly items-center">{otpInputFields}</div>

            <div className="mt-20 w-full flex justify-center">
              <Buttons
                specificButtonTitle="Continue"
                specificButtonText="Continue"
                specificButtonClick={() => navigate(NonAuthRoutes.login)}
                specificButtonStyling="font-[200] rounded-xl "
              />
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div>{forgotPasswordComponent()}</div>
    </div>
  );
}

export default VerifyForgotPassword;
