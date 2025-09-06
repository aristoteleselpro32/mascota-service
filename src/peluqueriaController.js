const Peluqueria = require('./models/Peluqueria');

// 📌 Obtener servicios de peluquería de una mascota
async function getPeluqueriaPorMascota(req, res) {
  try {
    const { mascota_id } = req.params;
    const registros = await Peluqueria.find({ mascota_id });
    res.json(registros);
  } catch (error) {
    res.status(500).json({ error: '❌ Error al obtener servicios de peluquería' });
  }
}

// 📌 Crear nuevo servicio de peluquería
async function crearPeluqueria(req, res) {
  try {
    const {
      mascota_id,
      veterinario_id,
      fecha_hora,
      servicio,
      motivo,
      encargado,
      detalles,
      observaciones
    } = req.body;

    const nuevo = new Peluqueria({
      mascota_id,
      veterinario_id,
      fecha_hora,
      servicio,
      motivo,
      encargado,
      detalles,
      observaciones
    });

    await nuevo.save();
    res.status(201).json({ message: '✅ Servicio de peluquería registrado', peluqueria: nuevo });
  } catch (error) {
    res.status(500).json({ error: '❌ Error al registrar servicio de peluquería' });
  }
}

// 📌 Actualizar registro de peluquería
async function actualizarPeluqueria(req, res) {
  try {
    const { id } = req.params;
    const actualizado = await Peluqueria.findByIdAndUpdate(id, req.body, { new: true });
    if (!actualizado) return res.status(404).json({ error: 'Registro no encontrado' });
    res.json({ message: '✅ Registro actualizado', actualizado });
  } catch (error) {
    res.status(500).json({ error: '❌ Error al actualizar registro' });
  }
}

// 📌 Eliminar registro
async function eliminarPeluqueria(req, res) {
  try {
    const { id } = req.params;
    const eliminado = await Peluqueria.findByIdAndDelete(id);
    if (!eliminado) return res.status(404).json({ error: 'Registro no encontrado' });
    res.json({ message: '🗑 Registro eliminado' });
  } catch (error) {
    res.status(500).json({ error: '❌ Error al eliminar registro' });
  }
}

module.exports = {
  getPeluqueriaPorMascota,
  crearPeluqueria,
  actualizarPeluqueria,
  eliminarPeluqueria
};

