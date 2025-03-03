import { useRef, useEffect } from "react";

export default function useOutsideClick(close, listentocapture = true) {
  const ref = useRef(null);

  useEffect(
    function () {
      function handleOutsideClick(e) {
        if (!ref.current) {
          return;
        }

        if (ref.current?.contains(e.target)) {
          return;
        }

        close();
      }

      document.addEventListener("click", handleOutsideClick, listentocapture);

      return () =>
        document.removeEventListener(
          "click",
          handleOutsideClick,
          listentocapture
        );
    },
    [close, listentocapture]
  );

  return ref;
}
