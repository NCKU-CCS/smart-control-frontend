import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import linkConfig from '../../constants/routes';

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  li {
    margin: auto 20px;
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;

const Navlinks = () => {
  return (
    <Container>
      {linkConfig.map((link, index) => (
        <li key={index}>
          <NavLink to={link.ref}>{link.name}</NavLink>
        </li>
      ))}
    </Container>
  );
}

export default Navlinks;