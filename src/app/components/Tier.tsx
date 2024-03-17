import React from 'react';

interface TierComponentProps {
    className?: string; // Permette di personalizzare ulteriormente il className
    text: string; // Il testo da visualizzare
    imageSrc: string; // Il percorso dell'immagine
    altText?: string; // Testo alternativo per l'immagine, opzionale
}

const TierComponent: React.FC<TierComponentProps> = ({ className, text, imageSrc, altText = '' }) => {
    return (
        <div className={`u-expanded-width u-image u-image-round u-radius u-image-48 tier-text ${className}`}>
            {text}
            <div>
                <img className="u-image u-image-contain u-image-default u-image-49" src={imageSrc} alt={altText} />
            </div>
        </div>
    );
};

export default TierComponent;
