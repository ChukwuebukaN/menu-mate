const AuthRoutes = {
  dashboard: "/dashboard",
};

const NonAuthRoutes = {
  landingPage: "/",
  signup: "/sign-up",
  signupRestaurant: "/sign-up-restaurant",
  login: "/login",
  forgotPassword: "/forgot-password",
  verifyOtpForgotPassword: "/account/otp/verify-forgot-password",
  verifyEmail: "/account/verify",
  resetPassword: "/reset-password",
  pageNotFound: "/404/page-not-found",
};

export { AuthRoutes, NonAuthRoutes };
