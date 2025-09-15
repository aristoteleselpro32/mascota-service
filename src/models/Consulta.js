const mongoose = require('./config');

const ConsultaSchema = new mongoose.Schema({
  mascota_id: { type: String, required: true },
  veterinario_id: { type: String, required: true },
  fecha: { type: Date, default: Date.now },
  motivo: String,
  objetivo: String,
  subjetivo: String,
  interpretacion: String,
  plan_terapeutico: String,
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
  },
  precio: { type: Number, default: 0 }, // Nuevo campo para precio
  estado: { type: String, enum: ['pendiente', 'pagado'], default: 'pendiente' } // Nuevo campo para estado de pago
}, { timestamps: true });

module.exports = mongoose.model('Consulta', ConsultaSchema);