import React from "react";
import styled, { keyframes } from "styled-components";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaCertificate,
  FaCheckCircle,
} from "react-icons/fa";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ExperienceSection = styled.section`
  padding: 1rem 2rem; /* Minimal padding at top */
  min-height: 65vh; /* Reduced height */
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 1rem 1rem;
    min-height: auto;
  }
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  @media (max-width: 768px) {
    padding: 0 0.5rem;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: #64ffda;
  font-size: 2.4rem;
  margin-bottom: 2rem; /* Reduced spacing below title */
  margin-top: 0; /* No extra space above */
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, transparent, #64ffda, transparent);
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.2rem; /* Reduced gap */
  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const ExperienceCard = styled.div`
  background: rgba(23, 34, 52, 0.7);
  border-radius: 12px;
  padding: 1.6rem;
  border: 1px solid rgba(100, 255, 218, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  animation: ${fadeInUp} 0.6s ease forwards;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 768px) {
    padding: 1.1rem;
    border-radius: 10px;
  }
`;

const CompanyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.6rem;
  }
`;

const CompanyInfo = styled.div`
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Company = styled.h3`
  color: #64ffda;
  font-size: 1.4rem;
  margin-bottom: 0.3rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Position = styled.h4`
  color: #fff;
  font-size: 1.1rem;
  margin-bottom: 0.4rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Timeline = styled.div`
  display: flex;
  align-items: center;
  color: #8892b0;
  margin-bottom: 0.8rem;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const Description = styled.p`
  color: #a8b2d1;
  line-height: 1.5;
  font-size: 0.9rem;
  margin-bottom: 0.8rem;

  @media (max-width: 768px) {
    font-size: 0.88rem;
  }
`;

const AchievementList = styled.ul`
  list-style: none;
  padding: 0;
`;

const AchievementItem = styled.li`
  display: flex;
  align-items: center;
  color: #a8b2d1;
  margin-bottom: 0.4rem;
  font-size: 0.88rem;

  svg {
    color: #64ffda;
    margin-right: 0.5rem;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const CertificateLink = styled.a`
  display: inline-flex;
  align-items: center;
  color: #64ffda;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  font-size: 0.9rem;

  svg {
    margin-right: 0.4rem;
  }

  &:hover {
    color: #fff;
    transform: scale(1.05);
  }
`;

const experiences = [
  {
    company: "Masai",
    position: "Masai Hackathon Edition",
    period: "48 Hours",
    current: false,
    description:
      "Developed responsive user interfaces and interactive features for MemeHub, enabling users to create, browse, and engage with memes.",
    achievements: [
      "Developed MemesHub web app for meme creation, browsing, and sharing using HTML, CSS, and JavaScript.",
      "Implemented likes, comments, and trending features to boost user engagement.",
      "Ensured responsive design and seamless UX across all devices.",
    ],
    certification:
      "https://res.cloudinary.com/dumhixyxy/image/upload/Hack_fi28k6",
  },
  {
    company: "Python FullStack",
    position: "Python Developer",
    period: "Jul 2024 - Dec 2024",
    current: false,
    description:
      "Built and deployed full-stack web apps using Python, Django/Flask, and modern front-end technologies.",
    achievements: [
      "Completed Python Full-Stack Development with REST APIs and authentication.",
      "Developed CRUD-based responsive applications with secure login systems.",
      "Deployed projects using CI/CD pipelines and optimized database performance.",
    ],
    certification:
      "https://drive.google.com/file/d/1ZvrSxEuSU_tJuriCivXk3CdOCpXHEda-/view?usp=sharing",
  },
];

const Experience = () => (
  <ExperienceSection id="experience">
    <Container>
      <SectionTitle>Certificates</SectionTitle>
      <ExperienceGrid>
        {experiences.map((exp, index) => (
          <ExperienceCard key={index}>
            <CompanyHeader>
              <CompanyInfo>
                <Company>
                  <FaBriefcase />
                  {exp.company}
                </Company>
                <Position>{exp.position}</Position>
              </CompanyInfo>
              {exp.certification && (
                <CertificateLink
                  href={exp.certification}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaCertificate />
                  Certificate
                </CertificateLink>
              )}
            </CompanyHeader>

            <Timeline>
              <FaCalendarAlt style={{ marginRight: "0.4rem" }} />
              {exp.period}
            </Timeline>

            <Description>{exp.description}</Description>

            <AchievementList>
              {exp.achievements.map((achievement, idx) => (
                <AchievementItem key={idx}>
                  <FaCheckCircle />
                  {achievement}
                </AchievementItem>
              ))}
            </AchievementList>
          </ExperienceCard>
        ))}
      </ExperienceGrid>
    </Container>
  </ExperienceSection>
);

export default Experience;
