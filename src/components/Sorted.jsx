import React, { useState } from "react";
import styled from "styled-components";

import { RiArrowDropDownLine } from "react-icons/ri";

import FlexRow from "../ui/FlexRow";
import IconText from "../ui/IconText";
import DescriptionText from "../ui/DescriptionText";

import useOutsideClick from "../hooks/useOutsideClick";

const UL = styled.ul`
  & li {
    padding: 0.8rem 1rem;
    font-size: 1.2rem;
    cursor: pointer;
    background-color: var(--oc-white);
    transition: all ease-in-out 0.3s;
    font-weight: 400;
    letter-spacing: 0.3px;

    &:hover {
      background-color: var(--oc-gray-1);
    }
  }
`;

const OptsBg = styled.div`
  background-color: var(--oc-white);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  width: 100%;
  max-width: 12rem;
  border-radius: var(--border-radius-md);
  position: absolute;
  top: 40px;
  right: 50%;
  transform: translateX(50%);
  z-index: 1;
`;

export default function ReviewSortOpts() {
  const ref = useOutsideClick(() => {
    setShowOpts(false);
  }, true);

  const [showOpts, setShowOpts] = useState(false);
  const [filt, setFilt] = useState("Top rated");

  const handleOpts = () => {
    setShowOpts((cur) => !cur);
  };
  return (
    <div>
      <FlexRow mb="2rem" gap="0.8rem">
        <DescriptionText desc="true">Sort by: </DescriptionText>
        <IconText
          $pos="relative"
          $gap="0.2rem"
          $pd="0.5rem 1.5rem"
          onClick={handleOpts}
          ref={ref}
        >
          <DescriptionText desc="true">{filt}</DescriptionText>
          <RiArrowDropDownLine fontSize="2.2rem" />

          {showOpts && (
            <OptsBg>
              <DescriptionText pd="0.8rem 1rem 0.8rem 1rem" desc="bold">
                Sort by
              </DescriptionText>
              <UL>
                <li
                  onClick={() => {
                    setFilt("Top rated");
                  }}
                >
                  Top rated
                </li>
                <li
                  onClick={() => {
                    setFilt("Least rated");
                  }}
                >
                  Least rated
                </li>
                <li
                  onClick={() => {
                    setFilt("# comments");
                  }}
                >
                  # comments
                </li>
              </UL>
            </OptsBg>
          )}
        </IconText>
      </FlexRow>
    </div>
  );
}
