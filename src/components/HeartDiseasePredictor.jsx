import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const HeartDiseasePredictor = () => {
  const [formData, setFormData] = useState({
    age: '', sex: '', cp: '', trestbps: '', chol: '', fbs: '',
    restecg: '', thalach: '', exang: '', oldpeak: '', slope: '', ca: '', thal: ''
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      age: parseInt(formData.age),
      sex: parseInt(formData.sex),
      cp: parseInt(formData.cp),
      trestbps: parseInt(formData.trestbps),
      chol: parseInt(formData.chol),
      fbs: parseInt(formData.fbs),
      restecg: parseInt(formData.restecg),
      thalach: parseInt(formData.thalach),
      exang: parseInt(formData.exang),
      oldpeak: parseFloat(formData.oldpeak),
      slope: parseInt(formData.slope),
      ca: parseInt(formData.ca),
      thal: parseInt(formData.thal)
    };

    try {
      const res = await axios.post('http://127.0.0.1:5000/predict', payload, {
        headers: { 'Content-Type': 'application/json' }
      });
      setResult(res.data.prediction);
    } catch (err) {
      console.error('Prediction failed:', err.response?.data || err.message);
    }
  };

  const containerStyle = {
    maxWidth: '700px',
    margin: '40px auto',
    padding: '2rem',
    backgroundColor: '#fff',
    borderRadius: '1rem',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    border: '1px solid #e2e8f0',
    fontFamily: 'Segoe UI, sans-serif'
  };

  const labelStyle = {
    marginBottom: '0.5rem',
    fontWeight: '500',
    color: '#374151'
  };

  const inputStyle = {
    border: '1px solid #d1d5db',
    borderRadius: '0.375rem',
    padding: '0.5rem 0.75rem',
    outline: 'none',
    fontSize: '1rem',
    transition: '0.3s',
    marginBottom: '1rem'
  };

  const inputFocusStyle = {
    boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.5)'
  };

  const buttonStyle = {
    backgroundColor: '#2563eb',
    color: '#fff',
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    marginTop: '1rem'
  };

  const resultBoxStyle = {
    marginTop: '1.5rem',
    padding: '1rem',
    borderRadius: '0.375rem',
    backgroundColor: '#eff6ff',
    color: '#1e40af',
    textAlign: 'center'
  };

  const fields = [
    { label: 'Age', name: 'age' },
    { label: 'Sex (1=Male, 0=Female)', name: 'sex' },
    { label: 'Chest Pain Type (0-3)', name: 'cp' },
    { label: 'Resting Blood Pressure', name: 'trestbps' },
    { label: 'Serum Cholesterol (mg/dl)', name: 'chol' },
    { label: 'Fasting Blood Sugar > 120 mg/dl (1 = true; 0 = false)', name: 'fbs' },
    { label: 'Resting ECG Result (0-2)', name: 'restecg' },
    { label: 'Max Heart Rate Achieved', name: 'thalach' },
    { label: 'Exercise Induced Angina (1 = yes; 0 = no)', name: 'exang' },
    { label: 'ST Depression by Exercise', name: 'oldpeak' },
    { label: 'Slope of the Peak ST Segment (0-2)', name: 'slope' },
    { label: 'Number of Major Vessels (0-3)', name: 'ca' },
    { label: 'Thalassemia (1=normal, 2=fixed defect, 3=reversible)', name: 'thal' }
  ];

  return (
    <motion.div style={containerStyle} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <h1 style={{ fontSize: '1.875rem', fontWeight: '600', textAlign: 'center', color: '#1f2937', marginBottom: '1.5rem' }}>
        Heart Disease Risk Assessment
      </h1>

      <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
        {fields.map((field, idx) => (
          <div key={idx} style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={labelStyle}>{field.label}</label>
            <input
              type="number"
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              style={inputStyle}
              onFocus={(e) => e.target.style.boxShadow = inputFocusStyle.boxShadow}
              onBlur={(e) => e.target.style.boxShadow = 'none'}
              required
            />
          </div>
        ))}

        <motion.button type="submit" whileTap={{ scale: 0.96 }} style={buttonStyle}>
          Predict Risk
        </motion.button>
      </form>

      {result !== null && (
        <motion.div style={resultBoxStyle} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <strong>Prediction:</strong> {result === 1
            ? '⚠️ High likelihood of heart disease. Consult a doctor.'
            : '✅ Low likelihood of heart disease. Maintain a healthy lifestyle.'}
        </motion.div>
      )}
    </motion.div>
  );
};

export default HeartDiseasePredictor;
