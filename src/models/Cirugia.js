const mongoose = require('./config');

const CirugiaSchema = new mongoose.Schema({
  mascota_id: { type: String, required: true },
  veterinario_id: { type: String, required: true },
  fecha: { type: Date, default: Date.now },
  procedimiento: String,
  descripcion_quirurgica: String,
  preanestesico: String,
  anestesico: String,
  otros_medicamentos: String,
  tratamiento: String,
  observaciones: String,
  complicaciones: String,
  medicamentos: [{
    nombre: String,
    presentacion: String,
    cantidad: String,
    posologia: String
  }]
}, { timestamps: true });

module.exports = mongoose.model('Cirugia', CirugiaSchema);
