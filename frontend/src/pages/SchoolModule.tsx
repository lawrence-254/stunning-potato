// src/pages/Schools.tsx
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SchoolsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SchoolCard = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Schools: React.FC = () => {
  return (
    <SchoolsContainer>
      <h1>Schools</h1>
      <SchoolCard>
        <h2>School 1</h2>
        <Link to="/schools/1">View Details</Link>
      </SchoolCard>
      <SchoolCard>
        <h2>School 2</h2>
        <Link to="/schools/2">View Details</Link>
      </SchoolCard>
      {/* Add more schools as needed */}
    </SchoolsContainer>
  );
};

export default Schools;

