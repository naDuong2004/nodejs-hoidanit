// const express = require("express");
// const { getHomePage, getAboutPage } = require("../controllers/homeController");
import express from "express";

const router = express.Router();
import { getHomePage, getAboutPage } from "../controllers/homeController.js";

router.get("/", getHomePage);

//render view
router.get("/about", getAboutPage);

// module.exports = router;
export default router;
