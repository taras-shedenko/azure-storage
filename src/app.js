import express from "express";
import videoRouter from "./video/router.js";

const app = express();
app.use("/video", videoRouter);

export default app;
