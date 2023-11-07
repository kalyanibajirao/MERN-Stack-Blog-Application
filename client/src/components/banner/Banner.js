import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import React from 'react';

const Image = styled(Box)`
    background: url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg) center/55% repeat-x #000;
    width: 100%;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    `
const Heading = styled(Typography)`
    font-size: 70px;
    color: #FFFFFF;
    line-height: 1;
    `;

const Subheading = styled(Typography)`
    font-size: 20px;
    color: #FFFFFF;
  `;


const Banner = () => {
  return (
    <Image>
        <Heading>Blog</Heading>
        <Subheading>Code for interview</Subheading>
    </Image>
  )
}

export default Banner
