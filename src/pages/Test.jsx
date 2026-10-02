import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Test56 from './tests/Test56';
import Test7 from './tests/Test7';
import Test8 from './tests/Test8';
import Test9 from './tests/Test9';

export default function Test() {
  const navigate = useNavigate();
  const [studentClass, setStudentClass] = useState('');

  useEffect(() => {
    const sClass = localStorage.getItem('studentClass');
    if (!sClass) {
      navigate('/');
    } else {
      setStudentClass(sClass);
    }
  }, [navigate]);

  if (!studentClass) return null;

  if (studentClass.startsWith('5') || studentClass.startsWith('6')) {
    return <Test56 />;
  } else if (studentClass.startsWith('7')) {
    return <Test7 />;
  } else if (studentClass.startsWith('8')) {
    return <Test8 />;
  } else if (studentClass.startsWith('9')) {
    return <Test9 />;
  } else {
    // Default fallback to 9th grade test for 10-11
    return <Test9 />;
  }
}
