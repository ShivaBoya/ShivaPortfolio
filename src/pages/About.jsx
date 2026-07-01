import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { FaLaptopCode, FaServer, FaDatabase, FaCloud } from "react-icons/fa";

// Styled Components
const AboutSection = styled.section`
  padding: 10rem 9% 6rem;
  min-height: auto;
  position: relative;
  overflow: hidden;
  background-color: transparent;

  &::before {
    content: "";
    position: absolute;
    top: 20%;
    right: -10%;
    width: 45%;
    height: 45%;
    background: radial-gradient(
      circle,
      rgba(124, 240, 61, 0.04) 0%,
      transparent 70%
    );
    filter: blur(60px);
    pointer-events: none;
  }

  @media (max-width: 991px) {
    padding: 8rem 5% 4rem;
  }

  @media (max-width: 768px) {
    padding: 6rem 1.5rem 3rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 5rem;
  position: relative;

  h2 {
    font-size: 3.5rem;
    font-weight: 800;
    color: #fff;
    margin-bottom: 1.5rem;
    position: relative;
    display: inline-block;

    span {
      color: var(--main-color);
    }

    &::after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 120px;
      height: 4px;
      background: linear-gradient(90deg, transparent, var(--main-color), transparent);
    }
  }

  p {
    font-size: 1.25rem;
    color: #94a3b8;
    max-width: 600px;
    margin: 1.5rem auto 0;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    margin-bottom: 3.5rem;
    h2 {
      font-size: 2.8rem;
    }
    p {
      font-size: 1.1rem;
    }
  }
`;

const ContentCard = styled(motion.div)`
  background: rgba(11, 17, 32, 0.65);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 20px;
  padding: 3rem 4rem;
  border: 1px solid rgba(124, 240, 61, 0.12);
  box-shadow: 0 20px 40px -20px rgba(0, 0, 0, 0.7);
  transition: border-color 0.3s ease;
  margin-bottom: 4rem;

  &:hover {
    border-color: rgba(124, 240, 61, 0.25);
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const Introduction = styled.h3`
  font-size: clamp(1.5rem, 2.2vw, 1.8rem);
  font-weight: 700;
  color: #ffffff;
  line-height: 1.4;
  margin-bottom: 1.5rem;
  text-align: center;
  
  span {
    color: var(--main-color);
  }
`;

const Paragraph = styled.p`
  font-size: 1.25rem;
  color: #cbd5e1;
  line-height: 1.8;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;

  strong {
    color: var(--main-color);
    font-weight: 600;
  }
`;

const FocusGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const FocusCard = styled(motion.div)`
  background: rgba(15, 23, 42, 0.45);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(124, 240, 61, 0.08);
  border-radius: 16px;
  padding: 2.5rem 2rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, transparent, var(--main-color), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    border-color: rgba(124, 240, 61, 0.25);
    transform: translateY(-5px);
    box-shadow: 0 15px 30px -15px rgba(124, 240, 61, 0.2);
    background: rgba(15, 23, 42, 0.6);

    &::before {
      opacity: 1;
    }

    .icon-wrapper {
      transform: scale(1.1);
      color: var(--main-color);
      box-shadow: 0 0 15px rgba(124, 240, 61, 0.2);
      background: rgba(124, 240, 61, 0.1);
      border-color: rgba(124, 240, 61, 0.2);
    }
  }
`;

const IconWrapper = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.03);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #94a3b8;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.05);
  font-size: 1.8rem;
`;

const CardTitle = styled.h4`
  font-size: 1.35rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.8rem;
  letter-spacing: 0.5px;
`;

const CardDescription = styled.p`
  font-size: 1.15rem;
  color: #94a3b8;
  line-height: 1.6;
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            About <span>Me</span>
          </h2>
          <p>
            A focused developer specialized in crafting clean, high-quality MERN applications.
          </p>
        </SectionHeader>

        <ContentCard
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Introduction>
            Turning ideas into responsive and <span>well-crafted code</span>.
          </Introduction>
          <Paragraph>
            I am a **Full Stack Web Developer** focusing on MongoDB, Express, React, and Node.js. 
            I love building clean, user-friendly websites that combine smooth responsive frontends 
            with stable backends, structured database schemas using **SQL & MongoDB**, and cloud deployment on **AWS & DigitalOcean**.
          </Paragraph>
        </ContentCard>

        <FocusGrid>
          <FocusCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <IconWrapper className="icon-wrapper">
              <FaLaptopCode />
            </IconWrapper>
            <CardTitle>Frontend Craft</CardTitle>
            <CardDescription>
              Developing responsive and interactive interfaces using React.js, Next.js, and modern CSS styles.
            </CardDescription>
          </FocusCard>

          <FocusCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <IconWrapper className="icon-wrapper">
              <FaServer />
            </IconWrapper>
            <CardTitle>Backend Routing</CardTitle>
            <CardDescription>
              Creating secure, functional REST APIs and server routes using Express and Node.js.
            </CardDescription>
          </FocusCard>

          <FocusCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <IconWrapper className="icon-wrapper">
              <FaDatabase />
            </IconWrapper>
            <CardTitle>Data Design</CardTitle>
            <CardDescription>
              Designing secure and structured database relational schemas using MongoDB and SQL databases.
            </CardDescription>
          </FocusCard>

          <FocusCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <IconWrapper className="icon-wrapper">
              <FaCloud />
            </IconWrapper>
            <CardTitle>Cloud & DevOps</CardTitle>
            <CardDescription>
              Deploying and hosting secure web applications using modern cloud services like AWS and DigitalOcean.
            </CardDescription>
          </FocusCard>
        </FocusGrid>
      </Container>
    </AboutSection>
  );
};

export default About;
