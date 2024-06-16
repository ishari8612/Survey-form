// src/FormComponent.js

import React, { useState } from 'react';
import axios from 'axios';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/submit', formData);
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('There was an error submitting the form!', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
      </div>
      <div>
        <label>
          Message:
          <textarea name="message" value={formData.message} onChange={handleChange} required />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
