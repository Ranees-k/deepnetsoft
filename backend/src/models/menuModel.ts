import pool from "../config/db";

export const createMenu = async (name: string, description: string) => {
  const result = await pool.query(
    "INSERT INTO menu (name, description) VALUES ($1, $2) RETURNING *",
    [name, description]
  );
  return result.rows[0];
};

export const getAllMenus = async () => {
  const result = await pool.query("SELECT * FROM menu");
  return result.rows;
};
