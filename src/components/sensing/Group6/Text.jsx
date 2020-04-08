import React from 'react';
import styled from 'styled-components';

const GroupMain =styled.div`
  position: absolute;
  height: 24px;
  left: 0%;
  right: 55.24%;
  top: calc(50% - 24px/2 - 59px);

  font-family: PingFang TC;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;

  letter-spacing: 0.15px;

  color: rgba(0, 0, 0, 0.87);
`;

const Text = () => {
  return (
    <GroupMain>上次人數辦識時間和結果</GroupMain>
  );
}

export default Text;