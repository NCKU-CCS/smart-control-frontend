import React from 'react';
import styled from 'styled-components';

const Text =styled.div`
  position: absolute;
  height: 56px;
  left: 0%;
  right: 78.34%;
  top: calc(50% - 56px/2 + 21px);

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 56px;

  color: rgba(0, 0, 0, 0.87);
`;

const TemperatureText = () => {
  return (
    <Text>25℃</Text>
  );
}

export default TemperatureText;