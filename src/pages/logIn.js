import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";
import { useNavigate } from "react-router-dom";
import Buttons from "../components/buttons/buttons";
import Inputs from "../components/inputs/inputs";
import { NonAuthRoutes } from "../helpers/urls";
import { ReactComponent as PasswordShow } from "../assets/svg/eyes-opened-icon.svg";
import { ReactComponent as PasswordHide } from "../assets/svg/eyes-closed-icon.svg";

function LogIn() {
  const navigate = useNavigate();
  const [userMobileNumber, setUserMobileNumber] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const ac = new AbortController();
    document.title = "Menu Mate • Log In";

    return function cleanup() {
      ac.abort();
    };
  }, []);

  /** handles show Password text */
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  /** handles hide and show Password */
  const handlePasswordHash = (text) => {
    setUserPassword(text);
  };

  /** handles Restaurant Sign Up and Stores user details to Redux */
  const handleLogin = (e) => {
    e.preventDefault();
    // setBtnIsLoading(true);
  };

  /** Displays Sign Up Component */
  const loginComponent = () => {
    return (
      <div className="flex justify-center h-screen w-full">
        <div className="mt-20 w-full mx-7">
          <p className="text-2xl font-lato font-[700]">Welcome back 👋</p>
          <p className="mt-2 text-base font-lato font-[400] text-menuMateTextGrey">Login to your account</p>

          <form onSubmit={() => handleLogin()}>
            <div className="mt-8 w-full">
              <p className="text-sm leading-4 font-lato font-[600]">Mobile Number</p>
              <PhoneInput
                required
                id="mobile"
                international
                defaultCountry="NG"
                flags={flags}
                // onCountryChange={setUserCountry()}
                // isValidPhoneNumber={userMobileNumber}
                countryCallingCodeEditable={false}
                value={userMobileNumber}
                onChange={() => setUserMobileNumber()}
                className=" border border-gray-200"
              />
            </div>
            <div className="mt-4 w-full">
              <p className="text-sm leading-4 font-lato font-[600]">Password</p>
              <div className="flex justify-end w-full">
                <div className="w-full">
                  <Inputs
                    specificInputId="password"
                    specificInputType={showPassword ? "text" : "password"}
                    specificInputValue={userPassword}
                    specificInputPlaceholder="Enter your password"
                    specificInputOnChange={(e) => handlePasswordHash(e.target.value)}
                    specificInputStyling=""
                  />
                </div>
                <div>
                  {showPassword ? (
                    <PasswordShow
                      title="Hide Password"
                      onClick={() => handleShowPassword()}
                      className="absolute mt-[19px] right-6 cursor-pointer"
                    />
                  ) : (
                    <PasswordHide
                      title="Show Password"
                      onClick={() => handleShowPassword()}
                      className="absolute mt-[19px] right-6 cursor-pointer"
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <div />
              <button
                type="button"
                title="Forgot Password?"
                className="text-menuMateOrange cursor-pointer font-lato font-[400]"
                onClick={() => navigate(NonAuthRoutes.forgotPassword)}
              >
                Forgot Password?
              </button>
            </div>
            <div className="mt-12 w-full flex justify-center">
              <div>
                <Buttons
                  specificButtonTitle="Log In"
                  specificButtonText="Log In"
                  specificButtonClick={() => navigate(NonAuthRoutes.signup)}
                  specificButtonStyling="font-[200] rounded-xl "
                />
                <p className="text-center mt-5 mb-20 text-sm leading-4 font-lato font-[400]">
                  Dont have an account?{" "}
                  <button
                    type="button"
                    title=" Sign Up"
                    className="text-menuMateOrange cursor-pointer font-[700]"
                    onClick={() => navigate(NonAuthRoutes.signup)}
                  >
                    Sign up
                  </button>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div>{loginComponent()}</div>
    </div>
  );
}

export default LogIn;
