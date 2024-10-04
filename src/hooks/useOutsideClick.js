/*This hook allows you to detect clicks outside a referenced DOM element, such as a modal or dropdown. If the click occurs outside the referenced element, the handler function is executed. The hook also cleans up the event listener when the component is unmounted or when dependencies change. */

import { useEffect, useRef } from "react";

// The "handler" prop must be the function for close the modal
export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  // useEffect for detecting a click outside the modal and closed it
  useEffect(
    function () {
      function handleClick(e) {
        // ref.current is the modal (StyledModal)
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }

      document.addEventListener("click", handleClick, listenCapturing);

      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [handler, listenCapturing]
  );

  return ref;
}
