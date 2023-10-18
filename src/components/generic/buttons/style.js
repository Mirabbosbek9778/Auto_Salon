import styled from "styled-components";

const ButWrap = styled.button`
  color: var(--text-white, #fff);

  font-family: DM Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 1px;
  text-transform: uppercase;
  height: 42px;
  padding: 9px 9px 9px 9px;
  width: ${({ red }) => (red ? "42px" : "180px")};
  color: ${({ red }) => (red ? "red" : "var(--text-white, #fff)")};
  border: ${({ red }) => (red ? "1px solid #E86E84" : "none")};
`;

export { ButWrap };
