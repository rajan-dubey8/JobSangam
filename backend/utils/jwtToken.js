// export const sendToken = (user, statusCode, res, message) => {
//   const token = user.getJWTToken();
//   const options = {
//     expires: new Date(
//       Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
//     ),
//     httpOnly: true, // Set httpOnly to true
//   };

//   res.status(statusCode).cookie("token", token, options).json({
//     success: true,
//     user,
//     message,
//     token,
//   });
// };


export const sendToken = (user, statusCode, res, message) => {
  // Default to 'development' if NODE_ENV is not set
  const environment = process.env.NODE_ENV || "development";

  const token = user.getJWTToken();
  const options = {
    expires: new Date(
      Date.now() + (process.env.COOKIE_EXPIRE || 7) * 24 * 60 * 60 * 1000 // Default to 7 days if COOKIE_EXPIRE is not set
    ),
    httpOnly: true,
    secure: environment === "production", // Set secure based on environment
    sameSite: environment === "production" ? "None" : "Lax",
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    message,
    token,
  });
};
