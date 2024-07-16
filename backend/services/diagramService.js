const generateDiagram = (data) => {
  // Process input data and generate diagram structure
  // Example structure with nodes and links
  const nodes = [
    { id: 'ec2', x: 100, y: 100 },
    { id: 's3', x: 300, y: 300 },
  ];
  const links = [
    { source: nodes[0], target: nodes[1] },
  ];

  return { nodes, links };
};

module.exports = { generateDiagram };

