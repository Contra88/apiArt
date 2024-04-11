import { comparar, encriptar } from "../helpers/handleBcript.js";
import { pool } from "../db.Con.js";

export const registerCtrl = async (req, res) => {
  try {
    const { user, password } = req.body;
    const passwordHash = await encriptar(password);
    const [rows] = await pool.query(
      "INSERT INTO usuarios(usuario,password)VALUES(?,?)",
      [user, passwordHash]
    );
    res.json(rows[0]);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "Error al Registrarse",
    });
  }
};
export const loginCtrl = (req, res) => {};
