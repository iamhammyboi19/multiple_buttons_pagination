/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";

const StyledFlexRow = styled.div`
  display: flex;
  align-items: ${(props) => (props.$fs === "yes" ? "flex-start" : "center")};
  justify-items: center;
  gap: ${(props) => props.$gap || "2rem"};
  margin-top: ${(props) => (props.$mt ? props.$mt : "")};
  margin-bottom: ${(props) => (props.$mb ? props.$mb : "")};
  margin-left: ${(props) => (props.$ml ? props.$ml : "")};
  flex-wrap: wrap;
  flex-direction: ${(props) => props.$fd || "row"};

  ${(props) =>
    props.$as &&
    css`
      align-self: flex-start;
    `}

  ${(props) =>
    props.$width &&
    css`
      width: 100%;
    `}

    ${(props) =>
    props.$cursor &&
    css`
      cursor: pointer;
    `}

    ${(props) =>
    props.$jc &&
    css`
      justify-content: center;
    `}

  @media (max-width: 48.125em) {
    margin-top: ${(props) => props.$mt && "1rem"};
    gap: ${(props) => props.$gap || "1rem"};
  }

  ${(props) =>
    props.$fc &&
    css`
      @media (max-width: 34.25em) {
        flex-direction: column;
        align-items: flex-start;
      }
    `}
`;

function FlexRow({
  children,
  gap,
  fs,
  mt,
  fc,
  width,
  as,
  mb,
  fd,
  ml,
  jc,
  cursor,
  onClick,
}) {
  return (
    <StyledFlexRow
      $mb={mb}
      $fc={fc}
      $mt={mt}
      $fs={fs}
      $jc={jc}
      $gap={gap}
      $width={width}
      $cursor={cursor}
      $as={as}
      $fd={fd}
      $ml={ml}
      onClick={onClick}
    >
      {children}
    </StyledFlexRow>
  );
}

export default FlexRow;
