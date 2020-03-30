import React, { useEffect, useRef } from "react";
import { customEvent } from "./events";

export default function Dispatcher() {
  const pRef = useRef(null);
  useEffect(() => {
    (pRef.current as any).dispatchEvent(customEvent);
  });
  return (
    <div>
      <p ref={pRef}>Some Text</p>
    </div>
  );
}
