const Medicamento = require('./models/Medicamento');

// 📌 Obtener medicamentos de una mascota
async function getMedicamentosPorMascota(req, res) {
  try {
    const { mascota_id } = req.params;
    const medicamentos = await Medicamento.find({ mascota_id });
    res.json(medicamentos);
  } catch (error) {
    res.status(500).json({ error: '❌ Error al obtener medicamentos' });
  }
}

// 📌 Crear nuevo registro de medicamento
async function crearMedicamento(req, res) {
  try {
    const {
      mascota_id,
      veterinario_id,
      fecha,
      diagnostico,
      lista_medicamentos // Array de medicamentos con: nombre, presentacion, cantidad, posologia
    } = req.body;

    const nuevoRegistro = new Medicamento({
      mascota_id,
      veterinario_id,
      fecha,
      diagnostico,
      lista_medicamentos
    });

    await nuevoRegistro.save();
    res.status(201).json({ message: '✅ Medicamentos registrados', medicamento: nuevoRegistro });
  } catch (error) {
    res.status(500).json({ error: '❌ Error al registrar medicamentos' });
  }
}

// 📌 Actualizar medicamento
async function actualizarMedicamento(req, res) {
  try {
    const { id } = req.params;
    const actualizada = await Medicamento.findByIdAndUpdate(id, req.body, { new: true });
    if (!actualizada) return res.status(404).json({ error: 'Medicamento no encontrado' });
    res.json({ message: '✅ Medicamento actualizado', actualizada });
  } catch (error) {
    res.status(500).json({ error: '❌ Error al actualizar medicamento' });
  }
}

// 📌 Eliminar medicamento
async function eliminarMedicamento(req, res) {
  try {
    const { id } = req.params;
    const eliminado = await Medicamento.findByIdAndDelete(id);
    if (!eliminado) return res.status(404).json({ error: 'Medicamento no encontrado' });
    res.json({ message: '🗑 Medicamento eliminado' });
  } catch (error) {
    res.status(500).json({ error: '❌ Error al eliminar medicamento' });
  }
}

module.exports = {
  getMedicamentosPorMascota,
  crearMedicamento,
  actualizarMedicamento,
  eliminarMedicamento
};
