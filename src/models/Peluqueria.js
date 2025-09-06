const mongoose = require('./config');

const PeluqueriaSchema = new mongoose.Schema({
  mascota_id: { type: String, required: true },
  veterinario_id: { type: String, required: true },
  fecha: { type: Date, default: Date.now },
  servicio: String,
  motivo: String,
  encargado: String,
  detalles: String,
  observaciones: String
}, { timestamps: true });

module.exports = mongoose.model('Peluqueria', PeluqueriaSchema);
