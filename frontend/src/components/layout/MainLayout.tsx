// src/components/layout/MainLayout.js
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Link, Outlet } from 'react-router-dom';

// Styled Components
// main container area
const Container = styled.div`
  display: flex;
  height: 100vh;
`;
//left sidebar area
const Sidebar = styled.div`
  width: 250px;
  background-color: #333;
  color: white;
  padding: 20px;
`;
const SidebarLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-bottom: 10px;

  &:hover {
    text-decoration: underline;
  }
`;
//main area components
const MainContent = styled.div`
  flex-grow: 1;
  color: black;
  background-color: #f0f0f0;
  padding: 20px;
  width: calc(100% - 250px);
`;

//props for the Layout component
// interface LayoutProps {
//   children: ReactNode;
// }
// const MainLayout: React.FC<LayoutProps> = ({ children }) => {

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
    //  <Container>
    //   <Sidebar>
    //     <h2>Navigation</h2>
    //     <SidebarLink to="/dashboard">Dashboard</SidebarLink>
    //     <SidebarLink to="/schools">Schools</SidebarLink>
    //   </Sidebar>
    //   <MainContent>
    //     {children}
    //   </MainContent>
    // </Container>
  )
}

export default MainLayout
