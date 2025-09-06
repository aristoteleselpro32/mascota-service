const mongoose = require('./config');

const LaboratorioSchema = new mongoose.Schema({
  mascota_id: { type: String, required: true },
  veterinario_id: { type: String, required: true },
  fecha: { type: Date, default: Date.now },
  encargado: String,
  prueba: String,
  cantidad: String,
  diagnostico_presuntivo: String
}, { timestamps: true });

module.exports = mongoose.model('Laboratorio', LaboratorioSchema);
