import React from "react";
import MainBox from "../../shared/components/MainBox/MainBox";
import styles from "./About.module.scss";
import { HeadlineDataItem } from "./HeadlineDataItem/HeadlineDataItem";
import { SocialIcon } from "./SocialIcon/SocialIcon";

const About: React.FC = () => (
  <div data-testid="About">
    <h3>About me</h3>

    <MainBox>
      <p className={styles.ProfileDescription}>
        With over 15 years of experience in software development and working
        with many different technologies, I have found my niche in frontend
        development. At 2013 I have joined a startup from Washington DC where I
        first got introduced to Angular. A year after being in the company I
        became a lead and main responsible for the frontend architecture, UI
        implementation, and quality of the product. At January 2018 I joined
        Palfinger as a part of the IoT team. Very soon I became a lead for UI
        implementation of the product and moved towards the architecture,
        improving the communication between multiple teams in terms of code
        sharing and branding. My greatest passion is UI implementation and
        frontend in general but I am not foreign with the backend, writing bash
        scripts, setting up build pipelines or any other non-development work
        required to ensure reliability and quality of the product. I like a
        pragmatic and simple approach and I am not a fan of buzzwords or
        over-engineering. I am always glad to share the knowledge and willing to
        accept critique and other opinions.
      </p>
    </MainBox>

    <br />

    <div className={`${styles.InfoSection} text-center`}>
      <HeadlineDataItem icon="map-marker-alt">Vienna, Austria</HeadlineDataItem>
      <HeadlineDataItem icon="university">
        Faculty of Electrical Engineering, Computer Science and Information
        Technology Osijek
      </HeadlineDataItem>
      <HeadlineDataItem icon="envelope">
        <a href="mailto:iblazevi@gmail.com">iblazevi@gmail.com</a>
      </HeadlineDataItem>
      <HeadlineDataItem icon="phone">(+43) 664 629 0512</HeadlineDataItem>
    </div>

    <div className={styles.Download}>
      <a target="_blank" href="assets/CV.pdf">
        <i className="fas fa-download"></i>&nbsp;<span>Download CV</span>
      </a>
    </div>

    <div className={styles.SocialIconsContainer}>
      <SocialIcon
        icon="stack-overflow"
        url="https://stackoverflow.com/users/1630166/blazh"
      ></SocialIcon>
      <SocialIcon
        icon="linkedin"
        url="https://www.linkedin.com/in/iblazevic"
      ></SocialIcon>
      <SocialIcon icon="skype" url="skype:blazh985?userinfo"></SocialIcon>
      <SocialIcon
        icon="github"
        url="https://github.com/ivanblazevic"
      ></SocialIcon>
    </div>

    <br />
    <br />
    <br />

    <p className={styles.Copyright}>©2022 ivanblazevic.github.io</p>
  </div>
);

export default About;
