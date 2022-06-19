import express from "express";
import { getDrivers } from "../controllers/drivers.js";
const router = express.Router();

router.get('/', getDrivers );

export default router;
