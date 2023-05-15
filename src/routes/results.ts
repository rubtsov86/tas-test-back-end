import { Router } from "express";

import addResult from "../controllers/results/addResult";

import ctrlWrapper from "../helpers/ctrlWrapper";

import auth from "../middlewares/auth";

const router = Router();

router.post("/", auth, ctrlWrapper(addResult));

export default router;
