// import React from 'react'
import MainLayout from '../components/layout/MainLayout'
// import styled from 'styled-components'

// const Container = styled.div`
// width: 100vw;
// `

// const DashboardModule = () => {
//   return (
//     <MainLayout>
//         <Container>
//             <h1>Dashboard Module</h1>
//         </Container>
//     </MainLayout>
//   )
// }

// export default DashboardModule

// src/pages/Dashboard.tsx
import React from 'react';
import styled from 'styled-components';

const DashboardContainer = styled.div`
width: 100vw;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CounterCard = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const DashboardModule : React.FC = () => {
  return (
    // <MainLayout>
    // <DashboardContainer>
    //   <h1>Dashboard</h1>
    //   <CounterCard>Collections: 100</CounterCard>
    //   <CounterCard>Sign-ups: 200</CounterCard>
    //   <CounterCard>Total Revenue: $5000</CounterCard>
    //   <CounterCard>Bounced Cheques: 2</CounterCard>
    // </DashboardContainer>
    // </MainLayout>
        <DashboardContainer>
      <h1>Dashboard</h1>
      <CounterCard>Collections: 100</CounterCard>
      <CounterCard>Sign-ups: 200</CounterCard>
      <CounterCard>Total Revenue: $5000</CounterCard>
      <CounterCard>Bounced Cheques: 2</CounterCard>
    </DashboardContainer>
  );
};

export default DashboardModule;

