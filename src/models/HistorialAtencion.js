const mongoose = require('./config');

const HistorialSchema = new mongoose.Schema({
mascota_id: { type: String, required: true }, // UUID como string
  veterinario_id: { type: String, required: true }, // UUID como string
  diagnostico: { type: String, required: true },
  tratamiento: { type: String, required: true },
  fecha: { type: Date, default: Date.now } // Opcional: agregar fecha por defecto
}, { timestamps: true });

module.exports = mongoose.model('HistorialAtencion', HistorialSchema);