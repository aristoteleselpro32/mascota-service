const mongoose = require('./config');

const MedicamentoSchema = new mongoose.Schema({
  mascota_id: { type: String, required: true },
  veterinario_id: { type: String, required: true },
  fecha: { type: Date, default: Date.now },
  diagnostico: String,
  medicamentos: [{
    nombre: String,
    presentacion: String,
    cantidad: String,
    posologia: String
  }],
  precio: { type: Number, default: 0 }, // Nuevo campo para precio
  estado: { type: String, enum: ['pendiente', 'pagado'], default: 'pendiente' } // Nuevo campo para estado de pago
}, { timestamps: true });

module.exports = mongoose.model('Medicamento', MedicamentoSchema);