import React from 'react';
import styled from 'styled-components';

import LightImg from '../../../static/lightbulb_outline - material.png';

const GroupMain = styled.div`
  position: absolute;
  left: 70.04%;
  right: 0%;
  top: 0%;
  bottom: 0%;
`;

const Lux = styled.div`
  position: absolute;
  height: 36px;
  left: 64.86%;
  right: 0%;
  top: calc(50% - 36px/2 + 24px);

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 34px;
  line-height: 36px;

  color: rgba(0, 0, 0, 0.87);
`;

const LightText = styled.div`
  position: absolute;
  height: 56px;
  left: 0%;
  right: 28.38%;
  top: calc(50% - 56px/2 + 21px);

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 56px;

  color: rgba(0, 0, 0, 0.87);
`;

const Image =styled.img`
  position: absolute;
  height: 42px;
  left: 0%;
  right: 70.27%;
  top: calc(50% - 42px/2 - 28px);
`;

const Light = () =>{
  return(
    <GroupMain>
      <Lux>lux</Lux>
      <LightText>188</LightText>
      <Image src={LightImg} alt="light icon"/>
    </GroupMain>
  );
}

export default Light;