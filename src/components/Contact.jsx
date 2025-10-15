// import React, { useState } from 'react';
// import styled, { keyframes } from 'styled-components';
// import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaPaperPlane, FaCheckCircle, FaTimesCircle, FaTimes } from 'react-icons/fa';
// import emailjs from 'emailjs-com';

// const fadeIn = keyframes`
//   from { opacity: 0; transform: translateY(20px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// const slideIn = keyframes`
//   from { transform: translateX(100%); }
//   to { transform: translateX(0); }
// `;

// const Container = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 0rem 1.5rem;
//   background-color: transparent;
//   animation: ${fadeIn} 0.5s ease-out;

//   @media (max-width: 768px) {
//     padding: 1.5rem 1rem;
//   }
// `;

// const Heading = styled.h2`
//   font-size: 3rem;
//   font-weight: 800;
//   text-align: center;
//   color: #64ffda;
//   margin-bottom: 3rem;
//   position: relative;

//   &::after {
//     content: '';
//     position: absolute;
//     bottom: -12px;
//     left: 50%;
//     transform: translateX(-50%);
//     width: 120px;
//     height: 4px;
//     background: linear-gradient(90deg, transparent, #64ffda, transparent);
//   }

//   @media (max-width: 768px) {
//     font-size: 2rem;
//     margin-bottom: 2rem;
//   }
// `;

// const FormContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 2rem;
//   background-color: rgba(30, 41, 59, 0.5);
//   border: 1px solid rgba(100, 255, 218, 0.1);
//   border-radius: 1rem;
//   overflow: hidden;
//   backdrop-filter: blur(10px);

//   @media (min-width: 769px) {
//     flex-direction: row;
//     margin-right:20px;
//   }
// `;

// const Form = styled.form`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   gap: 1.5rem;
//   padding: 2rem;

//   @media (min-width: 769px) {
//     width: 60%;
//   }

//   @media (max-width: 768px) {
//     padding: 1rem;
//     gap: 1rem;
//   }
// `;

// const InputGroup = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
// `;

// const Label = styled.label`
//   font-size: 0.875rem;
//   font-weight: 500;
//   color: #64ffda;
//   margin-bottom: 0.5rem;
// `;

// const Input = styled.input`
//   padding: 0.875rem;
//   border-radius: 0.375rem;
//   background-color: rgba(45, 55, 72, 0.5);
//   color: #fff;
//   border: 1px solid rgba(100, 255, 218, 0.2);
//   outline: none;
//   transition: all 0.3s ease;
//   width: 100%;
//   font-size: 1rem;

//   &:focus {
//     border-color: #64ffda;
//     box-shadow: 0 0 0 2px rgba(100, 255, 218, 0.1);
//   }
// `;

// const TextArea = styled.textarea`
//   padding: 0.875rem;
//   border-radius: 0.375rem;
//   background-color: rgba(45, 55, 72, 0.5);
//   color: #fff;
//   border: 1px solid rgba(100, 255, 218, 0.2);
//   outline: none;
//   transition: all 0.3s ease;
//   resize: vertical;
//   min-height: 150px;
//   width: 100%;
//   font-size: 1rem;

//   &:focus {
//     border-color: #64ffda;
//     box-shadow: 0 0 0 2px rgba(100, 255, 218, 0.1);
//   }

//   @media (max-width: 768px) {
//     min-height: 120px;
//   }
// `;

// const Button = styled.button`
//   padding: 1rem;
//   border-radius: 0.375rem;
//   background-color: transparent;
//   color: #64ffda;
//   font-weight: bold;
//   border: 1px solid #64ffda;
//   transition: all 0.3s ease;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 0.5rem;
//   cursor: pointer;
//   width: 100%;
//   font-size: 1rem;

//   &:hover {
//     background-color: rgba(100, 255, 218, 0.1);
//     transform: translateY(-2px);
//   }

//   &:disabled {
//     opacity: 0.7;
//     cursor: not-allowed;
//     transform: none;
//   }
// `;

// const InfoSection = styled.div`
//   width: 100%;
//   padding: 2rem;
//   background-color: rgba(45, 55, 72, 0.3);
//   display: flex;
//   flex-direction: column;
//   justify-content: center;

//   @media (min-width: 769px) {
//     width: 40%;
//     border-left: 1px solid rgba(100, 255, 218, 0.1);
//   }

//   @media (max-width: 768px) {
//     padding: 1.5rem;
//     border-top: 1px solid rgba(100, 255, 218, 0.1);
//   }
// `;

