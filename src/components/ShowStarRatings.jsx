import { FaStar } from "react-icons/fa6";
import FlexRow from "../ui/FlexRow";

/* eslint-disable react/prop-types */
function ShowStarRatings({ numbers = 5, ratings }) {
  const len = Array.from({ length: numbers }, (v, i) => i);

  return (
    <FlexRow gap="0rem">
      {len.map((el, i) => (
        <FaStar
          key={i}
          color={`${
            ratings >= i + 1 ? "var(--oc-yellow-8)" : "var(--oc-gray-4)"
          }`}
          fontSize={"15px"}
          cursor="pointer"
        />
      ))}
    </FlexRow>
  );
}

export default ShowStarRatings;
