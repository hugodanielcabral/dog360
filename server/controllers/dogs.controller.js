import { pool } from "../db.js";

export const getDogs = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM razas ORDER BY id ASC");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getDog = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM razas WHERE id = ?", [
      req.params.id,
    ]);

    if (result.length === 0)
      res.status(404).json({ message: "Raza no encontrada" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createDog = async (req, res) => {
  const {
    nombre,
    descripcion,
    imagen,
    tamanio,
    esperanza_de_vida,
    personalidad,
  } = req.body;

  const esperanza_de_vida_entero = parseInt(esperanza_de_vida, 10);
  try {
    const [result] = await pool.query(
      `
      INSERT INTO razas (nombre, descripcion, imagen, tamanio, esperanza_de_vida, personalidad) VALUES (?, ?, ?, ?, ?, ?)
        `,
      [
        nombre,
        descripcion,
        imagen,
        tamanio,
        esperanza_de_vida_entero,
        personalidad,
      ]
    );
    res.json({
      id: result.insertId,
      nombre,
      descripcion,
      imagen,
      tamanio,
      esperanza_de_vida_entero,
      personalidad,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateDog = async (req, res) => {
  const { id } = req.params;
  const {
    nombre,
    descripcion,
    imagen,
    tamanio,
    esperanza_de_vida,
    personalidad,
  } = req.body;

  try {
    const [result] = await pool.query(
      `
      UPDATE razas SET nombre = IFNULL(?, nombre), 
      descripcion = IFNULL(?, descripcion), 
      imagen = IFNULL(?, imagen), 
      tamanio = IFNULL(?, tamanio), 
      esperanza_de_vida = IFNULL(?, esperanza_de_vida), 
      personalidad = IFNULL(?, personalidad) 
      WHERE raza_id = ?
      `,
      [
        nombre,
        descripcion,
        imagen,
        tamanio,
        esperanza_de_vida,
        personalidad,
        id,
      ]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Raza no encontrada" });

    const [rows] = await pool.query("SELECT * FROM razas WHERE raza_id = ?", [
      id,
    ]);
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteDog = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM razas WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Raza no encontrada" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
