
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const SchoolsContainer = styled.div`
  padding: 20px;
`;

const SchoolCard = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
`;

const Schools: React.FC = () => {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:6969/schools')
      .then(response => setSchools(response.data))
      .catch(error => console.error('Error fetching schools:', error));
  }, []);

  return (
    <SchoolsContainer>
      <h1>Schools</h1>
      {schools.map((school: any) => (
        <SchoolCard key={school.id}>
          <h2>{school.name}</h2>
          <p>Type: {school.type}</p>
          <p>Product: {school.product}</p>
          <p>County: {school.county}</p>
          <Link to={`/schools/${school.id}`}>View Details</Link>
        </SchoolCard>
      ))}
    </SchoolsContainer>
  );
};

export default Schools;

