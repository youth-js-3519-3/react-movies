import { useMemo, type CSSProperties } from 'react';
import './index.css'

export type CardProps = {
    movie: {
        title: string;
        releasedDate: Date;
        imageSrc: string;
    },
    showInfo?: boolean;
}

const Card = ({
    movie,
    showInfo = false,
}: CardProps) => {
    const {
        title,
        releasedDate,
        imageSrc
    } = movie;

    const randomNumber = useMemo(() => {
        return Math.random()
    }, [])

    return (
        <div 
            className='movie-card'
            style={{
                '--rotation': showInfo
                    ? randomNumber
                    : '0deg',
            } as CSSProperties}    
        >
            <img src={imageSrc} alt="" />
            {showInfo && (
                <>
                    <span>{title}</span>
                    <span>
                        {releasedDate.toLocaleDateString('pt-BR', {
                            year: "numeric"
                        })}
                    </span>
                </>
            )}
        </div>
    )
}

export default Card