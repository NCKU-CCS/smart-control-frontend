import React from 'react';
import styled from 'styled-components';
import NavLinks from './NavLinks';

const Container = styled.div`
  height: 60px;
  background-color: #D8D8D8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 40px;
`;

const Navbar = () => {
  return (
    <Container>
      <p>智慧室內控制系統</p>
      <NavLinks />
    </Container>
  );
}

export default Navbar;