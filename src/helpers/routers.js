import React, { Suspense, useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { NonAuthRoutes } from "./urls";
import { ReactComponent as MenuMateLogo } from "../assets/svg/menu-mate-logo.svg";
import { ReactComponent as LoadingIcon } from "../assets/svg/loading-icon-menumate-big.svg";
import LandingPage from "../pages/landingPage";

const LazySignUp = React.lazy(() => import("../pages/signUp"));
const LazySignUpRestaurant = React.lazy(() => import("../pages/signUpRestaurant"));
const LazyLogIn = React.lazy(() => import("../pages/logIn"));
const LazyForgotPassword = React.lazy(() => import("../pages/forgotPassword"));
const LazyVerifyOtpForgotPassword = React.lazy(() => import("../pages/verifyOtpForgotPassword"));

// import LoadingIconBlack from "../assets/svg/the-frenzy-icon-transparent-white.png";
// <img src={LoadingIconBlack} alt="The-Frenzy Icon" />

function Routers() {
  const location = useLocation();
  const [isImageVisible, setImageVisible] = useState(true);

  useEffect(() => {
    const ac = new AbortController();

    setTimeout(() => {
      setImageVisible(false);
    }, 1500);

    return function cleanup() {
      ac.abort();
    };
  }, []);

  /** Displays Landing Page Image Then Fades Out */
  const landingPageImageFadeOutMobile = () => {
    return (
      <div className="flex h-screen w-full">
        <div
          className="-z-10 flex-1 bg-cover bg-center bg-no-repeat
      bg-[url('https://res.cloudinary.com/dtbhsztdp/image/upload/v1677068504/landing-page-image_seyw7g.png')]"
        />
        <div className="absolute flex justify-center items-end bottom-[40%] w-full h-full">
          <MenuMateLogo />
        </div>
      </div>
    );
  };

  return (
    <div>
      <AnimatePresence>
        {isImageVisible ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {landingPageImageFadeOutMobile()}
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {location.pathname === NonAuthRoutes.landingPage ||
            location.pathname === NonAuthRoutes.signup ||
            location.pathname === NonAuthRoutes.signupRestaurant ||
            location.pathname === NonAuthRoutes.login ||
            location.pathname === NonAuthRoutes.verifyOtpForgotPassword ||
            location.pathname === NonAuthRoutes.forgotPassword ? (
              <div className="dark:bg-black">
                <Suspense
                  fallback={
                    <div className="flex justify-center items-center h-screen">
                      <LoadingIcon className="btn-loading" />
                    </div>
                  }
                >
                  <Routes>
                    <Route path={NonAuthRoutes.landingPage} element={<LandingPage />} />
                    <Route path={NonAuthRoutes.signup} element={<LazySignUp />} />
                    <Route path={NonAuthRoutes.signupRestaurant} element={<LazySignUpRestaurant />} />
                    <Route path={NonAuthRoutes.login} element={<LazyLogIn />} />
                    <Route path={NonAuthRoutes.forgotPassword} element={<LazyForgotPassword />} />
                    <Route path={NonAuthRoutes.verifyOtpForgotPassword} element={<LazyVerifyOtpForgotPassword />} />
                  </Routes>
                </Suspense>
              </div>
            ) : (
              <div className="dark:bg-black">
                <Suspense
                  fallback={
                    <div className="flex justify-center items-center h-screen">
                      <LoadingIcon className="btn-loading" />
                    </div>
                  }
                >
                  <Routes>
                    {/* <Route comp={() => <PrivateRoute />}>
							<Route
								path={`${NonAuthRoutes.verifyEmail}/email/:id`}
								// element={lazyVerifyEmail}
							/>
							<Route
								path={AuthRoutes.dashboard}
								// element={lazyDashboard}
							/> */}
                  </Routes>
                </Suspense>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default Routers;
