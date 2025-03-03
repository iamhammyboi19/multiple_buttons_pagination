import styled, { css } from "styled-components";

const StyledMaxWidthCenter = styled.div`
  max-width: ${(props) => props.$mw || "400px"};
  margin: ${(props) => props.$mt || "20px"} auto 0 auto;
  margin-bottom: ${(props) => props.$mb || "0px"};
  margin-left: ${(props) => props.$ml || "auto"};
  padding: ${(props) => props.$pd || "0rem 1rem"};

  ${(props) =>
    props.$ofh &&
    css`
      overflow: hidden;
    `}
`;

// eslint-disable-next-line react/prop-types
function MaxWidthCenter({ className, children, mw, mt, ofh, mb, pd, ml, id }) {
  return (
    <StyledMaxWidthCenter
      $mw={mw}
      $mt={mt}
      $ml={ml}
      $mb={mb}
      $pd={pd}
      id={id}
      $ofh={ofh}
      className={className}
    >
      {children}
    </StyledMaxWidthCenter>
  );
}

export default MaxWidthCenter;
