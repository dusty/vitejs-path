import React from "react";
import { useParams } from "react-router-dom";

export const Item: React.FC = () => {
  const { id } = useParams() as any;
  return (
    <div>
      <h1>Hello from Item {id}</h1>
      <p>Reload the page.</p>
    </div>
  );
};
