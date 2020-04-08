import React from 'react';
import styled from 'styled-components';

const GroupMain =styled.div`
  position: absolute;
  left: 0.6%;
  right: 78.23%;
  top: 39.44%;
  bottom: 0%;
`;

const Text =styled.div`
  position: absolute;
  height: 24px;
  left: 0%;
  right: 0%;
  top: calc(50% - 24px/2 - 31px);

  font-family: PingFang TC;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;

  letter-spacing: 1px;

  color: rgba(0, 0, 0, 0.87);
`;

const Countnumber =styled.div`
  position: absolute;
  height: 56px;
  left: 0%;
  right: 42.86%;
  top: calc(50% - 56px/2 + 15px);

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 56px;

  color: rgba(0, 0, 0, 0.87);
`;

const Count = () => {
  return (
    <GroupMain>
      <Text>人數辨識統計</Text>
      <Countnumber>1</Countnumber>
    </GroupMain>
  );
}

export default Count;