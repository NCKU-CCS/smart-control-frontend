import React from 'react';
import styled from 'styled-components';

const GroupMain =styled.div`
  position: absolute;
  left: 35.48%;
  right: 0%;
  top: 39.44%;
  bottom: 6.34%;
`;

const Text =styled.div`
  position: absolute;
  height: 24px;
  left: 0%;
  right: 67.19%;
  top: calc(50% - 24px/2 - 26.5px);

  font-family: PingFang TC;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;

  letter-spacing: 1px;

  color: rgba(0, 0, 0, 0.87);
`;

const RecordTime =styled.div`
  position: absolute;
  height: 36px;
  left: 0%;
  right: 0%;
  top: calc(50% - 36px/2 + 20.5px);

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 36px;

  color: rgba(0, 0, 0, 0.87);
`;

const Time = () => {
  return (
    <GroupMain>
      <Text>人數辨識時間</Text>
      <RecordTime>2020-03-13 15:58</RecordTime>
    </GroupMain>
  );
}

export default Time;