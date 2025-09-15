const Consulta = require('./models/Consulta');

// 📌 Obtener consultas por mascota
async function getConsultasPorMascota(req, res) {
  const { mascota_id } = req.params;
  try {
    const consultas = await Consulta.find({ mascota_id }).sort({ fecha_consulta: -1 });
    res.json(consultas);
  } catch (error) {
    res.status(500).json({ error: '❌ Error al obtener consultas' });
  }
}

// 📌 Crear una nueva consulta
async function crearConsulta(req, res) {
  try {
    const {
      mascota_id,
      veterinario_id,
      fecha_consulta,
      motivo,
      objetivo,
      subjetivo,
      interpretacion,
      plan_terapeutico,
      proximo_control,
      examen_general, // objeto opcional
      precio = 0, // Nuevo: default 0
      estado = 'pendiente' // Nuevo: default pendiente
    } = req.body;

    const nuevaConsulta = new Consulta({
      mascota_id,
      veterinario_id,
      fecha_consulta,
      motivo,
      objetivo,
      subjetivo,
      interpretacion,
      plan_terapeutico,
      proximo_control,
      examen_general: examen_general || {},
      precio, // Nuevo
      estado // Nuevo
    });

    await nuevaConsulta.save();
    res.status(201).json({ message: '✅ Consulta registrada', consulta: nuevaConsulta });
  } catch (error) {
    res.status(400).json({ error: '❌ Error al registrar consulta', detalle: error.message });
  }
}

// 📌 Editar una consulta
async function actualizarConsulta(req, res) {
  try {
    const { id } = req.params;
    const actualizada = await Consulta.findByIdAndUpdate(id, req.body, { new: true });
    if (!actualizada) return res.status(404).json({ error: 'Consulta no encontrada' });
    res.json({ message: '✅ Consulta actualizada', consulta: actualizada });
  } catch (error) {
    res.status(400).json({ error: '❌ Error al actualizar consulta', detalle: error.message });
  }
}

// 📌 Eliminar una consulta
async function eliminarConsulta(req, res) {
  try {
    const { id } = req.params;
    const eliminada = await Consulta.findByIdAndDelete(id);
    if (!eliminada) return res.status(404).json({ error: 'Consulta no encontrada' });
    res.json({ message: '🗑️ Consulta eliminada', consulta: eliminada });
  } catch (error) {
    res.status(500).json({ error: '❌ Error al eliminar consulta', detalle: error.message });
  }
}

module.exports = {
  getConsultasPorMascota,
  crearConsulta,
  actualizarConsulta,
  eliminarConsulta
};