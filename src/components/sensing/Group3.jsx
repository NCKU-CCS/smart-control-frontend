import React from 'react';
import styled from 'styled-components';

const GroupMain = styled.div`
  position: absolute;
  width: 194px;
  height: 86px;
  left: 40px;
  top: 342px;
`;

const Text =styled.div`
  position: absolute;
  height: 24px;
  left: 0%;
  right: 26.8%;
  top: calc(50% - 24px/2 - 31px);

  font-family: PingFang TC;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;

  letter-spacing: 1px;

  color: rgba(0, 0, 0, 0.87);
`;

const Count =styled.div`
  position: absolute;
  height: 56px;
  left: 0%;
  right: 0%;
  top: calc(50% - 56px/2 + 15px);

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 56px;

  color: rgba(0, 0, 0, 0.87);
`;

const Group3 = () => {
  return (
    <GroupMain>
      <Text>未感測人體計時器</Text>
      <Count>00:00:25</Count>
    </GroupMain>
  );
}

export default Group3;