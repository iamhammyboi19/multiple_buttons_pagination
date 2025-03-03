import React from "react";
import Logo from "./Logo";

export default function PlainHeader() {
  return (
    <div>
      <div
        style={{
          padding: "20px 0 20px 30px",
          borderBottom: "1px solid var(--oc-gray-3)",
        }}
      >
        <Logo />
      </div>
    </div>
  );
}
