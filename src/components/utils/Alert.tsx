import { useEffect, useRef, PropsWithChildren, MutableRefObject } from "react";
import { createPortal } from "react-dom";

const Alert = ({ children }: PropsWithChildren) => {
  const alertRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  if (!alertRef.current) {
    alertRef.current = document.createElement("div");
  }

  useEffect(() => {
    const alertRoot = document.getElementById("alert");
    if (!alertRoot || !alertRef.current) {
      return;
    }
    alertRoot.appendChild(alertRef.current);

    return () => {
      if (alertRef.current) {
        alertRoot.removeChild(alertRef.current);
      }
    };
  }, []);

  return createPortal(<div>{children}</div>, alertRef.current);
};

export default Alert;
