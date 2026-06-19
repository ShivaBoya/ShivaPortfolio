import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaCalendarAlt, FaBriefcase } from "react-icons/fa";

// Styled Components for Premium Futuristic SaaS Design
const ExperienceSection = styled.section`
  padding: 10rem 9% 6rem;
  min-height: auto;
  position: relative;
  overflow: hidden;
  background-color: transparent;

  @media (max-width: 991px) {
    padding: 8rem 5% 4rem;
  }

  @media (max-width: 768px) {
    padding: 6rem 1.5rem 3rem;
  }
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 6rem;
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
    margin-bottom: 4rem;
    h2 {
      font-size: 2.6rem;
    }
    p {
      font-size: 1.1rem;
    }
  }
`;

const TimelineContainer = styled.div`
  position: relative;
  padding: 2rem 0;

  /* Animated glowing vertical timeline track line */
  &::before {
    content: "";
    position: absolute;
    left: 30px;
    top: 0;
    width: 3px;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(124, 240, 61, 0.05) 0%,
      var(--main-color) 20%,
      var(--main-color) 80%,
      rgba(124, 240, 61, 0.05) 100%
    );
    border-radius: 9px;
    box-shadow: 0 0 15px rgba(124, 240, 61, 0.3);
  }

  @media (max-width: 768px) {
    padding: 1rem 0;
    &::before {
      left: 20px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  position: relative;
  margin-bottom: 5rem;
  padding-left: 85px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    padding-left: 55px;
    margin-bottom: 3.5rem;
  }
`;

