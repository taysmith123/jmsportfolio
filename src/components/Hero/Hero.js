import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello! <br /> I'm Jatavious Smith | Front End Web Developer
      </SectionTitle>
      <SectionText>
        My goal is to provide value for businesses looking for a facelift and
        individuals looking to start their journey with entrepreneurship.
      </SectionText>
      <Button
        onClick={() => (window.location.href = "mailto:taysmith321@gmail.com")}
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
