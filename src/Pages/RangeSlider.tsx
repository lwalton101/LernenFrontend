import React, { useState, useEffect, useRef } from "react";

interface DualRangeSliderProps {
    min: number;
    max: number;
    step?: number;
    onChange: (values: { min: number; max: number }) => void;
}

export const RangeSlider: React.FC<DualRangeSliderProps> = ({
                                                             min,
                                                             max,
                                                             step = 1,
                                                             onChange,
                                                         }) => {
    const [minValue, setMinValue] = useState(min);
    const [maxValue, setMaxValue] = useState(max);

    const minValRef = useRef(min);
    const maxValRef = useRef(max);

    // Update the values whenever min or max props change
    useEffect(() => {
        setMinValue(min);
        setMaxValue(max);
        minValRef.current = min;
        maxValRef.current = max;
    }, [min, max]);

    // Adjust the min and max values
    useEffect(() => {
        onChange({ min: minValue, max: maxValue });
    }, [minValue, maxValue, onChange]);

    return (
        <div className="relative w-full">
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={minValue}
                onChange={(event) => {
                    const value = Math.min(Number(event.target.value), maxValue - step);
                    setMinValue(value);
                    minValRef.current = value;
                }}
                className="absolute z-10 w-full h-2 bg-transparent pointer-events-none appearance-none"
                style={{ zIndex: minValue > max - 100 ? 5 : 3 }}
            />
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={maxValue}
                onChange={(event) => {
                    const value = Math.max(Number(event.target.value), minValue + step);
                    setMaxValue(value);
                    maxValRef.current = value;
                }}
                className="absolute z-20 w-full h-2 bg-transparent pointer-events-none appearance-none"
            />
            <div className="relative z-0 h-2 bg-gray-200 rounded">
                <div
                    className="absolute h-2 bg-blue-500 rounded"
                    style={{
                        left: `${((minValue - min) / (max - min)) * 100}%`,
                        right: `${100 - ((maxValue - min) / (max - min)) * 100}%`,
                    }}
                />
            </div>
        </div>
    );
};