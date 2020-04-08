import React from 'react';
import styled from 'styled-components';

import TemperatureImg from '../../../static/weather.png';

const Image =styled.img`
  position: absolute;
  width: 18.5px;
  height: 37px;
  left: 0px;
  top: 0px;
`;

const Temperature = () => {
  return (
    <Image src={TemperatureImg} alt="temperature icon"/>
  );
}

export default Temperature;