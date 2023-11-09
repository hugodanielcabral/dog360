import { pool } from "../db.js";

export const getTurno = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM turnos WHERE id = ?", [
      req.params.id,
    ]);

    if (result.length === 0)
      res.status(404).json({ message: "Turno no encontrado" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createTurno = async (req, res) => {
  const { dia, hora, mascota, descripcion, usuario_id } = req.body;

  try {
    const [result] = await pool.query(
      `
        INSERT INTO turnos (dia, hora, mascota, descripcion, usuario_id) VALUES (?, ?, ?, ?, ?)
          `,
      [dia, hora, mascota, descripcion, usuario_id]
    );
    res.json({
      id: result.insertId,
      dia,
      hora,
      mascota,
      descripcion,
      usuario_id,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTurno = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM turnos WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Turno no encontrado" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
