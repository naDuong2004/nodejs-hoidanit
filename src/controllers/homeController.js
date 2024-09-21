import { name } from "ejs";
import pool from "../config/database.js";
import {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} from "../services/CRUDService.js";

export const getHomePage = async (req, res) => {
  const rows = await getAllUsers();
  return res.render("home.ejs", { listUsers: rows });
};

export const getAboutPage = (req, res) => {
  res.render("sample.ejs");
};

export const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

export const postCreateUser = async (req, res) => {
  const { email, name, city } = req.body;

  const [rows, fields] = await pool.query(
    `INSERT INTO Users (email, name, city) VALUES (?, ?, ? )`,
    [email, name, city]
  );
  res.send("duma");
};

export const getEditUser = async (req, res) => {
  const userId = req.params.userId;
  const user = await getUserById(userId);
  res.render("edit.ejs", { user: user });
};

export const postUpdateUser = async (req, res) => {
  const { email, name, city, id } = req.body;
  await updateUserById(email, name, city, id);
  res.redirect("/");
};

export const postDeleteUser = async (req, res) => {
  const userId = req.params.userId;
  await deleteUserById(userId);
  res.redirect("/");
};
// module.exports = {
//   getHomePage,
//   getAboutPage,
// };
