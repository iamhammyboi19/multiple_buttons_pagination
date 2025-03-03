import styled, { css } from "styled-components";

const IconText = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  gap: ${(props) => (props.$gap ? props.$gap : "0.8rem")};
  border: 1px solid var(--oc-gray-3);
  width: ${(props) => props.$width || "max-content"};
  padding: ${(props) => (props.$pd ? props.$pd : "1rem 2rem")};
  border-radius: var(--border-radius-xlg);
  cursor: pointer;
  background-color: var(--oc-white);
  transition: all ease-in-out 0.3s;
  ${(props) =>
    props.$mg &&
    css`
      margin: 0 auto;
    `}

  ${(props) =>
    props.$pos &&
    css`
      position: ${props.$pos};
    `}

  &:hover {
    background-color: var(--oc-blue-0);
  }
`;

export default IconText;
