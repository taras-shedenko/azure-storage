import { Router } from "express";
import { getHandler } from "./controllers.js";

const router = new Router();
router.get("/:name", getHandler);

export default router;
