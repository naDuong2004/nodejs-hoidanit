// const express = require("express");
// const { getHomePage, getAboutPage } = require("../controllers/homeController");
import express from "express";
import {
  getHomePage,
  getAboutPage,
  postCreateUser,
  getCreatePage,
  getEditUser,
  postUpdateUser,
  postDeleteUser,
} from "../controllers/homeController.js";

const router = express.Router();

router.get("/", getHomePage); // home page
router.get("/about", getAboutPage);
router.get("/create-page", getCreatePage); // create page
router.post("/create-user", postCreateUser); // handle when user submit form create new user
router.get("/edit-user/:userId", getEditUser); //handle when user edit information
router.post("/update-user", postUpdateUser); //handle when user submit update info form
router.post("/delete-user/:userId", postDeleteUser);
// module.exports = router;
export default router;
