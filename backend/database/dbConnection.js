import mongoose from "mongoose";

const CONN_STR = process.env.CONN_STR;
export const dbConnection = () => {
  mongoose
    .connect(process.env.CONN_STR, {
      dbName: "JOB_SANGAM",
    })
    .then(() => {
      console.log("Connected to database.");
    })
    .catch((err) => {
      console.log(`Some Error occured. ${err}`);
    });
};