const TimelineIconWrapper = styled(motion.div)`
  position: absolute;
  left: 10px;
  top: 4px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #0b1120;
  border: 3px solid var(--main-color);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  box-shadow: 0 0 20px rgba(124, 240, 61, 0.4), inset 0 0 10px rgba(124, 240, 61, 0.2);
  color: var(--main-color);
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
    filter: drop-shadow(0 0 5px var(--main-color));
  }

  @media (max-width: 768px) {
    left: 4px;
    width: 34px;
    height: 34px;
    top: 2px;
    
    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

const TimelineCard = styled(motion.div)`
  background: rgba(11, 17, 32, 0.75);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 18px;
  padding: 2.8rem;
  border: 1px solid rgba(124, 240, 61, 0.12);
  box-shadow: 0 20px 40px -20px rgba(0, 0, 0, 0.7);
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  position: relative;
  width: 100%;

  /* Decorative connection arrow pointing to timeline line */
  &::before {
    content: "";
    position: absolute;
    left: -10px;
    top: 16px;
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right: 10px solid rgba(124, 240, 61, 0.15);
  }

  &:hover {
    transform: translateY(-6px);
    border-color: var(--main-color);
    box-shadow: 0 25px 50px -25px rgba(124, 240, 61, 0.3), 
                inset 0 0 15px rgba(124, 240, 61, 0.05);

    /* Pulsate the connector arrow on hover */
    &::before {
      border-right-color: var(--main-color);
    }
  }

  @media (max-width: 768px) {
    padding: 2rem;
    &::before {
      display: none;
    }
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.8rem;
  gap: 1.5rem;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

const RoleTitle = styled.h3`
  font-size: 1.9rem;
  font-weight: 700;
  color: #fff;
  margin: 0 0 0.5rem 0;

  span {
    color: var(--main-color);
    font-weight: 600;
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const CompanyDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  flex-wrap: wrap;
`;

const CompanyName = styled.h4`
  font-size: 1.35rem;
  color: #e2e8f0;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.6rem;

  svg {
    color: var(--main-color);
    font-size: 1.1rem;
  }
`;

const MetaBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.95rem;
  background: rgba(255, 255, 255, 0.04);
  padding: 0.3rem 0.8rem;
  border-radius: 6px;
  color: #94a3b8;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.05);

  svg {
    color: var(--main-color);
    font-size: 0.9rem;
  }
`;

const DurationBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background: rgba(124, 240, 61, 0.08);
  color: var(--main-color);
  padding: 0.6rem 1.2rem;
  border-radius: 50px;
  font-size: 1.05rem;
  font-weight: 700;
  border: 1px solid rgba(124, 240, 61, 0.18);
  box-shadow: 0 0 10px rgba(124, 240, 61, 0.05);
  white-space: nowrap;

  svg {
    font-size: 1rem;
  }

  @media (max-width: 900px) {
    width: auto;
    font-size: 0.95rem;
  }
`;

const ResponsibilityList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2.5rem 0;
`;

const ResponsibilityItem = styled(motion.li)`
  position: relative;
  padding-left: 2rem;
  margin-bottom: 1.2rem;
  color: #cbd5e1;
  font-size: 1.1rem;
  line-height: 1.7;

  &::before {
    content: "▹";
    position: absolute;
    left: 0;
    top: -1px;
    color: var(--main-color);
    font-size: 1.5rem;
    font-weight: bold;
    filter: drop-shadow(0 0 2px var(--main-color));
  }

  /* Metric/Impact Highlights style */
  strong {
    color: #fff;
    font-weight: 600;
    position: relative;
    display: inline;
    padding: 0 2px;
    background: linear-gradient(120deg, rgba(124, 240, 61, 0.15) 0%, rgba(124, 240, 61, 0.05) 100%);
    border-radius: 4px;
    border-bottom: 1px solid rgba(124, 240, 61, 0.3);
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;

const TechStackGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 1.8rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
`;

const TechStackLabel = styled.span`
  font-size: 0.95rem;
  color: #94a3b8;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
`;

const BadgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

const TechBadge = styled.span`
  background: rgba(124, 240, 61, 0.04);
  border: 1px solid rgba(124, 240, 61, 0.15);
  color: #cbd5e1;
  padding: 0.4rem 1rem;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  display: inline-flex;
  align-items: center;

  &:hover {
    background: rgba(124, 240, 61, 0.12);
    border-color: var(--main-color);
    color: var(--main-color);
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(124, 240, 61, 0.2);
  }
`;

// Custom SVGs for Company Logos
const PropFTXLogo = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 21h18M3 7v1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7" />
    <path d="M19 21V10H5v11M12 14v4M9 18h6" />
  </svg>
);

const Web3TodayLogo = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

const experiencesData = [
  {
    company: "PropFTX",
    role: "Full Stack Engineer",
    duration: "Oct 2025 – Present",
    location: "Bangalore",
    logo: PropFTXLogo,
    techStack: ["Node.js", "React.js", "AWS Lambda", "JWT", "PostgreSQL", "REST APIs"],
    responsibilities: [
      "Built and deployed a **high-performance data aggregation system** using **Node.js** and **AWS Lambda** for **real-time portfolio analytics** and dashboard metrics.",
      "Developed a **secure multi-device access management system** using **JWT authentication** and session validation.",
      "Designed and implemented an **event scheduling framework** with conflict detection and seamless **frontend-backend synchronization** using **React** and **AWS Lambda**.",
      "Developed the complete **Resale Module from scratch** including database schema design, **RESTful APIs**, frontend interfaces, and **payment integration workflows**."
    ]
  },
  {
    company: "Web3Today",
    role: "Full Stack Web Developer",
    duration: "Jun 2025 – Oct 2025",
    location: "Hyderabad",
    logo: Web3TodayLogo,
    techStack: ["React.js", "Node.js", "Web3 APIs", "Telegram Mini Apps"],
    responsibilities: [
      "Built **scalable React.js applications** with **digital wallet API integrations**.",
      "Developed a **Telegram Mini App** featuring a **Slash game**, crypto wallet integration, dynamic UI, and **admin dashboard functionality**."
    ]
  }
];

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <ExperienceSection id="experience">
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            Professional <span>Experience</span>
          </h2>
          <p>
            Demonstrated engineering record building enterprise-grade data aggregation, real-time sync systems, Web3/Telegram micro-apps, and scalable full stack architectures.
          </p>
        </SectionHeader>

        <TimelineContainer>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {experiencesData.map((exp, index) => (
              <TimelineItem key={index} variants={itemVariants}>
                <TimelineIconWrapper
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <exp.logo />
                </TimelineIconWrapper>

                <TimelineCard>
                  <CardHeader>
                    <HeaderLeft>
                      <RoleTitle>
                        {exp.role} @ <span>{exp.company}</span>
                      </RoleTitle>
                      <CompanyDetails>
                        <CompanyName>
                          <FaBriefcase /> {exp.company}
                        </CompanyName>
                        <MetaBadge>
                          <FaMapMarkerAlt /> {exp.location}
                        </MetaBadge>
                      </CompanyDetails>
                    </HeaderLeft>

                    <DurationBadge>
                      <FaCalendarAlt />
                      {exp.duration}
                    </DurationBadge>
                  </CardHeader>

                  <ResponsibilityList>
                    {exp.responsibilities.map((resp, idx) => {
                      // Process marked bold phrases (**phrase**) to render <strong> elements
                      const parts = resp.split(/\*\*([^*]+)\*\*/g);
                      return (
                        <ResponsibilityItem
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * idx, duration: 0.4 }}
                        >
                          {parts.map((part, pIdx) =>
                            pIdx % 2 === 1 ? <strong key={pIdx}>{part}</strong> : part
                          )}
                        </ResponsibilityItem>
                      );
                    })}
                  </ResponsibilityList>

                  <TechStackGroup>
                    <TechStackLabel>Core Technologies</TechStackLabel>
                    <BadgeContainer>
                      {exp.techStack.map((tech, tIdx) => (
                        <TechBadge key={tIdx}>{tech}</TechBadge>
                      ))}
                    </BadgeContainer>
                  </TechStackGroup>
                </TimelineCard>
              </TimelineItem>
            ))}
          </motion.div>
        </TimelineContainer>
      </Container>
    </ExperienceSection>
  );
};

export default Experience;
