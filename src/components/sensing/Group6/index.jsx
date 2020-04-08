import React from 'react';
import styled from 'styled-components';
import Text from './Text'
import Time from './Time'
import Count from './Count'

const GroupMain =styled.div`
  position: absolute;
  width: 496px;
  height: 142px;
  left: 37px;
  top: 476px;
`;

const Group6 = () => {
  return (
    <GroupMain>
      <Text/>
      <Time/>
      <Count/>
    </GroupMain>
  );
}

export default Group6;