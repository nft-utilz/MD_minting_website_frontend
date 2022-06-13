import styled from "styled-components";
import { motion } from "framer-motion";

export const Overlay = styled(motion.div)<{ isOpen: boolean }>`
  top: 0;
  left: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  font-family: ${(props) => props.theme.fonts.Montserrat};
`;

export const Window = styled.div<{ w?: string; h?: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: ${({ w }) => w};
  min-height: ${({ h }) => h};
  background-color: #fff;
  border-radius: 1rem;
  padding: 1rem;
  > div {
    width: 100%;
  }
`;

export const Body = styled.div`
  font-size: ${(props) => props.theme.fontSizes.fontsm};
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
`;
