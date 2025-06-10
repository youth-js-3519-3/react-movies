import { IconStar, IconStarFilled } from "@tabler/icons-react";
import './index.css'
import type { CSSProperties } from "react";

type StarRatingProps = {
    rating: number;
}

const StarRating = ({
    rating = 0
}: StarRatingProps) => {

    const percentageRating = (rating / 5 * 100) + '%';

    return (
        <div 
            className="star-rating"
            style={{
                '--wrapper-width': percentageRating
            } as CSSProperties}
        >
            <div className="wrapper">
                <div className="filled">
                    <IconStarFilled
                        color="currentColor"
                    />
                    <IconStarFilled
                        color="currentColor"
                    />
                    <IconStarFilled
                        color="currentColor"
                    />
                    <IconStarFilled
                        color="currentColor"
                    />
                    <IconStarFilled
                        color="currentColor"
                    />
                </div>
            </div>

            <div className="not-filled">
                <IconStar 
                    color="currentColor"
                />
                <IconStar 
                    color="currentColor"
                />
                <IconStar 
                    color="currentColor"
                />
                <IconStar 
                    color="currentColor"
                />
                <IconStar 
                    color="currentColor"
                />
            </div>
        </div>
    )
}

export default StarRating;