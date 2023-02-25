import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";
import { useNavigate } from "react-router-dom";
import Buttons from "../components/buttons/buttons";
import Inputs from "../components/inputs/inputs";
import { NonAuthRoutes } from "../helpers/urls";
// import countryCodeDropDown from "../../components/countryCode/countryCode";/
// import { useToastAlertContext } from "../contexts/ToastAlertContext";
import { ReactComponent as PasswordShow } from "../assets/svg/eyes-opened-icon.svg";
import { ReactComponent as PasswordHide } from "../assets/svg/eyes-closed-icon.svg";

// import { motion, AnimatePresence } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import { NonAuthRoutes } from "../helpers/urls";
// import metaTagsAdder from "../helpers/meta-tags-adder";
// import Buttons from "../components/buttons/buttons";
// import { ReactComponent as MenuMateLogo } from "../assets/svg/menu-mate-logo.svg";

function SignUp() {
  const navigate = useNavigate();
  // const { show } = useContext(useToastAlertContext);
  // const [isImageVisible, setImageVisible] = useState(true);
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userMobileNumber, setUserMobileNumber] = useState("");
  // const [userCountry, setUserCountry] = useState("");
  const [userEmailAddress, setUserEmailAddress] = useState("");
  const [userCreatePassword, setUserCreatePassword] = useState("");
  const [userConfirmPassword, setUserConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    const ac = new AbortController();
    document.title = "Menu Mate • Sign Up";

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
    setUserCreatePassword(text);
  };

  /** handles show Confirm Password text */
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  /** handles hide and show Confirm Password */
  const handleConfirmPasswordHash = (text) => {
    setUserConfirmPassword(text);
  };

  /** handles User Sign Up and Stores user details to Redux */
  const handleSignUp = (e) => {
    e.preventDefault();
    // setBtnIsLoading(true);
  };

  /** Displays Sign Up Component */
  const signUpComponent = () => {
    return (
      <div className="flex justify-center h-screen w-full">
        <div className="mt-20 w-full mx-7">
          <p className="text-xl font-lato font-[700]">Let’s get you started</p>
          <p className="mt-2 text-base font-lato font-[400] text-menuMateTextGrey">
            Sign up to get access to Menu Mate features
          </p>

          <form onSubmit={() => handleSignUp()}>
            <div className="mt-16 w-full">
              <p className="text-sm leading-4 font-lato font-[600]">
                First Name
              </p>
              <Inputs
                specificInputId="firstName"
                specificInputType="text"
                specificInputValue={userFirstName}
                specificInputPlaceholder="Enter your first name"
                specificInputOnChange={(e) => setUserFirstName(e.target.value)}
                specificInputStyling=""
              />
            </div>
            <div className="mt-4 w-full">
              <p className="text-sm leading-4 font-lato font-[600]">
                Last Name
              </p>
              <Inputs
                specificInputId="lastName"
                specificInputType="text"
                specificInputValue={userLastName}
                specificInputPlaceholder="Enter your last name"
                specificInputOnChange={(e) => setUserLastName(e.target.value)}
                specificInputStyling=""
              />
            </div>
            <div className="mt-4 w-full">
              <p className="text-sm leading-4 font-lato font-[600]">
                Mobile Number
              </p>
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
              <p className="text-sm leading-4 font-lato font-[600]">
                Email Address
              </p>
              <Inputs
                specificInputId="emailAddress"
                specificInputType="text"
                specificInputValue={userEmailAddress}
                specificInputPlaceholder="Enter your email address"
                specificInputOnChange={(e) =>
                  setUserEmailAddress(e.target.value)
                }
                specificInputStyling=""
              />
            </div>
            <div className="mt-4 w-full">
              <p className="text-sm leading-4 font-lato font-[600]">
                Create Password
              </p>
              <div className="flex justify-end w-full">
                <div className="w-full">
                  <Inputs
                    specificInputId="createPassword"
                    specificInputType={showPassword ? "text" : "password"}
                    specificInputValue={userCreatePassword}
                    specificInputPlaceholder="Enter your password"
                    specificInputOnChange={(e) =>
                      handlePasswordHash(e.target.value)
                    }
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
            <div className="mt-4 w-full">
              <p className="text-sm leading-4 font-lato font-[600]">
                Confirm Password
              </p>
              <div className="flex justify-end w-full">
                <div className="w-full">
                  <Inputs
                    specificInputId="confirmPassword"
                    specificInputType={
                      showConfirmPassword ? "text" : "password"
                    }
                    specificInputValue={userConfirmPassword}
                    specificInputPlaceholder="Confirm your password"
                    specificInputOnChange={(e) =>
                      handleConfirmPasswordHash(e.target.value)
                    }
                    specificInputStyling=""
                  />
                </div>
                <div>
                  {showConfirmPassword ? (
                    <PasswordShow
                      title="Hide Password"
                      onClick={() => handleShowConfirmPassword()}
                      className="absolute mt-[19px] right-6 cursor-pointer"
                    />
                  ) : (
                    <PasswordHide
                      title="Show Password"
                      onClick={() => handleShowConfirmPassword()}
                      className="absolute mt-[19px] right-6 cursor-pointer"
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="mt-12 w-full flex justify-center">
              <div>
                <Buttons
                  specificButtonTitle="Create Account"
                  specificButtonText="Create Account"
                  specificButtonClick={() => navigate(NonAuthRoutes.signup)}
                  specificButtonStyling="font-[200] rounded-xl "
                />
                <p className="text-center mt-5 mb-20 text-sm leading-4 font-lato font-[400]">
                  Own a restaurant?{" "}
                  <span className="text-menuMateOrange cursor-pointer">
                    Register as a restaurant{" "}
                  </span>
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
      <div>{signUpComponent()}</div>
    </div>
  );
}

export default SignUp;
