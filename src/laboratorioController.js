const Laboratorio = require('./models/Laboratorio');

// 📌 Obtener todas las pruebas de laboratorio de una mascota
async function getPruebasPorMascota(req, res) {
  try {
    const { mascota_id } = req.params;
    const pruebas = await Laboratorio.find({ mascota_id });
    res.json(pruebas);
  } catch (error) {
    res.status(500).json({ error: '❌ Error al obtener las pruebas' });
  }
}

// 📌 Crear una nueva prueba de laboratorio
async function crearPruebaLaboratorio(req, res) {
  try {
    const {
      mascota_id,
      veterinario_id,
      fecha,
      encargado,
      prueba,
      cantidad,
      diagnostico_presuntivo
    } = req.body;

    const nueva = new Laboratorio({
      mascota_id,
      veterinario_id,
      fecha,
      encargado,
      prueba,
      cantidad,
      diagnostico_presuntivo
    });

    await nueva.save();
    res.status(201).json({ message: '✅ Prueba de laboratorio creada', prueba: nueva });
  } catch (error) {
    res.status(500).json({ error: '❌ Error al crear la prueba' });
  }
}

// 📌 Actualizar una prueba existente
async function actualizarPruebaLaboratorio(req, res) {
  try {
    const { id } = req.params;
    const updated = await Laboratorio.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Prueba no encontrada' });
    res.json({ message: '✅ Prueba actualizada', updated });
  } catch (error) {
    res.status(500).json({ error: '❌ Error al actualizar' });
  }
}

// 📌 Eliminar una prueba
async function eliminarPruebaLaboratorio(req, res) {
  try {
    const { id } = req.params;
    const deleted = await Laboratorio.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ error: 'Prueba no encontrada' });
    res.json({ message: '🗑 Prueba eliminada' });
  } catch (error) {
    res.status(500).json({ error: '❌ Error al eliminar' });
  }
}

module.exports = {
  getPruebasPorMascota,
  crearPruebaLaboratorio,
  actualizarPruebaLaboratorio,
  eliminarPruebaLaboratorio
};
