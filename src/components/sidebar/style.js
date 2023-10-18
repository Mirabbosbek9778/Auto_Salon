import styled from "styled-components";

const Wrapper = styled.div`
  width: 256px;
  background: var(--primary-dark, #282828);
  height: 1024px;
  border-radius: 20px 0 0 10px;
`;
const TextLogo = styled.div`
  color: #fff;
  font-family: DM Sans, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  cursor: pointer;
  line-height: 24px;
  padding-top: 30px;
`;

const Text = styled.p`
  color: var(--text-white-45, rgba(255, 255, 255, 0.45));
  font-family: DM Sans, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  justify-content: start;
  gap: 20px;
  padding-left: 30px;
  cursor: pointer;
  &.active-nav {
    background: var(--text-white-20, rgba(255, 255, 255, 0.2));
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 120.55px;
`;

export { Wrapper, TextLogo, Text, Box, Container };
