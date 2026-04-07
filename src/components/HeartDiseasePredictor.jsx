import React, { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';

// --- The Cardio AI Icon Component (Inline SVG) ---
const CardioAIIcon = () => (
  <svg 
    width="48" 
    height="48" 
    viewBox="0 0 48 48" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    style={{ marginBottom: '10px' }}
  >
    {/* Background Circle */}
    <circle cx="24" cy="24" r="24" fill="#EBF8FF"/>
    
    {/* Heart Outline */}
    <path d="M24 39.42C23.25 39.42 22.5 39.12 21.93 38.52L10.59 26.58C7.53 23.37 7.53 18.21 10.59 15C13.65 11.79 18.63 11.79 21.69 15L24 17.43L26.31 15C29.37 11.79 34.35 11.79 37.41 15C40.47 18.21 40.47 23.37 37.41 26.58L26.07 38.52C25.5 39.12 24.75 39.42 24 39.42ZM16.14 14.82C14.7 14.82 13.26 15.39 12.18 16.53C9.9 18.9 9.9 22.71 12.18 25.11L23.52 37.05C23.79 37.32 24.21 37.32 24.48 37.05L35.82 25.11C38.1 22.71 38.1 18.9 35.82 16.53C33.54 14.16 29.85 14.16 27.57 16.53L24.66 19.59C24.3 19.98 23.7 19.98 23.34 19.59L20.43 16.53C19.26 15.39 17.7 14.82 16.14 14.82Z" fill="#E53E3E"/>
    
    {/* AI / Neural Network Dots & Lines */}
    <circle cx="24" cy="28" r="3" fill="#2563EB"/> {/* Center node */}
    <circle cx="19" cy="24" r="2" fill="#63B3ED"/>
    <circle cx="29" cy="24" r="2" fill="#63B3ED"/>
    <circle cx="24" cy="33" r="2" fill="#63B3ED"/>
    
    {/* Connections */}
    <path d="M20.5 25L22.5 27" stroke="#2563EB" strokeWidth="1"/>
    <path d="M27.5 25L25.5 27" stroke="#2563EB" strokeWidth="1"/>
    <path d="M24 31V29.5" stroke="#2563EB" strokeWidth="1"/>
  </svg>
);

const HeartDiseasePredictor = () => {
  const [formData, setFormData] = useState({
    age: '', sex: '', cp: '', trestbps: '', chol: '', fbs: '',
    restecg: '', thalach: '', exang: '', oldpeak: '', slope: '', ca: '', thal: ''
  });

  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const featureOrder = [
    'age', 'sex', 'cp', 'trestbps', 'chol', 'fbs',
    'restecg', 'thalach', 'exang', 'oldpeak', 'slope', 'ca', 'thal'
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setResult(null);
    setLoading(true);

    const featureValues = featureOrder.map(key => {
      const value = formData[key]?.trim();
      if (value === '') return NaN;
      return key === 'oldpeak' ? parseFloat(value) : parseInt(value, 10);
    });

    if (featureValues.some(isNaN)) {
      setError('Please fill all fields correctly.');
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post(
        'https://ai-heart-disease-prediction-system.onrender.com/predict',
        { features: [featureValues] },
        { headers: { 'Content-Type': 'application/json' } }
      );
      setResult(res.data.prediction);
    } catch (err) {
      setError('Connection error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const styles = {
    wrapper: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      padding: '20px'
    },
    container: {
      maxWidth: '850px',
      width: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      borderRadius: '24px',
      padding: '40px',
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
      backdropFilter: 'blur(10px)',
      border: '1px solid #fff'
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '20px'
    },
    inputGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    },
    label: {
      fontSize: '0.9rem',
      fontWeight: '600',
      color: '#4a5568',
      marginLeft: '4px'
    },
    input: {
      padding: '12px 16px',
      borderRadius: '12px',
      border: '2px solid #e2e8f0',
      fontSize: '1rem',
      outline: 'none',
      transition: 'all 0.2s ease',
      backgroundColor: '#f8fafc'
    },
    button: {
      gridColumn: '1 / -1',
      backgroundColor: '#2563eb',
      color: 'white',
      padding: '16px',
      borderRadius: '12px',
      fontSize: '1.1rem',
      fontWeight: 'bold',
      border: 'none',
      cursor: 'pointer',
      marginTop: '20px',
      boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)'
    },
    resultCard: (isHighRisk) => ({
      marginTop: '30px',
      padding: '20px',
      borderRadius: '16px',
      textAlign: 'center',
      backgroundColor: isHighRisk ? '#fff1f2' : '#f0fdf4',
      border: `2px solid ${isHighRisk ? '#fecdd3' : '#bbf7d0'}`,
      color: isHighRisk ? '#9f1239' : '#166534'
    })
  };

  const fields = [
    { label: 'Age', name: 'age', placeholder: 'Years' },
    { label: 'Sex (1:M, 0:F)', name: 'sex', placeholder: '0-1' },
    { label: 'Chest Pain (0-3)', name: 'cp', placeholder: 'Type' },
    { label: 'BP (mmHg)', name: 'trestbps', placeholder: 'Resting' },
    { label: 'Cholesterol', name: 'chol', placeholder: 'mg/dl' },
    { label: 'Sugar > 120 (1/0)', name: 'fbs', placeholder: 'Fasting' },
    { label: 'Rest ECG (0-2)', name: 'restecg', placeholder: 'Result' },
    { label: 'Max Heart Rate', name: 'thalach', placeholder: 'BPM' },
    { label: 'Exercise Angina (1/0)', name: 'exang', placeholder: 'Yes/No' },
    { label: 'ST Depression', name: 'oldpeak', placeholder: 'e.g. 1.2' },
    { label: 'ST Slope (0-2)', name: 'slope', placeholder: 'Peak' },
    { label: 'Major Vessels (0-3)', name: 'ca', placeholder: 'Count' },
    { label: 'Thalassemia (1-3)', name: 'thal', placeholder: 'Type' }
  ];

  return (
    <div style={styles.wrapper}>
      <motion.div 
        style={styles.container}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div style={styles.header}>
          <CardioAIIcon /> {/* --- Added Icon Component Here --- */}
          <h1 style={{ margin: 0, color: '#1e293b', fontSize: '2rem', fontWeight: '800' }}>Cardio safe AI</h1>
          <p style={{ color: '#64748b', marginTop: '5px' }}>Advanced Heart Health Diagnostic Tool</p>
        </div>

        <form onSubmit={handleSubmit} style={styles.grid}>
          {fields.map((field) => (
            <div key={field.name} style={styles.inputGroup}>
              <label style={styles.label}>{field.label}</label>
              <input
                type="number"
                step={field.name === 'oldpeak' ? "0.1" : "1"}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                required
                style={styles.input}
                onFocus={(e) => {
                  e.target.style.borderColor = '#2563eb';
                  e.target.style.backgroundColor = '#fff';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e2e8f0';
                  e.target.style.backgroundColor = '#f8fafc';
                }}
              />
            </div>
          ))}

          <motion.button 
            type="submit" 
            whileHover={{ scale: 1.01, backgroundColor: '#1d4ed8' }}
            whileTap={{ scale: 0.98 }}
            style={styles.button}
            disabled={loading}
          >
            {loading ? 'Analyzing...' : 'Run Diagnostic'}
          </motion.button>
        </form>

        <AnimatePresence>
          {error && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ ...styles.resultCard(true), backgroundColor: '#fef2f2' }}
            >
              {error}
            </motion.div>
          )}

          {result !== null && !error && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              style={styles.resultCard(result === 1)}
            >
              <h3 style={{ margin: '0 0 10px 0' }}>
                {result === 1 ? 'Attention Required' : 'Healthy Result'}
              </h3>
              <p style={{ margin: 0 }}>
                {result === 1 
                  ? '⚠️ High likelihood of heart disease detected. Please schedule a professional medical screening.'
                  : '✅ Results suggest a low likelihood of heart disease. Keep up the healthy habits!'}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default HeartDiseasePredictor;