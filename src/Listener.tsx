import React, { useEffect, useRef } from "react";
import Dispatcher from "./Dispatcher";

export default function Listener() {
  const divRef = useRef(null);
  useEffect(() => {
    (divRef.current as any).addEventListener("custom", (ev:any) => {
        console.log("react received custom event");
      });
  });
  return (
    <div ref={divRef}>
      <Dispatcher />
    </div>
  );
}
