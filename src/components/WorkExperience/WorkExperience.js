import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 4000, text: 'Downloads recevied worldwide',
     description : 
    "I developed and deployed a full stack web app to test statistical significance, using HTML, CSS, JavaScript, and Python Flask, where teams could quickly assess the significance of various experiments and trials, and the effect it has on the company- reducing testing times by 30%.\n\n\
     In addition, I analysed real-time data using SQL to derive actionable insights and support business decisions."}
,
];

const WorkExperience = () => (
  <Section>
    <SectionTitle>Work Experience</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`Data Scientist at Forbes`}</BoxNum>
          <br/>
          <BoxText>{card.description}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default WorkExperience;
