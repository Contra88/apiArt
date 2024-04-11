import { pool } from "../db.Con.js";

export const getArticulos = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM productos");
    res.json(rows);
  } catch (error) {
    res.status(5000).json({ mensaje: "Ha ocurrido un error" });
  }
};

export const getArticulosById = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query("SELECT * FROM productos WHERE id = ?", [
      id,
    ]);
    console.log(rows);
    if (rows.affectedRows <= 0) {
      res.status(404).json({ mensaje: "Articulo no Encontrado" });
    } else {
      res.json(rows[0]);
    }
  } catch (error) {
    res.status(5000).json({ mensaje: "Ha ocurrido un error" });
  }
};

export const agregarArticulos = async (req, res) => {
  try {
    const { nombre, categoria, descripcion, precio } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO productos(nombre,categoria,descripcion,precio)VALUES(?,?,?,?);",
      [nombre, categoria, descripcion, precio]
    );
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ mensaje: "Error de servidor" });
  }
};

export const eliminarArticulos = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.query("DELETE FROM productos WHERE id = ? ", [
      id,
    ]);
    if (result.affectedRows == 0) {
      res.status(404).json({ mensaje: "Articulo no existente" });
    } else {
      res.json(result[0] + "Articulo Eliminado");
    }
  } catch (error) {
    res.status(500).json({ mensaje: "Error de servidor" });
  }
};

export const actualiazarArticulo = async (req, res) => {
  const { nombre, categoria, descripcion, precio } = req.body;
  const { id } = req.params;
  const [resulT] = await pool.query("UPDATE productos SET IFNULL(?,nombre)");
};
