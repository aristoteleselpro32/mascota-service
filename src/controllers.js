const { supabase } = require('./config');

async function getMascotas(req, res) {
  const { data, error } = await supabase.from('mascotas').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
}

async function createMascota(req, res) {
  const { nombre, especie, raza, edad, cliente_id, fecha_nacimiento, sexo, peso, color } = req.body;
  const { data, error } = await supabase.from('mascotas').insert([{ nombre, especie, raza, edad, cliente_id, fecha_nacimiento, sexo, peso, color }]);
  
  if (error) return res.status(500).json({ error: error.message });
  
  res.status(201).json({ message: '✅ Usuario registrado correctamente'});
}

async function updateMascota(req, res) {
  const { id } = req.params;
  const { nombre, especie, raza, edad, fecha_nacimiento, sexo, peso, color } = req.body;
  const { error } = await supabase.from('mascotas').update({ nombre, especie, raza, edad, fecha_nacimiento, sexo, peso, color }).eq('id', id);
  
  if (error) return res.status(500).json({ error: error.message });
  res.json({ message: '✅ Mascota actualizada' });
}

async function deleteMascota(req, res) {
  const { id } = req.params;
  const { error } = await supabase.from('mascotas').delete().eq('id', id);
  
  if (error) return res.status(500).json({ error: error.message });
  res.json({ message: '✅ Mascota eliminada' });
}
async function getmascotaid (req, res) {
  const { cliente_id } = req.params;

  const { data, error } = await supabase
    .from('mascotas')
    .select('*')
    .eq('cliente_id', cliente_id);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json(data);
}
module.exports = { getMascotas, createMascota, updateMascota, deleteMascota, getmascotaid};