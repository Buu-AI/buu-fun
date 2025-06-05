import React from "react";

interface ProgressCircleProps {
  percentage?: number;
  size?: number;
  strokeWidth?: number;
  maxDegrees?: number;
}

const ProgressCircle: React.FC<ProgressCircleProps> = ({
  percentage,
  size = 16,
  strokeWidth = 2,
  maxDegrees = 360,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  // Calculate how much of the circle to show based on maxDegrees
  const maxArcLength = (maxDegrees / 360) * circumference;
  const progressArcLength = ((percentage ?? 0) / 100) * maxArcLength;

  // Calculate stroke-dasharray and stroke-dashoffset
  const strokeDasharray = maxArcLength;
  const strokeDashoffset = maxArcLength - progressArcLength;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size + 1}
      viewBox={`0 0 ${size} ${size + 1}`}
      fill="none"
    >
      {/* Background circle */}
      <circle
        cx={size / 2}
        cy={(size + 1) / 2}
        r={radius}
        stroke="#EEEB25"
        strokeOpacity="0.1"
        strokeWidth={strokeWidth}
      />

      {/* Progress arc */}
      <circle
        cx={size / 2}
        cy={(size + 1) / 2}
        r={radius}
        stroke="#78DBFF"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill="none"
        strokeDasharray={strokeDasharray}
        strokeDashoffset={strokeDashoffset}
        transform={`rotate(-90 ${size / 2} ${(size + 1) / 2})`}
        style={{
          transition: "stroke-dashoffset 0.5s ease-in-out",
        }}
      />
    </svg>
  );
};

export default ProgressCircle;
