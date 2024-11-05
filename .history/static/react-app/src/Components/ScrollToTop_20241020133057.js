import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaArrowUp } from 'react-icons/fa';

const ScrollButton = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: darkred;
  color: white;
  border-radius: 50% 50% 50% 50%;
  padding: 5px;
  cursor: pointer;
  font-size: 1.5rem;
  z-index: 1000;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
`;

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <ScrollButton onClick={scrollToTop} isVisible={isVisible}>
      <FaArrowUp />
    </ScrollButton>
  );
};

export default ScrollToTop;
