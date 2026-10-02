import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Result() {
  const { t, langCode } = useLanguage();
  const navigate = useNavigate();
  const [resultText, setResultText] = useState('');
  
  useEffect(() => {
    const rText = localStorage.getItem('resultText');
    if (!rText) {
      navigate('/');
      return;
    }
    setResultText(rText);
  }, [navigate]);

  if (!resultText) return null;

  return (
    <div className="page-container fade-in">
      <div className="glass-panel content-box" style={{ maxWidth: '600px', textAlign: 'center' }}>
        <h1 className="gradient-text" style={{ fontSize: '2.5rem' }}>{t.testCompleted || "Test yakunlandi / Тест завершен"}</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '16px', color: 'var(--text-muted)' }}>
          {t.strongestInterest || "Sizning natijangiz / Ваш результат:"}
        </p>
        
        <div style={{ 
          background: 'rgba(99, 102, 241, 0.1)', 
          padding: '24px', 
          borderRadius: '16px',
          marginBottom: '24px'
        }}>
          <h2 style={{ fontSize: '1.75rem', color: 'var(--primary)', marginBottom: '16px' }}>
            {resultText}
          </h2>
        </div>

        <button className="btn-secondary" onClick={() => {
          localStorage.clear();
          navigate('/');
        }}>
          {t.selectLanguage || "Bosh sahifaga qaytish / На главную"}
        </button>
      </div>
    </div>
  );
}
