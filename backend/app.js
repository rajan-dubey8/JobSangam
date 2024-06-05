import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import jobRouter from "./routes/jobRoutes.js";
import userRouter from "./routes/userRoutes.js";
import applicationRouter from "./routes/applicationRoutes.js";
import { config } from "dotenv";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";

const app = express();
config({ path: "./config/config.env" });

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],    // linking backend and frontend here 
    method: ["GET", "POST", "DELETE", "PUT"],  // can link multiple frontend to single backend 
    credentials: true,
  })
);

app.use(cookieParser());    // user authorisation me kaam ayega 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));   //string ko json format me convert kardega

app.use(
  fileUpload({          //file upload ke liye multer bhi use kar skte hain 
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/job", jobRouter);
app.use("/api/v1/application", applicationRouter);
dbConnection();

app.use(errorMiddleware);   //error midddle ware sbse last me use karna hai 
export default app;
