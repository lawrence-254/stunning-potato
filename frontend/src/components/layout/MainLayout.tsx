import React from 'react';
import styled from 'styled-components';
import { Link, Outlet } from 'react-router-dom';

// Styles to my components
// Main container area
const Container = styled.div`
  display: flex;
  height: 100vh;
`;

// Left sidebar area
const Sidebar = styled.div`
  width: 250px;
  background-color: #333;
  color: white;
  padding: 20px;
  position: fixed;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
// links style
const SidebarLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-bottom: 10px;
  border: 1px solid transparent;

  &:hover {
    text-decoration: underline;
  }
`;

// Main content area
const MainContent = styled.div`
  margin-left: 250px; /* Offset the width of the fixed sidebar */
  flex-grow: 1;
  background-color: #f0f0f0;
  padding: 20px;
  height: 100%;
`;



const MainLayout: React.FC = () => {
  return (
     <Container>
      <Sidebar>
        <h2>Navigation</h2>
        <SidebarLink to="/dashboard">Dashboard</SidebarLink>
        <SidebarLink to="/schools">Schools</SidebarLink>
      </Sidebar>
      <MainContent>
        <Outlet />
      </MainContent>
    </Container>

  )
}

export default MainLayout
