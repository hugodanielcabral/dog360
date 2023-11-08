import { pool } from "../db.js";

export const signin = async (req, res) => {
  const { correo, contrasenia } = req.body;

  try {
    /* const [result] = await pool.query(
      `UPDATE usuarios SET estado = ? WHERE correo = ? AND contrasenia = ?`,
      [estado, correo, contrasenia]
    ); */

    const [result] = await pool.query(
      "SELECT * FROM usuarios WHERE correo = ? AND contrasenia = ?",
      [correo, contrasenia]
    );

    if (result.length === 0) {
      return res.status(401).json({ message: "Credenciales incorrectas" });
    }

    return res.status(200).json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const singup = async (req, res) => {
  const { nombre, apellido, correo, contrasenia, estado, rol } = req.body;

  try {
    const [result] = await pool.query(
      `INSERT INTO usuarios (nombre, apellido, correo, contrasenia, estado, rol) VALUES (?, ?, ?, ?, ?, ?)`,
      [nombre, apellido, correo, contrasenia, estado, rol]
    );

    res.json({
      id: result.insertId,
      nombre,
      apellido,
      correo,
      contrasenia,
      estado,
      rol,
    });
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
};

export const logout = async (req, res) => {
  const { id } = req.query;

  try {
    const [result] = await pool.query(
      "UPDATE usuarios SET estado = ? WHERE id = ?",
      [0, id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Usuario no encontrado" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
