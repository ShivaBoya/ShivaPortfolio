import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { FaCertificate } from "react-icons/fa";
const projectCategories = {
  fullStack: [
    {
      name: "Hospital Food Delivery Management System",
      deployedLink:
        "https://hospital-food-management-nrajus-projects.vercel.app/",
      githubLink: "https://github.com/ShivaBoya/HospitalFood",
      image:
        "https://img.freepik.com/premium-photo/nurse-medical-coat-is-holding-tray-with-breakfast_179755-5329.jpg?",
      description:
        "A full-stack application for managing hospital meal deliveries, patient diets, and real-time order tracking.Role-based dashboards for hospital managers, pantry staff, and delivery personnel.Real-time meal tracking with WebSocket integration",
      features: [
        "Role-based dashboards for hospital managers, pantry staff, and delivery personnel",
        "Real-time meal tracking with WebSocket integration",
        "Secure authentication with JWT",
        "Admin panel for meal and order management",
      ],
      technologies: [
        "React JS",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "WebSocket",
      ],
    },

    {
      name: "Nxt Trendz (E-Commerce Clone)",
      deployedLink: "https://nxttrendzrts.ccbp.tech/",
      githubLink: "https://github.com/ShivaBoya/Nxt_TrendeZ_Website",
      image:
        "https://th.bing.com/th/id/R.82ba779360b50f5c461e8592fb7473d1?rik=RcI3k0vhEbR%2fpg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fe-commerce-png-sell-your-products-and-services-online-1000.png&ehk=LZ2GD%2fGQ98UUOsXo6cKf4wz84A1wac5zM6LprYBb79A%3d&risl=&pid=ImgRaw&r=0",
      description:
        "A secure, modern e-commerce platform inspired by Amazon and Flipkart, built with React JS.JWT authentication for secure user sessions.REST API integration for dynamic product data",
      features: [
        "JWT authentication for secure user sessions",
        "REST API integration for dynamic product data",
        "Responsive design for seamless mobile and desktop experience",
        "Product search, filtering, and sorting functionalities",
      ],
      technologies: ["React JS", "Node.js", "Express", "MongoDB", "JWT"],
      credentials: { username: "raja", password: "raja@2021" },
    },
    {
      name: "ResumeBuilder Application",
      deployedLink: "https://resume-builder-krvx.vercel.app/",
      githubLink: "https://github.com/ShivaBoya/ResumeBuilder",
      image:
        "https://img.freepik.com/premium-vector/job-profile-logo-resume-logo-template_658057-20.jpg", // Professional recruitment image
      description:
        "A comprehensive web application for users to create, manage, and share resumes efficiently.Create, update, and download resumes as PDF.Send resumes via email to recruiters",
      features: [
        "Create, update, and download resumes as PDF",
        "Send resumes via email to recruiters",
        "Mobile-responsive resume editor",
        "Integrate payment using Razorpay for premium features",
        "Secure storage of user resumes and data",
      ],
      technologies: [
        "React JS",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "Razorpay",
        "Toast notifications",
        "Tailwind CSS",
      ],
    },
  ],
  frontend: [
    {
      name: "MemesHub",
      deployedLink: "https://memeshub-project.netlify.app/",
      githubLink: "https://github.com/ShivaBoya/MemesHub",
      image:
        "https://wallpapers.com/images/hd/hacker-with-fawkes-mask-3d-vj9n88v8vk2l1gcx.jpg",
      description:
        "A feature-rich web application where users can create, browse, and share memes seamlessly, with interactive features for likes, comments, and trending content.Create, upload, and share memes with friends.Like, comment, and engage with trending memes.Mobile-responsive meme editor",
      features: [
        "Create, upload, and share memes with friends",
        "Like, comment, and engage with trending memes",
        "Mobile-responsive meme editor",
        "Integrate payment using Razorpay for premium meme packs",
        "Secure storage of user memes and profile data",
      ],
      technologies: ["HTML", "CSS", "JavaScript"],
      certificate: {
        link: "https://res.cloudinary.com/dumhixyxy/image/upload/Hack_fi28k6",
        label: "Certificate",
        icon: <FaCertificate />,
      },
    },
    {
      name: "Meals Explorer Website",
      deployedLink: "https://meals-explorer-web.vercel.app/",
      githubLink: "https://github.com/ShivaBoya/MealsExplorer",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/62/South_Indian_non-veg_Meals.jpg", // Professional recruitment image
      description:
        "A comprehensive web application for users to discover, search, and explore meals with real-time suggestions, category filters, sorting, and paginated browsing.Search and explore meals by name or ingredient.Filter meals by categories and cuisine types.View detailed meal information with images and instructions.Save favorite meals for quick access",
      features: [
        "Search and explore meals by name or ingredient",
        "Filter meals by categories and cuisine types",
        "Sort meals by popularity, rating, or preparation time",
        "View detailed meal information with images and instructions",
        "Save favorite meals for quick access",
      ],
      technologies: ["HTML", "Css", "JavaScript"],
    },
    {
      name: "Movie Explorer Website",
      deployedLink: "https://movie-explorer-two-beta.vercel.app/",
      githubLink: "https://github.com/ShivaBoya/RevisionUnit/tree/main/sprint1/Contest/MovieExplorer",
      image:
        "https://i.ytimg.com/vi/n5Qh7vSReiM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDumlQPZ6cai1t1s4mhCZX8qWd5_g", // Professional recruitment image
      description:
        "A comprehensive web application for users to discover, search, and explore movies with real-time suggestions, year and language filters, sorting, and paginated browsing.",
      features: [
        
      ],
      technologies: ["React","HTML", "Tailwind CSS", "JavaScript"],
    },
  ],
  backend: [],
};

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.section`
  padding: 1rem 2rem;
  background: transparent;
  min-height: 100vh;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  text-align: center;
  color: #64ffda;
  margin-bottom: 4rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 4px;
    background: linear-gradient(90deg, transparent, #64ffda, transparent);
  }
`;

