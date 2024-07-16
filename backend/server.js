const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const diagramRoutes = require('./routes/diagramRoutes');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/architecture', diagramRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
