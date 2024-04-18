import express from "express";
import { test } from "../controllers/user.controller.js";

const router = express.Router();

// request = data that we send to the API
// response = data that we receive from the API
router.get('/test', test);

export default router;