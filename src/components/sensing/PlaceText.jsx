import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
  position: absolute;
  width: 181px;
  height: 36px;
  left: 40px;
  top: 112px;

  font-family: PingFang TC;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 36px;

  letter-spacing: 1.5px;

  color: rgba(0, 0, 0, 0.87);
`;

const PlaceText = () => {
  return (
    <Text>608會議室</Text>
  );
}

export default PlaceText;