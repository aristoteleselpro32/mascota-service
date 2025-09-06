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
  }]
}, { timestamps: true });

module.exports = mongoose.model('Medicamento', MedicamentoSchema);
