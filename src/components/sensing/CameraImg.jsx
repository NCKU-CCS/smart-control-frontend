import React from 'react';
import styled from 'styled-components';

import Black from '../../static/black.png';

const Camera =styled.img`
  position: absolute;
  width: 404px;
  height: 304px;
  left: 582px;
  top: 255px;
`;

const CameraImg = () => {
  return (
      <Camera src={Black} alt="black img"/>
  );
}

export default CameraImg;