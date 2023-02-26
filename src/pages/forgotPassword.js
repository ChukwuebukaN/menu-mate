import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Buttons from "../components/buttons/buttons";
import Inputs from "../components/inputs/inputs";
import { NonAuthRoutes } from "../helpers/urls";
import { ReactComponent as LeftArrowIcon } from "../assets/svg/left-arrow-icon.svg";

function ForgotPassword() {
  const navigate = useNavigate();
  const [userEmailAddress, setUserEmailAddress] = useState("");

  useEffect(() => {
    const ac = new AbortController();
    document.title = "Menu Mate • Forgot Password";

    return function cleanup() {
      ac.abort();
    };
  }, []);

  /** handles Restaurant Sign Up and Stores user details to Redux */
  const handleRestaurantSignUp = (e) => {
    e.preventDefault();
    // setBtnIsLoading(true);
  };

  /** Displays Forgot Password Component */
  const forgotPasswordComponent = () => {
    return (
      <div className="flex justify-center h-screen w-full">
        <div className="mt-6 w-full mx-7">
          <button type="button" onClick={() => navigate(NonAuthRoutes.login)}>
            <LeftArrowIcon />
          </button>
          <p className="text-2xl mt-4 font-lato font-[700]">Forgot Password?</p>
          <p className="mt-2 text-base font-lato font-[400] text-menuMateTextGrey">
            Enter your email address and we will send you an OTP to reset your password.
          </p>

          <form onSubmit={() => handleRestaurantSignUp()}>
            <div className="mt-4 w-full">
              <p className="text-sm leading-4 font-lato font-[600]">Email Address</p>
              <Inputs
                specificInputId="emailAddress"
                specificInputType="text"
                specificInputValue={userEmailAddress}
                specificInputPlaceholder="Enter your email address"
                specificInputOnChange={(e) => setUserEmailAddress(e.target.value)}
                specificInputStyling=""
              />
            </div>
            <div className="mt-20 w-full flex justify-center">
              <Buttons
                specificButtonTitle="Continue"
                specificButtonText="Continue"
                specificButtonClick={() => navigate(NonAuthRoutes.verifyOtpForgotPassword)}
                specificButtonStyling="font-[200] rounded-xl"
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

export default ForgotPassword;
