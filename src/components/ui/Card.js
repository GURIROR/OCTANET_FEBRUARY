import React from "react";

export function Card({ children }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return <div>{children}</div>;
}