// const InfoHeading = styled.h3`
//   font-size: 1.5rem;
//   font-weight: bold;
//   color: #64ffda;
//   margin-bottom: 1.5rem;

//   @media (max-width: 768px) {
//     font-size: 1.25rem;
//     margin-bottom: 1.25rem;
//   }
// `;

// const InfoList = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 1.5rem;

//   @media (max-width: 768px) {
//     gap: 1.25rem;
//   }
// `;

// const InfoItem = styled.p`
//   display: flex;
//   align-items: center;
//   font-size: 1rem;
//   color: #d1d5db;
//   transition: transform 0.3s ease;

//   &:hover {
//     transform: translateX(10px);
//   }

//   svg {
//     margin-right: 1rem;
//     font-size: 1.25rem;
//     color: #64ffda;
//     flex-shrink: 0;
//   }

//   a {
//     color: inherit;
//     text-decoration: none;
//     transition: color 0.3s ease;
//     word-break: break-word;

//     &:hover {
//       color: #64ffda;
//     }
//   }

//   @media (max-width: 768px) {
//     font-size: 0.9375rem;
    
//     svg {
//       font-size: 1.125rem;
//       margin-right: 0.75rem;
//     }
//   }
// `;

// const Notification = styled.div`
//   position: fixed;
//   z-index: 1000;
//   display: flex;
//   align-items: center;
//   gap: 0.75rem;
//   animation: ${slideIn} 0.3s ease-out;
//   backdrop-filter: blur(10px);
//   background-color: ${props => props.isError ? 'rgba(239, 68, 68, 0.9)' : 'rgba(16, 185, 129, 0.9)'};
//   color: white;
//   padding: 1rem 1.5rem;
//   border-radius: 0.5rem;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

//   @media (min-width: 769px) {
//     top: 2rem;
//     right: 2rem;
//     max-width: 400px;
//   }

//   @media (max-width: 768px) {
//     bottom: 1rem;
//     left: 1rem;
//     right: 1rem;
//     padding: 1rem;
//     font-size: 0.9375rem;
//   }

//   svg {
//     font-size: 1.25rem;
//     flex-shrink: 0;

//     @media (max-width: 768px) {
//       font-size: 1.125rem;
//     }
//   }
// `;

// const CloseButton = styled.button`
//   background: none;
//   border: none;
//   color: white;
//   cursor: pointer;
//   padding: 0.25rem;
//   margin-left: auto;
//   opacity: 0.8;
//   transition: opacity 0.3s ease;
//   flex-shrink: 0;

//   &:hover {
//     opacity: 1;
//   }

//   @media (max-width: 768px) {
//     padding: 0.5rem;
//   }
// `;

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });
//   const [status, setStatus] = useState('');
//   const [isError, setIsError] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       await emailjs.send(
//         process.env.REACT_APP_EMAILJS_SERVICE_ID,
//         process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
//         formData,
//         process.env.REACT_APP_EMAILJS_PUBLIC_KEY
//       );
//       setStatus('Message sent successfully!');
//       setIsError(false);
//       setFormData({ name: '', email: '', message: '' });
//     } catch (error) {
//       setStatus('Failed to send message. Please try again.');
//       setIsError(true);
//     } finally {
//       setIsSubmitting(false);
//       setTimeout(() => setStatus(''), 5000);
//     }
//   };

//   return (
//     <Container>
//       <Heading>Contact Me</Heading>
//       <FormContainer>
//         <Form onSubmit={handleSubmit}>
//           <InputGroup>
//             <Label htmlFor="name">Name</Label>
//             <Input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               placeholder="Your Name"
//             />
//           </InputGroup>
//           <InputGroup>
//             <Label htmlFor="email">Email</Label>
//             <Input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               placeholder="your.email@example.com"
//             />
//           </InputGroup>
//           <InputGroup>
//             <Label htmlFor="message">Message</Label>
//             <TextArea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               required
//               placeholder="Your message here..."
//             />
//           </InputGroup>
//           <Button type="submit" disabled={isSubmitting}>
//             <FaPaperPlane /> {isSubmitting ? 'Sending...' : 'Send Message'}
//           </Button>
//         </Form>
//         <InfoSection>
//           <InfoHeading>Get in Touch</InfoHeading>
//           <InfoList>
//             <InfoItem>
//               <FaEnvelope />
//               <a href="mailto:shivasiddu80@gmail.com">shivasiddu80@gmail.com</a>
//             </InfoItem>
//             <InfoItem>
//               <FaPhone />
//               <a href="tel:+919398462802">+91 9398462802</a>
//             </InfoItem>
//             <InfoItem>
//               <FaLinkedin />
//               <a href="https://www.linkedin.com/in/boyashiva" target="_blank" rel="noopener noreferrer">
//                 LinkedIn Profile
//               </a>
//             </InfoItem>
//             <InfoItem>
//               <FaGithub />
//               <a href="https://github.com/ShivaBoya" target="_blank" rel="noopener noreferrer">
//                 GitHub Profile
//               </a>
//             </InfoItem>
//           </InfoList>
//         </InfoSection>
//       </FormContainer>
//       {status && (
//         <Notification isError={isError}>
//           {isError ? <FaTimesCircle /> : <FaCheckCircle />}
//           {status}
//           <CloseButton onClick={() => setStatus('')}>
//             <FaTimes />
//           </CloseButton>
//         </Notification>
//       )}
//     </Container>
//   );
// }



