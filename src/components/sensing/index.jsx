import React from 'react';
import styled from 'styled-components';
import Navbar from '../navbar';
import Group6 from './Group6'
import Group5 from './Group5';
import Group3 from './Group3';
import PlaceText from './PlaceText';
import CameraImg from './CameraImg'

const Sensing = () => {
  return (
    <div>
      <Navbar />
      <PlaceText/>
      <Group6/>     
      <Group5/>
      <Group3/>
      <CameraImg/>
    </div>
  );
}

export default Sensing;