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
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ExperienceSection = styled.section`
  padding: 0rem 2rem;
  min-height: 100vh;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0rem 1rem;
    min-height: auto;
  }
`;

const Container = styled.div`
  max-width: 1200px;
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
  font-size: 3rem;
  margin-bottom: 4rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 4px;
    background: linear-gradient(90deg, transparent, #64ffda, transparent);
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 2rem;

    &::after {
      width: 100px;
    }
  }
`;

const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

const ExperienceCard = styled.div`
  background: rgba(23, 34, 52, 0.7);
  border-radius: 15px;
  padding: 2.5rem;
  position: relative;
  transition: all 0.3s ease;
  border: 1px solid rgba(100, 255, 218, 0.1);
  backdrop-filter: blur(10px);
  animation: ${fadeInUp} 0.6s ease forwards;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 10px;
  }
`;

const CompanyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1rem;
  }
`;

const CompanyInfo = styled.div`
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Company = styled.h3`
  color: #64ffda;
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Position = styled.h4`
  color: #fff;
  font-size: 1.4rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Timeline = styled.div`
  display: flex;
  align-items: center;
  color: #8892b0;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
`;

const Description = styled.p`
  color: #a8b2d1;
  line-height: 1.6;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.5;
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
  margin-bottom: 0.75rem;

  svg {
    color: #64ffda;
    margin-right: 0.75rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const CertificateLink = styled.a`
  display: inline-flex;
  align-items: center;
  color: #64ffda;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;

  svg {
    margin-right: 0.5rem;
  }

  &:hover {
    color: #fff;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const experiences = [
  // {
  //   company: "Aptitude Guru Hem",
  //   position: "Fullstack Developer Intern",
  //   period: "06/2024 - 09/2024",
  //   current: true,
  //   description:
  //     "Developed an affiliate marketing site for the Admin portal and GST Management System using the MERN stack with a focus on efficient data handling and user experience. Managed project tasks via Jira, handled deployment, integrated team tasks, and conducted code reviews.",
  //   achievements: [
  //     "Ensured code quality, security, and maintainability using SonarQube for static analysis",
  //     "Improved user experience through efficient data handling",
  //     "Managed team collaboration and productivity by handling task integration and code reviews",
  //   ],
  //   certification:
  //     "https://res.cloudinary.com/dwiq4s5ut/image/upload/v1731597421/Screenshot_2024-11-12_220411_iuja2s.png",
  // },
  {
    company: "Masai",
    position: "Masai Hackathon Edition",
    period: "48 Hours",
    current: false,
    description:
      "Developed responsive user interfaces and interactive front-end features for MemeHub, enabling users to create, browse, and engage with memes using HTML, CSS, and JavaScript.",
    achievements: [
      "Developed MemesHub, a responsive web application for creating, browsing, and sharing memes using HTML, CSS, and JavaScript",
      "Implemented interactive features such as likes, comments, and trending content to enhance user engagement",
      "Ensured responsive design and smooth user experience across devices",
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
      "Built and deployed full-stack web applications using Python, Django/Flask, and modern front-end technologies, ensuring seamless integration between back-end APIs and responsive user interfaces.",
    achievements: [
      "Completed Python Full-Stack Development, covering both back-end (Django/Flask, REST APIs, authentication, database management) and front-end (HTML, CSS, JavaScript, React) technologies",
      "Developed dynamic and responsive web applications with CRUD functionality, secure authentication, and RESTful API integrations",
      "Implemented database solutions using MySQL/PostgreSQL and optimized queries for performance",
      "Deployed full-stack applications on cloud platforms (Heroku/Render) with CI/CD pipelines for automated deployment",
      "Collaborated on real-world projects demonstrating proficiency in both client-side and server-side development",
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
              <FaCalendarAlt style={{ marginRight: "0.5rem" }} />
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
