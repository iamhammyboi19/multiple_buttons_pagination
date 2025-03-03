/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";

const StyledDesText = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.7;

  ${(props) =>
    props.$al === "center" &&
    css`
      text-align: center;
      font-size: 10px;
      color: var(--oc-gray-6);
    `}

  ${(props) =>
    props.$bdb === "yes" &&
    css`
      border-bottom: 1px solid var(--oc-gray-5);
      padding: 10px;
      display: flex;
      justify-content: space-between;
    `}

  ${(props) =>
    props.$desc === "true" &&
    css`
      font-size: ${(props) => props.$fontSize || "1.3rem"};
      color: ${(props) => props.$color || "var(--oc-gray-8)"};
      font-weight: 400;
      letter-spacing: 0.5px;
      line-height: 21px;
      text-align: ${(props) => props.$ta || "left"};
      margin-top: ${(props) => props.$mt || ""};
      margin-bottom: ${(props) => props.$mb || ""};
      margin-left: ${(props) => props.$ml || ""};
      text-decoration: ${(props) => props.$ud || "none"};

      ${(props) =>
        props.$cursor &&
        css`
          cursor: pointer;
        `}

      @media (max-width: 31.25em) {
        font-size: ${(props) => props.$fontSize || "11px"};
        letter-spacing: 0.2px;
      }
    `}

    ${(props) =>
    props.$desc === "comment" &&
    css`
      font-size: 11px;
      color: ${(props) => props.$color || "var(--oc-gray-8)"};
      font-weight: 400;
      letter-spacing: 0.5px;
      line-height: 21px;
      text-align: ${(props) => props.$ta || "left"};
      margin-top: ${(props) => props.$mt || ""};
      margin-bottom: ${(props) => props.$mb || ""};

      @media (max-width: 31.25em) {
        font-size: 11px;
        letter-spacing: 0.2px;
      }
    `}

    ${(props) =>
    props.$desc === "true2" &&
    css`
      font-size: 1.8rem;
      color: ${(props) => props.$color || "var(--oc-gray-8)"};
      font-weight: 400;
      letter-spacing: 0.5px;

      @media (max-width: 31.25em) {
        font-size: 1.5rem;
        letter-spacing: 0.2px;
      }
    `}

    ${(props) =>
    props.$bg &&
    css`
      background-color: ${(props) => props.$bg};
    `}

    ${(props) =>
    props.$cursor &&
    css`
      cursor: pointer;
    `}


  ${(props) =>
    props.$desc === "bold" &&
    css`
      font-size: 15px;
      color: var(--oc-gray-9);
      font-weight: 600;
      letter-spacing: 0.5px;
      text-transform: capitalize;
      margin-top: ${(props) => props.$mt || ""};
      margin-bottom: ${(props) => props.$mb || ""};
      padding: ${(props) => props.$pd || ""};
      text-align: ${(props) => props.$ta || ""};

      @media (max-width: 31.25em) {
        letter-spacing: 0.2px;
      }
    `}

    ${(props) =>
    props.$desc === "bold-sm-lg-text" &&
    css`
      font-size: 2.5rem;
      color: var(--oc-gray-9);
      font-weight: 500;
      letter-spacing: 0.5px;
      text-transform: capitalize;

      @media (max-width: 31.25em) {
        font-size: 1rem;
        letter-spacing: 0.2px;
      }
    `}

    ${(props) =>
    props.$desc === "bold-xl" &&
    css`
      font-size: 2.3rem;
      color: var(--oc-gray-9);
      font-weight: 700;
      letter-spacing: 0.3px;
      line-height: 1.8;
      margin-top: ${(props) => props.$mt || ""};
      margin-bottom: ${(props) => props.$mb || ""};
    `}

    ${(props) =>
    props.$desc === "fade-bold-wm" &&
    css`
      font-size: 13px;
      color: ${(props) => props.$color || "var(--oc-gray-7)"};
      font-weight: 400;
      letter-spacing: 0.6px;
      line-height: 1.8;
      text-align: ${(props) => props.$ta || "left"};
      margin-bottom: ${(props) => props.$mb || ""};
      margin-top: ${(props) => props.$mt || ""};
      width: ${(props) => props.$width || "100%"};
    `}

    ${(props) =>
    props.$desc === "fade-bold" &&
    css`
      font-size: 1.8rem;
      color: ${(props) => props.$color || "var(--oc-gray-7)"};
      font-weight: 500;
      letter-spacing: 0.6px;
      line-height: 1.8;
      text-align: ${(props) => props.$ta || "left"};
      margin-bottom: ${(props) => props.$mb || ""};
      margin-top: ${(props) => props.$mt || ""};
      width: ${(props) => props.$width || "100%"};

      ${(props) =>
        props.$nowrap === "yes" &&
        css`
          display: inline;
          /* overflow: hidden; */
          /* text-overflow: ellipsis; */
        `}

      @media (max-width: 53.125em) {
        font-size: 1.5rem;
        letter-spacing: 0.4px;
        line-height: 2;
      }
    `}

    ${(props) =>
    props.$desc === "fade-bold-xl" &&
    css`
      font-size: 2.2rem;
      color: ${(props) => props.$color || "var(--oc-gray-7)"};
      font-weight: 500;
      letter-spacing: 0.6px;
      line-height: 1.8;
      text-align: ${(props) => props.$ta || "left"};
      margin-bottom: ${(props) => props.$mb || ""};
      margin-top: ${(props) => props.$mt || ""};
      width: ${(props) => props.$width || "100%"};

      ${(props) =>
        props.$nowrap === "yes" &&
        css`
          display: inline;
          /* overflow: hidden; */
          /* text-overflow: ellipsis; */
        `}

      @media (max-width: 53.125em) {
        font-size: 1.5rem;
        letter-spacing: 0.4px;
        line-height: 2;
      }
    `}

    ${(props) =>
    props.$desc === "semi-bold" &&
    css`
      font-size: 1.3rem;
      color: var(--oc-gray-9);
      font-weight: 500;
      letter-spacing: 0.1px;
      margin-top: ${(props) => props.$mt || ""};
      margin-bottom: ${(props) => props.$mb || ""};
    `}

    ${(props) =>
    props.$desc === "tiny-bold" &&
    css`
      font-size: 1.2rem;
      color: var(--oc-gray-8);
      font-weight: 500;
      letter-spacing: 0.3px;
      margin-top: ${(props) => props.$mt || ""};
      margin-bottom: ${(props) => props.$mb || ""};
    `}

    ${(props) =>
    props.$desc === "tiny" &&
    css`
      font-size: 1.2rem;
      color: var(--oc-gray-8);
      font-weight: 300;
      text-align: ${(props) => props.$ta || "left"};
      /* overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis; */
      letter-spacing: 0.3px;
      margin-top: ${(props) => props.$mt || ""};
      margin-bottom: ${(props) => props.$mb || ""};
    `}


    ${(props) =>
    props.$desc === "semi-tiny" &&
    css`
      font-size: 10px;
      color: var(--oc-gray-6);
      font-weight: 500;

      /* @media (max-width: 34.25em) {
        font-size: 1rem;
      } */
    `}
    ${(props) =>
    props.$desc === "semi-tiny-s" &&
    css`
      font-size: 10px;
      color: var(--oc-green-9);
      font-weight: 500;

      /* @media (max-width: 34.25em) {
        font-size: 1rem;
      } */
    `}


    ${(props) =>
    props.$desc === "long" &&
    css`
      font-size: 2.5rem;
      color: var(--oc-gray-8);
      font-weight: 500;

      @media (max-width: 34.25em) {
        font-size: 1.5rem;
      }
    `}
`;

function DescriptionText({
  children,
  desc,
  al,
  bdb,
  bg,
  ta,
  width,
  color,
  fontSize,
  onClick,
  cursor,
  mb,
  mt,
  ml,
  pd,
  nowrap,
  ud,
}) {
  return (
    <StyledDesText
      $desc={desc}
      $nowrap={nowrap}
      onClick={onClick}
      $al={al}
      $bdb={bdb}
      $bg={bg}
      $ta={ta}
      $width={width}
      $cursor={cursor}
      $color={color}
      $mb={mb}
      $mt={mt}
      $ml={ml}
      $pd={pd}
      $ud={ud}
      $fontSize={fontSize}
    >
      {children}
    </StyledDesText>
  );
}

export default DescriptionText;
