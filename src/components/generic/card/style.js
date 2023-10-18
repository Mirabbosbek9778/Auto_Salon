import styled from "styled-components";

const Wrapper = styled.div`
  width: 354px;
  height: 335px;
  border-radius: 10px;
  background: var(--primary-light-grey, #f3f6f8);
`;

const Line = styled.div`
  width: 306px;
  height: 1px;
  background: #e4e4e4;
  margin: 18px 0 0 24px;
`;
const TextCard = styled.div`
  font-family: DM Sans, sans-serif;
  font-size: 20px;
  font-style: normal;
  color: ${({ gray }) =>
    gray
      ? "var(--text-grey, rgba(41, 49, 72, 0.60))"
      : "var(--text-black, #293148)"};
  font-weight: ${({ gray }) => (gray ? "500" : "700")};
  line-height: ${({ gray }) => (gray ? "20px" : "22px")};
  font-size: ${({ gray }) => (gray ? "15px" : "20px")};
  width: ${({ title }) => (title ? "291px" : "")};
`;

const Category = styled.div`
  height: 30px;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 8px;
  border-radius: 6px;
  width: ${({ blur }) => (blur ? "56px" : "93px")};
  background: ${({ blur }) =>
    blur ? "background: var(--primary-light-grey, #F3F6F8);" : "#e4f5dd"};
`;

Category.Text = styled.div`
  color: var(--secondary-green, #7fc75e);
  text-align: center;
  font-family: DM Sans, sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
`;

export { Wrapper, Line, TextCard, Category };
