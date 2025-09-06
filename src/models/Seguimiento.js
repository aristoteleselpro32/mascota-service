const mongoose = require('./config');

const SeguimientoSchema = new mongoose.Schema({
  mascota_id: { type: String, required: true },
  veterinario_id: { type: String, required: true },
  fecha: { type: Date, default: Date.now },
  tipo: String,
  motivo: String,
  detalles: String,
  proximo_control: Date,
  examen_fisico: {
    temperatura: Number,
    unidad_temperatura: String,
    peso: Number,
    unidad_peso: String,
    frecuencia_cardiaca: String,
    frecuencia_respiratoria: String,
    presion_arterial: String,
    reflejos: String,
    pulso: String,
    mucosas: String,
    palpitacion: String,
    dentadura: String,
    encias: String,
    sarro: String,
    ojos: String,
    orejas: String,
    piel_y_pelo: String,
    observaciones: String,
  }
}, { timestamps: true });

module.exports = mongoose.model('Seguimiento', SeguimientoSchema);
