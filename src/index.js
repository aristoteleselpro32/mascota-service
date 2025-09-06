const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/mascotas', routes);

const PORT = process.env.PORT || 4004;
app.get('/', (req, res) => res.send('OK'));

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Mascota Service corriendo en http://localhost:${PORT}`);
});