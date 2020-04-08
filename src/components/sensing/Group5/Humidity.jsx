import React from 'react';
import styled from 'styled-components';

import waterImage from '../../../static/ion-waterdrop - Ionicons.png';

const GroupMain =styled.div`
  position: absolute;
  left: 35.02%;
  right: 43.52%;
  top: 3.06%;
  bottom: 0%;
`;

const Persantage =styled.div`
  position: absolute;
  height: 56px;
  left: 0%;
  right: 0%;
  top: calc(50% - 56px/2 + 19.5px);

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 56px;

  color: rgba(0, 0, 0, 0.87);
`;

const Image =styled.img`
  position: absolute;
  height: 39px;
  left: 2.83%;
  right: 75.47%;
  top: calc(50% - 39px/2 - 28px);

  font-family: Ionicons;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 39px;
  
  color: #000000;
`;

const Humidity = () => {
  return (
    <GroupMain>
      <Persantage>40%</Persantage>
      <Image src={waterImage} alt='water Icon'/>
    </GroupMain>
  );
}

export default Humidity;