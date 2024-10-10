import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Nam Tonthat <br />
        </SectionTitle>
        <SectionText>
         I am a second year Computer Science student at the University of Nottingham, with a strong passion for Artificial Intelligence and Software Engineering. What drives me is my ambition to create and develop software that addresses some of the world’s toughest and most critical challenges, making a meaningful impact on society.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;