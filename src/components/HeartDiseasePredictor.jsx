import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const HeartDiseasePredictor = () => {
  const [formData, setFormData] = useState({
    age: '', sex: '', cp: '', trestbps: '', chol: '', fbs: '',
    restecg: '', thalach: '', exang: '', oldpeak: '', slope: '', ca: '', thal: ''
  });

  const [result, setResult] = useState(null);
  const [error, setError] = useState(''); // To display errors in the UI if needed

  // Defines the order of features, crucial for sending them as an array
  const featureOrder = [
    'age', 'sex', 'cp', 'trestbps', 'chol', 'fbs',
    'restecg', 'thalach', 'exang', 'oldpeak', 'slope', 'ca', 'thal'
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors
    setResult(null); // Clear previous results

    // Convert form data to an array of numbers in the correct order
    const featureValues = featureOrder.map(key => {
      const value = formData[key];
      // 'oldpeak' is float, others are int. Handle potential empty strings.
      if (value === '') return NaN; // Or handle as needed, e.g., show validation error
      return key === 'oldpeak' ? parseFloat(value) : parseInt(value, 10);
    });

    // Check if any value failed to parse (e.g., empty input)
    if (featureValues.some(isNaN)) {
      console.error('Invalid form data: Some fields might be empty or non-numeric.');
      setError('Please fill all fields correctly. All values must be numbers.');
      return;
    }

    // This is what your backend likely expects: { "features": [[val1, val2, ...]] }
    // The outer array is because scikit-learn's predict method often expects a 2D array.
    const payloadToSend = {
      features: [featureValues]
    };

    console.log('Sending data to backend:', JSON.stringify(payloadToSend, null, 2));

    try {
      const res = await axios.post('https://ai-heart-disease-prediction-system-1.onrender.com/predict', payloadToSend, {
        headers: { 'Content-Type': 'application/json' }
      });
      setResult(res.data.prediction);
    } catch (err) {
      let errorMessage = 'Prediction failed. Please try again.';
      if (err.response) {
        // Backend returned an error
        console.error('Backend Error:', err.response.data);
        errorMessage = `Prediction failed: ${err.response.data.error || JSON.stringify(err.response.data)}`;
      } else if (err.request) {
        // Request was made but no response received
        console.error('Network Error:', err.request);
        errorMessage = 'Prediction failed: Could not connect to the server.';
      } else {
        // Something else happened
        console.error('Error:', err.message);
        errorMessage = `Prediction failed: ${err.message}`;
      }
      setError(errorMessage);
      console.error('Full error object:', err);
    }
  };

  // --- STYLES (Copied from your original code, assuming they are as intended) ---
  const containerStyle = {
    maxWidth: '700px', margin: '40px auto', padding: '2rem', backgroundColor: '#fff',
    borderRadius: '1rem', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    border: '1px solid #e2e8f0', fontFamily: 'Segoe UI, sans-serif'
  };
  const labelStyle = { marginBottom: '0.5rem', fontWeight: '500', color: '#374151' };
  const inputStyle = {
    border: '1px solid #d1d5db', borderRadius: '0.375rem', padding: '0.5rem 0.75rem',
    outline: 'none', fontSize: '1rem', transition: '0.3s', marginBottom: '1rem'
  };
  const inputFocusStyle = { boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.5)' };
  const buttonStyle = {
    backgroundColor: '#2563eb', color: '#fff', padding: '0.5rem 1rem',
    borderRadius: '0.375rem', fontWeight: '600', border: 'none',
    cursor: 'pointer', marginTop: '1rem'
  };
  const resultBoxStyle = (isError) => ({
    marginTop: '1.5rem', padding: '1rem', borderRadius: '0.375rem',
    backgroundColor: isError ? '#fee2e2' : '#eff6ff', // Red for error, blue for success
    color: isError ? '#991b1b' : '#1e40af', // Darker red for error text
    textAlign: 'center', border: isError ? '1px solid #f87171' : '1px solid #bfdbfe'
  });
  const errorBoxStyle = { ...resultBoxStyle(true) };


  const fields = [
    { label: 'Age', name: 'age', placeholder: 'e.g., 52' },
    { label: 'Sex (1=Male, 0=Female)', name: 'sex', placeholder: '0 or 1' },
    { label: 'Chest Pain Type (0-3)', name: 'cp', placeholder: '0-3' },
    { label: 'Resting Blood Pressure (mmHg)', name: 'trestbps', placeholder: 'e.g., 120' },
    { label: 'Serum Cholesterol (mg/dl)', name: 'chol', placeholder: 'e.g., 200' },
    { label: 'Fasting Blood Sugar > 120 mg/dl (1=true; 0=false)', name: 'fbs', placeholder: '0 or 1' },
    { label: 'Resting ECG Result (0-2)', name: 'restecg', placeholder: '0-2' },
    { label: 'Max Heart Rate Achieved', name: 'thalach', placeholder: 'e.g., 150' },
    { label: 'Exercise Induced Angina (1=yes; 0=no)', name: 'exang', placeholder: '0 or 1' },
    { label: 'ST Depression by Exercise', name: 'oldpeak', placeholder: 'e.g., 1.2 (float)' },
    { label: 'Slope of the Peak ST Segment (0-2)', name: 'slope', placeholder: '0-2' },
    { label: 'Number of Major Vessels (0-3) colored by flourosopy', name: 'ca', placeholder: '0-3' },
    { label: 'Thalassemia (1=normal, 2=fixed defect, 3=reversible defect)', name: 'thal', placeholder: '1-3' }
  ];

  return (
    <motion.div style={containerStyle} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <h1 style={{ fontSize: '1.875rem', fontWeight: '600', textAlign: 'center', color: '#1f2937', marginBottom: '1.5rem' }}>
        Heart Disease Risk Assessment
      </h1>

      <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
        {fields.map((field) => (
          <div key={field.name} style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor={field.name} style={labelStyle}>{field.label}</label>
            <input
              type={field.name === 'oldpeak' ? "number" : "number"} // oldpeak can be float
              step={field.name === 'oldpeak' ? "0.1" : "1"}      // allow decimals for oldpeak
              id={field.name}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
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

      {error && (
        <motion.div style={errorBoxStyle} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <strong>Error:</strong> {error}
        </motion.div>
      )}

      {result !== null && !error && (
        <motion.div style={resultBoxStyle(false)} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <strong>Prediction:</strong> {result === 1
            ? '⚠️ High likelihood of heart disease. Please consult a doctor.'
            : '✅ Low likelihood of heart disease. Maintain a healthy lifestyle.'}
        </motion.div>
      )}
    </motion.div>
  );
};

export default HeartDiseasePredictor;
