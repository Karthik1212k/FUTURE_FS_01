import React, { useEffect, useState, useRef } from "react";

const CleanElectricBorder = ({
    children,
    color = "#f97316", // Tailwind orange-500
    duration = 3000,
    borderRadius = 12,
    className = "",
    style,
}) => {
    // Use state to track path length
    const [perimeter, setPerimeter] = useState(0);
    const rectRef = useRef(null);

    // Measure path length to ensure smooth looping
    useEffect(() => {
        if (rectRef.current) {
            try {
                setPerimeter(rectRef.current.getTotalLength());
            } catch (e) {
                // Fallback if getTotalLength fails (e.g. initially 0 size)
                setPerimeter(1000);
            }
        }
    }, []); // Run once on mount

    // If we can't get perimeter, use a safe default for DashArray
    const dashLength = perimeter ? perimeter / 4 : 200; // 25% of border is lit
    const gapLength = perimeter ? perimeter : 800;

    return (
        <div className={`relative h-full w-full ${className}`} style={{ borderRadius, ...style }}>
            {/* SVG Container for the Border Animation */}
            <svg
                className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
                style={{ borderRadius }}
            >
                <defs>
                    {/* Glow Filter */}
                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* The Animated Border Path */}
                <rect
                    ref={rectRef}
                    x="1"
                    y="1"
                    width="calc(100% - 2px)"
                    height="calc(100% - 2px)"
                    rx={borderRadius}
                    ry={borderRadius}
                    fill="transparent"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    filter="url(#glow)"
                    style={{
                        strokeDasharray: `${dashLength} ${gapLength}`,
                        animation: `travel ${duration}ms linear infinite`,
                    }}
                />
            </svg>

            {/* Content */}
            <div className="relative h-full w-full z-10 rounded-[inherit] overflow-hidden bg-gray-900">
                {children}
            </div>

            <style>{`
        @keyframes travel {
          0% {
            stroke-dashoffset: ${gapLength + dashLength};
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
        </div>
    );
};

export default CleanElectricBorder;
