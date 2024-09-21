import pool from "../config/database.js";

export const getAllUsers = async () => {
  const [rows, fields] = await pool.query(`SELECT * FROM Users`);
  return rows;
};

export const getUserById = async (userId) => {
  const [rows, fields] = await pool.query(`SELECT * FROM Users WHERE id = ?`, [
    userId,
  ]);
  const [user] = rows;
  return user;
};

export const updateUserById = async (email, name, city, id) => {
  const [rows, fields] = await pool.query(
    `UPDATE Users SET email = ?, name = ?, city = ? WHERE id = ? `,
    [email, name, city, id]
  );
};

export const deleteUserById = async (userId) => {
  const [rows, fields] = await pool.query(`DELETE FROM Users WHERE id = ?;`, [
    userId,
  ]);
};
