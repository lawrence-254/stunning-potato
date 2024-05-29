import React from 'react';
import styled from 'styled-components';
import { Pie, Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
    padding: 20px;
    width: 100%;
`;

const CardsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const Card = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  flex: 1;
`;

const ChartsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const UpcomingInvoicesContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const InvoicesList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const InvoiceItem = styled.li`
  padding: 10px 0;
  border-bottom: 1px solid #eee;
`;

const DashboardModule: React.FC = () => {
  // Mock data for cards
  const collections = 100;
  const signups = {
    total: 200,
    breakdown: { analytics: 80, finance: 70, timetable: 50 }
  };
  const totalRevenue = {
    total: 5000,
    breakdown: { analytics: 2000, finance: 1500, timetable: 1500 }
  };
  const bouncedCheques = 2;

  // Mock data for pie charts
  const pieData = (achieved: number, target: number) => ({
    datasets: [
      {
        data: [achieved, target - achieved],
        backgroundColor: ['#4caf50', '#f44336'],
      }
    ],
    labels: ['Achieved', 'Remaining']
  });

  // Mock data for bar charts
  const barData = (primary: number, secondary: number, igcse: number) => ({
    labels: ['Primary', 'Secondary', 'IGCSE'],
    datasets: [
      {
        label: 'Sign-ups',
        data: [primary, secondary, igcse],
        backgroundColor: ['#2196f3', '#ffeb3b', '#ff5722']
      }
    ]
  });

  // Mock data for upcoming invoices
  const upcomingInvoices = [
    { school: 'School A', amount: 1000, dueDate: '2023-06-01' },
    { school: 'School B', amount: 1500, dueDate: '2023-06-05' },
    { school: 'School C', amount: 2000, dueDate: '2023-06-10' }
  ];

  return (
    <DashboardContainer>
      <h1>Dashboard</h1>

      <CardsContainer>
        <Card>
          <h2>Collections</h2>
          <p>{collections}</p>
        </Card>
        <Card>
          <h2>Sign-ups</h2>
          <p>{signups.total}</p>
          <p>Zeraki Analytics: {signups.breakdown.analytics}</p>
          <p>Zeraki Finance: {signups.breakdown.finance}</p>
          <p>Zeraki Timetable: {signups.breakdown.timetable}</p>
        </Card>
        <Card>
          <h2>Total Revenue</h2>
          <p>${totalRevenue.total}</p>
          <p>Zeraki Analytics: ${totalRevenue.breakdown.analytics}</p>
          <p>Zeraki Finance: ${totalRevenue.breakdown.finance}</p>
          <p>Zeraki Timetable: ${totalRevenue.breakdown.timetable}</p>
        </Card>
        <Card>
          <h2>Bounced Cheques</h2>
          <p>{bouncedCheques}</p>
        </Card>
      </CardsContainer>

      <ChartsContainer>
        <Card>
          <h2>Targets - Zeraki Analytics</h2>
          <Pie data={pieData(80, 100)} />
        </Card>
        <Card>
          <h2>Targets - Zeraki Finance</h2>
          <Pie data={pieData(70, 100)} />
        </Card>
        <Card>
          <h2>Targets - Zeraki Timetable</h2>
          <Pie data={pieData(50, 100)} />
        </Card>
      </ChartsContainer>

      <ChartsContainer>
        <Card>
          <h2>Sign-ups Overview - Zeraki Analytics</h2>
          <Bar data={barData(30, 40, 10)} />
        </Card>
        <Card>
          <h2>Sign-ups Overview - Zeraki Finance</h2>
          <Bar data={barData(25, 35, 10)} />
        </Card>
        <Card>
          <h2>Sign-ups Overview - Zeraki Timetable</h2>
          <Bar data={barData(20, 30, 0)} />
        </Card>
      </ChartsContainer>

      <UpcomingInvoicesContainer>
        <h2>Upcoming Invoices</h2>
        <InvoicesList>
          {upcomingInvoices.map(invoice => (
            <InvoiceItem key={invoice.school}>
              <p>{invoice.school}</p>
              <p>Amount: ${invoice.amount}</p>
              <p>Due Date: {invoice.dueDate}</p>
              <button>Collect Payment</button>
            </InvoiceItem>
          ))}
        </InvoicesList>
      </UpcomingInvoicesContainer>
    </DashboardContainer>
  );
};

export default DashboardModule;

