import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 4000, text: 'Downloads recevied worldwide', description : "Developed and deployed custom Minecraft mods in Java, that adds new weapons, armour, and game mechanics to enhance users’ experience"},
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+ Downloads received worldwide`}</BoxNum>
          <br/>
          <BoxText>{card.description}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
