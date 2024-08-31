import {RatingStar} from "./RatingStar.tsx";
import {useState} from "react";

interface RatingBoxProps {
    initialRating?: number;
    onRatingSelect?: (rating: number) => void;
}


export function RatingBox({ initialRating = 0, onRatingSelect }: RatingBoxProps) {
    const [hoveredRating, setHoveredRating] = useState<number | null>(null);
    const [selectedRating, setSelectedRating] = useState<number>(initialRating as number);

    const handleMouseEnter = (index: number) => {
        setHoveredRating(index);
    };

    const handleMouseLeave = () => {
        setHoveredRating(null);
    };

    const handleClick = (index: number) => {
        setSelectedRating(index);
        if (onRatingSelect) {
            onRatingSelect(index);
        }
    };

    return (
        <div className="flex justify-evenly w-full">
            {[1, 2, 3, 4, 5].map((index) => (
                <RatingStar
                    key={index}
                    indexNumber={index}
                    active={hoveredRating ? index <= hoveredRating : index <= selectedRating}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleClick}
                />
            ))}
        </div>
    );
}