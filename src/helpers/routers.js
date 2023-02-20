import React, { Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { NonAuthRoutes } from "./urls";
// import { ReactComponent as LoadingIconBlack } from "../assets/svg/the-frenzy-icon-transparent-black.svg";
// import { ReactComponent as LoadingIconWhite } from "../assets/svg/the-frenzy-icon-transparent-white.svg";
import LandingPage from "../pages/landingPage";
// const lazySignUp = React.lazy(() => import("../components/signUp/signUp"));

// import LoadingIconBlack from "../assets/svg/the-frenzy-icon-transparent-white.png";
// <img src={LoadingIconBlack} alt="The-Frenzy Icon" />

function Routers() {
  const location = useLocation();

  return (
    <div>
      {location.pathname === NonAuthRoutes.landingPage ||
      location.pathname === NonAuthRoutes.signup ||
      location.pathname === NonAuthRoutes.completeSignup ||
      location.pathname === NonAuthRoutes.login ||
      location.pathname === NonAuthRoutes.forgotPassword ? (
        <div className="dark:bg-black">
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-screen">
                <p>Loading...</p>
              </div>
            }
          >
            <Routes>
              <Route
                path={NonAuthRoutes.landingPage}
                element={<LandingPage />}
              />
              {/* <Route
								path={NonAuthRoutes.signup}
								// element={lazySignUp}
							/>
							<Route
								path={NonAuthRoutes.complete}
								// element={lazyCompleteSignUp}
							/>
							<Route
								path={NonAuthRoutes.login}
								// element={lazyLogin}
							/>
							<Route
								path={NonAuthRoutes.forgotPassword}
								// element={lazyForgotPassword}
							/> */}
            </Routes>
          </Suspense>
        </div>
      ) : (
        <div className="dark:bg-black">
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-screen">
                <p>Loading...</p>
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
    </div>
  );
}
export default Routers;
