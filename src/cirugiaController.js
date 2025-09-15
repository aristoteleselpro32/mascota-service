const Cirugia = require('./models/Cirugia');

// 📌 Obtener todas las cirugías de una mascota
async function getCirugiasPorMascota(req, res) {
  try {
    const { mascota_id } = req.params;
    const cirugias = await Cirugia.find({ mascota_id });
    res.json(cirugias);
  } catch (error) {
    res.status(500).json({ error: '❌ Error al obtener cirugías' });
  }
}

// 📌 Crear una nueva cirugía
async function crearCirugia(req, res) {
  try {
    const {
      mascota_id,
      veterinario_id,
      fecha,
      procedimiento,
      descripcion_quirurgica,
      preanestesico,
      anestesico,
      otros_medicamentos,
      tratamiento,
      observaciones,
      complicaciones,
      medicamentos,
      precio = 0, // Nuevo: default 0
      estado = 'pendiente' // Nuevo: default pendiente
    } = req.body;

    const nuevaCirugia = new Cirugia({
      mascota_id,
      veterinario_id,
      fecha,
      procedimiento,
      descripcion_quirurgica,
      preanestesico,
      anestesico,
      otros_medicamentos,
      tratamiento,
      observaciones,
      complicaciones,
      medicamentos,
      precio, // Nuevo
      estado // Nuevo
    });

    await nuevaCirugia.save();
    res.status(201).json({ message: '✅ Cirugía registrada', cirugia: nuevaCirugia });
  } catch (error) {
    res.status(500).json({ error: '❌ Error al registrar cirugía' });
  }
}

// 📌 Actualizar una cirugía
async function actualizarCirugia(req, res) {
  try {
    const { id } = req.params;
    const actualizada = await Cirugia.findByIdAndUpdate(id, req.body, { new: true });
    if (!actualizada) return res.status(404).json({ error: 'Cirugía no encontrada' });
    res.json({ message: '✅ Cirugía actualizada', actualizada });
  } catch (error) {
    res.status(500).json({ error: '❌ Error al actualizar cirugía' });
  }
}

// 📌 Eliminar cirugía
async function eliminarCirugia(req, res) {
  try {
    const { id } = req.params;
    const eliminada = await Cirugia.findByIdAndDelete(id);
    if (!eliminada) return res.status(404).json({ error: 'Cirugía no encontrada' });
    res.json({ message: '🗑 Cirugía eliminada' });
  } catch (error) {
    res.status(500).json({ error: '❌ Error al eliminar cirugía' });
  }
}

module.exports = {
  getCirugiasPorMascota,
  crearCirugia,
  actualizarCirugia,
  eliminarCirugia
};