import React, { useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

// Background shimmer animation
const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

const Section = styled.section`
  padding: 4rem 1rem;
  background: transparent;
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -10px;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 50% 50%,
      rgba(100, 255, 218, 0.03) 0%,
      transparent 80%
    );
    pointer-events: none;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  position: relative;
  z-index: 1;

  @media (min-width: 768px) {
    grid-template-columns: 1.2fr 0.8fr;
  }
`;

const Box = styled.div`
  background-color: #1f2937;
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid #374151;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  transition: 0.3s ease;

  &:hover {
    border-color: #14b8a6;
    box-shadow: 0 0 15px rgba(20, 184, 166, 0.3);
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #14b8a6;
  margin-bottom: 2rem;
`;

const Detail = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;

  svg {
    font-size: 1.5rem;
    color: #14b8a6;
  }

  a,
  p {
    font-size: 1rem;
    color: #e5e7eb;
    text-decoration: none;
    transition: 0.3s ease;

    &:hover {
      color: #14b8a6;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const Heading = styled.h2`
  font-size: 1.75rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1.5rem;

  span {
    color: #14b8a6;
  }
`;

const Input = styled.input`
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #374151;
  border: 1px solid #4b5563;
  color: white;
  outline: none;
  font-size: 1rem;
  transition: 0.3s ease;

  &:focus {
    border-color: #14b8a6;
    box-shadow: 0 0 0 2px rgba(20, 184, 166, 0.3);
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #374151;
  border: 1px solid #4b5563;
  color: white;
  outline: none;
  min-height: 150px;
  resize: vertical;
  font-size: 1rem;
  transition: 0.3s ease;

  &:focus {
    border-color: #14b8a6;
    box-shadow: 0 0 0 2px rgba(20, 184, 166, 0.3);
  }
`;

const Button = styled.button`
  padding: 0.85rem 1.5rem;
  border-radius: 0.5rem;
  background-color: #14b8a6;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  font-size: 1rem;

  &:hover {
    background-color: #2dd4bf;
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(20, 184, 166, 0.3);
  }

  svg {
    font-size: 1.2rem;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

const Contact = () => {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      await emailjs.sendForm(
        "service_w5dpy34",   // Your EmailJS Service ID
        "template_nhtph3j",  // Your Template ID
        formRef.current,
        "MX9SA7rk-Puvdk0mS" // Your Public Key
      );

      toast.success("✅ Message sent successfully!");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("❌ Failed to send message. Check your EmailJS setup.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Section id="contact">
      <Container>
        {/* Left — Contact Form */}
        <Box>
          <Form ref={formRef} onSubmit={sendEmail}>
            <Heading>
              Contact <span>Me</span>
            </Heading>

            <Input type="text" name="user_name" placeholder="Your Name" required />
            <Input type="email" name="user_email" placeholder="Your Email" required />
            <TextArea name="message" placeholder="Your Message" required />

            <Button type="submit" disabled={isSending}>
              <FaPaperPlane />
              {isSending ? "Sending..." : "Send Message"}
            </Button>
          </Form>
        </Box>

        {/* Right — Contact Info */}
        <Box>
          <Title>Get in Touch</Title>

          <Detail>
            <FaEnvelope />
            <a href="mailto:shivasiddu80@gmail.com">shivasiddu80@gmail.com</a>
          </Detail>

          <Detail>
            <FaLinkedin />
            <a
              href="https://www.linkedin.com/in/boyashiva"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </Detail>

          <Detail>
            <FaGithub />
            <a
              href="https://github.com/ShivaBoya"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Profile
            </a>
          </Detail>
        </Box>
      </Container>

      <ToastContainer position="bottom-right" autoClose={3000} theme="dark" />
    </Section>
  );
};

export default Contact;
