/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";

const StyledTitle = styled.h1`
  ${(props) =>
    props.as === "h5" &&
    css`
      font-size: 1.4rem;
      letter-spacing: 1.1px;
      margin-top: 0.5rem;
      margin-bottom: 1rem;
    `}

  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: ${(props) => props.$fs || "4rem"};
      text-align: ${(props) => props.$ta || "left"};
      color: ${(props) => props.$color || "var(--oc-gray-9)"};
      margin-bottom: ${(props) => props.$mb || "25px"};
      line-height: 1.1;
    `}

  ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 2rem;
      letter-spacing: 0.4px;
      margin-top: 0.5rem;
      color: ${(props) => props.$color || "var(--oc-gray-9)"};
    `}

    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: ${(props) => props.$fs || "2rem"};
      text-align: ${(props) => props.$ta || "left"};
      letter-spacing: 0.3px;
      margin-bottom: ${(props) => props.$mb || "0.5rem"};
      margin-top: ${(props) => props.$mt || "0.5rem"};
      color: ${(props) => props.$color || "var(--oc-gray-8)"};
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: ${(props) => props.$fs || "3rem"};
      letter-spacing: 0.4px;
      font-weight: 600;
      color: ${(props) => props.$color || "var(--oc-gray-9)"};
      margin-bottom: ${(props) => props.$mb || "1rem"};
      line-height: 1.1;

      @media (max-width: 53.125em) {
        font-size: ${(props) => props.$fs || "2rem"};
      }
    `}

  ${(props) =>
    props.as === "h6" &&
    css`
      font-size: 2rem;
      letter-spacing: 0.4px;
      margin-top: ${(props) => props.$mt || "0.5rem"};
      margin-bottom: ${(props) => props.$mb || "1rem"};
      font-weight: 400;
      color: ${(props) => props.$color || "var(--oc-gray-9)"};
    `}
`;

function Title({ children, as, color, ta, mb, mt, fs }) {
  return (
    <StyledTitle $color={color} as={as} $ta={ta} $mb={mb} $mt={mt} $fs={fs}>
      {children}
    </StyledTitle>
  );
}

export default Title;
