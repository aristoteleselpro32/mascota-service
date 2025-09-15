const mongoose = require('./config');

const PeluqueriaSchema = new mongoose.Schema({
  mascota_id: { type: String, required: true },
  veterinario_id: { type: String, required: true },
  fecha: { type: Date, default: Date.now },
  servicio: String,
  motivo: String,
  encargado: String,
  detalles: String,
  observaciones: String,
  precio: { type: Number, default: 0 }, // Nuevo campo para precio
  estado: { type: String, enum: ['pendiente', 'pagado'], default: 'pendiente' } // Nuevo campo para estado de pago
}, { timestamps: true });

module.exports = mongoose.model('Peluqueria', PeluqueriaSchema);