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

    return (
        <div className='movie-card'>
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