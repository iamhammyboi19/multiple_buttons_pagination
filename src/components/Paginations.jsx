import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

import get_pagination_list from "../utils/pagination";
import FlexRow from "../ui/FlexRow";

const PagBtn = styled.div`
  height: 45px;
  width: 45px;
  background-color: ${(props) => (props.$cur === "true" ? "black" : "none")};
  color: ${(props) =>
    props.$cur === "true" ? "var(--oc-white)" : "var(--oc-gray-9)"};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => (props.$cur === "true" ? "auto" : "pointer")};
  transition: background-color ease-in-out 0.3s;

  &:hover {
    background-color: ${(props) =>
      props.$cur === "true" ? "black" : "var(--oc-gray-2)"};
  }

  ${(props) =>
    props.$icon &&
    css`
      border: 1px solid black;
      &:hover {
        background-color: black;

        & .pagicon {
          color: var(--oc-white);
        }
      }
    `}
`;

export default function Paginations({
  cur_page,
  total_page,
  setSearchParams,
  searchParams,
}) {
  const [pagList, setPagList] = useState([]);

  console.log(pagList);

  useEffect(
    function () {
      setPagList([...get_pagination_list(cur_page, total_page)]);
    },
    [cur_page, total_page]
  );

  return (
    <FlexRow jc="yes" mt="40px" mb="50px">
      {cur_page > 1 && (
        <PagBtn
          $icon="yes"
          onClick={() => {
            const page = Number(searchParams.get("page"));
            if (page > 1) {
              setSearchParams({ page: page - 1 });
            }
          }}
        >
          <GoArrowLeft className="pagicon" fontSize={"25px"} />
        </PagBtn>
      )}

      {pagList.map((data, index) => {
        // check if it is current page and add the appropiate style to it
        if (data === cur_page) {
          return (
            <PagBtn
              onClick={() => {
                setSearchParams({ page: data });
              }}
              key={index}
              $cur="true"
            >
              {data}
            </PagBtn>
          );
        }

        // check if it is skipped pages and add the appropiate style to it
        if (data === "...") {
          return (
            <span key={index} style={{ fontSize: "15px", fontWeight: "bold" }}>
              ...
            </span>
          );
        }

        // return the range dynamically
        return (
          <PagBtn
            onClick={() => {
              setSearchParams({ page: data });
            }}
            key={index}
          >
            {data}
          </PagBtn>
        );
      })}

      {cur_page !== total_page && (
        <PagBtn
          $icon="yes"
          onClick={() => {
            const page = Number(searchParams.get("page"));
            if (page < total_page) {
              setSearchParams({ page: page + 1 });
            }
          }}
        >
          <GoArrowRight className="pagicon" fontSize={"25px"} />
        </PagBtn>
      )}
    </FlexRow>
  );
}
