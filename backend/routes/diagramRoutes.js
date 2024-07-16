const express = require('express');
const router = express.Router();
const { generateDiagram } = require('../services/diagramService');

router.post('/', (req, res) => {
  const diagramData = generateDiagram(req.body);
  res.json(diagramData);
});

module.exports = router;

