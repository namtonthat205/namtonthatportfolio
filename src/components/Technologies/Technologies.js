import React from 'react';
import { DiFirebase, DiReact, DiZend, DiPython, DiNodejs, DiNodejsSmall, DiJava, DiCode, DiCss3, DiCoda, DiCelluloid, DiCodeBadge, DiCodepen, DiIonic, DiSqllite, DiVisualstudio, DiMysql, DiCreativecommons } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { FaCode } from 'react-icons/fa'

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>
    As a computer scientist, I’ve gained proficiency in a wide range of programming languages, allowing me to adapt and apply diverse technologies effectively.</SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>React</ListTitle>
          <ListParagraph>
            HTML, CSS, JavaScript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiNodejsSmall size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Backend</ListTitle>
          <ListParagraph>
          Node.js <br/> Express.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiPython size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Python</ListTitle>
          <ListParagraph>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiJava size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Java</ListTitle>
          <ListParagraph>
           
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiVisualstudio size="3rem" />
        <ListContainer>
          <ListTitle>C</ListTitle>
          <ListParagraph>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>SQL</ListTitle>
          <ListParagraph>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
