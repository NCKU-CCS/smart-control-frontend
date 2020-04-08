import React from 'react';
import styled from 'styled-components';
import Humidity from './Humidity';
import Temperature from './Temperature';
import TemperatureText from './TemperatureText';
import Light from './Light';

const GroupMain =styled.div`
  position: absolute;
  width: 494px;
  height: 98px;
  left: 40px;
  top: 196px;
`;

const Group5 = () => {
  return (
    <GroupMain>
      <Temperature/>
      <TemperatureText/>
      <Humidity/>
      <Light/>
    </GroupMain>
  );
}

export default Group5;