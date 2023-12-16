import React from "react";

type Props = {
  elements: number;
  variant: "small" | "medium";
};

const variants = {
  small: "w-[100px] h-[140px]",
  medium: "w-[200px] h-[280px]",
};

function UpcomingSkeleton({ elements, variant }: Props) {
  return (
    <div className="max-w-7xl mx-auto grid grid-flow-col gap-4 px-4 overflow-hidden">
      {[...Array(elements).keys()].map((i) => (
        <div
          key={i}
          className={`${variants[variant]} animate-pulse bg-gray-200`}
          style={{
            animationDelay: `${i * 0.05}s`,
            animationDuration: "1s",
          }}
        ></div>
      ))}
    </div>
  );
}

export default UpcomingSkeleton;
