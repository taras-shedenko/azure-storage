import express from "express";
import videoRouter from "./video/router.js";

const app = express();

app.get("/test", (req, res) => {
  res.sendStatus(200);
});

app.use("/video", videoRouter);

export default app;
