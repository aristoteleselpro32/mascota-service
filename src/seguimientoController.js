const Seguimiento = require('./models/Seguimiento');

// 📌 Obtener seguimientos de una mascota
async function getSeguimientosPorMascota(req, res) {
  try {
    const { mascota_id } = req.params;
    const seguimientos = await Seguimiento.find({ mascota_id });
    res.json(seguimientos);
  } catch (error) {
    res.status(500).json({ error: '❌ Error al obtener seguimientos' });
  }
}

// 📌 Crear nuevo seguimiento
async function crearSeguimiento(req, res) {
  try {
    const {
      mascota_id,
      veterinario_id,
      fecha_hora,
      tipo_seguimiento,
      motivo,
      detalles,
      proximo_control,
      examen_fisico, // Objeto opcional con campos clínicos
      precio = 0, // Nuevo: default 0
      estado = 'pendiente' // Nuevo: default pendiente
    } = req.body;

    const nuevo = new Seguimiento({
      mascota_id,
      veterinario_id,
      fecha: fecha_hora, // Corrección: alinear con el nombre del campo en el esquema
      tipo: tipo_seguimiento, // Corrección: alinear con el nombre del campo en el esquema
      motivo,
      detalles,
      proximo_control,
      examen_fisico,
      precio, // Nuevo
      estado // Nuevo
    });

    await nuevo.save();
    res.status(201).json({ message: '✅ Seguimiento registrado', seguimiento: nuevo });
  } catch (error) {
    res.status(500).json({ error: '❌ Error al registrar seguimiento' });
  }
}

// 📌 Actualizar seguimiento
async function actualizarSeguimiento(req, res) {
  try {
    const { id } = req.params;
    const actualizado = await Seguimiento.findByIdAndUpdate(id, req.body, { new: true });
    if (!actualizado) return res.status(404).json({ error: 'Seguimiento no encontrado' });
    res.json({ message: '✅ Seguimiento actualizado', actualizado });
  } catch (error) {
    res.status(500).json({ error: '❌ Error al actualizar seguimiento' });
  }
}

// 📌 Eliminar seguimiento
async function eliminarSeguimiento(req, res) {
  try {
    const { id } = req.params;
    const eliminado = await Seguimiento.findByIdAndDelete(id);
    if (!eliminado) return res.status(404).json({ error: 'Seguimiento no encontrado' });
    res.json({ message: '🗑 Seguimiento eliminado' });
  } catch (error) {
    res.status(500).json({ error: '❌ Error al eliminar seguimiento' });
  }
}

module.exports = {
  getSeguimientosPorMascota,
  crearSeguimiento,
  actualizarSeguimiento,
  eliminarSeguimiento
};