import React from "react";

interface ProgressProps {
  value: number; // Percentage value between 0 and 100
}

const ProgressComponent: React.FC<ProgressProps> = ({ value }) => {
  return (
    <div className="w-full h-4 bg-gray-200 rounded">
      <div
        className="h-4 bg-blue-500 rounded"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
};

export default ProgressComponent;
