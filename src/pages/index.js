import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import WorkExperience from '../components/WorkExperience/WorkExperience';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
     <Section grid>
        <Hero />
         <BgAnimation /> 
       </Section> 
      <WorkExperience />
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
