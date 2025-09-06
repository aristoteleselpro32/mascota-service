const express = require('express');
const router = express.Router();

// 📌 Controladores principales
const {
  getMascotas,
  createMascota,
  updateMascota,
  deleteMascota,
  getmascotaid
} = require('./controllers');

const { getHistorial, addHistorial } = require('./historialControllers');

// 📌 Laboratorio
const {
  getPruebasPorMascota,
  crearPruebaLaboratorio,
  actualizarPruebaLaboratorio,
  eliminarPruebaLaboratorio
} = require('./laboratorioController');

// 📌 Consultas
const {
  getConsultasPorMascota,
  crearConsulta,
  actualizarConsulta,
  eliminarConsulta
} = require('./consultaController');

// 📌 Cirugías
const {
  getCirugiasPorMascota,
  crearCirugia,
  actualizarCirugia,
  eliminarCirugia
} = require('./cirugiaController');

// 📌 Medicamentos
const {
  getMedicamentosPorMascota,
  crearMedicamento,
  actualizarMedicamento,
  eliminarMedicamento
} = require('./medicamentoController');

// 📌 Seguimientos
const {
  getSeguimientosPorMascota,
  crearSeguimiento,
  actualizarSeguimiento,
  eliminarSeguimiento
} = require('./seguimientoController');

// 📌 Peluquería
const {
  getPeluqueriaPorMascota,
  crearPeluqueria,
  actualizarPeluqueria,
  eliminarPeluqueria
} = require('./peluqueriaController');


// ==============================
// 🚨 RUTAS API
// ==============================

// 📌 CRUD de mascotas (PostgreSQL)
router.get('/mascotas', getMascotas);
router.post('/mascotas', createMascota);
router.put('/mascotas/:id', updateMascota);
router.delete('/mascotas/:id', deleteMascota);
router.get('/mascotascliente/:cliente_id', getmascotaid);

// 📌 CRUD de historial clínico (MongoDB)
router.get('/historial/:mascota_id', getHistorial);
router.post('/historial', addHistorial);

// 📌 CRUD laboratorio
router.get('/labo/:mascota_id', getPruebasPorMascota);
router.post('/labo', crearPruebaLaboratorio);
router.put('/labo/:id', actualizarPruebaLaboratorio);
router.delete('/labo/:id', eliminarPruebaLaboratorio);

// 📌 CRUD consultas
router.get('/consultas/:mascota_id', getConsultasPorMascota);
router.post('/consultas', crearConsulta);
router.put('/consultas/:id', actualizarConsulta);
router.delete('/consultas/:id', eliminarConsulta);

// 📌 CRUD cirugías
router.get('/cirugias/:mascota_id', getCirugiasPorMascota);
router.post('/cirugias', crearCirugia);
router.put('/cirugias/:id', actualizarCirugia);
router.delete('/cirugias/:id', eliminarCirugia);

// 📌 CRUD medicamentos
router.get('/medicamentos/:mascota_id', getMedicamentosPorMascota);
router.post('/medicamentos', crearMedicamento);
router.put('/medicamentos/:id', actualizarMedicamento);
router.delete('/medicamentos/:id', eliminarMedicamento);

// 📌 CRUD seguimientos
router.get('/seguimientos/:mascota_id', getSeguimientosPorMascota);
router.post('/seguimientos', crearSeguimiento);
router.put('/seguimientos/:id', actualizarSeguimiento);
router.delete('/seguimientos/:id', eliminarSeguimiento);

// 📌 CRUD peluquería
router.get('/peluqueria/:mascota_id', getPeluqueriaPorMascota);
router.post('/peluqueria', crearPeluqueria);
router.put('/peluqueria/:id', actualizarPeluqueria);
router.delete('/peluqueria/:id', eliminarPeluqueria);

module.exports = router;
