import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const DiagramForm = () => {
  const [formData, setFormData] = useState({});
  const history = useHistory();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:5000/api/architecture', formData);
    history.push('/preview', { diagramData: response.data });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Component Name</label>
        <input type="text" name="componentName" onChange={handleChange} />
      </div>
      <button type="submit">Generate Diagram</button>
    </form>
  );
};

export default DiagramForm;

