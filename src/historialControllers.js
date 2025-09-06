const HistorialAtencion = require('./models/HistorialAtencion');

async function getHistorial(req, res) {
  const { mascota_id } = req.params;
  const historial = await HistorialAtencion.find({ mascota_id }).populate('veterinario_id');
  res.json(historial);
}

async function addHistorial(req, res) {
  const { mascota_id, veterinario_id, diagnostico, tratamiento } = req.body;
  const nuevoHistorial = new HistorialAtencion({ mascota_id, veterinario_id, diagnostico, tratamiento });
  
  await nuevoHistorial.save();
  res.status(201).json({ message: '✅ Historial añadido', nuevoHistorial });
}

module.exports = { getHistorial, addHistorial };