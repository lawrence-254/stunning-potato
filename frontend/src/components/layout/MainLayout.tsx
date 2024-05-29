import React from 'react';
import styled, { keyframes } from 'styled-components';
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
// const SidebarLink = styled(Link)`
//   align-items: center;
//   align-content: center;
//   align-self: center;
//   color: white;
//   text-decoration: none;
//   margin-bottom: 15px;
//   padding: 8px 16px;
//   border: 1px solid transparent;
//   background-color: black;
// border-radius: 4px;


//   &:hover {
//     text-decoration: none;
//   }
// `;
const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.4), 0 0 0 0 rgba(128, 128, 128, 0.3);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0), 0 0 0 30px rgba(128, 128, 128, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(128, 128, 128, 0);
  }
`;


// Create the styled link component with pulsating effect
const SidebarLink = styled(Link)`
  align-items: center;
  align-content: center;
  align-self: center;
  color: white;
  text-decoration: none;
  margin-bottom: 15px;
  padding: 8px 16px;
  border: 1px solid transparent;
  background-color: black;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  z-index: 0;

  &:hover {
    text-decoration: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: var(--y, 50%);
    left: var(--x, 50%);
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(0, 0, 0, 0.4) 10%, rgba(128, 128, 128, 0.3) 20%, rgba(0, 0, 0, 0) 70%);
    transform: translate(-50%, -50%);
    border-radius: 50%;
    animation: ${pulse} 1s infinite;
    z-index: -1;
  }

  &:hover::after {
    animation: ${pulse} 1s infinite;
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

const ButtonWithPulsateEffect: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => {
  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    button.style.setProperty('--x', `${e.clientX - rect.left}px`);
    button.style.setProperty('--y', `${e.clientY - rect.top}px`);
  };

  return (
    <StyledLink to={to} onMouseMove={handleMouseMove}>
      {children}
    </StyledLink>
  );
};
const MainLayout: React.FC = ()=> {


  return (
     <Container>
      <Sidebar>
        <h2>Navigation</h2>
         <ButtonWithPulsateEffect to="/dashboard">Dashboard</ButtonWithPulsateEffect>
    <ButtonWithPulsateEffect to="/schools">Schools</ButtonWithPulsateEffect>
      </Sidebar>
      <MainContent>
        <Outlet />
      </MainContent>
    </Container>

  )
}

export default MainLayout