const ProjectNavigation = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const NavButton = styled.button`
  background: ${(props) =>
    props.$active ? "rgba(100, 255, 218, 0.1)" : "transparent"};
  color: #64ffda;
  border: 1px solid rgba(100, 255, 218, 0.3);
  padding: 0.5rem 1rem;
  border-radius: 99px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(100, 255, 218, 0.2);
  }
`;
const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.article`
  position: relative;
  background: rgba(17, 34, 64, 0.8);
  border-radius: 0.8rem;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(100, 255, 218, 0.1);
  transition: all 0.4s ease-in-out;
  animation: ${fadeIn} 0.6s ease-out forwards;
  animation-delay: ${(props) => props.$index * 0.2}s;
  opacity: 0;
  height: 420px; // Reduced height
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(100, 255, 218, 0.3);
    box-shadow: 0 8px 25px -12px rgba(100, 255, 218, 0.2);
  }
`;

const ProjectImage = styled.div`
  position: relative;
  width: 100%;
  height: 150px; // Reduced height
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  ${ProjectCard}:hover & img {
    transform: scale(1.1);
  }
`;

const ProjectContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ProjectTitle = styled.h3`
  font-size: 1.2rem;
  color: #e6f1ff;
  margin-bottom: 0.75rem;
  font-weight: 600;
`;

const ProjectDescription = styled.p`
  color: #8892b0;
  font-size: 0.8rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  flex-grow: 1;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1rem;
`;

const TechTag = styled.span`
  background: rgba(100, 255, 218, 0.1);
  color: #64ffda;
  padding: 0.25rem 0.5rem;
  border-radius: 99px;
  font-size: 0.6rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: auto;
  padding-top: 0.5rem;
`;

const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.8rem;
  border-radius: 99px;
  font-size: 0.7rem;
  text-decoration: none;
  transition: all 0.3s ease;
  background: ${(props) =>
    props.$primary ? "rgba(100, 255, 218, 0.1)" : "transparent"};
  color: #64ffda;
  border: 1px solid rgba(100, 255, 218, 0.3);

  svg {
    font-size: 0.7rem;
  }
`;

const Credentials = styled.div`
  margin-top: 0.5rem;
  padding: 0.5rem;
  background: rgba(100, 255, 218, 0.05);
  border-radius: 0.4rem;
  font-size: 0.7rem;

  p {
    color: #8892b0;
    margin: 0;

    span {
      color: #64ffda;
      font-weight: 500;
    }
  }
`;
const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("fullStack");

  const renderProjects = (category) => {
    const categoryProjects = projectCategories[category] || [];

    return (
      <ProjectsGrid>
        {categoryProjects.map((project, index) => (
          <ProjectCard key={index} $index={index}>
            <ProjectImage>
              <img src={project.image} alt={project.name} />
            </ProjectImage>
            <ProjectContent>
              <ProjectTitle>{project.name}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechStack>
                {project.technologies.map((tech, i) => (
                  <TechTag key={i}>{tech}</TechTag>
                ))}
              </TechStack>

              {project.credentials && (
                <Credentials>
                  <p>
                    Demo Credentials: <br />
                    <span>Username:</span> {project.credentials.username} <br />
                    <span>Password:</span> {project.credentials.password}
                  </p>
                </Credentials>
              )}

              <ProjectLinks>
                <LinkButton
                  href={project.deployedLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  $primary
                >
                  <FaExternalLinkAlt /> Live Demo
                </LinkButton>
                <LinkButton
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> Code
                </LinkButton>
                {project.certificate && (
                  <LinkButton
                    href={project.certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.certificate.icon} {project.certificate.label}
                  </LinkButton>
                )}
              </ProjectLinks>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    );
  };

  return (
    <Container>
      <SectionTitle>Featured Projects</SectionTitle>
      <ProjectNavigation>
        <NavButton
          $active={activeCategory === "fullStack"}
          onClick={() => setActiveCategory("fullStack")}
        >
          Full Stack
        </NavButton>
        <NavButton
          $active={activeCategory === "frontend"}
          onClick={() => setActiveCategory("frontend")}
        >
          Frontend
        </NavButton>
        <NavButton
          $active={activeCategory === "backend"}
          onClick={() => setActiveCategory("backend")}
        >
          Backend
        </NavButton>
      </ProjectNavigation>
      {renderProjects(activeCategory)}
    </Container>
  );
};

export default Projects;
