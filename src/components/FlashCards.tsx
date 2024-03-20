import { useState } from 'react';

const FlashCards = () => {

    let [isFlip, setIsFlip] = useState(false);

    const handleClick = () => {
        setIsFlip(isFlip = !isFlip);
    }

    return (
        <div className='flashcard' onClick={handleClick}>
            {isFlip &&
                <div className='flashcard-back'>
                    <div id='flashcard-header'>
                        仕事 - working, labor, occupation
                    </div>
                    <div id='flashcard-description'>
                        し ご と ( shigoto )
                    </div>
                </div>
            }
            {
                !isFlip &&
                <div className='flashcard-front'>
                    <div id='flashcard-header'>
                        仕事
                    </div>
                    <div id='flashcard-description'>
                        し ご と ( shigoto )
                    </div>
                </div>
            }



        </div>
    )
}

export default FlashCards;