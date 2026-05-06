import React from "react";
import StatusDot from "./StatusDot";

export default function SectionLabel({ label }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <StatusDot />
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
        {label}
      </span>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}