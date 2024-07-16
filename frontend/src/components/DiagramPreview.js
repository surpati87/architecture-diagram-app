import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const DiagramPreview = ({ location }) => {
  const diagramRef = useRef(null);
  const { diagramData } = location.state;

  useEffect(() => {
    const svg = d3.select(diagramRef.current)
      .attr('width', 800)
      .attr('height', 600);

    // Render diagram using diagramData
    svg.selectAll('circle')
      .data(diagramData.nodes)
      .enter()
      .append('circle')
      .attr('cx', (d) => d.x)
      .attr('cy', (d) => d.y)
      .attr('r', 20);

    svg.selectAll('line')
      .data(diagramData.links)
      .enter()
      .append('line')
      .attr('x1', (d) => d.source.x)
      .attr('y1', (d) => d.source.y)
      .attr('x2', (d) => d.target.x)
      .attr('y2', (d) => d.target.y)
      .attr('stroke', 'black');

  }, [diagramData]);

  return <svg ref={diagramRef}></svg>;
};

export default DiagramPreview;

