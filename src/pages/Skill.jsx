import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaGitAlt, FaDocker, FaAws, FaLightbulb, FaUsers, FaComments, FaCrown, FaClock, FaSyncAlt, FaTasks, FaBrain } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiRedux, SiFirebase, SiNextdotjs, SiTypescript, SiPostgresql, SiGraphql, SiJupyter, SiDigitalocean, SiNginx, SiMysql } from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";

const WinSCPIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
    <line x1="6" y1="6" x2="6.01" y2="6" />
    <line x1="6" y1="18" x2="6.01" y2="18" />
    <path d="M17 10v4" />
    <path d="M20 12h-6" />
    <polyline points="15 10 17 10 17 12" />
  </svg>
);

const Section = styled.section`
  min-height: auto;
  padding: 10rem 9% 2rem;
`;

const Header = styled(motion.div)`
  text-align: center;
  margin-bottom: 5rem;

  h2 {
    font-size: 3rem;
    font-weight: 800;
    color: var(--main-color);
    margin-bottom: 1rem;
    position: relative;
    display: inline-block;
   
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
    color: var(--text-secondary);
    font-size: 1.1rem;
    color: #e5e7eb;
    margin-top: 2rem;
  }
`;

const CategoryContainer = styled(motion.div)`
  width: 100%;
  max-width: 1400px;
  margin-bottom: 4rem;
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--main-color);
  margin-bottom: 2rem;
  padding-left: 1rem;
  border-left: 4px solid var(--main-color);
  display: inline-block;
`;

const SkillsGrid = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: flex-start;

  @media (max-width: 768px) {
    justify-content: center; /* Center skills on mobile */
    gap: 1rem;
  }
`;

const SkillCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(124, 240, 61, 0.2);
  padding: 1.5rem 2.5rem;
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  span {
    font-weight: 600;
    color: white;
    font-size: 1.2rem;
  }

  svg {
    font-size: 2.5rem;
    color: ${props => props.color};
    transition: transform 0.3s ease;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center, ${props => props.color}15, transparent 70%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    border-color: ${props => props.color}80;
    transform: translateY(-5px);
    box-shadow: 0 5px 20px ${props => props.color}20;

    &::before {
      opacity: 1;
    }

    svg {
      transform: scale(1.1);
      filter: drop-shadow(0 0 10px ${props => props.color});
    }
  }
`;

const skillCategories = {
  "Frontend Development": [
    { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
    { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38B2AC' },
    { name: 'Redux', icon: SiRedux, color: '#764ABC' },
  ],
  "Backend & Database": [
    { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
    { name: 'Express', icon: SiExpress, color: '#ffffff' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
  ],
  "Tools & DevOps": [
    { name: 'Git', icon: FaGitAlt, color: '#F05032' },
    { name: 'AWS', icon: FaAws, color: '#FF9900' },
    { name: 'DigitalOcean', icon: SiDigitalocean, color: '#0080FF' },
    { name: 'Nginx', icon: SiNginx, color: '#009639' },
    { name: 'WinSCP', icon: WinSCPIcon, color: '#EC1C24' },
    { name: 'VS Code', icon: VscVscode, color: '#007ACC' },
    { name: 'Jupyter', icon: SiJupyter, color: '#F37626' },
  ],
  "Soft Skills": [
    { name: 'Problem Solving', icon: FaLightbulb, color: '#FFD700' },
    { name: 'Team Collaboration', icon: FaUsers, color: '#00E5FF' },
    { name: 'Communication', icon: FaComments, color: '#FF5252' },
    { name: 'Leadership', icon: FaCrown, color: '#FF9100' },
    { name: 'Time Management', icon: FaClock, color: '#00E676' },
    { name: 'Adaptability', icon: FaSyncAlt, color: '#2979FF' },
    { name: 'Agile/Scrum', icon: FaTasks, color: '#E040FB' },
    { name: 'Critical Thinking', icon: FaBrain, color: '#B2FF59' },
  ]
};

// Animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  }
};

const Skill = () => {
  return (
    <Section id="skills">
      <Header
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Technical Skills</h2>
        <p>A comprehensive toolkit for building scalable digital solutions.</p>
      </Header>

      {Object.entries(skillCategories).map(([category, skills]) => (
        <CategoryContainer
          key={category}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <CategoryTitle>{category}</CategoryTitle>
          <SkillsGrid>
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                color={skill.color}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {React.createElement(skill.icon)}
                <span>{skill.name}</span>
              </SkillCard>
            ))}
          </SkillsGrid>
        </CategoryContainer>
      ))}
    </Section>
  );
};

export default Skill;
