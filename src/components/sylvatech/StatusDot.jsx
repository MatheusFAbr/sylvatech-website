import React from "react";

export default function StatusDot({ className = "" }) {
  return (
    <span
      className={`inline-block w-2 h-2 rounded-full bg-primary ${className}`}
      style={{ animation: "statusPulse 2s ease-in-out infinite" }}
    />
  );
}