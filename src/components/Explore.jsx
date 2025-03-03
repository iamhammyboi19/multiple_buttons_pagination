import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { FiMapPin } from "react-icons/fi";
import { TbBed } from "react-icons/tb";
import { PiBathtubLight } from "react-icons/pi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useSearchParams } from "react-router-dom";

import PlainHeader from "./PlainHeader";
import Sorted from "./Sorted";

import data from "../utils/MOCK_DATA.json";

import MaxWidthCenter from "../ui/MaxWidthCenter";
import Title from "../ui/Title";
import Paginations from "./Paginations";
import useDocumentTitle from "../hooks/useDocumentTitle";
import DescriptionText from "../ui/DescriptionText";
import FlexRow from "../ui/FlexRow";
import ShowStarRatings from "./ShowStarRatings";

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--oc-gray-2);
  margin: 30px 0px 20px 0px;
  display: block;
`;

const Figure = styled.figure`
  width: 100%;
  max-width: 35rem;
  height: 175px;

  @media (max-width: 56.25em) {
    max-width: 90rem;
    height: 220px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const NewFlex = styled.div`
  display: flex;
  align-items: flex-start;
  justify-items: center;
  gap: 25px;
  margin-bottom: 15px;

  @media (max-width: 56.25em) {
    flex-direction: column;
  }
`;

const ApartmentName = styled.h3`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 6px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 500px;

  @media (max-width: 56.25em) {
    width: 450px;
  }

  &:hover {
    text-decoration: underline;
  }
`;

function get_cur_page_data(cur_page, limit) {
  const start_index = (cur_page - 1) * limit;
  const end_index = start_index + limit;
  return data.slice(start_index, end_index);
}

function EachApartment({ data }) {
  const [showAbout, setShowAbout] = useState(false);
  return (
    <div
      style={{
        marginBottom: "20px",
        borderBottom: "1px solid var(--oc-gray-3)",
      }}
    >
      <NewFlex>
        <Figure>
          <Img src={data.public_image || "/house.jpg"} />
        </Figure>
        <div>
          <ApartmentName>{data.post_title}</ApartmentName>
          <FlexRow gap="0.5rem" mb="5px">
            <ShowStarRatings numbers={5} />
            <DescriptionText fontSize="14px" desc="true">
              (25)
            </DescriptionText>
          </FlexRow>
          <FlexRow gap="0.7rem" mb="9px">
            <FiMapPin />
            <DescriptionText
              fontSize="13px"
              cursor="yes"
              ud="underline"
              desc="true"
            >
              View on map
            </DescriptionText>
          </FlexRow>
          <FlexRow gap="0.7rem" mb="5px">
            <TbBed />
            <DescriptionText fontSize="13px" desc="true">
              3 bedroom
            </DescriptionText>
          </FlexRow>
          <FlexRow gap="0.7rem" mb="5px">
            <PiBathtubLight />
            <DescriptionText fontSize="13px" desc="true">
              2 bathroom
            </DescriptionText>
          </FlexRow>
          <FlexRow
            onClick={() => setShowAbout((cur) => !cur)}
            cursor="yes"
            gap="0.4rem"
            mb="5px"
          >
            <DescriptionText fontSize="13px" desc="true">
              More info
            </DescriptionText>
            {!showAbout && <IoIosArrowDown />}
            {showAbout && <IoIosArrowUp />}
          </FlexRow>
        </div>
      </NewFlex>
      {showAbout && (
        <div>
          <DescriptionText desc="bold" mb="5px">
            About this apartment
          </DescriptionText>
          <DescriptionText fontSize="12px" desc="true" mb="20px">
            {data.post_summary}
          </DescriptionText>
        </div>
      )}
    </div>
  );
}

export default function Explore() {
  // user can dynamically change the limit
  const [limit, setLimit] = useState(20);

  // get the current page data
  const [curPageData, setCurPageData] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const cur_page = Number(searchParams.get("page"));

  useDocumentTitle("Explore");

  const total_page = Math.ceil(data?.length / limit);

  useEffect(function () {
    const page = searchParams.get("page");
    if (!page || isNaN(Number(page))) {
      setSearchParams({ page: 1 });
    }
  }, []);

  useEffect(
    function () {
      setCurPageData([...get_cur_page_data(cur_page, limit)]);
    },
    [cur_page, limit]
  );

  return (
    <div>
      <PlainHeader />
      <MaxWidthCenter mt={10 + "px"} mw="120rem" pd="3rem">
        <Title fs="30px" as="h2" mb="25px">
          Explore rated apartments!
        </Title>
        <Sorted />
        <Line />

        <DescriptionText fontSize="14px" mb="40px" desc="true">
          <strong>{limit}</strong> apartments
        </DescriptionText>

        {curPageData.map((data) => (
          <EachApartment data={data} key={data.id} />
        ))}

        <Paginations
          setSearchParams={setSearchParams}
          searchParams={searchParams}
          cur_page={cur_page}
          total_page={total_page}
        />
      </MaxWidthCenter>
    </div>
  );
}
